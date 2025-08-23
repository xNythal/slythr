function login() {
  window.location.href = "http://localhost:12784/auth/login";
}

function dashboard() {
  window.location.href = "dashboard.html"
}

fetch("http://localhost:12784/me/guilds?owner=true", {
  credentials: "include",
})
  .then((res) => res.json())
  .then((data) => {
    data.forEach((guild) => {
      guildname = guild["name"] + " ";
      document.getElementById("me").innerText += guildname;
    });
  });