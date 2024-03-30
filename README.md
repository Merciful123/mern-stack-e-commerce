#### Link:-    https://mern-e-commerce-h4zd.onrender.com/
#### Deployed on Render


To run the app in the local machine:

You need to start frontend and backend.

To start frontend:-
### go to the frontend directory do "npm install" when it's done then "npm start"

To start backend:-
### go to the backend directory do "npm install" when it's done then "npm start"

everything should work, however for stripe you will need to create a local webhook to make test paymeny. And change the url in the CheckoutForm.js(in the frontend).


 
### Here are some of the features implemented in this project. Reset password feature is in progress, rest is complete :
- Basic E-commerce Features- Product lists, Product Details, Cart, Checkout 
- Secure Card Payments / Cash payments
- Admin Panel - Add/Edit Orders. Add/Edit Products
- Sorting, Filtering, and Pagination queries using Mongoose
- Authentication with Passport JS strategies
- Order Emails, Reset Password Emails
- User Profile and user orders

### Tools used in the project :
- React 18 with Tailwind CSS
- Redux Toolkit with Async Thunk
- React Router v6
- JSON-server for front-end testing
- MongoDB for Database
- Mongoose v7 as ODM
- REST API using Express
- Authentication using Passport JS
- API Authentication using Passport JWT
- MongoDB Atlas cloud database
- Vercel Server deployment
- Email using Nodemailer - using GMail SMTP system
- Payments using Stripe - PaymentIntent based custom flow
