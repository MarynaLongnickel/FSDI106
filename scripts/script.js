function isValid(task) {
    return task.title.length > 0 &&
           task.description.length > 0 &&
           task.color &&
           task.date &&
           task.status &&
           task.budget > 0;
}

function displayTask(task) {
    const html = `
        <div class="task" style="border-color: ${task.color}">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
            <p><strong>Status:</strong> ${task.status}</p>
            <p><strong>Start Date:</strong> ${new Date(task.date).toLocaleString()}</p>
            <p><strong>Budget:</strong> $${task.budget.toFixed(2)}</p>
        </div>
    `;
    $(".list").append(html);
}

function saveTask() {
    const task = {
        title: $("#txtTitle").val().trim(),
        description: $("#txtDescription").val().trim(),
        color: $("#selColor").val(),
        date: $("#selDate").val(),
        status: $("#selStatus").val(),
        budget: parseFloat($("#numBudget").val())
    };

    if (!isValid(task)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    displayTask(task);
    clearForm();
}

function clearForm() {
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selColor").val("#000000");
    $("#selDate").val("");
    $("#selStatus").val("New");
    $("#numBudget").val("");
}

function init() {
    $("#btnSave").click(saveTask);
}

window.onload = init;
