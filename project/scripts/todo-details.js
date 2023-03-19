const params = new URLSearchParams(window.location.search);
const todoId = params.get('id');
const container = document.getElementById('details-container');
const h1 = document.getElementsByTagName('h1');

fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then(response => response.json())
    .then(todo => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                h1[0].innerText = `Todo ${todo.title}`;
                document.title = `Todo ${todo.title} | JS MP`;

                const user = users.find(user => user.id === todo.userId);
                const todoBlock = document.createElement('div');
                todoBlock.classList.add('block');

                const todoId = document.createElement('p');
                const todoIdSpanO = document.createElement('span');
                todoIdSpanO.classList.add('orange');
                todoIdSpanO.innerText = `ID: `;
                const todoIdSpanW = document.createElement('span');
                todoIdSpanW.innerText = `${todo.id}`;
                todoId.appendChild(todoIdSpanO);
                todoId.appendChild(todoIdSpanW);
                todoBlock.appendChild(todoId);

                const todoCompleted = document.createElement('p');
                const todoCompletedSpanO = document.createElement('span');
                todoCompletedSpanO.classList.add('orange');
                todoCompletedSpanO.innerText = `Completed: `;
                const todoCompletedSpanW = document.createElement('span');
                todoCompletedSpanW.innerText = `${todo.completed}`;
                todoCompleted.appendChild(todoCompletedSpanO);
                todoCompleted.appendChild(todoCompletedSpanW);
                todoBlock.appendChild(todoCompleted);

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
                todoBlock.appendChild(userName);

                container.appendChild(todoBlock);
            });
    });