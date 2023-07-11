function isAdministrativeInspectionValid(governmentAgency, property, noticeGiven){
    //chkec if the governemnet agnecy has a legitimategovenrment purpose for the inspection
    if(governmentAgency.legitimateGovernmentPurpose){
        return true;
    }

    //check fi the inspection is not intrustive onon the privacy of the occuprant 
    if(inspection.notIntrusiveOnPrivacy){
        return true;
    }

    //chekc if the government agnecy gave advance notice of the inspection
    if(noticeGiven){
        return true;
    }

    //otherwise the inspection is not vlaid 
    return false;
}