class Person{
    constructor(name){
        this.name=name;
    }
    hasExpectationOfPrivacy(){
        // apseron has expection of privacy in their conversation with other people
        return true;
    }
}

class PoliceOfficer{
    constructor(){
        this.isUndercover=false;
    }

    wearRadioTransmitter(){
        if(this.isUndercover){
            // an undercover police officer can wear a radio to monitor conversation
            return true;
        }else{
            // a non-undercover police offiver cannot wear a radio to monitor conversation 
            return false;
        }
    }
}

class Court{
    constructor(){
        this.judge= newJudge();
    }

    decideCase(person, policeOffier){
        if(person,hasExpectationOfPrivacy()&& policeOffier.wearRadioTransmitter()){
            // TEH COURT WILL RULE in favor f the police officer 
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
            // the judge will rule agianst ht epolice officer 
            return false;
        }else{
            // the judge will rule in favor of the police officer 
            return true;
        }
    }
}

//create the parties 
var person = new Person('wealth');
var policeOfficer = new PoliceOfficer();

//create teh court 
var court = new Court();

// simulate teh events of teh case 
var isPersonHasExpecationOfPrivacy = person.hasExpectationOfPrivacy();
var isPoliceOfficerWearingRadioTransmitter = policeOfficer.wearRadioTransmitter();


// simultae the udges decision 
var isCaseRuledInFavorOfPolice = court.decideCase(person, police);
// print the results 
if(isCaseRuledInFavorOfPolice){
    console.log("the court has ruled in favor of the police officer");
    
}else{
    console.log("the court has reuld in favor fo teh person")
}
