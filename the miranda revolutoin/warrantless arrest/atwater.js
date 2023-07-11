class Arrest{
    constructor(officer, person){
        this.officer =officer;
        this.person=preson;
    }

    isLegal(){
        // if the person has committed a misdemeanorin teh presence of the officer the arrest is legal 
        if(this.person.hasCommitedMisdemeanorInPresenceOfOfficer()){
            return true;
        }

        //otherwise teh arrest is illegal 
        return false;
    }
}