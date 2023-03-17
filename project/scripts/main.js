const container = document.getElementById('index-container');
const userH1 = document.createElement('h1');
userH1.innerText = `Users`;
container.appendChild(userH1);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block');

            const userId = document.createElement('p');
            const userIdSpanO = document.createElement('span');
            userIdSpanO.classList.add('orange');
            userIdSpanO.innerText = `ID: `;
            const userIdSpanW = document.createElement('span');
            userIdSpanW.innerText = `${user.id}`;
            userId.appendChild(userIdSpanO);
            userId.appendChild(userIdSpanW);
            userBlock.appendChild(userId);

            const userName = document.createElement('p');
            const userNameSpanO = document.createElement('span');
            userNameSpanO.classList.add('orange');
            userNameSpanO.innerText = `Name: `;
            const userNameSpanW = document.createElement('span');
            userNameSpanW.innerText = `${user.name}`;
            userName.appendChild(userNameSpanO);
            userName.appendChild(userNameSpanW);
            userBlock.appendChild(userName);

            const userLink = document.createElement('a');
            userLink.href = `user-details.html?id=${user.id}`;

            const btn = document.createElement('button');
            btn.innerText = 'Details';

            userLink.appendChild(btn);
            userBlock.appendChild(userLink);
            container.appendChild(userBlock);
        });
    });