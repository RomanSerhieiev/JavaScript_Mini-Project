const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
const container = document.getElementById('post-container');
const userH1 = document.createElement('h1');
container.appendChild(userH1);

Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => response.json())
])
    .then(([post, comments]) => {
        userH1.innerText = `${post.title}`;

        const postBlock = document.createElement('div');
        postBlock.classList.add('post');

        const postUserId = document.createElement('p');
        const postUserIdSpanO = document.createElement('span');
        postUserIdSpanO.classList.add('orange');
        postUserIdSpanO.innerText = `User ID: `;
        const postUserIdSpanW = document.createElement('span');
        postUserIdSpanW.innerText = `${post.userId}`;
        postUserId.appendChild(postUserIdSpanO);
        postUserId.appendChild(postUserIdSpanW);
        postBlock.appendChild(postUserId);

        const postId = document.createElement('p');
        const postIdSpanO = document.createElement('span');
        postIdSpanO.classList.add('orange');
        postIdSpanO.innerText = `Post ID: `;
        const postIdSpanW = document.createElement('span');
        postIdSpanW.innerText = `${post.id}`;
        postId.appendChild(postIdSpanO);
        postId.appendChild(postIdSpanW);
        postBlock.appendChild(postId);

        const postTitle = document.createElement('p');
        const postTitleSpanO = document.createElement('span');
        postTitleSpanO.classList.add('orange');
        postTitleSpanO.innerText = `Title: `;
        const postTitleSpanW = document.createElement('span');
        postTitleSpanW.innerText = `${post.title}`;
        postTitleSpanW.classList.add('uppercase');
        postTitle.appendChild(postTitleSpanO);
        postTitle.appendChild(postTitleSpanW);
        postBlock.appendChild(postTitle);

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

        const btn = document.createElement('button');
        btn.innerText = 'Comments of current post';
        btn.onclick = function () {
            const commentBlock = document.querySelectorAll(".comment-block");
            for (const commentBlockElement of commentBlock) {
                commentBlockElement.classList.toggle("display-flex");
            }
        };

        postBlock.appendChild(btn);
        container.appendChild(postBlock);

        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.classList.add('comment-block');

            const commentPostId = document.createElement('p');
            const commentPostIdSpanO = document.createElement('span');
            commentPostIdSpanO.classList.add('orange');
            commentPostIdSpanO.innerText = `Post ID: `;
            const commentPostIdSpanW = document.createElement('span');
            commentPostIdSpanW.innerText = `${comment.postId}`;
            commentPostId.appendChild(commentPostIdSpanO);
            commentPostId.appendChild(commentPostIdSpanW);
            commentBlock.appendChild(commentPostId);

            const commentId = document.createElement('p');
            const commentIdSpanO = document.createElement('span');
            commentIdSpanO.classList.add('orange');
            commentIdSpanO.innerText = `Comment ID: `;
            const commentIdSpanW = document.createElement('span');
            commentIdSpanW.innerText = `${comment.id}`;
            commentId.appendChild(commentIdSpanO);
            commentId.appendChild(commentIdSpanW);
            commentBlock.appendChild(commentId);

            const commentTitle = document.createElement('p');
            const commentTitleSpanO = document.createElement('span');
            commentTitleSpanO.classList.add('orange');
            commentTitleSpanO.innerText = `Title: `;
            const commentTitleSpanW = document.createElement('span');
            commentTitleSpanW.classList.add('uppercase');
            commentTitleSpanW.innerText = `${comment.name}`;
            commentTitle.appendChild(commentTitleSpanO);
            commentTitle.appendChild(commentTitleSpanW);
            commentBlock.appendChild(commentTitle);

            const commentEmail = document.createElement('p');
            const commentEmailSpanO = document.createElement('span');
            commentEmailSpanO.classList.add('orange');
            commentEmailSpanO.innerText = `E-mail: `;
            const commentEmailSpanW = document.createElement('span');
            commentEmailSpanW.classList.add('lowercase');
            commentEmailSpanW.innerText = `${comment.email}`;
            commentEmail.appendChild(commentEmailSpanO);
            commentEmail.appendChild(commentEmailSpanW);
            commentBlock.appendChild(commentEmail);

            const commentBody = document.createElement('p');
            const commentBodySpanO = document.createElement('span');
            commentBodySpanO.classList.add('orange');
            commentBodySpanO.innerText = `Body: `;
            const commentBodySpanW = document.createElement('span');
            commentBodySpanW.classList.add('uppercase');
            commentBodySpanW.innerText = `${comment.body}`;
            commentBody.appendChild(commentBodySpanO);
            commentBody.appendChild(commentBodySpanW);
            commentBlock.appendChild(commentBody);

            container.appendChild(commentBlock);
        });
    });