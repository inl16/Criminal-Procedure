class Person{
    constructor(name){
        this.name=name;



    }

    hasExpectationOfPrivacy(){
        // A person has an expection of privacy in their cell phone location 
        return true;
    }
}

class PoliceOfficer{
    constructor(){
        this.isUndercover=false;
    }

    obtainCellSiteLocationInformation(){
        // apolice officer cnanot obtain a person cell site location informatoin without a warrant 
        return false;

    }
}

class Court{
    constructor(){
        this.judge = new Judge();
    }

    decideCase(person, policeOfficer){
        if(person.hasExpectationOfPrivacy()&& policeOfficer.obtainCellSiteLocationInformation()){
            // the court will rule in favor of the person 
            return true;
        }else{
            // the court will ruel in favor fo teh police officer 
            return false;
        }
    }
}

class Judge{
    constructor(){
        this.isBiasedAgainstPolice=false;
    }

    decideCase(person, policeOfficer){
        if(this.isBiasedAgainstPolice){
            // teh judge wil rule against the police officer 
            return false;

        }else{
            // the jduge will rule in favor of the police officer 
            return true;
        }
    }
}
// create the parties 
var person = new Person("Carpenter");
var policeOfficer = new PoliceOfficer();

// create the court 
var court = new Court();

// simulate the events fo the case 
var isPersonHasExpecationOfPrivacy= person.hasExpectationOfPrivacy();
var isPoliceOffcicerObtainingCellSiteLocationInformation = policeOfficer.obtainCellSiteLocationInformation();

// simluar the judge decion 
var isCaseRuledInFavorOfPerson = court.decideCase(person,policeOfficer);


//print the result 
if(isCaseRuledInFavorOfPerson){
    console.log('the court has reule din favor of the person ');
}else{
    console.log("the court has reuled in favor fo the police ")
}