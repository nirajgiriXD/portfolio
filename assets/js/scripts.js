document.addEventListener("DOMContentLoaded", (event) => {
    const username = 'nirajgiriXD';
    const pageTitle = document.querySelector('title');
    const favicon = document.querySelector('link[type="image/x-icon"]');
    const headerUsername = document.querySelector('#header__username');
    const profileImg = document.querySelector('.profile-img');

    // AJAX for GitHub API
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
        if(headerUsername) {
            headerUsername.innerHTML = data.name;
        }

        if(profileImg) {
            profileImg.setAttribute("src", data.avatar_url);
        }

        if(favicon) {
            favicon.setAttribute("href", data.avatar_url);
        }
    }
});