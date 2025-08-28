// expecting time to be a string in the format like '8:15' or '12:30'


// - '0:00' > 'midnight'
// - '12:00' > 'midday'

// - '2:00' > 'two o'clock'
// - '2:03' > 'three past two'
// - '2:11' > 'eleven past two'
// - '2:15' > 'quarter past two' 
// - '2:30' > 'half past two'
// - '2:33' > 'twenty seven to three'
// - '2:40' > 'twenty to three'
// - '2:45' > 'quarter to three' 
// - '2:55' > 'five to three'

/*
15 quarter
 past
30 half past

to 
45 qarter



*/


function convertTimeToWords(time) {
  // TODO: real code goes here!
  
  let hourMap = {
    '1': "one",
    '2': "two",
    '3': "three",
    '4': "four",
    '5': "five",
    '6': "six",
    '7': "seven",
    '8': "eight",
    '9': "nine",
    '10': "ten",
    '11': "eleven",
    '12': "twelve",
    '13': "thirteen",
    '14': "fourteen",
    '15': "fifteen",
    '16': "sixteen",
    '17': "seventeen",
    '18': "eighteen",
    '19': "nineteen",
    '20': "twenty",
    '21': "twenty one",
    '22': "twenty two",
    '23': "twenty three",
    '24': "twenty four",
    '25': "twenty five",
    '26': "twenty six",
    '27': "twenty seven",
    '28': "twenty eight",
    '29': "twenty nine",
  }
  
  if (time === '0:00') {
    return 'midnight';
  }
   if (time === '12:00') {
    return 'midday';
  } 

  let timeSplit = time.split(':')
  let hour = timeSplit[0]
  let minutes = timeSplit[1]

  if (minutes == '00') {
    return hourMap[hour] + ` o'clock`
  }

  if (Number(minutes) <= 30) {
    let mins = hourMap[`${Number(minutes)}`]
    if (minutes == '15') {
      mins = 'quarter'
    }
    else if (minutes == '30') {
      mins = 'half'
    }
    return mins + ` past ${hourMap[hour]}`
  }
  
  else {
    let til = `${60 - Number(minutes)}`
    let mins = hourMap[til]

    if (til == '15') {
      mins = 'quarter'
    }
    else if (til == '30') {
      mins = 'half'
    }
    return mins + ` to ${hourMap[`${Number(hour) + 1}`]}`
  }




  return 'half past eight';
}

module.exports = { convertTimeToWords };