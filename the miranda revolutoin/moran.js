class MirandaWaiver{
    constructor(){
        this.valid=true;
    }

    isWaiverValid(deception, noInform){
        if(deception(deception||noInform)){
            this.valid=false;
        }else{
            this.valid=true;
        }
        return this.valid

    }

}




const mirandaWaiver = new MirandaWaiver();

console.log(mirandaWaiver.isWaiverValid(true, true)); // false
console.log(mirandaWaiver.isWaiverValid(true, false)); // true
console.log(mirandaWaiver.isWaiverValid(false, true)); // true
console.log(mirandaWaiver.isWaiverValid(false, false)); // true