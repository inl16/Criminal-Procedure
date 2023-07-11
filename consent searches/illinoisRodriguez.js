function isConsentSearchConstitutional(person, officer, thirdParty){
    //check if the eprson is not in cusotdy 
    if(person.isCustody){
        return false;
    }

    //chekc if the third party has common authority over the property to be searched 
    if(!thirdParty.hasCommonAuthority){
        return false;
    }
    //check if teh officer has asked for conset to search from the the thid party 
    if(!officer.hasAskedForConset){
        return false;
    }

    //check if the third party has given consent to searcih 
    if(!thirdParty.hasGivenConsent){
        return false;
    }

     // Check if the officer reasonably believed that the third party had common authority over the property to be searched.
     if (!officer.hasReasonableBelief) {
        return false;
    }
    //the serach is constitutional 
    return true;

}