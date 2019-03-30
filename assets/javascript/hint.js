
    $(".hint-button").on("click", function () {
        clickedHint = true;
        $("#hint").empty();
        $('#hint').prepend($('<img>', { id: 'theImg', src: String(packet[1]) }))
        //$("#hint").append("<img src=\"" + packet[1] + "\">");
    });
