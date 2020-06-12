fetch("https://api.github.com/users/AnkushKhatiwada1999")
    .then(response => response.json())
    .then(function(data){
        console.log(data)

        var followersCount = data['followers']
        var followersInfo = `I have been followed by ${followersCount} people`



        document.getElementById('Profile').src=data['avatar_url']

        document.getElementById('Address').textContent=data['location']

        document.getElementById('fullName').textContent=data['name']
        document.getElementById('bio').textContent=data['bio']
        document.getElementById('twitterUsername').textContent=data['twitter_username']
        document.getElementById('followers').textContent=followersInfo
        document.getElementById('GitHub').href =data['html_url']

        document.getElementById('main').hidden=false
        document.getElementById('loading').hidden=true





    })


var request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/AnkushKhatiwada1999/repos', true)

request.onload = function () {

    var data = JSON.parse(this.response);

    var statusHTML = '';
    $.each(data, function(i, status) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.id + '</td>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td>' + status.html_url + '</td>';

        statusHTML += '</tr>';
    });
    $('tbody').html(statusHTML);
}

request.send();