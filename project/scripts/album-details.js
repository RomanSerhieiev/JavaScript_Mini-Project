const params = new URLSearchParams(window.location.search);
const albumId = params.get('id');
const container = document.getElementById('details-container');
const h1 = document.getElementsByTagName('h1');

Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`).then(response => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).then(response => response.json())
])
    .then(([users, album, photos]) => {
        h1[0].innerText = `Album ${album.title}`;
        document.title = `Album ${album.title} | JS MP`;

        const user = users.find(user => user.id === album.userId);
        const albumBlock = document.createElement('div');
        albumBlock.classList.add('block');

        const postId = document.createElement('p');
        const postIdSpanO = document.createElement('span');
        postIdSpanO.classList.add('orange');
        postIdSpanO.innerText = `ID: `;
        const postIdSpanW = document.createElement('span');
        postIdSpanW.innerText = `${album.id}`;
        postId.appendChild(postIdSpanO);
        postId.appendChild(postIdSpanW);
        albumBlock.appendChild(postId);

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
        albumBlock.appendChild(userName);

        const btn = document.createElement('button');
        btn.innerText = `Photos of ${album.title}`;
        btn.onclick = function () {
            const commentBlock = document.querySelectorAll(".photo-block");
            for (const commentBlockElement of commentBlock) {
                commentBlockElement.classList.toggle("flex-block");
            }
        };

        albumBlock.appendChild(btn);
        container.appendChild(albumBlock);

        photos.forEach(photo => {
            const photoBlock = document.createElement('div');
            photoBlock.classList.add('photo-block');

            const photoPreview = document.createElement('img');
            photoPreview.src = `${photo.thumbnailUrl}`;
            photoPreview.alt = `${photo.title}`;
            photoBlock.appendChild(photoPreview);

            const photoTitle = document.createElement('p');
            const photoTitleSpanO = document.createElement('span');
            photoTitleSpanO.classList.add('orange');
            photoTitleSpanO.innerText = `Photo: `;
            const photoTitleSpanW = document.createElement('span');
            photoTitleSpanW.innerText = `${photo.title}`;
            photoTitle.appendChild(photoTitleSpanO);
            photoTitle.appendChild(photoTitleSpanW);
            photoBlock.appendChild(photoTitle);

            const photoLink = document.createElement('a');
            photoLink.href = `photo-details.html?id=${photo.id}`;

            const btn = document.createElement('button');
            btn.innerText = 'Details';

            photoLink.appendChild(btn);
            photoBlock.appendChild(photoLink);

            container.appendChild(photoBlock);
        });
    });