const tickClock = function(){
	const date = new Date()
	const hr = date.getHours()
	const min = date.getMinutes()
	const sec = date.getSeconds()

	let timeArr = [hr, min, sec]
	
	// convert the time to 12-hour format
	if(timeArr[0] > 11){
		timeArr[0] -= 12
		timeArr[3] = 'PM'
	}
	else{
		timeArr[3] = 'AM'
	}

	secHand = document.querySelector('.sec')
	minHand = document.querySelector('.min')
	hrHand = document.querySelector('.hr')
	sessionHolder = document.querySelector('.session-holder')

	sessionHolder.innerText = timeArr[3]

	// 360 degrees is full rotation
	hrHand.style.setProperty('--rotation', ((timeArr[0] * 30) + (timeArr[1]/60 * 30)))
	// 360 degress divided by 12 hours is 30 degrees per hour. So to get the current hour position
	// we need to multiply the current minute by 60 and then multiply it by 30 degrees. Which means
	// every minute, the hour hand moves by 1/60 of 30 degrees

	minHand.style.setProperty('--rotation', ((timeArr[1] * 6) + (timeArr[2]/60 * 6)))
	// each hour is 60 minutes, so each minute is 6 degrees. To make the minute hand move slightly
	// every second, we need to get the current minutes and multiply it by 6. And then offset it every 
	// second by multiplying the current second by 60 and then multiply it by 6 degrees. Which means
	// every second, the minute hand moves by 1/60 of 6 degrees.

	secHand.style.setProperty('--rotation', (timeArr[2] * 6))
	// each minute is 60 seconds, so each second is 6 degrees, which is a whole 360 degrees after 60 seconds.
}

tickClock()
setInterval(function(){
	tickClock()
}, 1000)