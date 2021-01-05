
function startSearchUsers() {
	mainEngine();
	topUsersFetch();
};

startSearchUsers();

// Getting main form Search engine 
function mainEngine() {
	const gitHubForm = document.getElementById("myForm");
	if (gitHubForm) {
		gitHubForm.addEventListener('submit', (e) => {
			// window.location.href = "user.html";
			e.preventDefault();

			let search = document.getElementById("search").value;
			// When space words in search they will Join for result
			let nameSpace = search.split(' ').join('');

			document.getElementById("result-img").innerHTML = "";
			document.getElementById("result-user").innerHTML = "";

			// Fetching from gitHub API avatar, name and type
			fetch("https://api.github.com/users/" + nameSpace)
				.then(response => response.json())
				.then(data => {

					// Sending user info to another html page

					/*
					var queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
					queryString='user.html?'+queryString

					window.location.href = queryString
     */

					// if undefined then user not found ! 
					if (data.login === undefined) {
						document.getElementById("result-img").innerHTML = `
      <h1>User Not Found</h1>
      <div class="button-back-control">
        <button onclick="window.location.href='index.html'" type="button" class="button-back" >Refresh</button>
      </div>
							`
							document.getElementById("control-user-info").style.height = "160px";
						// Else display avatar, name and type
					} else {
						if (data.type === "User") {
							document.getElementById("result-img").innerHTML = `
      <img class="user-image" src="${data.avatar_url}"/>
      <h2><a target="_blank" href="https:/www.github.com/${nameSpace}"> ${data.name}</a></h2>
      <p>${data.type}</p>
      <h3>No Organizations</h3>
						`
						document.getElementById("control-user-info").style.height = "580px";
						} else {
							document.getElementById("result-img").innerHTML = `
        <img class="user-image" src="${data.avatar_url}"/>
        <h2><a target="_blank" href="https:/www.github.com/${nameSpace}"> ${data.login}</a></h2>
         `
							li.innerHTML = (`<a href="https://api.github.com/users/${nameSpace}/repos"><p><strong>Organization Repos</strong></p></a>`);
							ul.appendChild(li);
						document.getElementById("control-user-info").style.height = "300px";
						}
					}

				}).catch(error => {
					console.log(error);
				})

			fetch(`https://api.github.com/users/${nameSpace}/repos`)
				.then(response => response.json())
				.then(data => {
					for (let i = 0; i < data.length; i++) {
						if (i === 3) {
							break;
						}
						let ul = document.getElementById("result-user");
						let li = document.createElement('li');

						li.classList.add('list-group-item');

						li.innerHTML = (`
    <p><strong>Repo:</strong> ${data[i].name}</p>
    `);

						ul.appendChild(li);

					}
				})

		})
	}
};

function visible() {
	// window.location.href = "user.html";  Cant send data with window
	document.getElementById("control-user-info").style.display = "block";
}


// Most popular users  in gitHub

    async function topUsersFetch() {
      const dataForUsers = ["torvalds", "yyx990803", "ruanyf", "gaearon", "JakeWharton", "tj", "sindresorhus", "addyosmani", "llSourcell", "bradtraversy"];

      const topUsersUrl = "https://api.github.com/search/users\?q\=followers:\>1000\&page\=1\&per_page\=10\&sort\=followers\&order\=desc" + "https://api.github.com/user";
      const response = await fetch(topUsersUrl);
      const data = await response.json();
      return data;
    }

    topUsersFetch().then(data => {
      console.log(data);

      const html = data.items.map(user => {
				return `
    <div class="top-user-div">
     <img class="img-top-users" src="${user.avatar_url}" alt="Users avatars" />
     <p class="pg-top-users" ><strong>Login: </strong>${user.login}</p> 
     <p class="pg-top-users"><strong>Type:</strong> ${user.type} </p>
         
    </div>
    `

			}).join('');
			document.querySelector('#api-popular-users').insertAdjacentHTML("afterbegin", html);

    })
    .catch(error => {
			console.log(error);
    });

/*
		// Grid View and List View
		let toggleButton = document.getElementById("toggle");
		toggleButton.addEventListener('click', gridView());
		let userDiv = document.getElementsByClassName("top-user-div");
	

		  

		function gridView() {
			 for (let i = 0; i < userDiv.length; i++) {
     userDiv[i].style.width = "50%";
    }
		}

		function listView() {
			for (let i = 0; i < userDiv.length; i++) {
     userDiv[i].style.width = "50%";
    }
		}
*/
		
 	

/*
	async function fetchTopUsersInfo() {
	  const response = await fetch("");
	  const topUsersInfo = await response.json();
	  return topUsersInfo;
	}

	fetchTopUsersInfo().then(topUsersInfo => {
	  topUsersInfo;
	})

	.catch(error => {
	  console.log(error);
	});   
*/
	

