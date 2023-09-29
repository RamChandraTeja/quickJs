const currentTime = new Date()
const oneHourAhead = currentTime.getTime()+(60*60*1000);
const lateDate =new Date(oneHourAhead).toTimeString()
console.log({currentTime:currentTime.toTimeString()},{lateDate});