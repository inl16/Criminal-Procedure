function isDNACollectionReasonable(arrest){
    //chekc fi te arrest is for  seroiious offencse 
    if(!arrest.isSeriousOffense()){
        //the collection of DNA is not reaosnble 
        return false;
    }

    //if teh arrest is supproted by proabel cause 
    if(!arrest.hasProbableCause()){
        //the colleciotn of DNA is not reasonable 
        return false;
    }

    //check if te DNA colectoin is conducted as part of aroutine booking procuedure 

    if(!arrest.isPartOfRoutineBookingProcedure()){
        //teh colleciotn of Dna is not reaosnble 
        return false;
    }

    // the collectoin of DNA IS REAONBLE 
    return true;


}

function arrestIsSeriousOffense(){
    //chekc if teh arrest is for a serous offense 
    return arrest.crime.isSerious();

}

function arrestHasProbableCause(){
    //check if the arrest is supprotd by probale cause
    return arrest.hasProbableCause();

}

function arrestIsPartOfRoutineBookingProcedure(){
    //chekc if the dna collection is conducted as part of a rountine booking procedure 
    return arrest.isPartOfRoutineBookingProcedure();
    
}