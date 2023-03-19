const params = new URLSearchParams(window.location.search);
const photoId = params.get('id');
const container = document.getElementById('details-container');
const h1 = document.getElementsByTagName('h1');

fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
    .then(response => response.json())
    .then(photo => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(albums => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(users => {
                        h1[0].innerText = `Photo ${photo.title}`;
                        document.title = `Photo ${photo.title} | JS MP`;

                        const album = albums.find(album => album.id === photo.albumId);
                        const user = users.find(user => user.id === album.userId);
                        const photoBlock = document.createElement('div');
                        photoBlock.classList.add('block');

                        const photoPreview = document.createElement('img');
                        photoPreview.src = `${photo.url}`;
                        photoPreview.alt = `${photo.title}`;
                        photoBlock.appendChild(photoPreview);

                        const photoId = document.createElement('p');
                        const photoIdSpanO = document.createElement('span');
                        photoIdSpanO.classList.add('orange');
                        photoIdSpanO.innerText = `ID: `;
                        const photoIdSpanW = document.createElement('span');
                        photoIdSpanW.innerText = `${photo.id}`;
                        photoId.appendChild(photoIdSpanO);
                        photoId.appendChild(photoIdSpanW);
                        photoBlock.appendChild(photoId);

                        const photoAlbumId = document.createElement('p');
                        photoAlbumId.classList.add('flex');
                        const photoAlbumIdSpanO = document.createElement('span');
                        photoAlbumIdSpanO.classList.add('orange');
                        photoAlbumIdSpanO.innerText = `Album: `;
                        const photoAlbumLink = document.createElement('a');
                        photoAlbumLink.href = `album-details.html?id=${album.id}`;
                        const photoAlbumIdSpanW = document.createElement('button');
                        photoAlbumIdSpanW.innerText = `${album.title}`;
                        photoAlbumLink.appendChild(photoAlbumIdSpanW);
                        photoAlbumId.appendChild(photoAlbumIdSpanO);
                        photoAlbumId.appendChild(photoAlbumLink);
                        photoBlock.appendChild(photoAlbumId);

                        const userName = document.createElement('p');
                        userName.classList.add('flex');
                        const userNameSpanO = document.createElement('span');
                        userNameSpanO.classList.add('orange');
                        userNameSpanO.innerText = `Album's author: `;
                        const userLink = document.createElement('a');
                        userLink.href = `user-details.html?id=${user.id}`;
                        const userNameSpanW = document.createElement('button');
                        userNameSpanW.innerText = `${user.name}`;
                        userLink.appendChild(userNameSpanW);
                        userName.appendChild(userNameSpanO);
                        userName.appendChild(userLink);
                        photoBlock.appendChild(userName);

                        container.appendChild(photoBlock);
                    });
            });
    });