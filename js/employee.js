

function ClearFields() {

    var name=document.getElementById("name") ;
    if(name.value!=null){
        document.getElementById("name").value="";
    }
    // var empImg=document.getElementById("empImg").value;
    // if(empImg.value!=null){
    //     document.getElementById("empImg").value="";
    // }
    var gender=document.querySelector("input[type=radio][name=gender]:checked");
    if(gender.value=='M' || gender.value=='F'){
        document.querySelector("input[type=radio][name=gender]:checked").checked = false;
    }
    var checkboxes = document.getElementsByName('department');
    for (var checkbox of checkboxes) {
        if(checkbox.checked==true){
            checkbox.checked = false;
        }
    }
    var salary=document.getElementById("salary").value;
    if(salary!=null){
        document.getElementById("salary").value="";
    }
    var startdate=document.getElementById("startdate").value ;
    if(startdate!=null){
        document.getElementById("startdate").value = "";
    }
    var notes=document.getElementById("notes").value ;
    if(notes!=null){
        document.getElementById("notes").value = "";
    }
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
    var genderCheck=document.querySelector("input[type=radio][name=gender]:checked");
    var departmentCheck=document.querySelectorAll("input[type=checkbox][name=department]:checked").length;
    var salary=document.getElementById("salary").value;
    var startdate=document.getElementById("startdate").value ;
    var notes=document.getElementById("notes").value;

    //validate
    if (name == "") {
        //window.alert("Please enter your name.");
        nameErr="Please enter your name";
        error=nameErr;
        return false;
    }
    if (genderCheck == null) {
        //window.alert("Please choose gender.");
        genderErr="Please choose gender";
        error=genderErr;
        return false;
    }
    if (departmentCheck == 0) {
        //window.alert("Please choose department.");
        departmentErr="Please choose department";
        error=departmentErr;
        return false;
    }
    if (salary == null) {
        //window.alert("Please Fill salary Field.");
        salaryErr="Please Fill salary Field.";
        error=salaryErr;
        return false;
    }
    if (startdate == '') {
        //window.alert("Please Fill startdate Field.");
        salaryErr="Please Fill startdate Field.";
        error=startdateErr;
        return false;
    }
    var todaysDate = new Date();

    function convertDate(date) {
      var yyyy = date.getFullYear().toString();
      var mm = (date.getMonth()+1).toString();
      var dd  = date.getDate().toString();
    
      var mmChars = mm.split('');
      var ddChars = dd.split('');
    
      return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
    }
    
    console.log(convertDate(todaysDate));
    if (startdate<convertDate(todaysDate)) {
        window.alert("The Date must be Bigger or Equal to today date")
        return false;
    }
    if(notes==''){
        window.alert("Please Fill notes Field.");
        salaryErr="Please Fill notes Field.";
        error=notesErr;
        return false;
    }
    console.log(error);
    var gender=document.querySelector('input[type=radio][name=gender]:checked').value;
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

