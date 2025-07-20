class Task {
    constructor(title, description, color, date, status, budget) {
        this.title = title;
        this.desc = description;
        this.color = color;
        this.date = date;
        this.status = status;
        this.budget = budget;
        this.name = "Testing";
    }
}

function isValid(task) {
    return task.title.length > 0 &&
           task.desc.length > 0 &&
           task.color &&
           task.date &&
           task.status &&
           task.budget > 0;
}

function displayTask(task) {
    const html = `
        <div class="task" style="border-color: ${task.color}">
            <h5>${task.title}</h5>
            <p>${task.desc}</p>
            <p><strong>Status:</strong> ${task.status}</p>
            <p><strong>Start Date:</strong> ${new Date(task.date).toLocaleString()}</p>
            <p><strong>Budget:</strong> $${task.budget.toFixed(2)}</p>
        </div>
    `;
    $(".list").append(html);
}

function saveTask() {
    const title = $("#txtTitle").val().trim();
    const desc = $("#txtDescription").val().trim();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = parseFloat($("#numBudget").val());

    const task = new Task(title, desc, color, date, status, budget);

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
