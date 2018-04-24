# Web-Challenge-Server
Web-Challenge-Server is a "fake" REST API for testing and prototyping powered by [JSON-Server](https://github.com/typicode/json-server).

#### Get Breeds Data
```
GET /breeds
```

#### Add a Breed
```
POST /breeds
request body JSON: { "breed": "sample breed" }
```

#### Create a New User
```
POST /users
```

#### Get User Data
```
GET /users/5
```

#### Create a New Wish-List
```
POST /lists

request body JSON: { "userId": 5, "list": [] }
```

#### Get Wish-Lists by User ID
```
GET /users/5/lists
```

#### Update a Wish-List by List ID
```
PUT /lists/2

request body JSON: { "userId": 5, "list": [ { "breedId": 12 }, { "breedId": 22 } ] }
```

#### Get a Wish-List by List ID
```
GET /lists/5
```

#### Full-Text Search
Add `q`
```
GET /breeds?q=terrior
```

#### Sort
Add `_sort` and `order` (ascending order by default)

```
GET /breeds?_sort=breed&_order=asc
GET /users?_sort=id&_order=desc
```
