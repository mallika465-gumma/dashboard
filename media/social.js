// Login functionality
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate successful login
    document.getElementById('login').style.display = 'none';
    document.getElementById('feed').style.display = 'block';
    document.getElementById('nav-login').style.display = 'none';
    document.getElementById('nav-feed').style.display = 'inline';
});

// Simulate connecting social media accounts
document.getElementById('connect-twitter').addEventListener('click', function() {
    displayFeedContent('Twitter', 'Twitter feed content here...');
});

document.getElementById('connect-facebook').addEventListener('click', function() {
    displayFeedContent('Facebook', 'Facebook feed content here...');
});

document.getElementById('connect-instagram').addEventListener('click', function() {
    displayFeedContent('Instagram', 'Instagram feed content here...');
});

// Function to display feed content
function displayFeedContent(platform, content) {
    const feedContent = document.getElementById('feed-content');
    feedContent.innerHTML += `<h3>${platform} Feed</h3><p>${content}</p>`;
}
