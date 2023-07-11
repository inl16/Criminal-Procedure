function isMirandaViolationTainted(initialStatement, subsequentStatement){
    //chekc if the inital statemnet wa smdae before or aftermIranda Warnings are given 
    if(initialStatement.mirnadaWarningsGiven){
        // if the intial statement was made after the miranda warnigns were given then the statement is not tained 
        return false;
    }else{
        //if the tinial statmenet wa smde before miranda warnings were given then the subsequentstatementmay be tained 
        //check if teh subsequent staemnet was coerced 
        if(subsequentStatement.coerced){
            //if the suspecquent stametn was coerced then it is inadmissible 
            return true;
        }else{
            //if the subsewquent statement was not coercedthen it may be admissilbe 
            return false;
        }
    }
}