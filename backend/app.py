from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from the frontend container

@app.route("/", methods=["GET"])
def home():
    """Simple route to verify the backend is running."""
    return jsonify({
        "status": "ok",
        "message": "Flask backend is running and ready to receive form data at /submit"
    })

@app.route("/submit", methods=["POST"])
def submit():
    """Handle form data sent from the frontend."""
    data = request.get_json() or {}

    name = data.get("name", "Unknown")
    email = data.get("email", "Unknown")
    message = data.get("message", "")

    # Simple "processing" of data
    message_length = len(message)

    return jsonify({
        "status": "success",
        "summary": f"Received submission from {name} ({email}), message length: {message_length}",
        "data": data
    })

if __name__ == "__main__":
    # Run on all network interfaces so Docker can expose it
    app.run(host="0.0.0.0", port=5000)
