## Blog API
*************************************************************
                        GENERAL INFO
*************************************************************
+ Developer: Lalo Aguirre
+ Created Date: 10/29/2023
+ Last Update: 10/30/2023

*************************************************************
                        DESCRIPTION
*************************************************************
+ Build an application that allow the management of Blogs via API. 
+ This application allows to create Posts and associate them to a given Author.
+ Interaction with Posts and Authors is via HTTP Requests since there is User Interface.
+ Application handles the for basic CRUD functions. 
*************************************************************
                        INSTRUCTIONS
*************************************************************
+ Proyecto Tipo Blog

+ Tablas:
  + Posts
    + Id 
    + Title
    + Description
    + Created_Date
    + Updated_Date
    + Category
    + AuthorID (Foreign Key - Authors)
  + Authors
    + Id
    + Name
    + Email
    + Image
+ CRUD of Posts & Autores
+ URL starts from /api
+ Each post response comes with the Author's information, no only with ID
+ URL to get the Posts from a given Actor

*************************************************************
                        RUBRICA
*************************************************************
+ Correct Creation of tables & fields 0.5 - 5%
+ Correct Creation of Express Proyect 0.5 - 5%
+ Correct Creation of Routes for the API base  1 - 10%
+ Correct Creation of URLs to support Posts CRUD ("Post and Get")   3 - 30%
+ Correct Creation of URLs to support Authors CRUD ("Post and Get") 3 - 30%
+ Correct Creation of Routes to get posts of a given author  2 - 20%

*************************************************************
                        INSTALLED PACKAGES
*************************************************************
+ express
+ dotenv
+ nodemon
+ daysjs
+ mysql2

*************************************************************
                       TESTING SCENARIOS
*************************************************************
1. MySQL Schema created from Model - Completed successfully
2. MySQL Schema created from Script - Completed successfully
3. Author HTTP requests (CRUD):
   + Create Author
   + Read Author (List of Authors)
   + Update Author
   + Delete Author
4. Post HTTP requests (CRUD):
   + Create Posts
   + Read Post (Posts from a given Actor)
   + Update Posts
   + Delete Posts