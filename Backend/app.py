# from flask import Flask, request, jsonify
# from prediction import predict_prices  # Assuming the function is in prediction.py

# app = Flask(__name__)

# @app.route('/')
# def home():
#     return "Welcome to the Agri Price Predictor API 🚜📈"

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json()

#     if not data or 'commodity' not in data:
#         return jsonify({'error': 'Missing "commodity" in request body'}), 400

#     commodity_location = data['commodity']
#     result = predict_prices(commodity_location)

#     if isinstance(result, dict) and "error" in result:
#         return jsonify(result), 500

#     # Convert predictions to JSON
#     predictions = result.to_dict(orient='records')
#     print({'commodity': commodity_location, 'predictions': predictions})
#     return jsonify({'commodity': commodity_location, 'predictions': predictions})


# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
CORS(app, origins=["http://localhost:5173"])

# Existing route
@app.route('/predict', methods=['GET'])
def get_predictions():
    try:
        location_commodity = request.args.get('query')  # e.g. PuneOnion
        filepath = f"./Models/Output/{location_commodity}_Pred.csv"
        df = pd.read_csv(filepath)
        df['Month'] = pd.to_datetime(df['Month'])
        df['Month'] = df['Month'].dt.strftime('%Y-%m')
        return jsonify(df.to_dict(orient='records'))
    except Exception as e:
        return jsonify({"error": str(e)})


# ✅ New comparison route
@app.route('/comparison', methods=['GET'])
def get_comparison_data():
    try:
        city = request.args.get('query')  # e.g. Pune
        commodities = ["Potato", "Onion", "Wheat", "Rice", "Maize", "Jowar"]
        combined_df = None

        for commodity in commodities:
            filename = f"./Models/Output/{city}{commodity}_Pred.csv"
            df = pd.read_csv(filename)
            df['Month'] = pd.to_datetime(df['Month'])
            df['Month'] = df['Month'].dt.strftime('%Y-%m')
            df = df[['Month', 'Predicted Price']].rename(columns={'Predicted Price': commodity})

            if combined_df is None:
                combined_df = df
            else:
                combined_df = pd.merge(combined_df, df, on='Month', how='outer')

        combined_df = combined_df.sort_values(by='Month')
        return jsonify(combined_df.to_dict(orient='records'))

    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(debug=True)
