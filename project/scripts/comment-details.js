const params = new URLSearchParams(window.location.search);
const commentId = params.get('id');
const container = document.getElementById('details-container');
const h1 = document.getElementsByTagName('h1');

fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
    .then(response => response.json())
    .then(comment => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(users => {
                        h1[0].innerText = `Comment ${comment.name}`;
                        document.title = `Comment ${comment.name} | JS MP`;

                        const post = posts.find(post => post.id === comment.postId);
                        const user = users.find(user => user.id === post.userId);
                        const commentBlock = document.createElement('div');
                        commentBlock.classList.add('block');

                        const commentId = document.createElement('p');
                        const commentIdSpanO = document.createElement('span');
                        commentIdSpanO.classList.add('orange');
                        commentIdSpanO.innerText = `ID: `;
                        const commentIdSpanW = document.createElement('span');
                        commentIdSpanW.innerText = `${comment.id}`;
                        commentId.appendChild(commentIdSpanO);
                        commentId.appendChild(commentIdSpanW);
                        commentBlock.appendChild(commentId);

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
                        commentBodySpanO.innerText = `Comment: `;
                        const commentBodySpanW = document.createElement('span');
                        commentBodySpanW.classList.add('uppercase');
                        commentBodySpanW.innerText = `${comment.body}`;
                        commentBody.appendChild(commentBodySpanO);
                        commentBody.appendChild(commentBodySpanW);
                        commentBlock.appendChild(commentBody);

                        const commentPostId = document.createElement('p');
                        commentPostId.classList.add('flex');
                        const commentPostIdSpanO = document.createElement('span');
                        commentPostIdSpanO.classList.add('orange');
                        commentPostIdSpanO.innerText = `Post: `;
                        const commentPostLink = document.createElement('a');
                        commentPostLink.href = `post-details.html?id=${post.id}`;
                        const commentPostIdSpanW = document.createElement('button');
                        commentPostIdSpanW.innerText = `${post.title}`;
                        commentPostLink.appendChild(commentPostIdSpanW);
                        commentPostId.appendChild(commentPostIdSpanO);
                        commentPostId.appendChild(commentPostLink);
                        commentBlock.appendChild(commentPostId);

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
                        commentBlock.appendChild(userName);

                        container.appendChild(commentBlock);
                    });
            });
    });