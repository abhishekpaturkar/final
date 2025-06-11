from bs4 import BeautifulSoup
import pandas as pd

def html_table_to_csv(input_file, output_file):
    try:
        # Read the HTML content from the file
        with open(input_file, 'r', encoding='utf-8') as file:
            html_content = file.read()

        # Parse the HTML with BeautifulSoup
        soup = BeautifulSoup(html_content, 'html.parser')

        # Find the table
        table = soup.find('table', {'class': 'tableagmark_new'})

        # Extract table headers
        headers = [th.get_text(strip=True) for th in table.find_all('th')]

        # Extract table rows
        rows = []
        for tr in table.find_all('tr')[1:]:  # Skip the header row
            cells = [td.get_text(strip=True) for td in tr.find_all('td')]
            if cells:  # Avoid adding empty rows
                rows.append(cells)

        # Convert to DataFrame
        df = pd.DataFrame(rows, columns=headers)

        # Save to CSV
        df.to_csv(output_file, index=False)
        print(f"Data successfully written to {output_file}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
input_html1 = r"Datasets\RawXLS\KolhapurRice.xls"  # Replace with your input HTML/XLS file path
output_csv1 = r"Datasets\KolhapurRice.csv"   # Desired output CSV file path

input_html2 = r"Datasets\RawXLS\KolhapurWheat.xls"  # Replace with your input HTML/XLS file path
output_csv2 = r"Datasets\KolhapurWheat.csv"   # Desired output CSV file path

input_html3 = r"Datasets\RawXLS\KolhapurPotato.xls"  # Replace with your input HTML/XLS file path
output_csv3 = r"Datasets\KolhapurPotato.csv"   # Desired output CSV file path

input_html4 = r"Datasets\RawXLS\KolhapurOnion.xls"  # Replace with your input HTML/XLS file path
output_csv4 = r"Datasets\KolhapurOnion.csv"   # Desired output CSV file path

input_html5 = r"Datasets\RawXLS\KolhapurJowar.xls"  # Replace with your input HTML/XLS file path
output_csv5 = r"Datasets\KolhapurJowar.csv"   # Desired output CSV file path

input_html6 = r"Datasets\RawXLS\KolhapurMaize.xls"  # Replace with your input HTML/XLS file path
output_csv6 = r"Datasets\KolhapurMaize.csv"   # Desired output CSV file path

html_table_to_csv(input_html1, output_csv1)
html_table_to_csv(input_html2, output_csv2)
html_table_to_csv(input_html3, output_csv3)
html_table_to_csv(input_html4, output_csv4)
html_table_to_csv(input_html5, output_csv5)
html_table_to_csv(input_html6, output_csv6)


# from bs4 import BeautifulSoup
# import pandas as pd
# import os

# def html_table_to_csv(input_file, output_file):
#     try:
#         with open(input_file, 'r', encoding='utf-8') as file:
#             html_content = file.read()

#         soup = BeautifulSoup(html_content, 'html.parser')
#         table = soup.find('table', {'class': 'tableagmark_new'})

#         headers = [th.get_text(strip=True) for th in table.find_all('th')]

#         rows = []
#         for tr in table.find_all('tr')[1:]:
#             cells = [td.get_text(strip=True) for td in tr.find_all('td')]
#             if cells:
#                 rows.append(cells)

#         df = pd.DataFrame(rows, columns=headers)
#         df.to_csv(output_file, index=False)
#         print(f"[OK] {os.path.basename(output_file)} written successfully.")
#     except Exception as e:
#         print(f"[ERROR] Failed to process {os.path.basename(input_file)}: {e}")

# # Markets and commodities
# markets = ["Pune", "Mumbai"]
# commodities = ["Wheat", "Rice", "Potato", "Onion", "Maize", "Jowar"]

# # Paths
# input_folder = r"Datasets\RawXLS"
# output_folder = r"Datasets"

# # Convert all 12 files
# for market in markets:
#     for commodity in commodities:
#         filename = f"{market}{commodity}.xls"
#         input_path = os.path.join(input_folder, filename)
#         output_path = os.path.join(output_folder, filename.replace('.xls', '.csv'))
#         html_table_to_csv(input_path, output_path)
