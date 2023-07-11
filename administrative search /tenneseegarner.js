function isUseOfDeadlyForceReasonable(suspect){
    //check if the supec tis are 
    if(!suspect.isArmed()){
        //the use of deadly force is not justified 
        return false;
    }

    //check if the suspet passes a danger to others 
    if(!suspect.posesDangerToOthers()){
        //the use of deadly force is not justified 
        return false;
    }

    //chekc if the officer coudl ahve apprheneded the suspect 
    //without using deadly force 
    if(suspect.coudHaveBeenApprehnedeWithoutDeadlyForce()){
        //the use of deadly force isnot justified 
        return false;
    }

    //the use of deadly force is justiifed
    return true;
}

function isSuspectArmed(){
    ///checkf if the supset is armed 
    return suspect.hasWeapon();
}

function suspecPossessDangerToOthers(){
    //chekc i the suspect poses a danger() ot others 
    return suspect.hasIntentToHarmOthers();

}

function suspectCouldHaveBeenApprehendedWithoutDeadlyForce(){
    //chekc if the offiver oculd have apprehened the susepct without use of deadly force
    return suspect.isNotEscapingsAndCanBeApprehendedWithoutDeadlyForce();
}