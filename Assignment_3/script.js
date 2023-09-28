
function Title(t1) 
{ 
  this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
  return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

no_incr = 3;

// Function to display full name and NUID when the page loads
function displayMyInfo() {
  var userInfoDiv = document.getElementById("myInfo");
  var fullName = "Santosha Nagaratnakar";
  var nuid = "002798165";

  userInfoDiv.innerHTML = fullName + " - " + nuid;
}

// Call the displayUserInfo function when the page loads
window.onload = displayMyInfo;


const table = document.getElementById("myTable");

let countItems = 0;

const Rows = table.getElementsByTagName("input");

Hide();
function Hide(){
  var count=0;
  let submitBtn = document.getElementById("button");
  for(var i = 0; i < Rows.length; i++){
    var row = Rows[i].parentNode.parentNode;
    
    if(!Rows[i].checked){
      count++;
      row.querySelectorAll("td")[8].classList.add("Hidecol");
      row.querySelectorAll("td")[9].classList.add("Hidecol");
    }

    if(Rows.length === count){

      submitBtn.style.backgroundColor = "gray";
      submitBtn.style.border = "";
      submitBtn.style.cursor = "initial";
      submitBtn.disabled = true;
      document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("Hidecol");
      document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("Hidecol");
    }
  }
  
}

//used to select the rows 
selectRow();

let boolean = true; 

let boolean2 = true;  //boolean values

function rowOne(r) {
    const i = r.parentNode.parentNode.rowIndex;
    const row = r.parentNode.parentNode;
    const descRow = row.nextSibling; 
    if (boolean2) {
      descRow.style.display = "table-row";
      boolean2 = false;
    } else {          
      descRow.style.display = "none";
      boolean2 = true;
    }
}

//used to view the description after clicking on image
function rowVal(r) {  
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling.nextSibling; 
  if (boolean) {
    descRow.style.display = "table-row";
    boolean = false;
  } else {          
    descRow.style.display = "none";
    boolean = true;
  }
}
var rowname;
// selectRow();
//used for checking whether we have selected the rows and column
function selectRow() {
  countItems = 0;
  for (let i=0; i<Rows.length; i++) {
      const row = Rows[i].parentNode.parentNode;
      rowname=Rows;
      
      Rows[i].addEventListener("click", () => {
        // checkbox is checked then we need to display the values
        if (Rows[i].checked) {
          countItems++;
          row.style.backgroundColor = "yellow";
          row.lastElementChild.innerHTML = "<td><button onClick='editRow(this)'>Edit Row</button></td>";
          row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this)'>Delete Row</button></td>";
          document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("Hidecol");
          document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("Hidecol");
          row.querySelectorAll("td")[8].classList.remove("Hidecol");
          row.querySelectorAll("td")[9].classList.remove("Hidecol");
        
        }
        //used to hide the column if it is not selected  
        else {
          countItems--;
          row.style.backgroundColor = "white";
          row.lastElementChild.innerHTML = "";
          row.lastElementChild.previousElementSibling.innerHTML = "";
          row.querySelectorAll("td")[8].classList.add("Hidecol");
          row.querySelectorAll("td")[9].classList.add("Hidecol");
          Hide();
        }
      })
  }
  
}
//if delete the row for the given index
function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  const i_student = Math.floor(((r.parentNode.parentNode.rowIndex)+1)/2);
  const std_nm = r.parentNode.parentNode.querySelectorAll("td")[1].innerHTML;
  const std_id = std_nm[std_nm.length - 1];
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert(`Student `+ std_id+ ` record deleted succussfully.`);
  Hide();
  selectRow();
  // let submitButton = document.getElementById("button");
  // if(countItems < 1 ){
  //   submitButton.style.backgroundColor = "gray";
  //   submitButton.style.border = "";
  //   submitButton.style.cursor = "initial";
  //   submitButton.disabled = true;
  // }
}
//while selecting edit row button
function editRow(r) {
  const i = Math.floor(((r.parentNode.parentNode.rowIndex)+1)/2);
  const std_nm = r.parentNode.parentNode.querySelectorAll("td")[1].innerHTML;
  const std_id = std_nm[std_nm.length - 1];
  window.prompt('Edit the details of student ' + std_id);
  alert(`Student `+ std_id + ` updated successfully.`);
  // selectRow();
  Hide();
}

//when we need to insert new row 
function addRow() {
  no_incr = no_incr + 1;
  const row = table.insertRow(table.rows.length);

  const rowCount = table.rows.length;
  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  const deleteBtn = row.insertCell(8);
  const editBtn = row.insertCell(9);

  checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="rowOne(this)" src="down.png" width="25px" /></td>`;

  student.innerHTML = `Student `+ no_incr; //${Math.floor(rowCount/ 2)}` 
  advisor.innerHTML = `Teacher `+ no_incr; //${Math.floor(rowCount/ 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = 45678;
  percentage.innerHTML = "100%";
  const i =`${Math.floor(rowCount/ 2)}`;
    alert("Student " + no_incr+ " record added successfully");

  
  selectRow();

  nextRow();
  Hide();
}
//when there is event is 
window.addEventListener("click", () => {

  let submitButton = document.getElementById("button");

  if (countItems > 0) {    
    submitButton.style.backgroundColor = "orange";
    submitButton.style.border = "4px solid orange";
    submitButton.style.cursor = "pointer";
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = "gray";
    submitButton.style.border = "";
    submitButton.style.cursor = "initial";
    submitButton.disabled = true;
  }
})

//Used to display 
function nextRow() {
  const row = table.insertRow(table.rows.length);

  row.classList.add("dropDownTextArea")
  
  row.innerHTML = 
      '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  selectRow();
}