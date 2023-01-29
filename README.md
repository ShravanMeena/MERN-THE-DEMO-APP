# API guide for Network Subscription Payment


## Register on platform

```Endpoint:- api_endpoint/api/register```


```Methods allowed:- POST```


```javascript

Headers = {
    Authorization: `Bearer ${token}`
}

```

```javascript


Request = {
    "username": "shravan",
    "password": "123456",

}

Success Response = {
    "status": "ok"
}


Error Response = {
    "status": "error",
    "error": "Username already in use"
}

```

<hr />


## Login on platform

```Endpoint:- api_endpoint/api/login```


```Methods allowed:- POST```


```javascript

Headers = {
    Authorization: `Bearer ${token}`
}

```

```javascript


Request = {
    "username": "shravan",
    "password": "123456",

}

Success Response = {
    "status": "ok",
    "data": {
        "user": {
            "_id": "63d6c0678beb9bb4aa74aa5a",
            "username": "shravanmeena",
            "password": "$2b$10$HWxqu46sZfOdISn5Ig1ZIOM8KqD70XQj9Ezy/zzcQqnZVdFfqhyQu",
            "role": "user",
            "createdAt": "2023-01-29T18:52:23.821Z",
            "updatedAt": "2023-01-29T18:52:23.821Z",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDZjMDY3OGJlYjliYjRhYTc0YWE1YSIsInVzZXJuYW1lIjoic2hyYXZhbm1lZW5hIiwiaWF0IjoxNjc1MDE4NDEzfQ.WyFBtcrtrDSlOdM99vb4vj4xlhPZ_gz_clg7l9LXmPw"
    }
}


Error Response = {
    "status": "error",
    "error": "Invalid username/password"
}

```

<hr />


## Change/Reset password on platform

```Endpoint:- api_endpoint/api/reset-password```


```Methods allowed:- POST```


```javascript

Headers = {
    Authorization: `Bearer ${token}`
}

```

```javascript


Request = {
    "token": "asdnkasdasdkasjdknbaksbd",
    "newpassword": "123456900",

}

Success Response = {
    "status": "ok"
}


Error Response = {
    "status": "error",
    "error": "Password too small. Should be atleast 6 characters"
}

```

<hr />


