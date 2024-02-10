function fun(){
    var date = new Date();
    var year = date.getFullYear()
    var month = date.getMonth()
    var days = date.getDay()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var time = document.getElementById("datetime").value
    var time1 = time.split("-")
    var time2 = time1[2].split("T")
    var time3 = time2[1].split(":")
    var time4 = [time1[0],time1[1],time2[0],time3[0],time3[1]]
    var year1 = year-time4[0];
    var month1 = (12-time4[1])+((year1-1)*12)
    var days1 = (month1/12)*365
    var days2 = Math.trunc(days1)//to remove after point value 
    var hours = days2*24
    var minutes = hours*59
    var seconds = minutes*59+`${second}`
    document.getElementById("years").innerHTML="Years : "+year1
    document.getElementById("months").innerHTML="Months : "+month1
    document.getElementById("days").innerHTML="Days : "+days2
    document.getElementById("hours").innerHTML="Hours : "+hours
    document.getElementById("minutes").innerHTML="Minutes : "+minutes
    document.getElementById("seconds").innerHTML="Seconds : "+seconds
    setTimeout(fun,1000)
}