const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
	const now = new Date();
	const second = now.getSeconds();
	const minute = now.getMinutes();
	const hour = now.getHours();

	const secDegrees = ((second / 60)*360)+90;
	secondHand.style.transform = `rotate(${secDegrees}deg)`;

	const minDegrees = ((minute / 60)*360)+90;
	minuteHand.style.transform = `rotate(${minDegrees}deg)`;

	const hourDegrees = ((hour / 12)*360)+90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate,1000);


// setInterval(fn, time) - Ustawia opóźnienie do cyklicznego wywoływania określonej funkcji.