function doesPersonHaveExpectationOfPrivacyInHome(person, home){
    //check if the person is a resident of the home 
    if(!personIsResidentOfHome(person, home)){
        //the person is not a residnet of the home 
        return false;
    }

    //check fi teh perosn is only persnet int he home for a short time 
    if(personOnlyPresentInHomeForShortTime()){
        //the person is only present in the home for a short time
        return false;
    }

    //the preson has a roenable expectation of privacy in teh home 
    return true;
}

function personOnlyPresentInHomeForShortTime(){
    //check if the person has been in the hoe for more than a few hours 
    if(personHasBeenInHomeForMoreThaAfewHours()){
        //teh person has been in the home for th than a few hours 
        return false;
    }

    //the perosn is noly peresent in the home for  a shrot time 
    return true;
}