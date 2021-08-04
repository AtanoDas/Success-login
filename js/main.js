/*Header js____*/

window.addEventListener("scroll", function(){
  var header =document.querySelector("header");
  heade.classList.toggle("sticky",window.scrollY > 0);
})



/*eye button js*/

var state = false;

function toggle(){
  if(state){
    document.getElementById("password").setAttribute("type","password");
    document.getElementById("eye-img").src="img/icons8-invisible-96.png";
    state = false;
  }
  else{
    document.getElementById("password").setAttribute("type","text");
    document.getElementById("eye-img").src="img/icons8-eye-96.png";

    state = true;


  }
}

var state = false;

function toggle2(){
  if(state){
    document.getElementById("password").setAttribute("type","password");
    document.getElementById("eye-img").src="../img/icons8-invisible-96.png";
    state = false;
  }
  else{
    document.getElementById("password").setAttribute("type","text");
    document.getElementById("eye-img").src="../img/icons8-eye-96.png";

    state = true;


  }
}

 

/*Remember icon js*/
  var remember = document.getElementById('rememberid');

 remember.addEventListener('click', function(remember){
 	remember.target.classList.toggle('on-remember');



 	})


 /*Back button Js*/
  function back(){
    window.history.back();
  }