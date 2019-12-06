mkdir flask-backend

npm install -g yarn

yarn global add create-react-app react-scripts

pip install flask

npx create-react-app react-frontend

----- go to react
npm run eject 

----- go to config - jest-- edit paths.js

appBuild: resolveApp('build'), 
appBuild: resolveApp('../Flask-backend/static/react'),

--- go to webpack.config.js
remove /static to null

--- line HtmlWebpackPlugin

filename : "../../templates/index.html",



-- go to html.index
add       <script> window.token="{{token}}" </script>


app.js <p> my token = {window.token} </p>

package.json add : "homepage": "/static/react",

yarn add @babel/plugin-transform-react-jsx

npm run build

go to flask :  python main.py

pip install jwt
pip install pyjwt
pip install tinydb
pip install flask_sqlalchemy



