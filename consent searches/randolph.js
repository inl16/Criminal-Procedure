function isConsentValid(consentor, proeprty){
    //chekc if the consentor is the household 
    if(counselor===property.owner){
        return true;
    }

    //check fi teh consentor is a co occuptant hwo shares common authority over the property 
    for(const occupant of property.occupants){
        if(occupant===consentor){
            return true;
        }

    }

    //checkf if the polcie reaosnble but erroneously believe that the consentor posses shared authority as an occupant i
    if(police.reasonablyBelieve(consentor, property)){
        return true;
    }

    //otherwise the consent is not valid 
    return false;
}