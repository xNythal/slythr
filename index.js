function login() {
  window.location.href = "http://localhost:12784/auth/login";
}
function logout() {
  window.location.href = "http://localhost:12784/auth/logout";
}

fetch("http://localhost:12784/me/guilds", {
  credentials: "include",
})
  .then((res) => res.json())
  .then((data) => {
    data.forEach((guild) => {
      guildname = guild["name"] + " ";
      document.getElementById("me").innerText += guildname;
    });
  });
