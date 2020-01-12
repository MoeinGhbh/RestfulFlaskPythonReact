-	Design and development of a whole API-based web application to make smart home that control equipment and devices at home by web application.
-	To this project needs more knowledge about IOT (Internet of things) as Raspberry PI and use UART protocol (RS382- one of electronic transfer data protocol) to send message to device by send signal by Raspberry to relays.
-	This application has ability to define zone and device and equipment dynami-cally.
-	
-	selection of Platform is strategy decision because the application must run on small electronic board and Python is strong and light platform for Raspber-ry PI board.
-	Use case and user experience definition
-	Agile software development and agile prototyping
-	Platform and process tests
-	Start beta-test rollout including continuously first customer feedbacks
-	Reactjs is suitable platform for make dynamic presentation layer that work by axios to call API from backend

To this project used tools, database, equipment ...:
Python, Flask, React.js, Sqlalchemy, Tinydb, GitHub, Raspberry PI, relays, axios

so if you want to make project Manually should do instructure step by step 

---

make two folder for frontend and backend 
## mkdir flask-backend
## mkdir react-frontend
make slolution
### npm install -g yarn
### yarn global add create-react-app react-scripts
install flask for restful API
### pip install flask
make react solution
### npx create-react-app react-frontend

---
Go to react-frontend folders and run:
for make hybrid solution you should set webpack to python folders 
### npm run eject


---
## config the files to work webpack 
Go to config - jest-- edit paths.js

### appBuild: resolveApp('build'), 
### appBuild: resolveApp('../Flask-backend/static/react'),

Go to webpack.config.js

### remove /static to null

Edit line HtmlWebpackPlugin

### filename : "../../templates/index.html",

Go to html.index
for test result of hybrid solution you can call token from backend
  
 add line to HTML
### <script> window.token="{{token}}" </script>

Edit app.js
### <p> my token = {window.token} </p>

package.json add 
###  "homepage": "/static/react",

add plugin-transform-react-jsx
### yarn add @babel/plugin-transform-react-jsx

build Project 
### npm run build

---

for run website should go to flask-backend and type:
  
### python main.py

---

for this project need to install some database and ORM as sqlalchemy tinydb 
### pip install tinydb
### pip install flask_sqlalchemy


for used restful API should install 

### pip install jwt
### pip install pyjwt

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**






