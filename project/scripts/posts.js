const container = document.getElementById('container');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                posts.forEach(post => {
                    const user = users.find(user => user.id === post.userId);
                    const postBlock = document.createElement('div');
                    postBlock.classList.add('block');

                    const postId = document.createElement('p');
                    const postIdSpanO = document.createElement('span');
                    postIdSpanO.classList.add('orange');
                    postIdSpanO.innerText = `Title: `;
                    const postIdSpanW = document.createElement('span');
                    postIdSpanW.innerText = `${post.title}`;
                    postId.appendChild(postIdSpanO);
                    postId.appendChild(postIdSpanW);
                    postBlock.appendChild(postId);

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
                    postBlock.appendChild(userName);

                    const postLink = document.createElement('a');
                    postLink.href = `post-details.html?id=${post.id}`;

                    const btn = document.createElement('button');
                    btn.innerText = 'Details';

                    postLink.appendChild(btn);
                    postBlock.appendChild(postLink);
                    container.appendChild(postBlock);
                });
            });
    });