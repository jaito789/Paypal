var api = new Schema();

$("#btnSignUp").click(function(){
    signup();
 
 });
 function signup(){
   var email = $("#txtEmail").val();
   var password= $("#txtPassword").val();
   var name = $("#txtName").val();

   if(email === "" || password === "" ){
     M.toast({html: "no se permiten campos vacios"});
   }else{ 
   auth.createUserWithEmailAndPassword(email, password)
   .then((userCredential) => {
     // Signed in
     var user = userCredential.user;
     var uid = user.uid;

      fetch(api.users,  {
        method:'POST',
        body: JSON.stringify({
          US_name:name,
          US_email:email,
          US_UID: uid
      }),
      headers:{
        "Content-type": "application/json"
      }

    }).then(response => response.json())
    .then(data  => {
          M.toast({html: "Registro exitoso maldito simio!"});
          window.location = "?view=home";
    })
    .catch(err => {
      M.toast({html: 'ERROR:' + err});
    });

   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     M.toast({html: errorCode + " - " +"errorMessage"});
   });
 }
 }