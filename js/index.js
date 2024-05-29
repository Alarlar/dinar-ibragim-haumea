document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the body element
    const body = document.body;

    // Create a new footer element
    const footer = document.createElement("footer");

    // Append the footer element as the last child of the body
    body.appendChild(footer);

    // Get the current year
    const today = new Date();
    const thisYear = today.getFullYear();

    // Create copyright text element
    const copyright = document.createElement("p");
    copyright.innerHTML = `© ${thisYear} Dinar Ibragimov`;

    // Append the copyright text to the footer
    footer.appendChild(copyright);

    // Technical skills as an array
    const skills = ["JavaScript", "HTML", "CSS", "Git", "C++", "TCP/IP"];

    const skillsSection = document.getElementById("Skills");
    const skillsList = skillsSection.querySelector("ul");

    for (const skill of skills) {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    }

    const messageForm = document.forms.leave_message;

    // Adding event listener to the form
    messageForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        const usersName = messageForm.usersName.value;
        const usersEmail = messageForm.usersEmail.value;
        const usersMessage = messageForm.usersMessage.value;

        console.log('Name:', usersName);
        console.log('Email:', usersEmail);
        console.log('Message:', usersMessage);

        // Create the mailto link
        const mailtoLink = `mailto:your-email@example.com?subject=Message from ${usersName}&body=${usersMessage}`;
        window.location.href = mailtoLink;
        
        // Clear the form
        messageForm.reset();

        // Display Messages in List
        // Select the #messages section
        const messageSection = document.getElementById('Messages');
        
        // Query the messageSection to find the <ul> element
        const messageList = messageSection.querySelector('ul');
        
        // Create a new list item element
        const newMessage = document.createElement('li');
        
        // Set the inner HTML of newMessage element
        newMessage.innerHTML = `
            <a href="mailto:${usersEmail}">${usersName}</a>: 
            <span>${usersMessage}</span>
        `;
        
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.type = 'button';
        
        // Add event listener to removeButton
        removeButton.addEventListener('click', function() {
            // Find the button's parent element (the entry)
            const entry = removeButton.parentNode;
            // Remove the entry from the DOM
            entry.remove();
        });
        
        // Append removeButton to newMessage
        newMessage.appendChild(removeButton);
        
        // Append newMessage to messageList
        messageList.appendChild(newMessage);
    });

    const username = "alarlar";
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Couldn't fetch data from GitHub");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const repositories = data;
            console.log(repositories);
            const projectSection = document.getElementById("Projects");
            const projectList = projectSection.querySelector("ul");

            for (let i = 0; i < repositories.length; i++) {
                const project = document.createElement("li");
                project.innerText = repositories[i].name;
                projectList.appendChild(project);
            }
        })
        .catch((error) => {
            console.error("Something went wrong:", error);
        });
});