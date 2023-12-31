**********************************************************
                    FINCA APP
**********************************************************
*************************************************************
                        GENERAL INFO
*************************************************************
+ Developer: Lalo Aguirre
+ Created Date: 10/29/2023
+ Last Update: 11/03/2023

*************************************************************
                        DESCRIPTION
*************************************************************
+ Build an application that allow the management of Fincas via API. 
+ This application allows to create Inmuebles .
+ Interaction with Inmuebles is via HTTP Requests since there is User Interface.
+ Application handles the for basic CRUD functions. 
*************************************************************
                        INSTRUCTIONS
*************************************************************
+ Model:
  + Collection
    + Piso 
    + Letra
    + Extension (m2)
    + Numero de Habitaciones
    + Alquilado (Si/No)
    + Nombre Propiertario
    + Mail Contacto
  + Base de la URL : api/inmuebles
  + Include file .gitignore
  
*************************************************************
                        RUBRICA
*************************************************************
+ Correct Creation of Files for API Development 0.5 - 5%
+ Correct Creation of File Inmueble 1.0 - 10%
+ Correct Creation of File Inmueble inside Routes and jobs that links to app.js 1.0 - 10%
+ Route that returns the Inmuebles in JSON Format 1 - 10%
+ Correct Creation of URLs to support Create CRUD ("Post")   2 - 20%
+ Correct Creation of URLs to support PUT CRUD ("Put")   2 - 20%
+ Correct Creation of URLs to support DELETE CRUD ("Delete") 1.5 - 15%
+ Correct Creation of Routes That inform Users of CRUD Actions  1 - 10%

*************************************************************
                        INSTALLED PACKAGES
*************************************************************
+ express
+ dotenv
+ nodemon
+ daysjs
+ mysql2
+ bycriptjs

*************************************************************
                       SOLUTION 
*************************************************************
Estrutura:
+ server.js - Launches Server.
+ app.js - Main application that references Routes.
+ routes > inmuebles.js - CRUD routes.
+ model > inmueble.js - Inmueble Model.
+ middlewares - revalidates is Inmueble exsits to do updates
+ dbmodels > mongoDB find queries for inmueble and users
+ controllers . inmuebles.controller.js functions to execute CRUD.
+ fincaRequest.http - Request ejecution.
+ env - definicion of Port and Database

*************************************************************
                       Test Scenarios
*************************************************************
1. Express Structure - Completed Successfully
2. MongoDB Model  - Completed successfully
3. Inmueble HTTP requests (CRUD):
   + Create Inmueble
   + Read Inmueble (List of Inmuebles)
   + Update Inmueble
   + Delete Inmueble
4. Revalidate invalid Request using Middleware
   + Verify Valid Author Request 
   + Verify Invalid Author Request
   + Verify Valid Post Request 
   + Verify Invalid Post Request
5. Revalidate User Registration and Authentication
6. Invalid Requests - show errors


