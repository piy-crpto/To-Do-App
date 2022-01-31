// edit function made also 


var addbtn = document.getElementById('push');
var inputval = document.querySelector('#newtask input');
var tasks = document.getElementById('tasks');



addbtn.addEventListener("click", checkinput);
function checkinput() {
    console.log('clicked add btn');
    if (inputval.value.length == 0) {
        alert("Please Enter your Task");
    }
    else {
        tasks.innerHTML += `<div class="task">
                       <span id="taskname">
                             ${inputval.value}
                       </span>
                        <button class="delete">
                                   <i class="far fa-trash-alt"></i>
                        </button>
                           </div>`
       // console.log('task added succesfully');
       var alert = document.getElementById('message');
       alert.innerHTML = `<div class="alert">
       <span class="closebtn">&times;</span> 
       <strong>Added! </strong>Your task has been added successfully
     </div>`;

     setTimeout(function () {
       alert.innerHTML = ''
   }, 2000);

    }
   inputval.value="";

    var addedtasks = document.querySelectorAll(".delete");
    for (var i = 0; i < addedtasks.length; i++) {
        addedtasks[i].onclick = function () {
            this.parentNode.remove();
            //console.log('deleted succfully');
            var alert = document.getElementById('message');
            alert.innerHTML = `<div class="alert">
            <span class="closebtn">&times;</span> 
            <strong>Deleted! </strong>Your task has been deleted successfully
          </div>`;

          setTimeout(function () {
            alert.innerHTML = ''
        }, 2000);
        }

    }
   

}












