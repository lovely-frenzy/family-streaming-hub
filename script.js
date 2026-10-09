const movies = [
  {
    title: 'Miraculous Ladybug',
    rating: 'G',
    year: '2024',
    duration: '22 min',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    category: 'Magic',
  },
  {
    title: 'Catch Teenieping',
    rating: 'G',
    year: '2024',
    duration: '12 min',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    category: 'Cartoon',
  },
  {
    title: 'Paw Patrol',
    rating: 'G',
    year: '2023',
    duration: '22 min',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure',
  },
  {
    title: 'Bluey',
    rating: 'G',
    year: '2024',
    duration: '7 min',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    category: 'Comedy',
  },
  {
    title: 'T.O.T.S.',
    rating: 'G',
    year: '2023',
    duration: '22 min',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure',
  },
  {
    title: 'Maya and the Three',
    rating: 'PG',
    year: '2021',
    duration: '45 min',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    category: 'Fantasy',
  },
  {
    title: 'SpongeBob SquarePants',
    rating: 'G',
    year: '2024',
    duration: '11 min',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    category: 'Comedy',
  },
  {
    title: 'Peppa Pig',
    rating: 'G',
    year: '2024',
    duration: '5 min',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    category: 'Family',
  },
];

const grid = document.getElementById('movie-grid');

movies.forEach((movie) => {
  const card = document.createElement('article');
  card.className = 'movie-card';

  card.innerHTML = `
    <div class="movie-poster" style="background-image: linear-gradient(180deg, rgba(18,26,43,0.08), rgba(16,22,36,0.18)), url('${movie.image}')"></div>
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <span class="rating">${movie.rating}</span>
    </div>
    <div class="meta-row">
      <span>${movie.category}</span>
      <span>${movie.year}</span>
    </div>
    <button class="play-btn">Play ${movie.duration}</button>
  `;

  grid.appendChild(card);
});

const buttons = document.querySelectorAll('.tag');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((tag) => tag.classList.remove('active'));
    button.classList.add('active');
  });
});
