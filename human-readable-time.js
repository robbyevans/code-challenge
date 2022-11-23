//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable (seconds) {
  let HH=Math.floor(seconds/3600)
  let min=Math.floor((seconds%3600)/60)
  let sec=Math.floor(seconds%60)
  
  console.log(`${('0' + HH).slice(-2)}::${('0' + min).slice(-2)}::${('0' + sec).slice(-2)}`)
}
('0' + 11).slice(-2)

humanReadable(90300)



