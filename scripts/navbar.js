$("#CerrarSesion").click(function(){
    logout();
});

function logout(){
    firebase.auth().signOut().then(function(){
     window.location = "?view=login";   
    }).catch(function(error){

    });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
    }else{
        window.location = "?view=login";
    }
});




