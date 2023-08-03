$(document).ready(() => {
    $("#book_list a").click(() => {
        let source = $(this).children("img").attr("src");
        let alt = $(this).children("img").attr("alt");
        let description = $(this).next().html();
        $("#book_desc p").hide("slide", { direction: "right" }, 500, () => {
            $("#book_image img").switchClass("large", "small", 1000);
            $("#book_image img").attr("src", source);
            $("#book_image img").attr("alt", alt);
            $("#book_desc p").html(description);
            $("#book_image img").switchClass("small", "large", 1000, () => {
                $("#book_desc p").show("slide", { direction: "right" }, 500);
            });
        });
    });
});