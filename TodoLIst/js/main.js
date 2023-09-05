 // gat all data 
 let addInput = document.getElementById('addInput'); 
 let Addbtn = document.getElementById('AddBTn');  
 let TODoTask = document.getElementById('TODoTask'); 
 let pendingTasks=document.getElementById('pendingTasks'); 
 let clearBtn=document.getElementById('clearBtn');  
 let Tasks =[]; 

 /* what i need  
   1- user enter the task in input 
   2- user click in add button or in kyboard enter  > task add 
   3- display task for user 
   4- user can check the input 
   5- not don input 
   6- delete the task 
   7-edit task 
   8- delete all tasks 
   9- pending taskst of todo  
   10- locall storage get items 
 
 */  
  //save data in localstorage   
  var getLocalStorage=localStorage.getItem('tasks'); 

  if(localStorage.getItem('tasks')==null)  { 
    Tasks=[]

  } else{
    Tasks= JSON.parse(getLocalStorage);  
    console.log(Tasks)
    ShowTasks(Tasks); 

  }
  


  


  // function to add task 

   function AddTask(){ 
    let userTask=addInput.value;   
    Tasks.push(userTask);  
    console.log(Tasks)
    localStorage.setItem('tasks',JSON.stringify(Tasks));  

   }  
  
   Addbtn.addEventListener('click',function(){

       AddTask();  
       ShowTasks();  

   }) 
    
   // show task 

   function ShowTasks(){ 
    let Cartona=``  
    for(let i=0; i<Tasks.length; i++){
      Cartona+=` 
      <ul> 
      <li> ${Tasks[i].value} </li>
  </ul>
      `

    } 

    document.getElementById('TODoTask').innerHTML= Cartona; 


     

   } 
   // then call this function 

   ShowTasks(); 



   


