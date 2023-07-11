function isConsentSearchConstitutional(person, officer, thirdParty){
    //chekc if teh person is not in cusodty 
    if(person.isCustody){
        return false;
    }

    //chekc if the third party has common authorityover the proeprty ot be serach 
    if(!thirdParty.hasCommonAuthority){
        return false;
    }

    //check if the offiver has asked for consent to search form third party 
    if(!officer.hasAskedForConsent){
        return false;
    }

    //check if the third party has given consent to search 
    if(!thirdParty.hasGivenConsent){
        return false;
    }

    //the search is constitutional
    return true;
}