const https = require('https');

const query = `
mutation {
  transferIssue(input: {
    issueId: "I_kwDOKdr2m853P6ZA"
    repositoryId: "R_kgDOKonBCw"
  }) {
    clientMutationId
  }
}`;

const data = JSON.stringify({
  query: query
});

const options = {
  hostname: 'api.github.com',
  path: '/graphql',
  method: 'POST',
  headers: {
    'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
    'User-Agent': 'GitHub-Action',
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('Response:', body);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(data);
req.end();
