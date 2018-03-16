# Car API frontend using Vue.js

A frontend for the [car API](https://github.com/krga/car-api-node) using the Vue.js framework which is served as static content by Node.js/express.

For the call of the REST-API the [axios](https://github.com/axios/axios) HTTP client is used which will be directly loaded bei the file **index.html**.

To be able to use this code a [car-api-node Server](https://github.com/krga/car-api-node) should be running.

To start using this frontend just clone this repo:

``` bash
$ git clone https://github.com/krga/car-frontend-vue.git
```

Environment variables (like the port number) should be defined in the **.env** file. 

``` 
PORT=8090
```

The important file/directory are

- **index.html**: file which will be returned by the root endpoint (GET '/') and includes the `<div>` which will be used by Vue.js to do the DOM operations
- **public**: includes all the static content which will be accessed by the file **index.html**
- **public/script.js**: includes all Vue.js logic code


Start the app normally by using npm 

``` bash
$ npm start
```

or node directly

``` bash
$ node app.js
```