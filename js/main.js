 var eye = document.getElementById('eye');

 eye.addEventListener('click', function(eye){
 	eye.target.classList.toggle('eye-open');



 	})


  var remember = document.getElementById('rememberid');

 remember.addEventListener('click', function(remember){
 	remember.target.classList.toggle('on-remember');



 	})


 /*Back button Js*/
  function back(){
    window.history.back();
  }