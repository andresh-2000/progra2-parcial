const form = document.getElementById(userform);

form.addEventListener("submit", function(event) {
        event.preventDefault();
        let userformData = new FormData(form);
        insertRowUserTable(userformData)
})

function insertRowUserTable(userformData) {
    let userTableRef = document.getElementById("userTable");
    
    let newUserRow = userTableRef.insertRow(-1);

    let newUserCellRef = newUserRow.insertCell(0);
    newUserCellRef.textContent = userformData.get("username");
    
    let newUserCellRef = newUserRow.insertCell(1);
    newUserCellRef.textContent = userformData.get("password");

    let newUserCellRef = newUserRow.insertCell(2);
    newUserCellRef.textContent = userformData.get("type");
}
