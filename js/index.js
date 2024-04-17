// Get a reference to the body element
const body = document.body;

// Create a new footer element
const footer = document.createElement('footer');

// Append the footer element as the last child of the body
body.appendChild(footer);

// Get the current year
const today = new Date();
const thisYear = today.getFullYear();

// Create copyright text element 
const copyright = document.createElement('p');
copyright.innerHTML = `© ${thisYear} Dinar Ibragimov`; 

// Append the copyright text to the footer
footer.appendChild(copyright);

// Technical skills as an array
const skills = ["JavaScript", "HTML", "CSS", "Git"]; 

const skillsSection = document.getElementById('Skills');

const skillsList = skillsSection.querySelector('ul');

for (const skill of skills) {
 
  const skillItem = document.createElement('li');

  skillItem.textContent = skill;

  skillsList.appendChild(skillItem);
}