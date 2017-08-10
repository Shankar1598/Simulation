images=Array(6);
for(i=0;i<images.length;i++){
    images[i]=Array(3)
}
images[0][0]='motor.jpg';
images[0][1]='motor1.jpg';
images[0][2]='';
images[1][0]='motor2.jpg';
images[1][1]='motor3.jpg';
images[1][2]='';
images[2][0]='';
images[2][1]='';
images[2][2]='';
images[3][0]='';
images[3][1]='';
images[3][2]='';
$(function () {
    setImage(0,0);
    $(".slider").slider({
        animate: true,
        value: 50,
        min: 0,
        max: 100,
        step: 0.001,
        slide: function (event, ui) {
            $("#" + this.id + "-val").val(ui.value);
        },
        create: function (event, ui) {
            $("#" + this.id + "-val").val(50);
        }
    });
    $('.rang-val').on("change paste keyup", function () {
        var cval = document.getElementById(this.id).value;
        //alert(cval);
        $('#' + (this.id).slice(0, 7)).slider("value", cval)
    });
    $(document).on('change','select',function(){
        
        var sel1=document.getElementById('sel1').value;
        var sel2=document.getElementById('sel2').value;
        setImage(sel1,sel2);
        
    });
});

function setImage(a,b){
    var image=images[a][b];
    $('#image').css('background-image', "url('"+image+"')");
    //alert(images[a][b]);
}