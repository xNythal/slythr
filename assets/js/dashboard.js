function signout() {
  fetch("http://localhost:12784/auth/logout", {method: "POST", credentials: "include"})
}

fetch("http://localhost:12784/me", {
  credentials: "include",
})
  .then((res) => res.json())
  .then((data) => {
    const avatarUrl = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`
    document.getElementById("profile-picture").src = avatarUrl
    document.getElementById("display-name").innerText = data.global_name
  });