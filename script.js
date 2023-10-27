const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
document.querySelector('.logo').textContent = "<CWJ />";

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

function toggleMoreContent() {
  var moreContent = document.getElementById('more-content');
  var readMoreButton = document.getElementById('read-more');

  if (moreContent.style.display === 'none' || moreContent.style.display === '') {
    moreContent.style.display = 'inline'; // Display the hidden content
    readMoreButton.textContent = 'Read Less'; // Change button text
  } else {
    moreContent.style.display = 'none'; // Hide the content
    readMoreButton.textContent = 'Read More'; // Change button text
  }
}