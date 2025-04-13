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
input_html = "onion_ag.xls"  # Replace with your input HTML/XLS file path
output_csv = "Onion.csv"   # Desired output CSV file path
html_table_to_csv(input_html, output_csv)
