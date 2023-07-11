function isTrafficStopLegal(
    anonymousTip, 
    tipCorroborated, 
    observedBehavior
){
    //if teh tup is not anonymous and is corroborated , the stop is legal 
    if(!anonymousTip&&tipCorroborated){
        return true;
    }

    ///if the tiip is anonymous and is corroboarted by observed behavior the stop is legal 
    if(anonymousTip && tipCorroborated && observedBehavior){
        return true;
    }

    //otherwise teh stop is illegal 
    return false;
}