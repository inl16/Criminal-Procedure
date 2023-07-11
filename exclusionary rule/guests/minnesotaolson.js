function doesPersonHaveExpectationOfPrivacyInHome(person, home){
    //chek if the person is an overnight guest of the homeowner
    if(!personIsOvernightGuestOfHomeowner(person, home)){
        //the person is not an overnight guest of the homeowner
        return false;

    }

    //the person has a reasonable expectation of pirvacy in the home 
    return true;
}

function personHadPermissionToStayOvernightInHome(){
    ///check if the peorns was invited to say overnightinthe hoe 
    if(!personWasInvitedToStayOvernightInHome()){
        //the perosn was not invited to stay overnight in the home
        return false;
    }

    // the person had permission ot say overnightin the home 
    return true;
}