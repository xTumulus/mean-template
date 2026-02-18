# mean-template
A template for Mongo Express Angular Node projects

1. Install Node.js 

2. Install NVM

3. Install Angular
    - npm install -g @angular/cli

4. Install Express
    - npm install express --save

5. Install MongoDB (Not Atlas)
    - curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor

5. Frontend Setup
    - ng new <name-of-your-project>

6. Backend Setup
    - to run: npx ts-node server/src/server.ts
    - database.ts defines our db and will create it in linked mongo instance
    - server.ts used to define and start the backend server
    - xxx.ts defines a data model
    - xxx.routes.ts defines a REST api for the model (Use OpenAPI standard?)

7. Postman collection template

# Express MongoDB REST API

A RESTful API built with Express.js and MongoDB for managing users and items.

## Features

- TypeScript for type safety
- MongoDB for data persistence
- Express.js for routing
- CORS enabled
- RESTful API design

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env` and configure your MongoDB connection:
```bash
cp .env.example .env
```

4. Ensure MongoDB is running locally:
```bash
# Default MongoDB runs on mongodb://localhost:27017
mongod
```

## Configuration

Edit `.env` file:
```
MONGODB_URI=mongodb://localhost:27017
DB_NAME=myapp
PORT=3000
```

## Running the Application

### Development mode (with auto-reload):
```bash
npm run dev
```

### Build and run production:
```bash
npm run build
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Users

#### Get all users
```
GET /api/users
```

#### Get user by ID
```
GET /api/users/:id
```

#### Create new user
```
POST /api/users
Content-Type: application/json

{
  "username": "john_doe",
  "role": "user",
  "email": "john@example.com"
}
```
**Roles:** `admin`, `user`, `guest`

#### Update user
```
PUT /api/users/:id
Content-Type: application/json

{
  "username": "john_updated",
  "role": "admin",
  "email": "john.updated@example.com"
}
```

#### Delete user
```
DELETE /api/users/:id
```

### Items

#### Get all items
```
GET /api/items
```

#### Get item by ID
```
GET /api/items/:id
```

#### Get items by owner
```
GET /api/items/owner/:username
```

#### Create new item
```
POST /api/items
Content-Type: application/json

{
  "name": "Laptop",
  "status": "available",
  "location": "Office A",
  "owner": "john_doe"
}
```

#### Update item
```
PUT /api/items/:id
Content-Type: application/json

{
  "name": "Laptop Pro",
  "status": "in-use",
  "location": "Office B",
  "owner": "john_doe"
}
```

#### Delete item
```
DELETE /api/items/:id
```

## Data Models

### User
```typescript
{
  username: string;
  role: 'admin' | 'user' | 'guest';
  email: string;
  _id?: ObjectId;
}
```

### Item
```typescript
{
  name: string;
  status: string;
  location: string;
  owner: string; // References a username in users collection
  _id?: ObjectId;
}
```

## Project Structure

```
├── src/
│   ├── models/
│   │   ├── user.ts          # User interface
│   │   └── item.ts          # Item interface
│   ├── routes/
│   │   ├── users.routes.ts  # User endpoints
│   │   └── items.routes.ts  # Item endpoints
│   ├── services/
│   │   └── database.service.ts  # MongoDB connection
│   └── server.ts            # Express app entry point
├── .env                     # Environment variables
├── .env.example             # Environment template
├── package.json
├── tsconfig.json
└── README.md
```

## Testing with curl

### Create a user:
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","role":"admin","email":"alice@example.com"}'
```

### Get all users:
```bash
curl http://localhost:3000/api/users
```

### Create an item:
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Desk","status":"available","location":"Room 101","owner":"alice"}'
```

### Get all items:
```bash
curl http://localhost:3000/api/items
```

## TODO Items

The following improvements are marked in the code:

1. **User Model:** Add type safety for email addresses
2. **User Model:** Make roles match values in a role collection
3. **Item Model:** Match status with a status collection
4. **Item Model:** Make location match values in a location collection
5. **Item Model:** Validate owner matches a username in users collection
6. **Items Router:** Implement owner validation against users collection

## License

ISC


Server Config
    - define the uri
    - define the dbName
    - define the port