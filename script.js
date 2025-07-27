let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    // Hide all tab contents
    for (let tabContent of tabContents) {
        tabContent.style.display = "none";
    }
    
    // Remove active class from all tab links (if you want to style active tab)
    for (let tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    
    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
    
    // Add active class to clicked tab (optional)
    tabName.currentTarget.classList.add('active-link');
}

// Initialize by showing the first tab by default
document.getElementById('skills').style.display = "block";
tabLinks[0].classList.add('active-link');