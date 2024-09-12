# Grocery Booking API

* Grocery Booking API built using Node.js with the Express framework.

## Functionalities

### Admin Responsibilities:
* Add new grocery items to the system
* View existing grocery items
* Remove grocery items from the system
* Update details (e.g., name, price) of existing grocery items
* Manage inventory levels of grocery items

### User Responsibilities:
* View the list of available grocery items
* Book multiple grocery items in a single order

## Database Setup
* Install PostgreSQL and create a .env file in the backend directory with the necessary variables. Refer to the .env.example file for guidance.

## Admin Credentials
* Find admin credentials in seed file

## API Endpoints

### Users
- `GET /user`: Get the list of the users
- `POST /user/signup`: Signup as a user


### Authentication
- `POST /auth/login`: Authenticate a user and obtain an access token

### Grocery (Requires authentication)
- `GET /grocery`: Retrieve all grocery lists
- `POST /grocery/add`: Add a new grocery 
- `PUT /grocery/update/{id}`: Update an existing grocery by ID 
- `DELETE /grocery/delete/{id}`: Delete a grocery by ID 


### Order
- `GET /order`: Retrieve list of grocery that is being ordered by particular user
- `POST /order`: Order grocery
- `POST /order/multiple`: Order multiple grocery


## Run Locally

### Clone the project

```bash
git clone https://github.com/pratima-dawadi/Grocery-Booking-Api.git
```

### Change project directory
```bash
cd Grocery-Booking-Api
```

### Install dependencies
```bash
npm install
```

### Run project
```bash
npm run start
```
## Docker Image
https://hub.docker.com/repository/docker/dawadipratima/grocerybookingapi/general
