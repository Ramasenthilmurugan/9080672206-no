

const url = 'http://20.244.56.144/test/auth';
const data = {
  companyName: 'Afformed',
  clientID: '4fe198e9-e478-4740-ad49-ac0ede59d370',
  clientSecret: 'leVmpEyDtZlWQySI',
  ownerName: 'Rama S',
  ownerEmail: 'ramasenthil22@gmail.com',
  rollNo: '9080672206'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});
