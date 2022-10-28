$(document).ready(function(){
    var total="";
    var totalVal=0;
    var buttonSubmit = false;
    $("#btnAc").click(function(){
        total="";
        totalVal=0;
        $("#userDisplay").val(0);
    })
    $("#btn0").click(function(){
        buttonSubmit = false;
        total = total + "0";
        $("#userDisplay").val(total);
    })
    $("#btn1").click(function(){
        buttonSubmit = false;
        total = total + "1";
        $("#userDisplay").val(total);
    })
    $("#btn2").click(function(){
        buttonSubmit = false;
        total = total + "2";
        $("#userDisplay").val(total);
    })
    $("#btn3").click(function(){
        buttonSubmit = false;
        total = total + "3";
        $("#userDisplay").val(total);
    })
    $("#btn4").click(function(){
        buttonSubmit = false;
        total = total + "4";
        $("#userDisplay").val(total);
    })
    $("#btn5").click(function(){
        buttonSubmit = false;
        total = total + "5";
        $("#userDisplay").val(total);
    })
    $("#btn6").click(function(){
        buttonSubmit = false;
        total = total + "6";
        $("#userDisplay").val(total);
    })
    $("#btn7").click(function(){
        buttonSubmit = false;
        total = total + "7";
        $("#userDisplay").val(total);
    })
    $("#btn8").click(function(){
        buttonSubmit = false;
        total = total + "8";
        $("#userDisplay").val(total);
    })
    $("#btn9").click(function(){
        buttonSubmit = false;
        total = total + "9";
        $("#userDisplay").val(total);
    })
    $("#btnAdd").click(function(){
        if(buttonSubmit === false){
            buttonSubmit = true;
            total = total + "+";
            $("#userDisplay").val(total);
        }
        else{
            return false
        }
    })
    $("#btnSub").click(function(){
        if(buttonSubmit === false){
            buttonSubmit = true;
            total = total + "-";
            $("#userDisplay").val(total);
        }
        else{
            return false
        }
    })
    $("#btnMul").click(function(){
        if(buttonSubmit === false){
            buttonSubmit = true;
            total = total + "*";
            $("#userDisplay").val(total);
        }
        else{
            return false
        }
    })
    $("#btnMod").click(function(){
        if(buttonSubmit === false){
            buttonSubmit = true;
            total = total + "%";
            $("#userDisplay").val(total);
        }
        else{
            return false
        }
    })
    $("#btnDiv").click(function(){
        if(buttonSubmit === false){
            buttonSubmit = true;
            total = total + "/";
            $("#userDisplay").val(total);
        }
        else{
            return false
        }
    })
    $("#btnBack").click(function(){
        total = total.slice(0,-1);
        $("#userDisplay").val(total);
    })
    $("#btnEqual").click(function(){
        $("#userDisplay").val(eval(total));
        total = eval(total);
    })
})