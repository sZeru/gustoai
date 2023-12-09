# GustoAI #

![GustoAI Logo](https://drive.google.com/uc?id=1mZUqACEgvmxyBZqWnib_bFRfd6PLBvzW)

## A website that generates recipes for users based on pantry and diet. ##

This website is designed to streamline the search for a recipe that works for you. There are many difficulties that a cook encounters when trying to find a recipe online, such as website navigation, missing ingredients, dietary restrictions, time available, and a lack of nutritional information. GustoAI is designed to overcome these difficulties and make finding recipes that suit your needs as easy as possible!

When you are logged in, you provide GustoAI with all the contents of your pantry in the "Pantry" tab. In the "Diet Restriction" tab you provide gustoAI with dietary restrictions and allergies to filter out recipes that are not suitable for your health. Set nutritional goals on the "My Progress" tab that the website will automatically track for you. The mainpage - shown on the navigation bar as our logo - is where you generate the recipes! Go there and fill out the cuisine, course, cooking duration, and select which of your pantry ingredients to use. Click 'Generate Recipe' and see what you can make!

![GustoAI Mainpage](https://drive.google.com/uc?id=15D7NRRxfLSzBnzRjoEVu_R8_W4Yhe0jE)

## Installation Guide: ##

You need npm and pip to install the requirements for this program.
Once you have them, follow the the following steps. You may wish to do this in a development environment:

1) Open the terminal navigate to the gustoai directory.
2) Enter: npm install
	- this will install all javascript dependencies.
3) Enter: pip install python-dotenv Flask SQLAlchemy mysql-connector-python flask-cors pytz routes
	- this will install all python dependencies.
4) Setup your SQL Server.
5) Note your user, password, hostname, database name, and port. Fill out the respective entries in .env.
6) Create a JWT_Key.
7) Add your api keys for edamam into the .env.


## Running Guide: ##

1) Switch to your development environment (if you chose to use one).
2) Open a terminal and navigate to the gustoai/frontend/ directory
3) Enter: npm start
	- This will start the flask server
4) Run run.py
5) Connect to the server on http://localhost:3000/
6) Register an account and/or login. You're done and ready to use GustoAI!
