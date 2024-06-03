class GraphQlDevelopClient {
  constructor({ endpoint, headers = {} }) {
    this.endpoint = endpoint;
    this.headers = headers;
  }

  async request(query, variables = {}) {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const responseBody = await response.json();

    if (responseBody.errors) {
      throw new Error(`GraphQL Error: ${responseBody.errors.map(e => e.message).join(', ')}`);
    }

    return responseBody.data;
  }
}

module.exports = GraphQlDevelopClient;
