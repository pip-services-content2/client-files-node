# Files Microservice Client SDK for Node.js / ES2017

This is a Node.js client SDK for [service-files-node](https://github.com/pip-services-content2/service-files-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP/REST client
* AWS Lambda client
* Direct client for monolythic deploments
* Null client to be used in testing

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-files-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-files-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.FilesHttpClientV1(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
} catch(err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Create a new picture
let file = {
    group: "pictures",
    name: "google_search.jpg",
    content_uri: "http://www.somewhere.com/google_search.jpg"
};

let file = await client.createFile(
    null,
    file
);
```

```javascript
// Read picture files
let page = await client.getFilesByFilter(
    null,
    { group: "pictures" },
    null
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

