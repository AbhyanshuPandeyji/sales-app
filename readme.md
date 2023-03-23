# This is Some packages and instructions to follow

# Client Side
npm intall will be required to install all node modules
1 - npx create-react-app client to create the react app 
2 - npm install react-router-dom 
5 - for bootstrap - cdn link or npm install react-bootstrap
6 - axios  - npm install axios
7 - Redux both needed  - npm install @reduxjs/toolkit and npm install react-redux
8 - Redux Browser extension - npm install redux-devtools-extension
9 - Redux storage kit - npm install redux-persist


# Server Side
 cd server to go to the server file
 npm start or node index to run server
 import module is been used instead of require 
 Postman is used to test these api's
1 - npm init - initiate
npm install required to install all node modules
2 - npm install nodemon - to run server can be done by node index
3 - npm install express 
4 - npm install mongoose
5 - npm install -D dotenv - create env file
6 - npm install jsonwebtoken 
7 - npm install bcryptjs
8 - npm install cookie-parser
9 - npm install 


# funtionality 
1 - create user works.
2 - singin user works.
3 - adding sales works .
5 - explore - all sales done on the app .
8 - logout works.
10 - api of delete user is been created but not used - tweet delete is not.implemented.


github link  - tried to upload form github to netlify i dont know much so my app usually dosent works 
github link - https://github.com/AbhyanshuPandeyji/sales-app.git


I Tried my best to learn the technologies its been just the project specific but i learned a lot by it , its been very hard to make it even if its done already.
I tried to capture all the knowledge and style as good as possible , its been a hard and great journey  - no matter what happens i will continue my journey to be a developer . 
Thanks to all the teachers and this course , and my best wishes to all. Thankyou.

# Thought note
# authentication and the routes
1 - auth routes are used to create login and singup for the user (/auth/signin) for login (/auth/signup) creating an account followed by login and the register page in the pages seciton of the folder in src

then these routes go to controller and do the logic and return back to the api when its being fetched by the user in the front end.


# Sales 
1 - there is add sales routes ( /sales/addsales) to add sales to the app  - it goes to the controller of the server sale.js file perform logic and return back the saved data in the database and shows sales in the sales section
2 - total sales show sales done by the users thorougout  route is  ( /sales/allsales) same as before goto controller sale.js file get the users sales done return back to the frontend ui of the file in pages top sales 
3 - total revenue is take the all the sales and return the value of the quatity and the amount sell by route (/sales/totalrevenue) goes to controller sale.js and then return value on api fetch call in the total revenue page of the pages and its total by individual and in json format sorry for that 
4 - logout is simple go to page if user exist it logsout other wise its send back to login page  