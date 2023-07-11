class Person{
    constructor(name){
        this.name=name;
    }

    hasExpecationOfPrivacy(){
        // aperson doe snot have an execationy of privacy in their garbage 
        return false;
    }
}

class PoliceOfficer{
    constructor(){
        this.isUndercover=false;

    }

    searchGarbage(){
        // apolice office rcna search a person garbage without a warrnant 
        return true;
    }
}

class Court{
    constructor(){
        this.judge= new Judge();

    }

    decideCase(person, policeOfficer){
        if(person.hasExpecationOfPrivacy() && policeOfficer.searchGarbage()){
            // teh court will rule in favor of the police officer 
            return true;
        }else{
            // the court will rule in favor of the person 
            return false;
        }
    }
}

class Judgge{
    constructor(){
        this.isBiasedAgainstPolice=false;
    }

    decideCase(person, policeOfficer){
        if(this.isBiasedAgainstPolice){
            // teh rule rule against the police officer 
            return false;
        }else{
            // the judge will rule in favor of the police officer 
            return true;
        }
    }
}

// Create the parties
var person = new Person("John Doe");
var policeOfficer = new PoliceOfficer();

// Create the court
var court = new Court();

// Simulate the events of the case
var isPersonHasExpectationOfPrivacy = person.hasExpectationOfPrivacy();
var isPoliceOfficerSearchingGarbage = policeOfficer.searchGarbage();

// Simulate the judge's decision
var isCaseRuledInFavorOfPolice = court.decideCase(person, policeOfficer);

// Print the results
if (isCaseRuledInFavorOfPolice) {
  console.log("The court has ruled in favor of the police officer.");
} else {
  console.log("The court has ruled in favor of the person.");
}