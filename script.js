graph = Array(6);
graph[0] = "Speed.bmp";
graph[2] = "Flux, flux_angle.bmp";
graph[4] = "Ir_abc.bmp";
graph[5] = "Is_abc.bmp";
graph[3] = "Phi_d, Phi_qVS Time.bmp";
graph[1] = "Torque.bmp";
$(function () {
    setImage(0);
    $("#slider1").slider({
        animate: true,
        value: 0,
        min: 0,
        max: 10,
        step: 1,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(0);
        }
    });
    $("#slider2").slider({
        animate: true,
        value: 0,
        min: 200,
        max: 250,
        step: 1,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(0);
        }
    });
    $("#slider3").slider({
        animate: true,
        value: 0,
        min: 1350,
        max: 1450,
        step: 1,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(0);
        }
    });
    $("#slider4").slider({
        animate: true,
        value: 0,
        min: 0,
        max: 20,
        step: 1,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(0);
        }
    });
    $("#slider5").slider({
        animate: true,
        value: 0,
        min: 0,
        max: 10,
        step: 1,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(0);
        }
    });
    $("#slider6").slider({
        animate: true,
        value: 0,
        min: 0,
        max: 20,
        step: 1,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(0);
        }
    });
    $("#slider7").slider({
        animate: true,
        value: 0,
        min: 0,
        max: 200,
        step: 1,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(0);
        }
    });
    $("#slider8").slider({
        animate: true,
        value: 0,
        min: 0,
        max: 200,
        step: 1,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(0);
        }
    });
    $("#slider9").slider({
        animate: true,
        value: 0,
        min: 0,
        max: 1,
        step: 0.01,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(0);
        }
    });
    $('.rang-val').on("change paste keyup", function () {
        var cval = document.getElementById(this.id).value;
        //alert(cval);
        $('#' + (this.id).slice(0, 7)).slider("value", cval)
    });
    $(document).on('change', '#sel1', function () {
        var sel1 = document.getElementById('sel1').value;
        setImage(sel1);
    });
});

function setImage(a) {
    $('#graph').css('background-image', "url('" + graph[a] + "')");
    console.log(graph[a]);
}

function disable() {
    $('#runbtn').attr('disabled', '');
}
