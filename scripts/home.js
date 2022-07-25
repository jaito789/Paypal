var contenido = document.querySelector("#contenido")
var api = new Schema();

function add(){
  var name = $("#name").val();
  var id = $("#id").val();
  var idt= $("#idt").val();

  if(name == "" || id == "" || idt == ""){
      M.toast({html: 'No se permiten campos vacios'});
  } else {
      console.log(name,id,idt)
      fetch('http://localhost:3000/api/products/', {
          method:'POST',
          body: JSON.stringify({
              PD_name: name,
              PD_ID: id,
              PDT_ID: idt
          }),
          headers: {
              "content-type": "application/json",
          },
      })
      .then(response => response.json())
      .then(data => {
          M.toast({html: 'producto registrado exitosamente'});
      })
      .catch(err => {
          M.toast({html: "Error: " + err});
      });

  }
}

function getContent(){
    var url = 'http://localhost:3000/api/products/10';
    fetch(url, {
        method: 'GET'
  }) .then(response => response.json()).then(data => {
      if(data.length > 0){
           $("#idBody").empty();
           data.forEach((doc) => {
             metodoAppend(doc);
           });
       } else {}
    }).catch(err => console.log(err));
};

function metodoAppend (doc) {
    $("#idBody").append('<tr>' +
      '<td>' + doc.PD_ID + '</td>' +
      '<td>' + doc.PD_name+ '</td>' +
      '<td><button class="btn btn-danger w-100" onclick="Delete('+doc.PD_ID+')">Eliminar</button></td>' +
    '</tr>');
}

function Delete(DID){
    var url="http://localhost:3000/api/products/"+DID;
    fetch(url, {
        method: 'DELETE'
  }) .then(response => response.json()).then(data => {
        getContent();      
    }).catch(err => console.log(err));

}

function Limit(){
  var Limit= $("#limit").val();
  var url = 'http://localhost:3000/api/products/'+Limit;
    fetch(url, {
        method: 'GET'
  }) .then(response => response.json()).then(data => {
      if(data.length > 0){
           $("#idBody").empty();
           data.forEach((doc) => {
             metodoAppend(doc);
           });
       } else {}
    }).catch(err => console.log(err));
}