var buttonType=document.getElementById("button")
	button.addEventListener("click", function(){
		var inputType=document.getElementById("inputType").value
		if(inputType==''){
			swal("Error!", "You clicked the button!", "error");
		}
		else{
			swal("success!", "congration!", "success");
		}
	})