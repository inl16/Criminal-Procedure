class ExigentCircumstances{
    constructor(evidence, governmentAction){
        this.evidence=evidence;
        this.governmentAction=governmentAction;
    }

    isExigentCirucmstances(){
        //chekc if the government aciton was necsseary to prevent the destruction of evidence 
        return this.governmentAction.type ==='prevent destruciton of evidence';

    }


}

class Evidence{
    constructor(governmentAction, evidence ){
        this.governmentAction=governmentAction;
        this.evidenc= evidence;
    }

    isAdmissible(){
        //check if the evidne was boatiend in violation of the fourth amendment 
        if(this.governmentAction.isSearch()){
            return false;
        }

        // check if teh evidence wa sbotaine under exigent circumstaces 
        if(this.governmentAction instanceof ExigentCircumstances){
            return true;
        }

        // if the evidnece was not obtaiend in violation of the fourth amendmentand was not obatined under exigent cirucmstances 
        return true;
    }
}