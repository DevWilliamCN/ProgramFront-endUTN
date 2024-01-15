# Bienestar Estudiantil - Angular Proyect

Start the proyect

1. Run `npm run dev`
   This will put the proyects up and also the main
2. Access via `localhost:4200` to the main proyect

# Instaling AngularMaterial in our Project

This project use angular material to customise the web app, to install this into the project run the next commands:

1. Run `ng add @angular/material`
2. Choose `indigo-pink.css` for this project.
3. Accept the Global Angular Material typography styles. Type `yes` if accepted.
4. If you want to include animations type `yes` if accepted

# Installing Dependencies

The Angular app and the API uses some dependencies, so we need to install them.

1. Run `npm i jspdf jspdf-autotable ngx-toastr` For the dependencies of the angular app
2. Run `cd API_BienestarEstudiantil` Access the api backend
3. Run `npm i cors helmet jsonwebtoken class-validator bcryptjs` First command for the API
4. Run `npm i -D @types/cors @types/jsonwebtoken @types/express @types/node @types/bcryptjs typescript ts-node-dev` Second Command for the APIs
