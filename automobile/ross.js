class WarrantlessSearch{
    constructor(){
        this.isReasonableUnderTheFourthAmendment =false;

    }

    isReasonable(vehicle,probableCause){
        if(probableCause){
            this.isReasonableUnderTheFourthAmendment=true;
        }else{
            this.isReasonableUnderTheFourthAmendment=false;
        }
    }

    toString(){
        return `Warrantless Search: {isReasonableUnderTheFourthAmendment: ${this.isReasonableUnderTheFourthAmendment}}`;

    }
}

class Vehicle {
    constructor(licensePlateNumber, make, model, year ){
        this.licensePlateNumber=licensePlateNumber;
        this.make=make;
        this.model=model;
        this.year=year;
    }

    toString(){
        return `Vehicle: {licensePlateNumber: ${this.licensePlateNumber}, make: ${this.make}, model: ${this.model}, year: ${this.year}}`;
    }
}

class probableCause{
    constructor(){
        this.isPresent=false;
    }

    isPresent(vehicle){
        if(vehicle.licensePlateNumber==='it is the one '){
            this.isPresent=true;
        }else{
            this.isPresent=false;
        }

        
    }

    toString() {
        return `Probable Cause: {isPresent: ${this.isPresent}}`;
      }
    }
    
    const warrantlessSearch = new WarrantlessSearch();
    const vehicle = new Vehicle("ABC123", "Toyota", "Camry", 2023);
    const probableCause = new ProbableCause();
    
    console.log(warrantlessSearch.isReasonable(vehicle probableCause)); // true
}



