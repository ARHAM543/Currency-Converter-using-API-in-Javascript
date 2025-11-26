💱 Currency Converter – Flask + REST API
A modern and elegant currency conversion web app with a professional UI.
<br> <p align="center"> <img src="images/output.png" alt="App Screenshot" width="650" style="border-radius:12px;"> </p> <br> <p align="center"> <b>Built With</b> <br><br> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/> <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/> <img src="https://img.shields.io/badge/HTML-FF5722?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-2965F1?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-FCDC00?style=for-the-badge&logo=javascript&logoColor=black"/> </p>
🌐 Overview

This project is a professional-grade Currency Converter crafted using Flask for the backend and the Frankfurter REST API for real-time exchange rates.
The UI is designed using an elegant combination of black, white, gray, and blue, giving it a clean, modern fintech look.

Perfect for:

🌍 Learning API integration

📡 Flask backend development

🎨 UI/UX enhancement skills

💻 College projects / Portfolio

✨ Features
✔ Real-Time Conversion (REST API)

Fetches live exchange rates from Frankfurter API.

✔ Clean & Professional UI

Inspired by fintech dashboards (Paytm, Razorpay, Stripe).

✔ Responsive Design

Looks great on PC, tablet, and mobile.

✔ Auto-Populated Currency Dropdown

Loads currency list automatically using API.

✔ Error Handling

Invalid entries and same-currency checks.

🚀 Demo Screenshot

Replace this screenshot with your own UI preview:

<p align="center"> <img src="images/output.png" alt="UI Screenshot" width="700" style="border: 2px solid #ddd; border-radius: 12px;"> </p>
🎨 UI Theme Preview

🖤 Black accents

🤍 White backgrounds

🌫️ Smooth gray shadows

🔵 Blue highlights

🎛 Modern, minimal layout

🛠️ Tech Stack
Layer	Technologies
Frontend	HTML, CSS, JavaScript
Backend	Flask (Python)
API	Frankfurter Currency Exchange API
CSS Theme	Fintech-style Black/White/Gray/Blue
📂 Project Structure
currency-converter/
│
├── app.py
├── requirements.txt
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js

⚙️ Installation
1. Clone the Repository
git clone https://github.com/ARHAM543/Currency-Converter-using-API-in-Javascript.git
cd currency-converter

2. Install Dependencies
pip install -r requirements.txt

3. Run the Server
python app.py

4. Open in Browser
http://127.0.0.1:5000

💡 How It Works
🔹 Step 1

User enters an amount.

🔹 Step 2

JS fetches live rates from:

https://api.frankfurter.app

🔹 Step 3

Flask handles the request and responds with conversion.

🔹 Step 4

UI shows a clean and highlighted result.

📡 API Example
https://api.frankfurter.app/latest?amount=100&from=USD&to=INR


Response:

{
  "amount": 100,
  "base": "USD",
  "date": "2024-02-01",
  "rates": {
    "INR": 8312.50
  }
}

🔮 Future Improvements

Here are some optional enhancements you can add:

🔄 Currency swap button (USD ↔ INR)

🌓 Light/Dark mode toggle

📊 Currency trend chart (Chart.js)

🗂 Save conversion history

🚩 Add country flags in dropdown

🔄 Auto-convert on typing

Want help adding these? I can build them for you!

🧑‍💻 Author
Arham Shaikh

Computer Engineering Student & Python Developer

📌 Passionate about full-stack development, UI design, APIs, and data analysis.

⭐ If you like this project

👉 Don’t forget to Star ⭐ the repository on GitHub!
