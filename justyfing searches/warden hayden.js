class ExigentCircumstances {
    constructor(evidence, governmentAction) {
      this.evidence = evidence;
      this.governmentAction = governmentAction;
    }
  
    isExigentCircumstances() {
      // Check if the government action was necessary to prevent the destruction of evidence or the escape of the suspect.
      return this.governmentAction.type === "preventDestructionOfEvidence" || this.governmentAction.type === "preventEscapeOfSuspect";
    }
  }
  
  class Search {
    constructor(governmentAction) {
      this.governmentAction = governmentAction;
    }
  
    isSearch() {
      // Check if the government action constitutes a physical intrusion on private property.
      return this.governmentAction.type === "physicalIntrusion";
    }
  }
  
  class Evidence {
    constructor(governmentAction, evidence) {
      this.governmentAction = governmentAction;
      this.evidence = evidence;
    }
  
    isAdmissible() {
      // Check if the evidence was obtained in violation of the Fourth Amendment.
      if (this.governmentAction.isSearch()) {
        // Check if the evidence was obtained under exigent circumstances.
        if (this.governmentAction instanceof ExigentCircumstances) {
          return true;
        }
  
        // If the evidence was not obtained under exigent circumstances, then it is not admissible.
        return false;
      }
  
      // If the evidence was not obtained in violation of the Fourth Amendment, then it is admissible.
      return true;
    }
  }