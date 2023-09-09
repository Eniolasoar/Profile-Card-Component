function displayDay(){
    var date = new Date();
    var day = date.getDay() + 1;
    console.log(day);
    let dayResult="";
    switch(day){
        
        case 1:
            dayResult="Sunday,";
            break;
        case 2:
            dayResult="Monday,,";
            break;

        case 3:
            dayResult="Tuesday,";
            break;

        case 4:
            dayResult="Wednesday,";
            break;
        
        case 5:
            dayResult="Thursday,";
            break;

        case 6:
            dayResult="Friday,";
            break;
        
        case 7:
            dayResult="Saturday,";
            break;
    }

    console.log(dayResult);
    let dayOutput=document.getElementById("day");
    dayOutput.innerHTML=dayResult;
    console.log(dayOutput);
}

displayDay();