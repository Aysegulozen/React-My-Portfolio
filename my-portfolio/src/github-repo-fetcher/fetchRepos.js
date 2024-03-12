const axios = require('axios');

const username = 'Aysegulozen';
const apiUrl = `https://api.github.com/users/${username}/repos`;

axios.get(apiUrl)
  .then(response => {
    const repos = response.data.map(repo => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url
    }));
    console.log(repos);
  })
  .catch(error => {
    console.error('Error fetching repos:', error);
  });