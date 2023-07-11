class Hoffa{
    constructor(){
        this.fourthAmendmentRights=true;
        this.fifthAmendmentRights=true;
        this.sixthAmednmetRights=true;
    }

    isFourthAmendmentRightsViolated(informant){
        if(informant){
            this.fourthAmendmentRights=false;
        }else{
            this.fourthAmendmentRights=true;
        }

        return this.fourthAmendmentRights;
    }

    isFifthAmendmentRightsViolated(coercion){
        if(coercion){
            this.fifthAmendmentRights=false;
        }else{
            this.fifthAmendmentRights=true;
        }

        return this.fifthAmendmentRights;
    }

    isSixthAmendmentRightsViolated(informant){
        if(informant){
            this.sixthAmednmetRights=false;
        }else{
            this.sixthAmednmetRights=true
        }
        return this.sixthAmednmetRights;
    }
}

const hoffer =new Hoffa();

console.log(hoffer.isFourthAmendmentRightsViolated(true)); // false
console.log(hoffer.isFifthAmendmentRightsViolated(true)); // true
console.log(hoffer.isSixthAmendmentRightsViolated(true)); // true
