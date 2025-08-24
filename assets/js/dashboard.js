function signout() {
  fetch("http://localhost:12784/auth/logout", {
    method: "POST",
    credentials: "include",
  });
}

fetch(`${backendApiUrl}/me`, { credentials: "include" })
  .then((res) => res.json())
  .then((data) => {
    const avatarUrl = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`;
    document.getElementById("profile-picture").src = avatarUrl;
  });

fetch(`${backendApiUrl}/me/guilds?owner=true`, { credentials: "include" })
  .then((res) => res.json())
  .then((data) => {
    const sidebar = document.getElementById("sidebar");
    data.forEach((guild) => {
      ext = "png";
      if (guild.icon.startsWith("a_")) {
        ext = "gif";
      }
      const imgUrl = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${ext}`;
      sidebar.innerHTML += `<li class="nav-item mb-2"><a href="#" onclick="selectServer('${guild.id}')"><img src="${imgUrl}" class="sidebar-item" alt="${guild.name}" width="60" height="60""></a></li>`;
    });
  });

function selectServer(id) {
  fetch(`server.html`)
    .then((res) => res.text())
    .then((text) => {
      const main = document.querySelector("main");
      main.innerHTML = text;

      updateServer(id);
    });
}

function updateServer(id) {
  fetch(`${backendApiUrl}/me/guilds?owner=true&id=${id}`, {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      data = data[0]
      document.getElementById("server-name").innerText = data.name;
      document.getElementById("auto-mod")
    });
}
