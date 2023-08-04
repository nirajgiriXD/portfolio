document.addEventListener("DOMContentLoaded", (event) => {
    const username = 'nirajgiriXD';

    // AJAX for GitHub API
    $.ajax({
        url: 'https://api.github.com/users/' + username,
        type: 'GET',
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error.message);;
        }
    });
});