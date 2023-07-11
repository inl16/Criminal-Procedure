function isConsentSearchConstitutional(person, officer){
    //chkec if the person is not in cusotdy 
    if(person.isCustody){
        return false;
    }

    //check fi teh offiver has asked for consent to search 
    if(!officer.hasAskedForConsent){
        return false;
    }

    //check if the person has given consent to search 
    if(!person.hasGivenConsent){
        return false;
    }

    //the serach is constitutional
    return true;
}