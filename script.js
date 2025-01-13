// Sample reservations data
const reservations = [
  { guestName: 'John Doe', date: '2025-01-15' },
  { guestName: 'Jane Smith', date: '2025-01-17' },
  { guestName: 'Alice Brown', date: '2025-01-20' }
];

// Show the dashboard and hide the intro section
function showDashboard() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('dashboard').style.display = 'flex';
}

// Load reservations and display them in the list
function loadReservations() {
  const reservationList = document.getElementById('reservation-list');
  reservationList.innerHTML = ''; // Clear the list before adding new items

  reservations.forEach((res) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${res.guestName} - ${new Date(res.date).toLocaleDateString()}`;
    reservationList.appendChild(listItem);
  });
}

// Accept pricing suggestion
function acceptPricing() {
  alert('You have accepted the suggested price!');
}
