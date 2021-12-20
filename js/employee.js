

function ClearFields() {
    document.getElementById("name").value = "";
    document.getElementById("empImg").value = "";
    document.querySelector('input[type=checkbox][name=gender]:checked').checked = false;
    var checkboxes = document.getElementsByName('department');
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
    document.getElementById("salary").value = "";
    document.getElementById("startdate").value = "";
    document.getElementById("notes").value = "";
}

function submitForm() {
    //var empDetails=document.getElementById("employeeForm").submit()
    var nameErr="";var genderErr="";var departmentErr="";var salaryErr="";var notesErr="";
    var error=document.getElementById("message").innerHTML;
    var checkboxes = document.getElementsByName('department');
    var department="";
    for (var checkbox of checkboxes) {
        if(checkbox.checked ==true){
            department=department+""+checkbox.value;
        }
    }
    
    var name=document.getElementById("name").value;
    var genderCheck=document.querySelector('input[type=checkbox][name=gender]:checked');
    var departmentCheck=document.querySelectorAll('input[type=checkbox][name=department]:checked').length;
    var salary=document.getElementById("salary").value;
    var startdate=document.getElementById("startdate").value ;
    //var notes=document.getElementById(notes).value;

    //validate
    if (name == "") {
        window.alert("Please enter your name.");
        nameErr="Please enter your name";
        error=nameErr;
        return false;
    }
    if (genderCheck == null) {
        window.alert("Please choose gender.");
        genderErr="Please choose gender";
        error=genderErr;
        return false;
    }
    if (departmentCheck == 0) {
        window.alert("Please choose department.");
        departmentErr="Please choose department";
        error=departmentErr;
        return false;
    }
    if (salary == null) {
        window.alert("Please Fill salary Field.");
        salaryErr="Please Fill salary Field.";
        error=salaryErr;
        return false;
    }
    if (startdate == null) {
        window.alert("Please Fill startdate Field.");
        salaryErr="Please Fill startdate Field.";
        error=startdateErr;
        return false;
    }
    if(notes==null){
        window.alert("Please Fill notes Field.");
        salaryErr="Please Fill notes Field.";
        error=notesErr;
        return false;
    }
    console.log(error);
    var gender=document.querySelector('input[type=checkbox][name=gender]:checked').value;
    //submit input
    var empData=`name is ${name} gender is ${gender} ,notes ${notes} ,department ${department},salary ${salary},startdate ${startdate}`;
    
    console.log(empData);
    ClearFields();
    return empData;

}
console.log(submitForm());

  
function CancelFields(){
    let name=document.getElementById("name").value;
    let gender=document.getElementById("gender").value;
    let notes=document.getElementById("notes").value;
    let salary=document.getElementById("salary").value;
    let department=document.getElementById("department").value;
    let startdate=document.getElementById("startdate").value;
    var empData=`name is ${name} gender is ${gender} ,notes ${notes} ,department ${department},salary ${salary},startdate ${startdate}`;
    if(empData){
        document.employeeForm.value=null
        console.log(document.employeeForm.value)
        return false;
    }
}

