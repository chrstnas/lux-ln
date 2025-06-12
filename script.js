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
