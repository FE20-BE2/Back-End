# REMEDIAL 

# API Documentation

## Create User

Request :
- Method : POST
- Endpoint : `/api/users/signup`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "username" : "Budi",
    "email" : "budi12@gmail.com",
    "password" : "budi123",
    "role" : "user/admin",
}
```

Response :

```json 
{
    "message": "User created successfully"
}
```

## Login

Request :
- Method : POST
- Endpoint : `/api/users/signin`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "email" : "Budi",
    "password" : "budi12@gmail.com"
}
```

Response :

```json 
{
    "message": "Successful Login",
    "token": "token"
}
```
