document.addEventListener("DOMContentLoaded", (event) => {
    const username = 'nirajgiriXD';
    const pageTitle = document.querySelector('title');
    const favicon = document.querySelector('link[type="image/x-icon"]');
    const userDisplayName = document.querySelectorAll('.user-display-name');
    const profileImg = document.querySelector('.profile-img');
    const currentYear = document.getElementById('current-year');
    
    // Update current year.
    if (currentYear) {
        currentYear.innerText = new Date().getFullYear();
    }

    // AJAX for GitHub API.
    $.ajax({
        url: 'https://api.github.com/users/' + username,
        type: 'GET',
        success: (data) => {
            updateDOM(data);
        },
        error: (error) => {
            console.log(error.message);
        }
    });

    function updateDOM(data) {
        if(pageTitle) {
            pageTitle.innerText = 'Portfolio - ' + data.name;
        }
        if(userDisplayName) {
            for(let i=0; i<userDisplayName.length; i++) {
                userDisplayName[i].innerHTML = data.name;
            }
        }

        if(profileImg) {
            profileImg.setAttribute("src", data.avatar_url);
        }

        if(favicon) {
            favicon.setAttribute("href", data.avatar_url);
        }
    }
});