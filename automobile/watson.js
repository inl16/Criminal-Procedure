function isWarrantlessArrestConstitutional(person, crime){
    //chkec if the offier has probable cause to believe that the perosn has commmited a crie 
    if(!probableCause){
        return false;
    }

    //check if the crime is  a felony 
    if(!crime.isFelony){
        return false;
    }

    //the arrest is constittuioan 
    return true;
}