// URL of the public API
const apiURL = 'https://jsonplaceholder.typicode.com/users';

// Fetch data from the API
fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data
  })
  .then(data => {
    const userList = document.getElementById('user-list');

    // Loop through data and display each user's name
    data.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} (${user.email})`;
      userList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
