const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
const container = document.getElementById('details-container');
const h1 = document.getElementsByTagName('h1');

Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => response.json())
])
    .then(([users, post, comments]) => {
        h1[0].innerText = `Post ${post.title}`;
        document.title = `Post ${post.title} | JS MP`;

        const user = users.find(user => user.id === post.userId);
        const postBlock = document.createElement('div');
        postBlock.classList.add('block');

        const postId = document.createElement('p');
        const postIdSpanO = document.createElement('span');
        postIdSpanO.classList.add('orange');
        postIdSpanO.innerText = `ID: `;
        const postIdSpanW = document.createElement('span');
        postIdSpanW.innerText = `${post.id}`;
        postId.appendChild(postIdSpanO);
        postId.appendChild(postIdSpanW);
        postBlock.appendChild(postId);

        const postBody = document.createElement('p');
        const postBodySpanO = document.createElement('span');
        postBodySpanO.classList.add('orange');
        postBodySpanO.innerText = `Body: `;
        const postBodySpanW = document.createElement('span');
        postBodySpanW.innerText = `${post.body}`;
        postBodySpanW.classList.add('uppercase');
        postBody.appendChild(postBodySpanO);
        postBody.appendChild(postBodySpanW);
        postBlock.appendChild(postBody);

        const userName = document.createElement('p');
        userName.classList.add('flex');
        const userNameSpanO = document.createElement('span');
        userNameSpanO.classList.add('orange');
        userNameSpanO.innerText = `Post's author: `;
        const userLink = document.createElement('a');
        userLink.href = `user-details.html?id=${user.id}`;
        const userNameSpanW = document.createElement('button');
        userNameSpanW.innerText = `${user.name}`;
        userLink.appendChild(userNameSpanW);
        userName.appendChild(userNameSpanO);
        userName.appendChild(userLink);
        postBlock.appendChild(userName);

        const btn = document.createElement('button');
        btn.innerText = `Show comments`;
        btn.onclick = function () {
            const commentBlock = document.querySelectorAll(".comment-block");
            for (const commentBlockElement of commentBlock) {
                commentBlockElement.classList.toggle("flex-block");
            }
            if (btn.innerText === `Show comments`) {
                btn.innerText = `Hide comments`;
            } else {
                btn.innerText = `Show comments`;
            }
        };

        postBlock.appendChild(btn);
        container.appendChild(postBlock);

        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.classList.add('comment-block');

            const commentTitle = document.createElement('p');
            const commentTitleSpanO = document.createElement('span');
            commentTitleSpanO.classList.add('orange');
            commentTitleSpanO.innerText = `Comment: `;
            const commentTitleSpanW = document.createElement('span');
            commentTitleSpanW.classList.add('uppercase');
            commentTitleSpanW.innerText = `${comment.name}`;
            commentTitle.appendChild(commentTitleSpanO);
            commentTitle.appendChild(commentTitleSpanW);
            commentBlock.appendChild(commentTitle);

            const commentLink = document.createElement('a');
            commentLink.href = `comment-details.html?id=${comment.id}`;

            const btn = document.createElement('button');
            btn.innerText = 'Details';

            commentLink.appendChild(btn);
            commentBlock.appendChild(commentLink);

            container.appendChild(commentBlock);
        });
    });