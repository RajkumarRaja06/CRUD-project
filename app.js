const url = "http://localhost:3005/company";

fetch(url)
    .then(response => response.json())
    .then(function (data){
    createList(data);
})

function jsonPostFunction(e) {
    e.preventDefault;
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
            id:"",
            name:name,
            address:company
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data)
        // window.location.reload();
    });
}

function createList(data) {
    debugger;
    const mainUL = document.getElementById('myTable');
    for (let i = 0; i < data.length; i++) {
        debugger
        const jsonRow = document.createElement('div');
        jsonRow.className ='jsonData';
        jsonRow.id = data[i]["id"];
        
        var column2 = document.createElement('div');
        column2.className ="jsonButton";
        for (var key in data[i]) {
            
            var column1 = document.createElement('div'); 
            column1.addEventListener('click', (e) => {
                var selectedRowId = e.target.parentElement.id;
                var selectedRowJson = e.target.parentElement
                jsonEdit(selectedRowId,selectedRowJson)
            })     
        column1.className ="jsonColumn1";
        column1.innerHTML = data[i][key];
        jsonRow.appendChild(column1);       
        }
    column2.innerHTML = `<button class="delete-button" id=${data[i]["id"]} onclick='deleteRow(this)'>Delete</button>`;
    jsonRow.appendChild(column2);
    mainUL.appendChild(jsonRow);
    }
}

function jsonEdit(selectedRowId,selectedRowJson) {
    debugger;
    var idInput = document.getElementById('id');
    idInput.style.display = 'block';

    var selectedRow = selectedRowJson;
    selectedRow.addEventListener('click', () => {
        selectedRow.style.fontStyle = "italic";
    })
    
    document.getElementById("id").value = selectedRow.childNodes[0].innerHTML;
    document.getElementById("name").value = selectedRow.childNodes[1].innerHTML;
    document.getElementById("company").value = selectedRow.childNodes[2].innerHTML;

    var text = document.getElementById('add');
    text.textContent = 'Update';
}

function jsonUpdate() {
    let jsonDataId = document.getElementById("id").value;
    let jsonDataName = document.getElementById("name").value;
    let jsonDataAddress = document.getElementById("company").value;
    
    let resp = fetch(`${url}/${jsonDataId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
            id:jsonDataId,
            name:jsonDataName,
            address:jsonDataAddress
        }),
      })
    .then(function(response){
        return response.json();
    })
    .then(() => location.reload());
}

function jsonDelete(deleteId) {
    fetch(`${url}/${deleteId}`,{
        method:'DELETE',
    })
    .then(function(response){
        return response.json();
    })
    .then( () => location.reload());
}

function reload() {
    console.log("hiiiii");
}