$(document).ready(function() {
    $('.profile-form').submit(function(event) {
        event.preventDefault();
        
        var username = $('#username-input').val();
        var apiURL = 'https://api.github.com/users/' + username;

        $.ajax({
            url: apiURL,
            dataType: 'json',
            success: function(data) {
                $('.profile-avatar').attr('src', data.avatar_url);
                $('.profile-name').text(data.name);
                $('.profile-username').text(data.login);
                $('#repositorios').text(data.public_repos);
                $('#seguidores').text(data.followers);
                $('#seguindo').text(data.following);
                $('.profile-link').attr('href', data.html_url);
            },
            error: function() {
                alert('Erro ao obter informações do perfil.');
            }
        });
    });
});

// $(document).ready(function() {
//     $('#btn-buscar-usuario').click(function() {
//         const username = $('#username-input').val();
//         const url = `https://api.github.com/users/${username}`;

//         const botao = $(this);
//         $(botao).find('i').addClass('d-none');
//         $(botao).find('span').removeClass('d-none');

//         fetch(url)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(data) {
//                 $('.profile-avatar').attr('src', data.avatar_url);
//                 $('.profile-name').text(data.name);
//                 $('.profile-username').text(data.login);
//                 $('#repositorios').text(data.public_repos);
//                 $('#seguidores').text(data.followers);
//                 $('#seguindo').text(data.following);
//                 $('.profile-link').attr('href', data.html_url);
//             })
//             .catch(function(error) {
//                 console.log('Ocorreu um erro ao carregar as informações do GitHub.');
//             })
//             .finally(function() {
//                 setTimeout(function() {
//                     $(botao).find('i').removeClass('d-none');
//                     $(botao).find('span').addClass('d-none');
//                 }, 1000);
//             });
//     });
// });