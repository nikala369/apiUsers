

// Try Display

function onLoad() {
 const params = new URLSearchParams(window.location.search)


 for (const param of params) {
     console.log(param)

     let element = document.getElementById(param[0])
     if (element) {
         document.getElementById(param[0]).innerHTML = `
         <img class="user-image" src="${param[1]}"/>
         `
         document.getElementById('name').innerHTML = `
         <h2><a target="_blank" href="https:/www.github.com/${param[1]}"> ${param[1]}</a></h2>
         `

         document.getElementById('type').innerHTML = `
         <p>${param[1]}</p>
         `



     } 

     if (data.login === undefined) {
         document.getElementById("result-img").innerHTML = `
<h1>User Not Found</h1>
<div class="button-back-control">
<button onclick="window.location.href='index.html'" type="button" class="button-back" >Back</button>
</div>
`
         // Else display avatar, name and type
     } else {
         if (data.type === "User") {
             document.getElementById("result-img").innerHTML = `

<h2><a target="_blank" href="https:/www.github.com/${nameSpace}"> ${data.name}</a></h2>
<p>${data.type}</p>
<h3>No Organizations</h3>
`
         } else {
             document.getElementById("result-img").innerHTML = `
<img class="user-image" src="${data.avatar_url}"/>
<h2><a target="_blank" href="https:/www.github.com/${nameSpace}"> ${data.login}</a></h2>
`
             li.innerHTML = (`<a href="https://api.github.com/users/${nameSpace}/repos"><p><strong>Organization Repos</strong></p></a>`);
             ul.appendChild(li);
         }
     }

     // if(param[0]=='login'){
     //     param[1]
     //     debugger
     //     document.getElementById('test').innerHTML=param[1]
     // }

 }


}

onLoad()
