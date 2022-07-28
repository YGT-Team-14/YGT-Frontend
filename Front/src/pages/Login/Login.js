import db from '../../db.json';

document.getElementById('LoginContainer').onsubmit = function () {
	var inputID = this.id.value;
	var inputPW = this.pw.value;
	db.users.map(user => user.id == inputID);
};
