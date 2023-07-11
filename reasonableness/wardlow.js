function iosStopAndFriskLegal(
    isInHighCrimeArea, 
    didPersonFlee
){
    //if teh preson is in a high crime area and feld upon seeing the police officer 
    //the stop is legal 
    if(isInHighCrimeArea && didPersonFlee){
        return true;
    }

    //otherwise the stop is illegal 
    return false;
}