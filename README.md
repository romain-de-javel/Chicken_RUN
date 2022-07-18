# Chicken_RUN
Welcome to this project made with love to make run the Chickens :)

# About the project
This project is an API REST which handle CRUD methodes (GET / POST / PUT / PATCH / DELETE).
It also create a mariaDB database which can interect with the API requests.

# Get Started
### Prerequires
* npm
* insomnia (testing part)

### Installation
1. Clone the project
```
git clone git@github.com:romain-de-javel/Chicken_RUN.git
```
2. Go into the folder
```
cd Chiken_RUN
```
3.  Install packages
```
npm install
```

### Usage
You can start the server in two different modes:
* client mode
* developper mode

To run in client mode run ```npm run start```<br/>
To run in dev mod run ```npm run dev```

### Testing the API
This API is not yet connected to a frontend so you can test it by using the provided test file with all requests.<br/>
In order to well test you are strongly advised to read the ```tests/tes.txt file``` and use the requests given in this file
<br/>You can just :
1. Run insomnia
2. Create a mew request HTTP
3. Send the request to the server and look at the result

### Supported requests

|  REQUEST  |  ROOT  |  ACTION  |
|  GET  |  /chicken  |  find all chikens in the DB  |   
|  GET  |  /chicken/:id  |  find a only chicken which hav the id  |   
|  GET  |  /chicken/run  |  make all chickens take a step  |   
|  GET  |  /chicken/run/:id  |  make the chicken which hav the id take a step  |  
|  POST  |  /chicken  |  create and push a new chicken in the db  |  
|  PUT  |  /chicken/:id  |  update the chicken that has the id  |  
|  PATCH  |  /chicken/:id  |  update the chicken that has the id  |  
|  DELETE  |  /chicken |  delete all chickens form the db  |  
|  DELETE  |  /chicken/:id |  delete the chiken that has the id  |

### Error Handling
|  Status code  |  meaning  | 
|  200  |  the request succed  |
|  400  |  the user entered a bad request  |
|  404  |  the ressource needed does not exist  |
|  500  |  internal server issue  | 

# Technologies
This project has been realised with :
* NodeJS / Express / Sequelize (mariaDB)
* JavaScript 

