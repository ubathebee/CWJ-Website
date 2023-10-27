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

// Student data array// Student data array (example data)
const students = [
  {
    name: "Anas Shinkafi",
    title: "Backend Developer",
    imgSrc: "/assets/anas.jpg",
  },
  {
    name: "Hamza Muhammad",
    title: "Frontend Developer",
    imgSrc: "/assets/hamza.jpg",
  },
  {
    name: "Abdulmannan M. Tahir",
    title: "Backend Developer",
    imgSrc: "/assets/abdul.jpg",
  },
  {
    name: "Sikirullahi Abdulkadir",
    title: "Frontend Developer",
    imgSrc: "/assets/sikirullah.jpg",
  },
  {
    name: "Muhammad A. Bello",
    title: "Frontend Developer",
    imgSrc: "/assets/muhammad.jpg",
  },
  {
    name: "Uba Rabiu",
    title: "Frontend Developer",
    imgSrc: "/assets/uba.jpg",
  },
  {
    name: "Benjamin Onawo Samuel",
    title: "Frontend Developer",
    imgSrc: "/assets/benjamin.jpg",
  },
  {
    name: "Iyad Abdullahi",
    title: "Backend Developer",
    imgSrc: "/assets/iyad.jpg",
  },
  {
    name: "Phebe Abu",
    title: "Digital Marketter",
    imgSrc: "/assets/phebe.jpg",
  },
  {
    name: "Ishaq Ibrahim",
    title: "Frontend Developer",
    imgSrc: "/assets/ishak.jpg",
  },
];

// Function to generate student profiles as cards
function generateStudentProfiles() {
  const profileContainer = document.getElementById('profile-container');

  students.forEach((student) => {
    const profileCard = document.createElement('div');
    profileCard.className = 'profile-card';

    profileCard.innerHTML = `
      <img class="profile-img" src="${student.imgSrc}" alt="${student.name}">
      <div class="student-name">${student.name}</div>
      <div class="student-title">${student.title}</div>
    `;

    profileContainer.appendChild(profileCard);
  });
}

// Call the function to generate student profiles as cards
generateStudentProfiles();