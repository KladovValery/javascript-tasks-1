var hours = process.argv[2];
var minutes = process.argv[3];
var numbers = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'X'
}

if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60  && Math.floor(hours) == hours && Math.floor(minutes) == minutes)
{
	console.log("%s%s:%s%s",
	            numbers[(Math.floor(hours / 10)* 10)],
	            numbers[(hours % 10)],
	            numbers[(Math.floor(minutes / 10)* 10)],
	            numbers[(minutes % 10)]);
}
else console.log("Время указано не верно");
