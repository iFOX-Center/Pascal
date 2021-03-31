var s;

$(document).ready(function(){
    
    $("#btnm").click(function(){
        s = "none";
        mc1();
    })

    $("#btnc").click(function(){
        s = "dis"
        mc2();
    })
    function mc1(){
        if ( s = "none"){
            $("#btnm").css("display","none");
            $("#btnc").css("display","flex");
            $("#ttop").css("align-items","flex-start");
            $("#ttext").css({
                "overflow":"normal",
                "white-space":"normal"
            });
        }
    }
    function mc2(){
        if (s = "dis"){
            $("#btnm").css("display","flex");
            $("#btnc").css("display","none"); 
            $("#ttop").css("align-items","center");
            $("#ttext").css({
                "overflow":"hidden",
                "white-space":"nowrap"
            });
        }
    }
    
    $("#Bbtn1").click(function(){
        cc();
        $("#Bbtn1").css("background-color","#adadb1");
        $("#page1").css("display","flex");
    });
    
    $("#Bbtn2").click(function(){
        cc();
        $("#Bbtn2").css("background-color","#ADADB1");
        $("#page2").css("display","flex");
  });
    
    $("#Bbtn3").click(function(){
        cc();
        $("#Bbtn3").css("background-color","#ADADB1");
        $("#page3").css("display","flex");
  });

    function cc(){
        $(".Bbtns").css("background-color","white");
        $(".mmin").css("display","none");
    }
    

})