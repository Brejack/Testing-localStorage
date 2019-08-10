// localStorage for user data "userData"
var userData = JSON.parse(localStorage.getItem('userData')) || [];

    //	para borrar la base de datos(cuidado)
	//	userData.splice(0,2);
	//	localStorage.setItem('userData',JSON.stringify(userData));

function createUser(){

	let tempuserdata = {

		User: document.getElementById('regUsername').value,
		fullName: document.getElementById('regFullName').value,
		email: document.getElementById('regEmail').value,
		password: document.getElementById('regPassword').value,
		repass: document.getElementById('regRepass').value,
		privileges: 0,
		logged: false
	};
	
	if(tempuserdata.password != tempuserdata.repass){
		alert("Password dont match, try again.");		
		document.getElementById('passform').reset();
		return;
	}
	//document.getElementById('rerForm').reset();
	console.log(tempuserdata.email);
	userData.push(tempuserdata);
	localStorage.setItem('userData',JSON.stringify(userData));

}

function loginUser(){

		let tempuserdata = {
			logData: document.getElementById('userLog').value,
			password: document.getElementById('userPass').value
		}
		let flag = true;
		userData.forEach(function (element , index){
				if (element.User == tempuserdata.logData || element.email == tempuserdata.logData){
						
						if (element.password == tempuserdata.password) {
							element.logged = true;
							alert("Succes");
							flag=false;
							return;
						}

					}
				
				
			})
		if (flag) {
			alert("Datas dont match, try again");
		}
}

function showDisplay(){

}


showDisplay(){
	
}