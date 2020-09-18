const ui = require ('./ui');
const github = require ('./github');
const {client_id, client_secret}= require('./config.json')

const formulario = document.getElementById('userForm');
formulario.addEventListener('submit', (e)=>{
e.preventDefault();
const busqueda=document.getElementById('textSearch').value;
if (busqueda !== '') {
githubObj.buscarUsuario(busqueda)
.then(data => {
// Render Profile
ui.showProfile(data.datosUsrJson);
/*ui.showRepositories(data.repositorios);*/
});
}
});
