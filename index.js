function login() {
    window.location.href = "http://localhost:12784/auth/login"
}

fetch("http://localhost:12784/me", {
  credentials: "include"
})
.then(res => res.json())
.then(data => {
  data["guilds"].forEach(guild => {
    guildname = guild["name"] + " "
    document.getElementById("me").innerText += guildname
  });
});
