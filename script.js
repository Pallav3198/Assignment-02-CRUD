// if selectedRow is null-> the operation is  insert and not edit.
var selectedRow = null;
function onFormSubmit(){
    if(Validate())
    {
    var formData = readFormData();
    if(selectedRow==null)
     insertNewRecord(formData);
    else
     editFormData();
    clearForm();
    }
}
function readFormData(){
    var formData = {};
    formData['fullName'] = document.getElementById('fullName').value;
    formData['empCode'] = document.getElementById('empCode').value;
    formData['salary'] = document.getElementById('salary').value;
    formData['city'] = document.getElementById('city').value;
    return formData;
}
function insertNewRecord(data)
{
    var table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
    //fullName
    let newRow = table.insertRow(table.length);
    let cell_0 = newRow.insertCell(0);
    cell_0.innerHTML = data.fullName;
    //empCode
    let cell_1 = newRow.insertCell(1);
    cell_1.innerHTML = data.empCode;
    //salary
    let cell_2 = newRow.insertCell(2);
    cell_2.innerHTML = data.salary;
    //city
    let cell_3 = newRow.insertCell(3);
    cell_3.innerHTML = data.city;
    //edit/delete
    let cell_4 = newRow.insertCell(4);
    cell_4.innerHTML = `<a onClick = "onEdit(this)">Edit</a>
                        <a onClick = "onDelete(this)">Delete</a>`; 
}
//clear the contents of the form
function clearForm()
{
    document.getElementById('fullName').value = '';
    document.getElementById('empCode').value= '';
    document.getElementById('salary').value = '';
    document.getElementById('city').value= '';
}
function onEdit(td)
{  // get the values from the table
    selectedRow = td.parentElement.parentElement;
   // insert the values into the form
   document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
   document.getElementById('empCode').value= selectedRow.cells[1].innerHTML;
   document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
   document.getElementById('city').value=selectedRow.cells[3].innerHTML;
}
// To edit the form Data
function editFormData()
{
    selectedRow.cells[0].innerHTML= document.getElementById('fullName').value;
    selectedRow.cells[1].innerHTML= document.getElementById('empCode').value;
    selectedRow.cells[2].innerHTML= document.getElementById('salary').value;
    selectedRow.cells[3].innerHTML= document.getElementById('city').value;
}
// delete the form data
function onDelete(td)
{  let data = td.parentElement.parentElement;
    if(confirm(`Do You really want to delete the details of  EMP ID: ${data.cells[1].innerHTML} : ${data.cells[0].innerHTML}`)){
    document.getElementById('employeeList').deleteRow(data.rowIndex);
    clearForm();
    }
    else
    {
        alert("Element Not deleted");
    }
}
//validation check
function Validate()
{
    let isValid = true;
    if(document.getElementById('fullName').value==' ')
    {   
        isValid=false;
        document.getElementById('fullNameValidationError').classList.remove('hide');
        console.log("EMPTY FULL NAME");
    }
    else{
        isValid = true;
        if(!document.getElementById('fullNameValidationError').classList.contains('hide'))
           document.getElementById('fullNameValidationError').classList.add("hide");
    }
    return isValid;
}
