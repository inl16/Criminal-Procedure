function herringRule(evidence, policeAction){
    //check if the police action was negligent 
    if(policeAction.negligent){
        //check if teh polcie acoitn was isolated
        if(policeAction.isolated){
            // the exluionary rule doesnot apply 
            return false;
        }else{
            // the exclusionray rule does appy 
            return true;
        }
    }else{
        //the excluionray rules doesnot appyl 
        return false;
    }
}

function herringVUnitedStates(evidence, warrant) {
    // Check if the warrant is valid.
    if (!warrant.isValid()) {
      // The warrant is not valid.
      return false;
    }
  
    // Check if the police acted in good faith.
    if (policeActedInGoodFaith(evidence, warrant)) {
      // The police acted in good faith.
      return true;
    }
  
    // The police did not act in good faith.
    return false;
  }
  
  function policeActedInGoodFaith(evidence, warrant) {
    // Check if the police had a reasonable belief that the warrant was valid.
    if (policeHadReasonableBelief(evidence, warrant)) {
      // The police had a reasonable belief that the warrant was valid.
      return true;
    }
  
    // The police did not have a reasonable belief that the warrant was valid.
    return false;
  }
  
  function policeHadReasonableBelief(evidence, warrant) {
    // Check if the police made a reasonable effort to verify the validity of the warrant.
    if (policeMadeReasonableEffort(evidence, warrant)) {
      // The police made a reasonable effort to verify the validity of the warrant.
      return true;
    }
  
    // The police did not make a reasonable effort to verify the validity of the warrant.
    return false;
  }
  
  function policeMadeReasonableEffort(evidence, warrant) {
    // Check if the police checked the warrant against a database of revoked warrants.
    if (policeCheckedWarrantAgainstDatabase(evidence, warrant)) {
      // The police checked the warrant against a database of revoked warrants.
      return true;
    }
  
    // The police did not check the warrant against a database of revoked warrants.
    return false;
  }