This is base node js project template, which any one can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests.(you want might to make seprate test folder)

Lets take a look inside the `src` folder

- `config` -> In this folder anything and everthing regarding any configurations or setup of a library or module will be done. for example : setting up dotenv so that we can use the enviornment variables any where in a cleaner fashion. this is done in the server-config.js. One more example can be to set up you login library that help you prepare meaningful logs . so configuration for these library should also be done here.

- `routes` -> In the route folder,we register a route and the corresponding middleware and controllers to it

- `middlewares`-> they are just going to intercept incoming request wher we can write our validators authenticators etc.

- `controller`-> they are kind of last middlewares as post them you call your bussiness layer to execute the bussiness logic. In controllers we just receive the incoming request and the data and then pass it to the bussiness layer, and once the bussiness layer returns an output we structure the API response in controllers and send the output.

- `repositories` -> this folder contain all the logic using which we interact the Db by writing queris all the raw queries or ORM will go here.

- `services` -> contain the bussiness logic and interacts with repositories for data from the data base

- `utils` -> contain helper method, error classes etc.

### Set up the project
downlond the template from the github and open it in your favourite text editor. 
- Go inside the folder path and execute the following command.
  ```
    npm install
  ```
In the root directory create a `.env` file and add the following env variables
      ```
        PORT=<port number of your choice>
     ```
ex:
```
     PORT=3000
```
-go inside the `src` folder path and execute command:

```
npx sequelize init

```
- By executing the above command you you will get migrations and seeder folders along with config.json inside the config folder.

- If you are setting up your development enviornment then write the name of your username of your db and password of your db in dialect mention whatever db you are using for ex: mysql,mariadb etc.

- If you are setting up test or prod enviornment , make sure you also replace the host with the hosted db url .

To run the server execute
```
 npm rum dev

```