

 const btn = document.querySelector(".searchbtn");
 const userName = document.querySelector(".usergit");
 const userLink = document.querySelector(".usernamegit");
let userData;

const joined = document.querySelector(".dategit");
const repo = document.querySelector(".reponumber");
const follower = document.querySelector(".folloernumber");
const followings = document.querySelector(".followingnumber");

const locations = document.querySelector(".locations");
const twitter = document.querySelector(".twitter");
const websites = document.querySelector(".websites");
const agithub = document.querySelector(".agithub");
const gitBio = document.querySelector(".gitbio");




let img = document.createElement("img");
let block = document.querySelector(".imgelement");



btn.addEventListener("click", function () {
    const usernameInput = document.getElementById("usernameInput");
    const username = usernameInput.value;

   getUser(username);

  });
  

  async function getUser(username){

    const apiUrl = `https://api.github.com/users/${username}`;
  
    const response = await fetch(apiUrl);
    userData = await response.json();
  
   console.log(userData);


    displayData();
    } 


  function displayData()
  {
    userName.innerHTML = userData.name;
    userLink.innerHTML = userData.login;
    joined.innerHTML = userData.userData;
    repo.innerHTML = userData.public_repos;
    follower.innerHTML = userData.followers;
    followings.innerHTML = userData.following;

    
    img.src = userData.avatar_url;
    block.appendChild(img);
    block.style.border = "none";


    const createdAt = new Date(userData.created_at);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = createdAt.toLocaleDateString(undefined, options);

    joined.innerHTML = `Joined ${formattedDate}`;

    
    if (userData.bio === "" || userData.bio === null) {
      gitBio.innerHTML = "This profile has no bio...";
  } else {
      gitBio.innerHTML = userData.bio;
  }
  

    if (userData.location === "" || userData.location === null) {
        locations.innerHTML = "No Location";
    } else {
        locations.innerHTML = userData.location;
    }
    
    if (userData.twitter_username === "" || userData.twitter_username === null) {
        twitter.innerHTML = "No Twitter";
    } else {
        twitter.innerHTML = userData.twitter_username;
    }
    
    if (userData.blog === "" || userData.blog === null) {
        websites.innerHTML = "No Website";
    } else {
        websites.innerHTML = userData.blog;
    }
    
    if (userData.agithub === "" || userData.agithub === null) {
        agithub.innerHTML = "No Company";
    } else {
        agithub.innerHTML = userData.agithub;
    }
    


  }


