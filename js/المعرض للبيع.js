$(document).ready(function(){
   
    $('#myRange1').on("change mousemove", function() {
        $(this).next().html(' المساحه بالمتر : ' + $(this).val());
    });
    $('#myRange2').on("change mousemove", function() {
        $(this).next().html(' المساحه بالجنيه : ' + $(this).val() + "K");
    });

});