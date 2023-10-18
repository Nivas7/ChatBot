# import flask
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.tree import DecisionTreeClassifier
from sklearn.feature_extraction.text import TfidfTransformer,TfidfVectorizer
from sklearn.pipeline import Pipeline
import string



loaded_model = joblib.load('model.pkl')

app = Flask(__name__, static_url_path='/')
CORS(app, resources={r"/*": {"origins": ["http://localhost:5000", "https://carla-chatbot.vercel.app"]}})

@app.route("/")
def home():
    
    return {"message": "Hello from backend"}

@app.route("/predict", methods=['POST'])
def make_prediction():
    if request.method == 'POST':
        exp = request.data
        X = [exp]
        [prediction] = loaded_model.predict(X)
        result = prediction
        data = {
            "message": result
        }
        return jsonify(data)
if __name__ == '__main__':
    app.run(  debug=True)
