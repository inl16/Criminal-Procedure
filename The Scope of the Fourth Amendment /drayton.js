class Person{
    constructor(name){
        this.name = name;

    }

    hasExpectationOfPrivacy(){
        //  apesn does not have exepcation og priavacy in their convesration wiht other people on a pbulic bus 
        return false;

    }
}

class PoliceOfficer{
    constructor(){
        this.isUndercover(){
            this.isUndercover=false;
        }
    }
    approachPersonOnBus(){
        // a police officer can apprahc a person on a public bus 
        return true;
    }

    askForConsentToSearch(){
        // a police officercan ask a person on a public bus for conset ot search tehm 
        return true;
    }
}

class Court{
    constructor(){
        this.judge=new Judge();

    }

    decideCase(person, policeOfficer){
        if(person.hasExpectationOfPrivacy() && police.PoliceOfficer.approachPersonOnBus()&&policeOfficer.askForConsentToSearch()){
            // the court will rule in favor f thepolice officere 
            return true;
        }else{
            // teh court will rule in favor of the person 
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
            // teh judge will rule agianst he police officer 
            return false;
        }else{
            // teh judge will rule in favor of the police officer 
            return true;
        }
    }
}


//create the parites 
var person = new Person("daryton")
var policeOfficer = new PoliceOfficer();

//create teh court 
var court = new Court();

//simulate teh events of teh case 

var isPersonHasExpecationOfPrivacy=person.hasExpectationOfPrivacy();
var isPoliceOfficerApproachingPersonOnBus = policeOfficer.approachPersonOnBus();
var isPoliceOfficerAskingForConsentToSearch = policeOfficer.askForConsentToSearch();

// Simulate the judge's decision
var isCaseRuledInFavorOfPolice = court.decideCase(person, policeOfficer);

// Print the results
if (isCaseRuledInFavorOfPolice) {
  console.log("The court has ruled in favor of the police officer.");
} else {
  console.log("The court has ruled in favor of the person.");
}