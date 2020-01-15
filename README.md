# BMS - Building Management System
### Building automation is the automatic centralized control of a building's heating, ventilation and air conditioning, lighting and other systems through a building management system or building automation system (BAS). The objectives of building automation are improved occupant comfort, efficient operation of building systems, reduction in energy consumption and operating costs, and improved life cycle of utilities. 

About Project:

-	Design and development of a whole API-based web application to make smart home that control equipment and devices at home by web application.
-	To this project needs more knowledge about IOT (Internet of things) as Raspberry PI and use UART protocol (RS232- one of electronic transfer data protocol) to send message to device by send signal by Raspberry to relays.
-	This application has ability to define zone and device and equipment dynamically.
-	selection of Platform is strategy decision because the application must run on small electronic board and Python is strong and light platform for Raspber-ry PI board.
-	Use case and user experience definition
-	Agile software development and agile prototyping
-	Platform and process tests
-	Start beta-test roll out including continuously first customer feedbacks
-	React JS is suitable platform for make dynamic presentation layer that work by axios to call API from backend

In project use some tools, database, equipment:

    Python, Flask, React.js, SQL Alchemy, Tinydb, axios,  
    Source version control: GitHub 
    Hardware/Equipment : Raspberry PI, Board and relays, RS232 convertor, MicroController

 
---

For this project need to install some database and ORM as sqlalchemy tinydb for SQL and NO-SQL
 
    pip install tinydb
    pip install flask_sqlalchemy

For used restful API should install
 
    pip install jwt
    pip install pyjwt

For export report should install :

    pip install openpyxl
    pip install xlrd

For run website should go to flask-backend and type:

# RUN

Open command prompt and then Go to flask-backend folder and type:

    python main.py
 
---

#### If you want to make project Manually, should do instructure step by step

1- make two folder for frontend and backend
 
    mkdir flask-backend
    mkdir react-frontend
    
2- make slolution

    npm install -g yarn
    yarn global add create-react-app react-scripts
    
3- make react solution

    npx create-react-app react-frontend
    
---

4- Go to react-frontend folders and run:

   ###### for make hybrid solution config react webpack to export website to python folders .
   ##### a-  template folder
   ##### b-  static folder 
    
    npm run eject
    
5- Go to config - jest-- edit paths.js

    config the files to work webpack 

6- Go to webpack.config.js

    appBuild: resolveApp('build'), 
    appBuild: resolveApp('../Flask-backend/static/react'),

7- Edit line HtmlWebpackPlugin

    remove /static to null
    filename : "../../templates/index.html",

---

##### For test result of hybrid solution you can call token from backend:

8- add line to HTML

    <script> window.token="{{token}}" </script>

9- Edit app.js

    <p> my token = {window.token} </p>

---

10- package.json add 

    "homepage": "/static/react",

11- add plugin-transform-react-jsx

    yarn add @babel/plugin-transform-react-jsx

12- build Project 

    npm run build
    
---

13- for run website should go to flask-backend and type:

    python main.py

---

    Moein Ghobbeh
    Moein.Ghobbeh@gmail.com
    Berlin, 
    +49 178 9391561



