class FifthAmendment{
    constructor(){
        this.protected=false;

    }
    isProtecetd(individual){
        if(individual.KeepProduceRecords){
            this.isProtecetd=false;
        }else{
            this.protected=true;
        }
        return this.protected;

    }
}


const fifthAmendment = new FifthAmendment();

const individual = {
  isRequiredByLawToKeepAndProducePublicRecords: true,
};

fifthAmendment.isProtected(individual); // false

const individual = {
  isRequiredByLawToKeepAndProducePublicRecords: false,
};

fifthAmendment.isProtected(individual); // true