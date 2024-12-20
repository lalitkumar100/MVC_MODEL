const API_URL = 'http://localhost:5000/clients';

// Add a new client
document.getElementById('add-form').onsubmit = async (e) => {
  e.preventDefault();

  const client = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client),
    });
    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error('Error adding client:', error);
  }
};

// Search for a client by email
document.getElementById('search-form').onsubmit = async (e) => {
  e.preventDefault();

  const email = document.getElementById('search-email').value;

  try {
    const response = await fetch(`${API_URL}?email=${email}`);
    const data = await response.json();

    const resultDiv = document.getElementById('search-result');
    if (response.ok) {
      resultDiv.textContent = `Client Found: Name - ${data.name}, Email - ${data.email}`;
    } else {
      resultDiv.textContent = data.message;
    }
  } catch (error) {
    console.error('Error searching client:', error);
  }
};
