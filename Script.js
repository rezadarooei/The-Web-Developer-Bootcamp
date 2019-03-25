/*console.log("Hello world");
var Year=2016-26;
console.log(Year)
//if else statement
var name="John";
var Age=25;
var Ismarried=false;
if(Ismarried==true){
	console.log("hurraaa");
}
else{
	console.log("you will marrid soon")
}

var Job=prompt("What is John Job?");
switch(Job){
	case "Teachear":
	
		console.log("He is teachear");
		break;
	case "Driver":
			console.log("He is Driver");
			break;
	 default:
			console.log("He did something else");
			break;
	}
*/
/*
var HieghtMilad=175;
var HieghtReza=180;
var AgeMilad=27;
var AgeReza=27;
var ScoreMilad=HieghtMilad+5*AgeMilad;
var ScoreReza=HieghtReza+5*AgeReza;
var WinnerScore=prompt("winner score?");
if(ScoreReza>ScoreMilad){
	console.log("Reza win")
}
else{
	console.log("milad win")
}
*/
// function CalculateAge(BirthAge){
// 	var age=2019-BirthAge;
// 	return age;
// }
// var BirhofJohn=1991;
// var JohnAGe=CalculateAge(BirhofJohn);
// console.log(JohnAGe);
// var Reza={
// 	Name:"Reza",
// 	Famiy:"Darooei",
// 	Age:27,
// 	Job:"Student",
// 	IsmARRIED:false
// };

// var Melisa=new Object();

// Melisa.Age=28;
// Melisa.Sex="Wmoan";
// console.log(Melisa);


// var Reza={
// 		Name:"Reza",
// 		Famiy:"Darooei",
// 		Age:27,
// 		Job:"Student",
// 		family:["ali","Hassan","Naser"],
// 		IsmARRIED:false,
// 		FuncAge: function(BirthYear){
// 				return 2019-BirthYear;
// 		}
// 	};
	
// 	console.log(Reza.FuncAge(1991));

//Loops
// for(var i=0;i<10;i++)
// {
// 	console.log(i);

// }

// var Names=["John","Micheal","Bob","Peter","Elf"];
// // for(var i=0;i<Names.length;i++)
// // {
// // 	console.log(Names[i]);
// // }
// for(var i=Names.length;i=>0;i--)
// {
// 	console.log(Names[i]);
// }


// var yearsOfBorn=[1991,2000,1986];
// var Ages=[];
// for(var i=0;i<yearsOfBorn.length;i++){
// 	var age=2019-yearsOfBorn[i];
// 	Ages[i]=age;
// }
// for(var i=0;i<Ages.length;i++){
// 	if(Ages[i]>=18)
// 	{
// 		console.log(true);
// 	}
// }

function PrintFullAge(YearsOfBorn)
{
	var Ages=[];
	var Condtions=[];
	for(var i=0;i<YearsOfBorn.length;i++)
	{
		var age=2019-YearsOfBorn[i];
		Ages[i]=age;
	}

	for(var i=0;i<Ages.length;i++){
		if(Ages[i]>=18)
		{
			var cond=true;
			 Condtions[i]=cond;
			 
		}
		else{
			var cond=false;
			 Condtions[i]=cond;
		}
	}
	return Condtions;

}

console.log(PrintFullAge([1992,2220,1090]));