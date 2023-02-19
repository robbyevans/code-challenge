
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// s="12:01 PM"

// Return '12:01:00'.

//s="12:01 AM"
// Return '00:01:00'.

//pseudocode
//1.define a function timeConverter that takes two parameters
// time and  AM/PM
//2.define a variable AM=-12 and PM =+12
// for the time given add appropriatley


// const[hour,mins,sec]=time.split(":")
// console.log(hour)

function timeConverter(time12hr){

  let[hrs,mins,ss]=time12hr.split(":")
  console.log(ss)
  const sec=([...ss].slice(0,2).join(""))
  const amPm=([...ss].slice(2,4).join(""))
  if(amPm==='AM' && hrs >=12){
   hrs= parseInt(hrs)-12
  
  }
  if(amPm==='PM' && hrs<12){
    hrs= parseInt(hrs)+12
  }
  const newHrs=(parseInt(hrs)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  return `${(newHrs)}:${mins}:${sec}`
}

console.log(timeConverter('12:45:54PM'))

// const time='07:05:45PM'

// const splitted=(Array.from(time.split(":")))

// const[hh,mm,ss]=splitted;
// const sec=([...ss].slice(0,2).join(""))
// console.log(sec)
