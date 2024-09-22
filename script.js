document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    const reviewsList = document.getElementById('reviews-list');
    const newReview = document.createElement('div');
    newReview.innerHTML = `<strong>${name}</strong> (${rating} звёзд): <p>${review}</p>`;
    reviewsList.appendChild(newReview);

    this.reset(); // очистить форму
});
