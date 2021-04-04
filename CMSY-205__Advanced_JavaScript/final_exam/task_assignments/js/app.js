$(document).ready(() => {

    $("#employee1 div,#employee2 div").draggable({
        cursor: "move",
        grid: [25, 34]
    });

    $("#employee1, #employee2").droppable({
        drop: () => {
            $(this).addClass("ui-state-highlight")
                .find("p")
                .html("Task Added");
        }
    });

    $("#add1").click(() => {
        const userEntry = prompt("Please enter a description for the task:");

        if (userEntry != null && userEntry != "") {
            $("#employee1 div:last").after("<div class='ui-state-default'><p></p></div>");
            $("employee1 div:p").text((userEntry).value);
            $("div.ui-state-default").draggable({
                cursor: "move",
                grid: [25, 34]
            });
        }
    });

    $("#add2").click(() => {
        const userEntry = prompt("Please enter a description for the task");

        if (userEntry != null && userEntry != "") {
            $("#employee2 div:last").after("<div class='ui-state-default'><p></p></div>");
            $("employee2 div:p").text((userEntry).value);
            $("div.ui-state-default").draggable({
                cursor: "move",
                grid: [25, 34]
            });
        }
    });

});