## Web Application Node.js

Name: Yifu Fang

Clarification: I can no longer ssh back to my server, I talked to TA and professor, and eventually granted to work on localhost server.

http://localhost:3000/

example of an admin user:
- email: abc@1.com
- password: abc

example of normal user:
- email; 456@2.com
- password: 456

This application is building on Node.j based on localhost server, use the command below to run:

    npm start

## Description and details of the project:

Authentication:

- the login and logout are implemented using express-session to record whether a user loged in.
    - admin user can only set up through sign up, normal user can be added by admin from usermanage.
    - bcrypt.js will hash passwords of admins.

Dashboard:

- the application starts from app.js, and it imports all the packages required, connects to database, listen to local server at 3000.
- there are 3 routes in routes folder: admin route(login as admin), normal user route(login as non-admin), auth route(handle login and logout request)
    - controller folder stores all the functions of corresponding request and response
    - auth route uses auth.js controller which performs all the get and post request of login and logout. 
    - admin and normal user both use dashboard.js controller, which performs all the admin or user related requests.
    - models folder stores the data model user.js, implemented using mongoose. 
- data are stored in mongodb, mongoose is imported to perform database related actions, such as CRUD read, update, delete, create.
    -  http://localhost:3000/mydb returns all users of the database
- all static pages html and ejs are in /views folder, css are in /Public folder.

Report:
- any chart and grids are implmented using zinggrid and zingchart.
- this project modelize employer and employees, and helps to track user information and manage users.
    

