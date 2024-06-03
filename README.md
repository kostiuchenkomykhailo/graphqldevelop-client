# GraphQlDevelop Client

A simple GraphQL client for Node.js, designed to make it easy to send queries and mutations to a GraphQL server.

## Installation

```sh
npm install graphqldevelop-client

const GraphQlDevelopClient = require('graphqldevelop-client');

const client = new GraphQlDevelopClient({
  endpoint: 'https://your-graphqldevelop-endpoint.com/graphql',
  headers: {
    'Authorization': 'Bearer YOUR_AUTH_TOKEN',
  },
});

const query = `
  query GetUsers($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

client.request(query, { id: '1' })
  .then(data => console.log(data))
  .catch(error => console.error(error));

const mutation = `
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

client.request(mutation, { name: 'John Doe', email: 'john.doe@example.com' })
  .then(data => console.log(data))
  .catch(error => console.error(error));

client.request(query, { id: '1' })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

API

GraphQlDevelopClient
constructor({ endpoint, headers })
Creates a new instance of the GraphQlDevelop client.

endpoint (string): The URL of the GraphQlDevelop server.
headers (object): Optional headers to include in every request.
request(query, variables)
Sends a query or mutation to the GraphQlDevelop server.

query (string): The GraphQlDevelop query or mutation to send.
variables (object): An object containing the variables for the query or mutation.
Returns a promise that resolves with the data from the GraphQlDevelop server or rejects with an error.

License

This markdown provides detailed instructions on how to install, use, and handle errors with your GraphQlDevelop client package, as well as an overview of the API and licensing information