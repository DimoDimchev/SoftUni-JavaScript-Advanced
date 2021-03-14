function dayOfWeek(day){
    let weekDict = {
        'Monday' : 1,
        'Tuesday' : 2,
        'Wednesday' : 3,
        'Thursday' : 4,
        'Friday' : 5,
        'Saturday' : 6,
        'Sunday' : 7
    };
    
    if (day in weekDict){
        console.log(weekDict[day]);
    } else{
        console.log('error')
    }
}

// dayOfWeek('Monday')