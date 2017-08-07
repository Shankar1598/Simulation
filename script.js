$(function () {
    $(".slider").slider({
        animate: true,
        value: 50,
        min:0,
        max:100,
        step:0.001,
        slide: function (event, ui) {
            $("#"+this.id+"-val").val(ui.value);
        },
        create: function (event,ui) {
            $("#"+this.id+"-val").val(50);
        }
    });
    $('#slider1-val').on("change paste keyup",function () {
        var cval=document.getElementById("slider1-val").value;
        //alert(cval);
        $("#slider1").slider("value",cval);
    });
    $('#slider2-val').on("change paste keyup",function () {
        var cval=document.getElementById("slider2-val").value;
        //alert(cval);
        $("#slider2").slider("value",cval);
    });
});