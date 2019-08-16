// localStorage for user data "userData"
class ussers{
	constructor(User, fullName, email, password, repass){
		this.User= User;
		this.fullName= fullName;
		this.email= email;
		this.password= password;
		this.repass = repass;
		this.privileges= 0;
		this.logged= false;
	}
};

class logInTry{
	constructor(user, pass){
		this.logData = user;
		this.password= pass;
	}
};

class loggedNow{
	constructor(user, logged){
		user=user;
		logged=logged;
	}
};

var userData = JSON.parse(localStorage.getItem('userData')) || [];
var userLogged = new loggedNow("observer", false);

    //	para borrar la base de datos(cuidado)
	//	userData.splice(0,2);
	//	localStorage.setItem('userData',JSON.stringify(userData));

function createUser(){

	let tempuserdata = new ussers(document.getElementById('regUsername').value, 
		document.getElementById('regFullName').value,
		document.getElementById('regEmail').value,
		document.getElementById('regPassword').value,
		document.getElementById('regRepass').value);


	//{

	//	User: document.getElementById('regUsername').value,
	//	fullName: document.getElementById('regFullName').value,
	//	email: document.getElementById('regEmail').value,
	//	password: document.getElementById('regPassword').value,
	//	repass: document.getElementById('regRepass').value,
	//	privileges: 0,
	//	logged: false
	//};
	
	if(tempuserdata.password != tempuserdata.repass){
		alert("Password dont match, try again.");		
		document.getElementById('passform').reset();
		return;
	}
	//document.getElementById('rerForm').reset();
	userData.push(tempuserdata);
	localStorage.setItem('userData',JSON.stringify(userData));

}

function loginUser(){

		let tempuserdata = new logInTry(document.getElementById('userLog').value,
										document.getElementById('userPass').value);
			
		
		let flag = true;
		userData.forEach(function (element , index){
				if (element.User == tempuserdata.logData || element.email == tempuserdata.logData){
						
						if (element.password == tempuserdata.password) {
							element.logged = true;
							alert("Succes");
							flag=false;
							userLogIn(element)
							userLogged.User = element.User; 
							userLogged.logged = true;

							localStorage.setItem('userData',JSON.stringify(userData));
							userData = JSON.parse(localStorage.getItem('userData')) || [];

							return;
						}

					}
				
				
			})
		if (flag) {
			alert("Datas dont match, try again");
		}
}

function logout(){

	userData.forEach(function (element , i){
	
		if(userLogged.User == element.User ) {
			
			userLogged.User= "observer";
			element.logged= false;
			userLogged.logged = false;
			localStorage.setItem('userData',JSON.stringify(userData));
			userData = JSON.parse(localStorage.getItem('userData')) || [];
			userLogOut();

			return;

		}

	})

}

let comments = JSON.parse(localStorage.getItem('saveComment')) || [];

let commentSection = document.getElementById('commentSection');


function clearandshow(){
	userData.forEach(function(element,i){
		if(element.logged){
			userLogIn(element)
			
							
		}
	})
    commentSection.innerHTML ='';
    comments.forEach(showComments);
    document.getElementById('textareaComment').value = '';
}


function showComments(elemento, i){
    commentSection.innerHTML += `<div class="col-8 border border-dark my-3 bg-light">
    <div class="text-right border-bottom row justify-content-end">
        <p class="col-2">Usuario</p>
        <div class="btn-group dropright col-2">
            <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu">
                <div class="mx-3 border mb-1 border btn btn-light w-75" onclick="" >Edit</div>
                <div class="mx-3 border mb-1 border btn btn-light w-75" onclick="deletComment(${i})" >Delet</div>
                <div class="mx-3 border mb-1 border btn btn-light w-75" onclick="" >Share</div>
            </div>
        </div>
    </div>
    <p>${elemento.texto}</p>
    <div class=" row justify-content-end ">
        <div><i class="far fa-arrow-alt-circle-up"></i></div>
        <div onclick=""><i class="far fa-thumbs-up ml-2"></i></div>
        <div> <i class="far fa-thumbs-down mr-2"></i></div>
    </div>
</div>`
}

function buttonComment(){
  let newComment = {
      texto: document.getElementById('textareaComment').value
  };
   
  comments.unshift(newComment);
  clearandshow()
  localStorage.setItem('saveComment', JSON.stringify(comments));
}


function deletComment(elemetn){
    comments.splice(elemetn, 1);
    localStorage.setItem('saveComment', JSON.stringify(comments));
    clearandshow();
  
}
function likeDislike(elemet){
    
}

function userLogIn(element){
	document.getElementById("profile").className = "mx-5";

	document.getElementById("profile").innerHTML ="Bienvenido: "+ element.User;
	document.getElementById("mkComent").className = "my-5";
	document.getElementById("buttonLogin").className = "d-none";
	document.getElementById("buttonLogoout").className = "d-block btn btn-primary";

}

function userLogOut(){
	document.getElementById("profile").className = "d-none";
	document.getElementById("profile").innerHTML ="";
	document.getElementById("mkComent").className = "d-node";
	document.getElementById("buttonLogin").className = "";
	document.getElementById("buttonLogoout").className = "d-none";

}

clearandshow();