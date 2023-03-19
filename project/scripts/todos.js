const container = document.getElementById('container');

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                todos.forEach(todo => {
                    const user = users.find(user => user.id === todo.userId);
                    const todoBlock = document.createElement('div');
                    todoBlock.classList.add('block');

                    const todoId = document.createElement('p');
                    const todoIdSpanO = document.createElement('span');
                    todoIdSpanO.classList.add('orange');
                    todoIdSpanO.innerText = `Title: `;
                    const todoIdSpanW = document.createElement('span');
                    todoIdSpanW.innerText = `${todo.title}`;
                    todoId.appendChild(todoIdSpanO);
                    todoId.appendChild(todoIdSpanW);
                    todoBlock.appendChild(todoId);

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
                    todoBlock.appendChild(userName);

                    const todoLink = document.createElement('a');
                    todoLink.href = `todo-details.html?id=${todo.id}`;

                    const btn = document.createElement('button');
                    btn.innerText = 'Details';

                    todoLink.appendChild(btn);
                    todoBlock.appendChild(todoLink);
                    container.appendChild(todoBlock);
                });
            });
    });