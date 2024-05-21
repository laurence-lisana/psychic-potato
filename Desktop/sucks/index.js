document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length === 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#task').innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var currentTasks = document.querySelectorAll(".delete");
        for (var i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
            };
        }
    }

    var tasks = document.querySelectorAll(".taskname");
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function() {
            this.parentNode.classList.toggle('completed');
        };
    }

    document.querySelector("#newtask input").value = "";
};

