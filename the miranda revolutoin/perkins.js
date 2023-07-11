function isStatemenAdmissible(suspect, officer, circumstances){
    //first chcek whether the suspect is in jail 
    if(circumstances.isJailed){
        return !isInterrogation(suspect, officer, circumstances);

    }else{
        //if the suspect is not in jail then the statement are not admissible 
        return false;

    }

}

function isInterrogation   (suspect, officer, circumstances){
    //first check wehter the the officer is asking the suspect questoins 
    if(circumstances.isAskingQuestions){
        return true;

    }
    //otherwise chekc whether the officer is creating a coercvive atmosphere 
    if(circumstances.isCoerciveAtmosphere){
        return true;

    }
    //finally check whether the suspect feels pressued to anwer teh questions
    if (circumstances.suspectFeelsPressured){
        return true;

    }
    //if the suspect does not feel pressured to asnwer questoin the wwe can asusemt hat tthe offiver is not interrogating them 

}   