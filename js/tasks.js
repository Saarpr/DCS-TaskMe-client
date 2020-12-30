$(function () {
    getTasks();
});

function getTasks() {
    $.ajax({
        url: 'http://localhost:/google/redirect',
        type: 'GET',
        success: function (user) {
            showTasks(user);
        }
    });
}

function showTasks() {
    $(".container").empty();
    $(".container").append(
        `<div id="content">
            <h2>My Tasks</h2>
        </div>
        <div id="tasks-box" class="row demo-samples">
            <div class="col-4">
                <div class="todo">
                    <ul>
                        <li class="todo-done">
                            <div class="todo-icon fui-user"></div>
                            <div class="todo-content">
                                <h4 class="todo-name">
                                    Meet <strong>Adrian</strong> at <strong>6pm</strong>
                                </h4>
                                Times Square
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`
    )
}