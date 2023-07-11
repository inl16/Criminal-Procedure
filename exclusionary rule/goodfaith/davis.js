function isSearchSubjectToExclusionaryRule(search, precedent) {
    // Check if the search was conducted in objectively reasonable reliance upon binding appellate precedent.
    if (!searchWasConductedInObjectivelyReasonableRelianceUponBindingAppellatePrecedent(search, precedent)) {
      // The search was not conducted in objectively reasonable reliance upon binding appellate precedent.
      return true;
    }
  
    // Check if the precedent has since been overruled.
    if (precedentHasSinceBeenOverruled()) {
      // The precedent has since been overruled.
      return true;
    }
  
    // The search was conducted in objectively reasonable reliance upon binding appellate precedent that has not since been overruled.
    return false;
  }
  
  function searchWasConductedInObjectivelyReasonableRelianceUponBindingAppellatePrecedent(search, precedent) {
    // Check if the police had a reasonable belief that the search was valid.
    if (!policeHadReasonableBeliefThatSearchWasValid(search, precedent)) {
      // The police did not have a reasonable belief that the search was valid.
      return false;
    }
  
    // Check if the police made a reasonable effort to verify the validity of the search.
    if (!policeMadeReasonableEffortToVerifyValidityOfSearch(search, precedent)) {
      // The police did not make a reasonable effort to verify the validity of the search.
      return false;
    }
  
    // The police had a reasonable belief that the search was valid and made a reasonable effort to verify the validity of the search.
    return true;
  }
  
  function policeHadReasonableBeliefThatSearchWasValid(search, precedent) {
    // Check if the police were aware of the precedent.
    if (!policeWereAwareOfPrecedent()) {
      // The police were not aware of the precedent.
      return true;
    }
  
    // Check if the police reasonably believed that the precedent was still valid.
    if (!policeReasonablyBelievedThatPrecedentWasStillValid()) {
      // The police did not reasonably believe that the precedent was still valid.
      return false;
    }
  
    // The police were aware of the precedent and reasonably believed that the precedent was still valid.
    return true;
  }
  
  function policeMadeReasonableEffortToVerifyValidityOfSearch(search, precedent) {
    // Check if the police checked the precedent against a database of overruled precedents.
    if (!policeCheckedPrecedentAgainstDatabaseOfOverruledPrecedents()) {
      // The police did not check the precedent against a database of overruled precedents.
      return false;
    }
  
    // The police checked the precedent against a database of overruled precedents.
    return true;
  }
  
  function policeCheckedPrecedentAgainstDatabaseOfOverruledPrecedents() {
    // Check if the police have access to a database of overruled precedents.
    if (!policeHaveAccessToDatabaseOfOverruledPrecedents()) {
      // The police do not have access to a database of overruled precedents.
      return false;
    }
  
    // Check if the police searched the database of overruled precedents for the precedent.
    if (!policeSearchedDatabaseOfOverruledPrecedentsForPrecedent()) {
      // The police did not search the database of overruled precedents for the precedent.
      return false;
    }
  
    // The police have access to a database of overruled precedents and searched the database for the precedent.
    return true;
  }
  
  function policeHaveAccessToDatabaseOfOverruledPrecedents() {
    // This is a policy decision that should be made by the police department.
    return true;
  }
  
  function policeSearchedDatabaseOfOverruledPrecedentsForPrecedent() {
    // This is a policy decision that should be made by the police department.
    return true;
  }