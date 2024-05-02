

const url = 'http://20.244.56.144/test/primes';
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0NjI5OTM5LCJpYXQiOjE3MTQ2Mjk2MzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjRmZTE5OGU5LWU0NzgtNDc0MC1hZDQ5LWFjMGVkZTU5ZDM3MCIsInN1YiI6InJhbWFzZW50aGlsMjJAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JtZWQiLCJjbGllbnRJRCI6IjRmZTE5OGU5LWU0NzgtNDc0MC1hZDQ5LWFjMGVkZTU5ZDM3MCIsImNsaWVudFNlY3JldCI6ImxlVm1wRXlEdFpsV1F5U0kiLCJvd25lck5hbWUiOiJSYW1hIFMiLCJvd25lckVtYWlsIjoicmFtYXNlbnRoaWwyMkBnbWFpbC5jb20iLCJyb2xsTm8iOiI5MDgwNjcyMjA2In0.DB0PjWxu7_nwkIKEH7v7XfpMKktTPOI5yKhIrcyTa5Q'; // Replace 'YOUR_ACTUAL_TOKEN' with the provided token

fetch(url, {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
