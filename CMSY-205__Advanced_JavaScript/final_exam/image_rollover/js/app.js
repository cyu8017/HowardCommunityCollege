$(document).ready(() => {

    $("#image_rollovers img").each(() => {
        const oldURL = $(this).attr("src");
        const newURL = $(this).attr("id");

        // preload images
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        $(this).hover(
            () => $(this).attr("src", newURL),
            () => $(this).attr("src", oldURL)
        );
    });

});