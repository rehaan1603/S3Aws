// Login function (username=admin, password=admin)
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('loginError');

  if (username === 'admin' && password === 'admin') {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('mainPage').classList.add('active');
    error.style.display = 'none';
    loadMovies();
    setActiveSidebar('dashboard');
    clearSectionActive();
    document.getElementById('dashboard').classList.add('active');
  } else {
    error.style.display = 'block';
  }
}

// Logout function
function logout() {
  document.getElementById('loginPage').classList.add('active');
  document.getElementById('mainPage').classList.remove('active');
  clearMoviesTable();
  document.getElementById('movieForm').reset();
  clearSectionActive();
  setActiveSidebar('dashboard');
  document.getElementById('dashboard').classList.add('active');
}

// Switch content sections
function switchSection(event) {
  event.preventDefault();
  const sectionId = event.target.getAttribute('data-section');
  clearSectionActive();
  clearActiveSidebar();
  event.target.classList.add('active');
  document.getElementById(sectionId).classList.add('active');
}

// Helpers to clear active states
function clearSectionActive() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => s.classList.remove('active'));
}
function clearActiveSidebar() {
  const links = document.querySelectorAll('.sidebar a:not(.logout-btn)');
  links.forEach(l => l.classList.remove('active'));
}
function setActiveSidebar(section) {
  const links = document.querySelectorAll('.sidebar a:not(.logout-btn)');
  links.forEach(l => {
    if (l.getAttribute('data-section') === section) {
      l.classList.add('active');
    }
  });
}

// LocalStorage Movie functions
function loadMovies() {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  populateMoviesTable(movies);
}

function saveMovies(movies) {
  localStorage.setItem('movies', JSON.stringify(movies));
}

function addMovie(event) {
  event.preventDefault();
  const title = document.getElementById('title').value.trim();
  const director = document.getElementById('director').value.trim();
  const year = parseInt(document.getElementById('year').value.trim());
  const genre = document.getElementById('genre').value;

  if (!title || !director || !year || !genre) return;

  let movies = JSON.parse(localStorage.getItem('movies')) || [];
  movies.push({ title, director, year, genre });
  saveMovies(movies);
  populateMoviesTable(movies);

  event.target.reset();
}

function populateMoviesTable(movies) {
  const tbody = document.querySelector('#moviesTable tbody');
  tbody.innerHTML = '';
  movies.forEach((movie, index) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${movie.title}</td>
      <td>${movie.director}</td>
      <td>${movie.year}</td>
      <td>${movie.genre}</td>
      <td><button onclick="deleteMovie(${index})" class="delete-btn">Delete</button></td>
    `;

    tbody.appendChild(tr);
  });
}

function deleteMovie(index) {
  let movies = JSON.parse(localStorage.getItem('movies')) || [];
  movies.splice(index, 1);
  saveMovies(movies);
  populateMoviesTable(movies);
}

function clearMoviesTable() {
  const tbody = document.querySelector('#moviesTable tbody');
  tbody.innerHTML = '';
}

// Features content with Bollywood movies reviews
const featuresData = [
  {
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy, Drama",
    review: "An inspiring tale on education and friendship with iconic performances."
  },
  {
    title: "Dangal",
    year: 2016,
    genre: "Biography, Sports, Drama",
    review: "A powerful story of perseverance and women empowerment through wrestling."
  },
  {
    title: "Lagaan",
    year: 2001,
    genre: "Drama, Sports",
    review: "Epic story blending sports and colonial India with great storytelling."
  },
  {
    title: "Queen",
    year: 2014,
    genre: "Comedy, Drama",
    review: "A journey of self-discovery with charm and humor."
  },
  {
    title: "Bahubali: The Beginning",
    year: 2015,
    genre: "Action, Drama",
    review: "A grand epic filled with stunning visuals and thrilling action."
  }
];

function loadFeatures() {
  const container = document.getElementById('featuresContent');
  container.innerHTML = '';
  featuresData.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h4>${movie.title} (${movie.year})</h4>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><em>${movie.review}</em></p>
    `;
    container.appendChild(card);
  });
}

// Initialize features content on page load
document.addEventListener('DOMContentLoaded', () => {
  loadFeatures();
});