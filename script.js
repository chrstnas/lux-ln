function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('main > div').forEach(tab => tab.classList.add('hidden'));
    // Show the selected tab
    document.getElementById(tabName).classList.remove('hidden');
    // Update active state in navigation
    document.querySelectorAll('nav button').forEach(button => {
        if (button.textContent.toLowerCase() === tabName) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
