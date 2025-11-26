from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

CURRENCY_API = "https://api.frankfurter.app"


# ---------- Load Currencies ----------
@app.route("/currencies")
def currencies():
    data = requests.get(f"{CURRENCY_API}/currencies").json()
    return jsonify(data)


# ---------- Convert Currency ----------
@app.route("/convert", methods=["POST"])
def convert():
    amount = request.form["amount"]
    from_curr = request.form["from"]
    to_curr = request.form["to"]

    if from_curr == to_curr:
        return jsonify({"error": "Currencies must be different"})

    res = requests.get(
        f"{CURRENCY_API}/latest?amount={amount}&from={from_curr}&to={to_curr}"
    ).json()

    return jsonify(res)


# ---------- Home Page ----------
@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
