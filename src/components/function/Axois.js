import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://spotify-web2.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '5c489e800amsh4dceebe8c62d24dp1eb7dbjsn2df1b9c78714',
    'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}