$(document).ready(function() {
    const defaultTasks = [{
        name: "tasks",
        status: "completed",
    }];
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || defaultTasks;

    function taskList(tasksArray) {
        return tasksArray.map((task) => {
            return `
            <div class="task flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">

                <h1 class="task-name">${task.name}</h1>
                <h1 class="task-status capitalize text-sm text-blue-400">${task.status}</h1>
                </div>
            `;
        }).join('');
    }
    $("body")
    $("#tasks").html(taskList(storedTasks));
    $("#taskform").submit(function(event) {
        event.preventDefault();

        const taskName = $("#task").val();   
        const status = $("#status").val();   

        if (taskName === "" || status === "") {
            alert("Please fill out all fields.");
            return;
        }

        storedTasks.push({ name: taskName, status: status });
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
        $("#tasks").html(taskList(storedTasks));
        $("#task").val('');
        $("#status").val('');
    });
    $("#clear").click(()=>{
        localStorage.clear();
        storedTasks.length = 0;
        $("#tasks").html(taskList(storedTasks));
        console.log(storedTasks)
    });
});