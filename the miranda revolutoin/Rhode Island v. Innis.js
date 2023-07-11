function isInCustody(suspect, circumstances){
    //first check wheter the supect was formally arrested 
    if(suspect.isArrested){
        return true;
    }
    //otherwise check whether teh supsect freedom of movmeent was restrained to the degree with a formal arrest 
    if(circumstances,restrainFreedomOfMovement){
        return true;

    }
    //finally check wheter the suspect is a child 
    if(suspect.isChild){
        //children are more likely to ell presseured 
        //to do that well aska  roansble perosn whether a child iin the suspects situatoin would have felt free to leave 
        return reasonablPerson(suspect,circumstances, {isChild: true});

    }
    // if the supsect is not a child then we can assume that they woudl ahve felt free to leave 
    return false;
}

function isInterrogation(suspect, circumstances){
    //firs cheic whete rht epolice officer wer asking the supsect questoins 
    if(circumstances.isAskingQuestions){
        return true;
    }
    //otherwis chekc whethr eht police officers were creating were creating a coercive atmosphere 
    if(circumstances.isCoerciveAtmosphere){
        return true;

    }
    //finally chekc whether the suspect felt presseud to answer questoin 
    if(circumstances.suspectFeelsPressured){
        return true;
    }
    //if the suspect did not feel pressued to answer questions then we cna asume that the police offiver were not interrogatin ghtem 
    return false;



}
