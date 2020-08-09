
function first(){
    document.getElementById("q1").style.visibility = visible;
}

var next = 1;
var score = 0;

function nextQues(){
    next++;

    if (next === 2){
        document.getElementById("q" + next).style.visibility = "visible";
        document.getElementById("q1").style.visibility = "hidden";
        
    }
    else if (next === 3){
        document.getElementById("q" + next).style.visibility = "visible";
        document.getElementById("q1").style.visibility = "hidden";
        document.getElementById("q2").style.visibility = "hidden";
    }

    else if (next === 4){
        document.getElementById("q" + next).style.visibility = "visible";
        document.getElementById("q1").style.visibility = "hidden";
        document.getElementById("q2").style.visibility = "hidden";
        document.getElementById("q3").style.visibility = "hidden";
    }

    else if (next === 5){
        document.getElementById("q" + next).style.visibility = "visible";
        document.getElementById("q1").style.visibility = "hidden";
        document.getElementById("q2").style.visibility = "hidden";
        document.getElementById("q3").style.visibility = "hidden";
        document.getElementById("q4").style.visibility = "hidden";
        
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("submit").style.visibility = "visible";
    }

    
}


function calcScore(){
    var rightAns1 = document.getElementById("q1_o1");
    if(rightAns1.checked === true){
        score++;
        document.getElementById("sc").innerHTML = score +"/5";
        rightAns1.checked = false;

    }
    var rightAns2 = document.getElementById("q2_o4");
    if(rightAns2.checked === true){
        score++;
        document.getElementById("sc").innerHTML = score +"/5";
        rightAns2.checked = false;

    }
    var rightAns3 = document.getElementById("q3_o1");
    if(rightAns3.checked === true){
        score++;
        document.getElementById("sc").innerHTML = score +"/5";
        rightAns3.checked = false;

    }
    var rightAns4 = document.getElementById("q4_o3");
    if(rightAns4.checked === true){
        score++;
        document.getElementById("sc").innerHTML = score +"/5";
        rightAns4.checked = false;

    }
    var rightAns5 = document.getElementById("q5_o4");
    if(rightAns5.checked === true){
        score++;
        document.getElementById("sc").innerHTML = score +"/5";
        rightAns5.checked = false;

    }

}

 





        
    
