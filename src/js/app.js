const people = document.querySelectorAll(".people img");
const reviewText = document.querySelector(".review__text");
const reviewerName = document.querySelector(".review__card .name");
const reviewerWho = document.querySelector(".review__card .who");

function handleReview(e) {
  people.forEach(function(person) {
    person.classList.remove("active");
    e.currentTarget.classList.add("active");
    reviewText.textContent = e.currentTarget.dataset.review;
    reviewerName.textContent = e.currentTarget.dataset.name;
    reviewerWho.textContent = e.currentTarget.dataset.who;
  });
}

people.forEach(person => person.addEventListener("click", handleReview));
