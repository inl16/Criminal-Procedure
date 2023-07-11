class FifthAmendment {

    constructor() {
      this.protected = false;
    }
  
    isProtected(individual) {
      if (individual is hasCustodyOfAChildPursuantToACourtOrder && individual is requiredToProduceTheChildByALaterCourtOrder) {
        if (complianceWouldAmountToAnIncriminatingTestimonialStatementAboutTheThingProduced) {
          this.protected = true;
        } else {
          this.protected = false;
        }
      } else {
        this.protected = false;
      }
      return this.protected;
    }
  }
  
  const fifthAmendment = new FifthAmendment();
  
  const individual = {
    hasCustodyOfAChildPursuantToACourtOrder: true,
    isRequiredToProduceTheChildByALaterCourtOrder: true,
    complianceWouldAmountToAnIncriminatingTestimonialStatementAboutTheThingProduced: true,
  };
  
  fifthAmendment.isProtected(individual); // true
  
  const individual = {
    hasCustodyOfAChildPursuantToACourtOrder: true,
    isRequiredToProduceTheChildByALaterCourtOrder: true,
    complianceWouldAmountToAnIncriminatingTestimonialStatementAboutTheThingProduced: false,
  };
  
  fifthAmendment.isProtected(individual); // false
  
  const individual = {
    hasCustodyOfAChildPursuantToACourtOrder: false,
    isRequiredToProduceTheChildByALaterCourtOrder: true,
    complianceWouldAmountToAnIncriminatingTestimonialStatementAboutTheThingProduced: true,
  };
  
  fifthAmendment.isProtected(individual); // false
  