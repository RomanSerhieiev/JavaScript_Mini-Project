const container = document.getElementById('container');

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(users => {
                        comments.forEach(comment => {
                            const post = posts.find(post => post.id === comment.postId);
                            const user = users.find(user => user.id === post.userId);
                            const commentBlock = document.createElement('div');
                            commentBlock.classList.add('block');

                            const commentId = document.createElement('p');
                            const commentIdSpanO = document.createElement('span');
                            commentIdSpanO.classList.add('orange');
                            commentIdSpanO.innerText = `Title: `;
                            const commentIdSpanW = document.createElement('span');
                            commentIdSpanW.innerText = `${comment.name}`;
                            commentId.appendChild(commentIdSpanO);
                            commentId.appendChild(commentIdSpanW);
                            commentBlock.appendChild(commentId);

                            const postId = document.createElement('p');
                            postId.classList.add('flex');
                            const postIdSpanO = document.createElement('span');
                            postIdSpanO.classList.add('orange');
                            postIdSpanO.innerText = `Post: `;
                            const postLink = document.createElement('a');
                            postLink.href = `post-details.html?id=${post.id}`;
                            const postIdSpanW = document.createElement('button');
                            postIdSpanW.innerText = `${post.title}`;
                            postLink.appendChild(postIdSpanW);
                            postId.appendChild(postIdSpanO);
                            postId.appendChild(postLink);
                            commentBlock.appendChild(postId);

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

                            const commentLink = document.createElement('a');
                            commentLink.href = `comment-details.html?id=${comment.id}`;

                            const btn = document.createElement('button');
                            btn.innerText = 'Details';

                            commentLink.appendChild(btn);
                            commentBlock.appendChild(commentLink);
                            container.appendChild(commentBlock);
                        });
                    });
            });
    });