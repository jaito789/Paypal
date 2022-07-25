<br><br><br><br><br><br><br>

<div class="card">
    <label>Name</label>
    <input id="name"></input>
    <label>ID</label>
    <input id="id"></input>
    <label>IDT</label>
    <input id="idt"></input>
    <button class="btn btn-danger w-100" onclick="add()">Add</button>
    </div>

    <div class="card">
    <input id="limit" type="text" maxlength="100" name="name" #name="ngModel">
    <button class="btn btn-danger btn-lg w-100" onclick="Limit()">limitar datos</button>
    <button class="btn btn-danger btn-lg w-100" onclick="getContent()">Extaer datos</button>
    <table class="black-text">
              <thead>
                  <tr>
                        <th width="10%">ID</th>
                        <th width="80%">name</th> 
                        <th width="10%">delete</th>
                  </tr>
              </thead>

              <tbody id="idBody" style="border: none;">

              </tbody>
        </table>
      

<script type="text/javascript" src="./scripts/home.js?v1.0.2"></script>