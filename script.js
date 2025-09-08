window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});

// Configurações Reviews

const autor = document.getElementById('review-autor')
const reviews = document.getElementById('review');

const reviewsData = [
  {
    author: 'Marina Magalhães',
    review: 'Ótimo serviço prestado! Todos muito empenhados e competentes. Escritório super agradável.'
  },
  {
    author: 'Bianca Fernandes',
    review: 'Admirada pelo profissionalismo e competência destes profissionais, executam o trabalho com excelência e dedicação, por isso indico a todos!'
  },
  {
    author: 'Lara Mendes',
    review: 'Excelentes profissionais!!! Super recomendo'
  },
  {
    author: 'Edson Guimarães',
    review: 'Excelentes profissionais, altamente capacitados e competentes.'
  },
  {
    author: 'Alcione Ogando',
    review: 'Competência e atendimento excelente!'
  },
  {
    author: 'Vera Ribeiro',
    review: 'Ótimo atendimento!'
  },
  {
    author: 'Luís Henrique Matos Pereira',
    review: 'Excelente escritório. Advogados muito bem qualificados e preparados.'
  },
  {
    author: 'Álvaro Caetano',
    review: 'Excelente profissional, gostei muito do atendimento, muito atencioso e sucinto, agradeço a atenção. Nota 10'
  },
  {
    author: 'Gustavo Nambu',
    review: 'Ótimo lugar, bem aconchegante e bom atendimento'
  }
];

let currentReviewIndex = 0;

function updateReview() {
    const currentReview = reviewsData[currentReviewIndex];
    autor.innerHTML = currentReview.author;
    reviews.innerHTML = currentReview.review;
    currentReviewIndex++;

    if (currentReviewIndex >= reviewsData.length) {
        currentReviewIndex = 0;
    }
}

updateReview();

setInterval(updateReview, 10000);