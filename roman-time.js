var hours = process.argv[2];
var minutes = process.argv[3];
function RomanTime (number) {
	switch (number) {
		default:
			return "";
		case 1:
			return "I";
			break;
		case 2:
			return "II";
			break;
		case 3:
			return "III";
			break;
		case 4:
			return "IV";
			break;
		case 5:
			return "V";
			break;
		case 6:
			return "VI";
			break;
		case 7:
			return "VII";
			break;
		case 8:
			return "VIII";
			break;	
		case 9:
			return "IX";
			break;
		case 10:
			return "X";
			break;
		case 20:
			return "XX";
			break;
		case 30:
			return "XXX";
			break;
		case 40:
			return "XL";
			break;
		case 50:
			return "L";
			break;
			}
	}
if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60)
{
	console.log("%s%s:%s%s", RomanTime(Math.floor(hours / 10)* 10), RomanTime(hours % 10), RomanTime(Math.floor(minutes / 10)* 10), RomanTime(minutes % 10));
	}
else console.log("Время указано не верно");	
