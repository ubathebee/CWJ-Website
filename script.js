const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
document.querySelector('.logo').textContent = "<CWJ />";

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

function typewriterEffect() {
  const headerText = document.getElementById('header-text');
  const textToType = "Welcome to CodeWithJameel";
  let currentIndex = 0;

  const typingInterval = setInterval(() => {
    if (currentIndex <= textToType.length) {
      headerText.textContent = textToType.substring(0, currentIndex);
      currentIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 180);//(in milliseconds)
}

typewriterEffect(); // Start the typewriter effect when the page loads


function toggleMoreContent() {
  var moreContent = document.getElementById('more-content');
  var readMoreButton = document.getElementById('read-more');

  if (moreContent.style.display === 'none' || moreContent.style.display === '') {
    moreContent.style.display = 'inline'; // Display the hidden content
    readMoreButton.textContent = 'Read Less';
  } else {
    moreContent.style.display = 'none'; // Hide the content
    readMoreButton.textContent = 'Read More';
  }
}

// Student data array
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


document.addEventListener('DOMContentLoaded', function () {
  const services = [
    {
      icon: 'fa-globe',
      title: 'Education',
      subtitle: 'Skill Development',
      description: "Whether you're a seasoned developer or just starting your tech journey, we offer a platform for skill development. Choose your area of interest, and let us guide you towards mastery.",
    },
    {
      icon: 'fa-network-wired',
      title: 'Experience',
      subtitle: 'Project Collaboration',
      description: "We believe that the best way to learn and grow is by working on real-world projects. CodeWithJameel provides opportunities for hands-on experience through collaborative projects.",
    },
    {
      icon: 'fa-mobile-button',
      title: 'Employment',
      subtitle: 'Business Focus',
      description: "It's not just about learning; we are passionate about innovation. Join us, and you'll have the chance to work on projects that have real-world applications and the potential to turn into viable businesses.",
    },
  ];

  const servList = document.getElementById('servList');

  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'serv-items';
    card.innerHTML = `
      <i class="fa-solid ${service.icon}"></i>
      <h2>${service.title}</h2>
      <h3>${service.subtitle}</h3>
      <p>${service.description}</p>
    `;
    servList.appendChild(card);
  });

  const resizeCards = () => {
    if (window.innerWidth >= 768) {
      servList.style.display = 'flex';
      servList.style.flexDirection = 'row';
    } else {
      servList.style.display = 'flex';
      servList.style.flexDirection = 'column';
    }
  };

  // Initial layout based on screen size
  resizeCards();

  // Update layout when the window is resized
  window.addEventListener('resize', resizeCards);
});

// Adding Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach((element, index) => {
    const delay = index * 0.3;
    element.style.opacity = 0;

    const animation = {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    };

    // Apply the animation to the element
    window.addEventListener('scroll', () => {
      const elementTop = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (elementTop < screenHeight * 0.75) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      } else {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px)';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  animateOnScroll();
});