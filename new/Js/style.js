$(document).ready(function(){

    $("#Bbtn1").click(function(){
        cc();
        $("#Bbtn1").css("background-color","#adadb1");
  });
    
    $("#Bbtn2").click(function(){
        cc();
        $("#Bbtn2").css("background-color","#ADADB1");
  });
    
    $("#Bbtn3").click(function(){
        cc();
        $("#Bbtn3").css("background-color","#ADADB1");
  });

    function cc(){
        $(".Bbtns").css("background-color","white");
    }
});