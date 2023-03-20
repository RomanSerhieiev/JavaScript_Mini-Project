const params = new URLSearchParams(window.location.search);
const userId = params.get('id');
const container = document.getElementById('details-container');
const h1 = document.getElementsByTagName('h1');

Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`).then(response => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(response => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`).then(response => response.json())
])
    .then(([user, albums, posts, todos]) => {
        h1[0].innerText = `User ${user.name}`;
        document.title = `User ${user.name} | JS MP`;

        const userBlock = document.createElement('div');
        userBlock.classList.add('block');

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

        const userUserName = document.createElement('p');
        const userUserNameSpanO = document.createElement('span');
        userUserNameSpanO.classList.add('orange');
        userUserNameSpanO.innerText = `Username: `;
        const userUserNameSpanW = document.createElement('span');
        userUserNameSpanW.innerText = `${user.username}`;
        userUserName.appendChild(userUserNameSpanO);
        userUserName.appendChild(userUserNameSpanW);
        userBlock.appendChild(userUserName);

        const userEmail = document.createElement('p');
        const userEmailSpanO = document.createElement('span');
        userEmailSpanO.classList.add('orange');
        userEmailSpanO.innerText = `E-mail: `;
        const userEmailSpanW = document.createElement('span');
        userEmailSpanW.innerText = `${user.email}`;
        userEmail.appendChild(userEmailSpanO);
        userEmail.appendChild(userEmailSpanW);
        userBlock.appendChild(userEmail);

        const userAddress = document.createElement('p');
        const userAddressSpanO = document.createElement('span');
        userAddressSpanO.classList.add('orange');
        userAddressSpanO.innerText = `Address:`;
        userAddress.appendChild(userAddressSpanO);
        userBlock.appendChild(userAddress);

        const userAddressStreet = document.createElement('p');
        userAddressStreet.classList.add('address');
        const userAddressStreetSpanO = document.createElement('span');
        userAddressStreetSpanO.classList.add('orange');
        userAddressStreetSpanO.innerText = `Street: `;
        const userAddressStreetSpanW = document.createElement('span');
        userAddressStreetSpanW.innerText = `${user.address.street}`;
        userAddressStreet.appendChild(userAddressStreetSpanO);
        userAddressStreet.appendChild(userAddressStreetSpanW);
        userBlock.appendChild(userAddressStreet);

        const userAddressSuite = document.createElement('p');
        userAddressSuite.classList.add('address');
        const userAddressSuiteSpanO = document.createElement('span');
        userAddressSuiteSpanO.classList.add('orange');
        userAddressSuiteSpanO.innerText = `Suit: `;
        const userAddressSuiteSpanW = document.createElement('span');
        userAddressSuiteSpanW.innerText = `${user.address.suite}`;
        userAddressSuite.appendChild(userAddressSuiteSpanO);
        userAddressSuite.appendChild(userAddressSuiteSpanW);
        userBlock.appendChild(userAddressSuite);

        const userAddressCity = document.createElement('p');
        userAddressCity.classList.add('address');
        const userAddressCitySpanO = document.createElement('span');
        userAddressCitySpanO.classList.add('orange');
        userAddressCitySpanO.innerText = `City: `;
        const userAddressCitySpanW = document.createElement('span');
        userAddressCitySpanW.innerText = `${user.address.city}`;
        userAddressCity.appendChild(userAddressCitySpanO);
        userAddressCity.appendChild(userAddressCitySpanW);
        userBlock.appendChild(userAddressCity);

        const userAddressZipcode = document.createElement('p');
        userAddressZipcode.classList.add('address');
        const userAddressZipcodeSpanO = document.createElement('span');
        userAddressZipcodeSpanO.classList.add('orange');
        userAddressZipcodeSpanO.innerText = `Zipcode: `;
        const userAddressZipcodeSpanW = document.createElement('span');
        userAddressZipcodeSpanW.innerText = `${user.address.zipcode}`;
        userAddressZipcode.appendChild(userAddressZipcodeSpanO);
        userAddressZipcode.appendChild(userAddressZipcodeSpanW);
        userBlock.appendChild(userAddressZipcode);

        const userAddressGeo = document.createElement('p');
        userAddressGeo.classList.add('address');
        const userAddressGeoSpanO = document.createElement('span');
        userAddressGeoSpanO.classList.add('orange');
        userAddressGeoSpanO.innerText = `Geo:`;
        userAddressGeo.appendChild(userAddressGeoSpanO);
        userBlock.appendChild(userAddressGeo);

        const userAddressGeoLat = document.createElement('p');
        userAddressGeoLat.classList.add('geo');
        const userAddressGeoLatSpanO = document.createElement('span');
        userAddressGeoLatSpanO.classList.add('orange');
        userAddressGeoLatSpanO.innerText = `Lat: `;
        const userAddressGeoLatSpanW = document.createElement('span');
        userAddressGeoLatSpanW.innerText = `${user.address.geo.lat}`;
        userAddressGeoLat.appendChild(userAddressGeoLatSpanO);
        userAddressGeoLat.appendChild(userAddressGeoLatSpanW);
        userBlock.appendChild(userAddressGeoLat);

        const userAddressGeoLng = document.createElement('p');
        userAddressGeoLng.classList.add('geo');
        const userAddressGeoLngSpanO = document.createElement('span');
        userAddressGeoLngSpanO.classList.add('orange');
        userAddressGeoLngSpanO.innerText = `Lng: `;
        const userAddressGeoLngSpanW = document.createElement('span');
        userAddressGeoLngSpanW.innerText = `${user.address.geo.lng}`;
        userAddressGeoLng.appendChild(userAddressGeoLngSpanO);
        userAddressGeoLng.appendChild(userAddressGeoLngSpanW);
        userBlock.appendChild(userAddressGeoLng);

        const userPhone = document.createElement('p');
        const userPhoneSpanO = document.createElement('span');
        userPhoneSpanO.classList.add('orange');
        userPhoneSpanO.innerText = `Phone: `;
        const userPhoneSpanW = document.createElement('span');
        userPhoneSpanW.innerText = `${user.phone}`;
        userPhone.appendChild(userPhoneSpanO);
        userPhone.appendChild(userPhoneSpanW);
        userBlock.appendChild(userPhone);

        const userWebsite = document.createElement('p');
        const userWebsiteSpanO = document.createElement('span');
        userWebsiteSpanO.classList.add('orange');
        userWebsiteSpanO.innerText = `Website: `;
        const userWebsiteSpanW = document.createElement('span');
        userWebsiteSpanW.innerText = `${user.website}`;
        userWebsite.appendChild(userWebsiteSpanO);
        userWebsite.appendChild(userWebsiteSpanW);
        userBlock.appendChild(userWebsite);

        const userCompany = document.createElement('p');
        const userCompanySpanO = document.createElement('span');
        userCompanySpanO.classList.add('orange');
        userCompanySpanO.innerText = `Company:`;
        userCompany.appendChild(userCompanySpanO);
        userBlock.appendChild(userCompany);

        const userCompanyName = document.createElement('p');
        userCompanyName.classList.add('company');
        const userCompanyNameSpanO = document.createElement('span');
        userCompanyNameSpanO.classList.add('orange');
        userCompanyNameSpanO.innerText = `Name: `;
        const userCompanyNameSpanW = document.createElement('span');
        userCompanyNameSpanW.innerText = `${user.company.name}`;
        userCompanyName.appendChild(userCompanyNameSpanO);
        userCompanyName.appendChild(userCompanyNameSpanW);
        userBlock.appendChild(userCompanyName);

        const userCompanyCatchPhrase = document.createElement('p');
        userCompanyCatchPhrase.classList.add('company');
        const userCompanyCatchPhraseSpanO = document.createElement('span');
        userCompanyCatchPhraseSpanO.classList.add('orange');
        userCompanyCatchPhraseSpanO.innerText = `Catch phrase: `;
        const userCompanyCatchPhraseSpanW = document.createElement('span');
        userCompanyCatchPhraseSpanW.innerText = `${user.company.catchPhrase}`;
        userCompanyCatchPhrase.appendChild(userCompanyCatchPhraseSpanO);
        userCompanyCatchPhrase.appendChild(userCompanyCatchPhraseSpanW);
        userBlock.appendChild(userCompanyCatchPhrase);

        const userCompanyBs = document.createElement('p');
        userCompanyBs.classList.add('company');
        const userCompanyBsSpanO = document.createElement('span');
        userCompanyBsSpanO.classList.add('orange');
        userCompanyBsSpanO.innerText = `BS: `;
        const userCompanyBsSpanW = document.createElement('span');
        userCompanyBsSpanW.innerText = `${user.company.bs}`;
        userCompanyBs.appendChild(userCompanyBsSpanO);
        userCompanyBs.appendChild(userCompanyBsSpanW);
        userBlock.appendChild(userCompanyBs);

        const albumsBtn = document.createElement('button');
        albumsBtn.innerText = `Show albums`;
        albumsBtn.onclick = function () {
            const commentBlock = document.querySelectorAll(".album-block");
            for (const commentBlockElement of commentBlock) {
                commentBlockElement.classList.toggle("flex-block");
            }
            if (albumsBtn.innerText === `Show albums`) {
                albumsBtn.innerText = `Hide albums`;
            } else {
                albumsBtn.innerText = `Show albums`;
            }
        };

        const postsBtn = document.createElement('button');
        postsBtn.innerText = `Show posts`;
        postsBtn.onclick = function () {
            const commentBlock = document.querySelectorAll(".post-block");
            for (const commentBlockElement of commentBlock) {
                commentBlockElement.classList.toggle("flex-block");
            }
            if (postsBtn.innerText === `Show posts`) {
                postsBtn.innerText = `Hide posts`;
            } else {
                postsBtn.innerText = `Show posts`;
            }
        };

        const todosBtn = document.createElement('button');
        todosBtn.innerText = `Show todos`;
        todosBtn.onclick = function () {
            const commentBlock = document.querySelectorAll(".todo-block");
            for (const commentBlockElement of commentBlock) {
                commentBlockElement.classList.toggle("flex-block");
            }
            if (todosBtn.innerText === `Show todos`) {
                todosBtn.innerText = `Hide todos`;
            } else {
                todosBtn.innerText = `Show todos`;
            }
        };

        userBlock.appendChild(albumsBtn);
        userBlock.appendChild(postsBtn);
        userBlock.appendChild(todosBtn);
        container.appendChild(userBlock);

        albums.forEach(album => {
            const albumBlock = document.createElement('div');
            albumBlock.classList.add('album-block');

            const albumTitle = document.createElement('p');
            const albumTitleSpanO = document.createElement('span');
            albumTitleSpanO.classList.add('orange');
            albumTitleSpanO.innerText = `Album: `;
            const postTitleSpanW = document.createElement('span');
            postTitleSpanW.innerText = `${album.title}`;
            albumTitle.appendChild(albumTitleSpanO);
            albumTitle.appendChild(postTitleSpanW);
            albumBlock.appendChild(albumTitle);

            const albumLink = document.createElement('a');
            albumLink.href = `album-details.html?id=${album.id}`;

            const btn = document.createElement('button');
            btn.innerText = 'Details';

            albumLink.appendChild(btn);
            albumBlock.appendChild(albumLink);
            container.appendChild(albumBlock);
        });

        posts.forEach(post => {
            const postBlock = document.createElement('div');
            postBlock.classList.add('post-block');

            const postTitle = document.createElement('p');
            const postTitleSpanO = document.createElement('span');
            postTitleSpanO.classList.add('orange');
            postTitleSpanO.innerText = `Post: `;
            const postTitleSpanW = document.createElement('span');
            postTitleSpanW.innerText = `${post.title}`;
            postTitle.appendChild(postTitleSpanO);
            postTitle.appendChild(postTitleSpanW);
            postBlock.appendChild(postTitle);

            const postLink = document.createElement('a');
            postLink.href = `post-details.html?id=${post.id}`;

            const btn = document.createElement('button');
            btn.innerText = 'Details';

            postLink.appendChild(btn);
            postBlock.appendChild(postLink);
            container.appendChild(postBlock);
        });

        todos.forEach(todo => {
            const todoBlock = document.createElement('div');
            todoBlock.classList.add('todo-block');

            const todoTitle = document.createElement('p');
            const todoTitleSpanO = document.createElement('span');
            todoTitleSpanO.classList.add('orange');
            todoTitleSpanO.innerText = `Todo: `;
            const todoTitleSpanW = document.createElement('span');
            todoTitleSpanW.innerText = `${todo.title}`;
            todoTitle.appendChild(todoTitleSpanO);
            todoTitle.appendChild(todoTitleSpanW);
            todoBlock.appendChild(todoTitle);

            const todoLink = document.createElement('a');
            todoLink.href = `todo-details.html?id=${todo.id}`;

            const btn = document.createElement('button');
            btn.innerText = 'Details';

            todoLink.appendChild(btn);
            todoBlock.appendChild(todoLink);
            container.appendChild(todoBlock);
        });
    });