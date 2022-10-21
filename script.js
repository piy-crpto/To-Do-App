// edit function made also 


var addbtn = document.getElementById('push');
var inputval = document.querySelector('#newtask input');
var tasks = document.getElementById('tasks');



addbtn.addEventListener("click", checkinput);
function checkinput() {
    console.log('clicked add btn');
    console.log(inputval.value.length);
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
       var alrt = document.getElementById('message');
       alrt.innerHTML = `<div class="alert" id="alertAdded">
       <span class="closebtn">&times;</span> 
       <strong>Added! </strong>Your task has been added successfully
     </div>`;

     setTimeout(function () {
       alrt.innerHTML = ''
   }, 2000);

    }
   inputval.value="";

    var addedtasks = document.querySelectorAll(".delete");
    for (var i = 0; i < addedtasks.length; i++) {
        addedtasks[i].onclick = function () {
            this.parentNode.remove();
            //console.log('deleted succfully');
            var alrt = document.getElementById('message');
            alrt.innerHTML = `<div class="alert" id="alertDeleted">
            <span class="closebtn">&times;</span> 
            <strong>Deleted! </strong>Your task has been deleted successfully
          </div>`;

          setTimeout(function () {
            alrt.innerHTML = ''
        }, 2000);
        }

    }
   

}











