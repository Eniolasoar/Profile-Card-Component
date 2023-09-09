function displayDay(){
    var date = new Date();
    var day = date.getDay() + 1;
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

    let dayOutput=document.getElementById("day");
    dayOutput.innerHTML=dayResult;
}

function displayUTC(){
    const utcMilliseconds = new Date().getTime();
let utcOutput=document.getElementById("UTCTime");
utcOutput.innerHTML=utcMilliseconds;
}

displayDay();
displayUTC();