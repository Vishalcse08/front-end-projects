const task = document.querySelector("#task");
const date = document.querySelector("#date");
const added = document.querySelector("#added");

added.addEventListener("click",function(){
    if(
        task.value.trim()=== "" ||
        date.value.trim()=== "" 
    ){
        alert("please fill this page");
    }
    else{
    localStorage.setItem("task",task.value);
    localStorage.setItem("date",date.value);
    alert("task added");
    }
})