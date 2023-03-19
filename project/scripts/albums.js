const container = document.getElementById('container');

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                albums.forEach(album => {
                    const user = users.find(user => user.id === album.userId);
                    const albumBlock = document.createElement('div');
                    albumBlock.classList.add('block');

                    const albumId = document.createElement('p');
                    const albumIdSpanO = document.createElement('span');
                    albumIdSpanO.classList.add('orange');
                    albumIdSpanO.innerText = `Title: `;
                    const albumIdSpanW = document.createElement('span');
                    albumIdSpanW.innerText = `${album.title}`;
                    albumId.appendChild(albumIdSpanO);
                    albumId.appendChild(albumIdSpanW);
                    albumBlock.appendChild(albumId);

                    const userName = document.createElement('p');
                    userName.classList.add('flex');
                    const userNameSpanO = document.createElement('span');
                    userNameSpanO.classList.add('orange');
                    userNameSpanO.innerText = `Author: `;
                    const userLink = document.createElement('a');
                    userLink.href = `user-details.html?id=${user.id}`;
                    const userNameSpanW = document.createElement('button');
                    userNameSpanW.innerText = `${user.name}`;
                    userLink.appendChild(userNameSpanW);
                    userName.appendChild(userNameSpanO);
                    userName.appendChild(userLink);
                    albumBlock.appendChild(userName);

                    const albumLink = document.createElement('a');
                    albumLink.href = `album-details.html?id=${album.id}`;

                    const btn = document.createElement('button');
                    btn.innerText = 'Details';

                    albumLink.appendChild(btn);
                    albumBlock.appendChild(albumLink);
                    container.appendChild(albumBlock);
                });
            });
    });