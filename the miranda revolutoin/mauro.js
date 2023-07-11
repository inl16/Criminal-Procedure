function isStatemenAdmissible(suspect, spouse, circumstances){
    if(circumstances.isInCustody){
        //if the suspect ws in police cuosdy thent he statement are not admissile unless the suspects initiated the conversation
        return !spouse.initiatedConversation;

    }else{
        //if the suspect was not in police custody then the statemnetnare always admissible 
        return true;
    }

}