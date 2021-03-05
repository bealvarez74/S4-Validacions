
//validació del formulari de cerca
	const form = document.getElementById('myFormSearch');
	
		function validateSearch() {		
			form.classList.remove('is-invalid');	
			let inputSearchtext = document.getElementById('inputSearch').value;
		if(inputSearchtext.length<3) {
			inputSearch=document.getElementById('inputSearch');
			inputSearch.classList.add("is-invalid");
			document.getElementById("errorSearch").textContent = "Mínim 3 caràcters";
		}
		}

	//validació del formulari de Login
  	const formLogin = document.getElementById('myFormLogin');
	
	  	function validateLogin() {
		//variables Login
			let acumErrores = 0;
			formLogin.classList.remove('is-invalid');
			let inputEmail = document.getElementById('inputEmail');
			let inputPassword = document.forms["myFormLogin"]["inputPassword"];
	
		//condicional del camp Email
		if(inputEmail.value == "") {
			inputEmail.classList.add("is-invalid");
			document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
			acumErrores ++;
		}else if(!validar_email(inputEmail.value)){
			inputEmail.classList.add("is-invalid");
			document.getElementById("errorEmail").textContent = "El email no cumple el formato";
			acumErrores ++;
		}
		//condicional del camp Password
		if(inputPassword.value == "") {
			inputPassword.classList.add("is-invalid");
			document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
			acumErrores ++;
		}else if(!validar_password(inputPassword.value)){
			inputPassword.classList.add("is-invalid");
			document.getElementById("errorPassword").textContent = "El password ha de tenir com a mínim un número, una majúscula i mínim 8 characters";
			acumErrores ++;
		}
		
		if (acumErrores > 0){
			return false;
		}else{
			return true;
		}
	 	}
	//validació del formulari de Registre
	const formRegistre = document.getElementById('myFormRegistre');
		function validateRegistre() {
			let acumErrores = 0;
			formRegistre.classList.remove('is-invalid');
			let inputEmailRegistre = document.getElementById('inputEmailRegistre');
			let inputPasswordRegistre = document.forms["myFormRegistre"]["inputPasswordRegistre"];
			let inputPasswordRegistreRepeat = document.forms["myFormRegistre"]["inputPasswordRegistreRepeat"];
	
		//Verificar camp Email
		if(inputEmailRegistre.value == "") {
			inputEmailRegistre.classList.add("is-invalid");
			document.getElementById("errorEmailRegistre").textContent = "El camp és obligatori";
			acumErrores ++;
		}else if(!validar_email(inputEmailRegistre.value)){
			inputEmailRegistre.classList.add("is-invalid");
			document.getElementById("errorEmailRegistre").textContent = "El camp és obligatori";
			acumErrores ++;
		}
		//Verificar camp Password
		if(inputPasswordRegistre.value == "") {
			inputPasswordRegistre.classList.add("is-invalid");
			document.getElementById("errorPasswordRegistre").textContent = "El camp és obligatori";
			acumErrores ++;
		}else if(!validar_password(inputPasswordRegistre.value)){
			inputPasswordRegistre.classList.add("is-invalid");
			document.getElementById("errorPasswordRegistre").textContent = "El password ha de tenir com a mínim un número, una majúscula i mínim 8 characters";
			acumErrores ++;
		}

		//Repetir camp Password
		if(inputPasswordRegistreRepeat.value !== inputPasswordRegistre.value) {
			inputPasswordRegistreRepeat.classList.add("is-invalid");
			document.getElementById("errorPasswordRegistreRepeat").textContent = "La contrasenya no coincideix";
			acumErrores ++;
		}

		//Verificar ciutat
		if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "La ciutat és obligatoria";
		acumErrores ++;
	}
		
		if (acumErrores > 0){
			return false;
		}else{
			return true;
		}
	}

	form.addEventListener('blur', (event) => {
		console.log(event);
		if(event.target.value!='') event.target.classList.remove('is-invalid');
	}, true);

	formLogin.addEventListener('blur', (event) => {
		console.log(event);
		if(event.target.value!='') event.target.classList.remove('is-invalid');
	}, true);

	formRegistre.addEventListener('blur', (event) => {
		console.log(event);
		if(event.target.value!='') event.target.classList.remove('is-invalid');
	}, true);

	function validar_email(email) {
		var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email) ? true : false;
	}


	function validar_password(password) {
		var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
		return regex.test(password) ? true : false;
	}


