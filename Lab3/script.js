class NameAndYear{


	constructor(name,year){
		this.name=name;
		this.year=year;
	}
}

class Park extends NameAndYear {
    constructor(name, year, NoOfTrees, ParkArea) {
        super(name, year);
        this.NoOfTrees = NoOfTrees;
        this.ParkArea = ParkArea;

    }

    ParkDensity(){

    	return this.NoOfTrees/this.ParkArea;
    }


   AgeofPark(){
    
    let Age= new Date().getFullYear() - this.year;
    return Age;
   }

}

let Park1 = new Park('Park1', 2005, 200, 0.3);
let Park2 = new Park('Park2', 2010, 1200, 1.5);
let Park3 = new Park('Park3', 2015, 900, 3.8);


let ParkArray = [Park1, Park2, Park3];


   function AverageAgeofPark(){

    	var TotalAgeOfPark=0;
    	ParkArray.forEach((data) => {

    		TotalAgeOfPark+=data.AgeofPark();

    	});
   
      console.log(`Average age of Park is ${Math.round(TotalAgeOfPark / 3)} years`);

    }

  function DesnityofPark() {
    for (let i of ParkArray) {
        console.log(`The Tree Density of ${i.name} is ${Math.round(i.ParkDensity())} per square km`);
    }
}


function ParkName(){

	ParkArray.forEach((data) => {

    		 if (data.NoOfTrees >= 1000) {
               console.log(`${data.name}: has a  ${data.NoOfTrees} trees`);
    }
    	});

}

console.log("--------PARK REPORT--------")
DesnityofPark();
AverageAgeofPark();
ParkName();



// STREET

class Street extends NameAndYear {
    constructor(name, year, StreetLength, Size = 'normal') {
        super(name, year);
        this.StreetLength = StreetLength;
        this.Size = Size;

    }

}

const STREET1 = new Street('STREET1', 2000, 300);
const STREET2 = new Street('STREET2', 2005, 1300, 'huge');
const STREET3 = new Street('STREET3', 2010, 1100, 'big');
const STREET4 = new Street('STREET4', 2015, 100, 'small');


let StreetArray = [STREET1, STREET2, STREET3, STREET4];


function TotalAndAverage() {
    let TotalLength = 0;
    StreetArray.forEach((data) => {

    		TotalLength+=data.StreetLength;

    	});
    
    console.log(`The total length of the town's streets is ${TotalLength} meters and the average length is ${TotalLength / 4} meters`);
}

function SizeClassification(){

		StreetArray.forEach((data) => {
		    console.log(`The size of ${data.name} is ${data.Size}`);
		});

}
console.log("--------STREET REPORT--------")
TotalAndAverage();
SizeClassification();