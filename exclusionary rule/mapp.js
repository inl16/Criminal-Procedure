function isEvidenceExcluddable(evidence){
    //chek if the eveidnefe was obtaine din violation of the fourth amendment 
    if(!evidneceWasObtainedInViolationOfTheFourthAmendment()){
        //the evidnce is note exluvdable 
        return false;
    }

    //the eevidnece is excludiable 
    return true;
}

function evidneceWasObtainedInViolationOfTheFourthAmendment(){
    //check if the eviedence was botedin without a warrant 
    if(!evidenceWasObtainedWithoutAWarrant()){
        // teh eivdnec ewas obtaiend in violation of the fourthe amenemtn 
        return true;
    }

    ///check if the warrant was not supported by proabel cause 
    if(!evidenceWasObtainedWithoutAWarrantSuppoortedByProbableClause()){
        //teh evidence was obtained in violation of the fourth amendment
        return true;
    }

    //the eivdnece was not obtained in vioaltoin of the fourth amendment 
    return false;


}

function evidenceWasObtainedWithoutAWarrant(){
    //chek if the evidnece was obtaien diwth a warrarant
    return evidence.evidenceWasObtainedWithoutAWarrant();
}

function evidenceWasObtainedWithoutAWarrantSuppoortedByProbableClause(){
    //check if the warrant was uspproted by proabe cause
    return evidence.evidenceWasObtainedWithoutAWarrantSuppoortedByProbableClause();
    
}