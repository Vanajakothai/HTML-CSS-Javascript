function addstudent()
{
    var rollno=document.sample.rollno.value;
    var name=document.sample.name.value;
    
    var tr=document.createElement('tr');

    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    
    td1.innerHTML=rollno;
    td2.innerHTML=name;
    td3.innerHTML='<input type="button" name="Add" value="Delete" onclick="delstudent(this);">'
    td4.innerHTML='<input type="button" name="Add" value="Update" onclick="updstudent(this);">'
   
    document.getElementById('tb1').appendChild(tr);
}
function delstudent(stud)
{
    var r=stud.parentNode.parentNode;
    r.parentNode.removeChild(r);
}
function updstudent(stud)
{
    var rollno=document.sample.rollno.value;
    var name=document.sample.name.value;
    var r=stud.parentNode.parentNode;

    var tr=document.createElement('tr');

    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    
    td1.innerHTML='<input type="number" name="rollno1">';
    td2.innerHTML='<input type="text" name="name1">';
    td3.innerHTML='<input type="button" name="Add" value="Delete" onclick="delstudent(this);">'
    td4.innerHTML='<input type="button" name="Add" value="Update" onclick="addupdstudent(this);">'
   
    document.getElementById('tb1').replaceChild(tr,r);

}
function addupdstudent(stud)
{
    var rollno=document.sample.rollno1.value;
    var name=document.sample.name1.value;
    var tr=document.createElement('tr');
    var r=stud.parentNode.parentNode;

    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    
    td1.innerHTML=rollno;
    td2.innerHTML=name;
    td3.innerHTML='<input type="button" name="Add" value="Delete" onclick="delstudent(this);">'
    td4.innerHTML='<input type="button" name="Add" value="Update" onclick="updstudent(this);">'
   
    document.getElementById('tb1').replaceChild(tr,r);

}