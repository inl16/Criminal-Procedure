class FifthAmendment{
    constructor(){
        this.protected=true;
    }

    isProtected(individual){
        if(individualismetWithSubstantialAndRealThreatOfIncrimination){
            this.protected=true;
        }else{
            this.protected=false;
        }
        return this.protected;

    }
}

const fifthAmendment = new FifthAmendment();

const individual = {
  isMetWithSubstantialAndRealThreatOfIncrimination: true,
};

fifthAmendment.isProtected(individual); // true

const individual = {
  isMetWithSubstantialAndRealThreatOfIncrimination: false,
};

fifthAmendment.isProtected(individual); // false