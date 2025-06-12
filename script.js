document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            
            this.classList.add('active');
            
            sections.forEach(function(section) {
                section.classList.remove('active');
            });
            
            document.querySelector(target).classList.add('active');
        });
    });
});
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('main > section').forEach(tab => tab.classList.remove('active'));
    // Show the selected tab
    document.getElementById(tabName).classList.add('active');
    // Update active state in navigation
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === `#${tabName}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function showSignupTab() {
    showTab('signup');
}
