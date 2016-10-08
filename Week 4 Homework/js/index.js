$(document).ready(function () {
    $("#content1").hide();
    $("#show_hide1").on("click", function () {
        var txt = $("#content1").is(':visible') ? 'Read more >' : 'Read less';
        $("#show_hide1").text(txt);
        $(this).next('#content1').slideToggle(200);
    });
});
$(document).ready(function () {
    $("#content2").hide();
    $("#show_hide2").on("click", function () {
        var txt = $("#content2").is(':visible') ? 'Read more >' : 'Read less';
        $("#show_hide2").text(txt);
        $(this).next('#content2').slideToggle(200);
    });
});
$(document).ready(function () {
    $("#content3").hide();
    $("#show_hide3").on("click", function () {
        var txt = $("#content3").is(':visible') ? 'Learn More' : 'Learn Less';
        $("#show_hide3").text(txt);
        $(this).next('#content3').slideToggle(200);
    });
});