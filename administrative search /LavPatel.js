function isSearchReasonable(search){
    //check if th serach is conduted wit a warrant 
    if(!SearchWithAWarrant(search)){
        //the search is unreable 
        return false;
    }

    //check if the warrant is supported by probable cause 
    if(!isWarrantSupportedByProbableCause(searcih)){
        //the search is unreasonable 
        return false;
    }

    //theh search is reasonable 
    return true;
}

function isSearchWithAWarrant(search){
    //chek if the serach is conducted with a warrnat
    if(!search.includes("with a warrant")){
        // the serach is not consduted iwth a warran t
        return false;


    }

    /// the serahc is ocnudocted with a warrant 
    return true;
}


function isWarrantSupportedByProbableCause(search){
    //check if the warrant is supported by probable cause
    if(!search.includes("supported by probable cause")){
        //the warrant is not supproted by probable cause 
        return false;
    }
    //the warrant is supproted by probable cause 
    true;
}