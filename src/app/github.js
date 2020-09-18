/*github.js*/
class Github{
    constructor(clientId, clientSecret){
    this.client_id=clientId;
    this.client_secret=clientSecret;
    }
    async buscarrUsuario(user){
    const datosUsuario= await
    fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const datosUsrJson= await datosUsuario.json();
    console.log(datosUsrJson);
    return datosUsrJson;
    }
    }
    module.exports = Github; 

    /*ui.js*/
class UI {
    constructor() {
    this.profile = document.getElementById('profile');
    }
    showProfile(user) {
    this.profile.innerHTML = `
    <div class="card mt-2 animated bounceInLeft">
    <img src="${user.avatar_url}" class="card-img-top"/>
    <div class="card-body">
    <h3 class="card-title">${user.name} / ${user.login}</h3>
    <a href="${user.html_url}" class="btn btn-primary btn-block">
    View Profile
    </a>
    <span class="badge badge-success">
    followers: ${user.followers}
    </span>
    <span class="badge badge-primary">
    following: ${user.following}
    </span>
    <span class="badge badge-warning">
    company: ${user.company}
    </span>
    <span class="badge badge-info d-block">
    blog: ${user.blog}
    </span>
    </div>
    </div>
    `;
    this.clearMessage();
    }
    }
    module.exports = UI;