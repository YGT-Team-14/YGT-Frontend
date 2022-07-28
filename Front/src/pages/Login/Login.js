// import data from '../../db.json';

// document.querySelector('.GoMainBtn').addEventListener('click', () => {
// 	const id = 'admin';
// 	const password = '1234';
// 	if (id == document.querySelector('#ID').value) {
// 		if (password == document.querySelector('#PW').value) {
// 			alert('환영합니다!');
// 			//document.write("환영합니다!");
// 		} else {
// 			alert('비밀번호가 맞지 않습니다.');
// 			//document.write("비밀번호가 맞지 않습니다.");
// 		}
// 	} else {
// 		alert('아이디 혹은 비밀번호가 맞지 않습니다.');
// 		//document.wrtie("아이디 혹은 비밀번호가 맞지 않습니다.");
// 	}
// });

import axios from '../../../node_modules/axios/dist/axios.min.js';

const getUsers = () => {
	axios.get(`http://localhost:8888/users`).then(res => {
		console.log(res.data);
	});
};
document.querySelector('.GoMainBtn').addEventListener('click', () => {
	getUsers();
});
