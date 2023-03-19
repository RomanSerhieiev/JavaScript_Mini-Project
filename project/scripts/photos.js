const container = document.getElementById('container');

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(albums => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(users => {
                        photos.forEach(photo => {
                            const album = albums.find(album => album.id === photo.albumId);
                            const user = users.find(user => user.id === album.userId);
                            const photoBlock = document.createElement('div');
                            photoBlock.classList.add('block');

                            const photoPreview = document.createElement('img');
                            photoPreview.src = `${photo.thumbnailUrl}`;
                            photoPreview.alt = `${photo.title}`;
                            photoBlock.appendChild(photoPreview);

                            const photoTitle = document.createElement('p');
                            const photoTitleSpanO = document.createElement('span');
                            photoTitleSpanO.classList.add('orange');
                            photoTitleSpanO.innerText = `Title: `;
                            const photoTitleSpanW = document.createElement('span');
                            photoTitleSpanW.innerText = `${photo.title}`;
                            photoTitle.appendChild(photoTitleSpanO);
                            photoTitle.appendChild(photoTitleSpanW);
                            photoBlock.appendChild(photoTitle);

                            const albumId = document.createElement('p');
                            albumId.classList.add('flex');
                            const albumIdSpanO = document.createElement('span');
                            albumIdSpanO.classList.add('orange');
                            albumIdSpanO.innerText = `Album: `;
                            const albumLink = document.createElement('a');
                            albumLink.href = `album-details.html?id=${album.id}`;
                            const albumIdSpanW = document.createElement('button');
                            albumIdSpanW.innerText = `${album.title}`;
                            albumLink.appendChild(albumIdSpanW);
                            albumId.appendChild(albumIdSpanO);
                            albumId.appendChild(albumLink);
                            photoBlock.appendChild(albumId);

                            const userName = document.createElement('p');
                            userName.classList.add('flex');
                            const userNameSpanO = document.createElement('span');
                            userNameSpanO.classList.add('orange');
                            userNameSpanO.innerText = `User: `;
                            const userLink = document.createElement('a');
                            userLink.href = `user-details.html?id=${user.id}`;
                            const userNameSpanW = document.createElement('button');
                            userNameSpanW.innerText = `${user.name}`;
                            userLink.appendChild(userNameSpanW);
                            userName.appendChild(userNameSpanO);
                            userName.appendChild(userLink);
                            photoBlock.appendChild(userName);

                            const photoLink = document.createElement('a');
                            photoLink.href = `photo-details.html?id=${photo.id}`;

                            const btn = document.createElement('button');
                            btn.innerText = 'Details';

                            photoLink.appendChild(btn);
                            photoBlock.appendChild(photoLink);
                            container.appendChild(photoBlock);
                        });
                    });
            });
    });