class Police{
    constructor(address, probableCause, exigentCircumstances){
        this.address = address;
        this.probableCause = probableCause;
        this.exigentCircumstances = exigentCircumstances;
    }

    search(home){
        if(!this.probableCause && !this.exigentCircumstances){
            return false;
        }
        var dog=new Dog();
        if(dog.sniff(home)){
            return true;
        }
        return false;
    }
}

class Dog{
    constructor(){

    }

    sniff(home){
        //chekc if the dog is trained to snifffor drugs 
        if(!this.isWithinSniffingRange(home)){
            return false;

        }
        //check if the dog alerts to teh presnt of drugs 
        if(this.alertedToDrugs){
            return true;
        }
        return false;
    }

    isTrainedToSniffForDrugs(){
        return true;
    }

    isWithinSniffingRange(home){
        return true;
    }
    isAbleToAcces(home){
        return true;
    }

    sniffHome(){
        //the dogs sniffs the home and alerts to presence of drugs 
    }
}

var police = new Police('street','town',true, false);
