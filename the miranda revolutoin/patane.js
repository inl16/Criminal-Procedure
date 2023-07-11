function isPhysicalEvidenceAdmissible(suspect, statements, mirandaWarnings){
    //chekc if the suspect made voluntary statements 
    if(!isStatementsVoluntary(suspect, statements)){
        //the statemnetns are not voluntary 
        return false;
    }

    //check if the suspect was given mirnada warnings 
    if(!isMirandaWarningsGiven(suspect, mirandaWarnings)){
        // the suspect was not given mirnada warnigns 
        return false;
    }

    //the statements are voluntary and the susect was not given miranda warnigs 
    return true;

}

function isMirandaWarningsGiven(suspect, mirandaWarnings){
    //chekc if the suspect was read their mirnada rights 
    if(!suspectWasReadMirandaRights(suspect, mirandaWarnings)){
        // the suspect wa snot given the mrinda warnings 
        return false;
    }

    // the statemnet are ovluntary and the suspectwas not given miranda warnings 
    return true;
}

function isStatementsVoluntary(suspect, statements){
    //check if the ssupset mad eth stuatements freely and without coercion 
    if(suspectWasCoerced(suspect, statements)){
        // the statements were not voluntary 
        return false;
    }

    // the staetment were voluntary 
    return true;
}

function isMirandaWarningsGiven(suspect, mirandaWarnings){
    //chkec if the suspect was read their mirnada rihgt 
    if(!suspectWasReadMirandaRights(suspect, mirandaWarnings)){
        // the supsect was not read their miranda rihgt 
        return false;
    }

    //the suspect was read their mirnda rights 
    return true;
}

function suspectWasCoreced(suspect, statements){
    //chekc if the suspect wa sthreatned prmised or otherwise coerced into mkaing the statemnets 
    if(suspectWasThreatened(suspect, statements)||
    suspectWasPromised(suspect, statements)||
    suspectWasOtherwiseCoerced(suspect,statements)){
        //the suspect was coerced into makign the statmenets 
        return true;
    }

    // the supsec twa snot coereced into making the stamtente 
    return false;
}

function suspectWasThreatened(suspect, statements){
    //chkec if the supsect was threatened with harm if they did not make teh statmenet 
    if(suspectWasThreatenedWithHarm(suspect, statements)){
        //the suspect was threatened with harm 
        return true;
    }

    //the supect was not theratend with harm 
    return false;
}
function suspecWasPromised(suspect, statements){
    //chekc if the suspect wa sprmised somethign if they made the statement 
    if(suspectWasPromisedSomething(suspect, statements)){
        // the supsect was promised somehting 
        return true;
    }

    // the suspect was not proimsed anything 
    return false;
}

function suspectWasOtherwiseCoerced(suspect, statements){
    //chkec if teh suspect was coerced in any other way into making the statements 
    if(suspectWasOtherwiseCoerced(suspect, statements)){
        // the suspect was coerced in some way 
        return true;
    }
    //the suspect was not coerced in any way 
    return false;
}

function suspecWasReadMirandaRights(suspect, mirandaWarnings){
    //chkec if the suspect was read their mirnada right 
    if(suspectWasReadMirandaRights(suspects, mirandaWarnings)){
        // tehsuspect was read their mirnda rights 
        return true;
    }

    //the suspect was not read their miranda rights 
    return false;
}