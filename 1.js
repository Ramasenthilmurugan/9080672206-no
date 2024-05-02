const url = 'http://20.244.56.144/test/register';
const data = {
  companyName: 'Afformed',
  ownerName: 'Rama S',
  rollNo: '9080672206',
  ownerEmail: 'ramasenthil22@gmail.com',
  accessCode: 'FcgOVJ'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
