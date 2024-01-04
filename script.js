// When a link is clicked, toggle the visibility of the corresponding dropdown
window.addEventListener('click', function(event) {
    var experienceDropdown = document.getElementById('experience-dropdown');
    var proficienciesDropdown = document.getElementById('proficiencies-dropdown');

    // Check if the clicked target is the "Experience" link or its dropdown
    if (event.target.matches('#experience-link') || event.target.matches('#experience-dropdown')) {
        experienceDropdown.style.display = (experienceDropdown.style.display === 'block') ? 'none' : 'block';
    } else {
        // If not the "Experience" link or its dropdown, hide the "Experience" dropdown
        experienceDropdown.style.display = 'none';
    }

    // Check if the clicked target is the "Proficiencies" link or its dropdown
    if (event.target.matches('#proficiencies-link') || event.target.matches('#proficiencies-dropdown')) {
        proficienciesDropdown.style.display = (proficienciesDropdown.style.display === 'block') ? 'none' : 'block';
    } else {
        // If not the "Proficiencies" link or its dropdown, hide the "Proficiencies" dropdown
        proficienciesDropdown.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
    var video = document.getElementById('background-video');
    video.style.width = window.innerWidth + 'px';
    video.style.height = window.innerHeight + 'px';
});

// When the "Certifications" link is clicked, toggle the visibility of the dropdown
document.getElementById('certifications-link').addEventListener('click', function() {
    var dropdown = document.getElementById('certifications-dropdown');

    // If the dropdown is currently visible, hide it; otherwise, show it
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// This will close the certifications dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    var dropdown = document.getElementById('certifications-dropdown');

    // If the clicked target is outside the link and the dropdown, hide the dropdown
    if (!event.target.matches('#certifications-link') && !event.target.matches('#certifications-dropdown')) {
        dropdown.style.display = 'none';
    }
});

// Function to open the contact modal
function openContactModal() {
    var modal = document.getElementById('contactModal');
    modal.style.display = 'block';
}

// Function to close the contact modal
function closeContactModal() {
    var modal = document.getElementById('contactModal');
    modal.style.display = 'none';
}

// Event listener for opening the contact modal
document.getElementById('contact-link').addEventListener('click', openContactModal);

// Event listener for closing the contact modal
document.getElementById('closeContactModal').addEventListener('click', closeContactModal);

// Close the contact modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    var modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeContactModal();
    }
});
