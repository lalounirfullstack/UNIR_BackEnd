**********************************************************
                    FINCA APP
**********************************************************
*************************************************************
                        GENERAL INFO
*************************************************************
+ Developer: Lalo Aguirre
+ Created Date: 10/29/2023
+ Last Update: 10/30/2023

*************************************************************
                        DESCRIPCION
*************************************************************
+ Build an application that allow the management of Fincas via API. 
+ This application allows to create Inmuebles .
+ Interaction with Inmuebles is via HTTP Requests since there is User Interface.
+ Application handles the for basic CRUD functions. 
*************************************************************
                        INSTRUCCIONES
*************************************************************
+ Modelo:
  + Collection
    + Piso 
    + Letra
    + Extension (m2)
    + Numero de Habitaciones
    + Alquilado (Si/No)
    + Nombre Propiertario
    + Mail Contacto
  + Base de la URL : api/inmuebles
  + Include fichero .gitignore
  
*************************************************************
                        RUBRICA
*************************************************************
+ Correct Creation of Files for API Development 0.5 - 5%
+ Correct Creation of File Inmueble 1.0 - 10%
+ Correct Creation of File Inmueble inside Routes and jobs that links to app.js 1.0 - 10%
+ Route that returns the Inmuebles in JSON Format 1 - 10%
+ Correct Creation of URLs to support Posts CRUD ("Post")   2 - 20%
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


*************************************************************
                       SOLUTION 
*************************************************************
Estrutura:
+ server.js - Launches Server.
+ app.js - Main application that references Routes.
+ routes > inmuebles.js - CRUD routes.
+ model > inmueble.js - Inmueble Model.
+ controllers . inmuebles.controller.js functions to execute CRUD.
+ fincaRequest.http - Request ejecution.
+ env - definicion of Port and Database

*************************************************************
                       Test Scenarios
*************************************************************