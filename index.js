function login() {
    window.location.href = "http://localhost:12784/auth/login"
}

fetch("http://localhost:12784/me/guilds", {
  credentials: "include"
})
.then(res => res.json())
.then(data => {
 for (let index = 0; index < data.length; index++) {
  const guild = array[index];
  guildname = guild["name"] + " "
    document.getElementById("me").innerText += guildname
 }
    
});
