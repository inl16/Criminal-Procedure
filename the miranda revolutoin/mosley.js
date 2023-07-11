class MirandaWaiver {

    constructor() {
      this.valid = true;
      this.invoked = false;
    }
  
    isWaiverValid(deception, noInform) {
      if (deception || noInform) {
        this.valid = false;
      } else {
        this.valid = true;
      }
      return this.valid;
    }

    isInvoked(invoke){
        this.invoked=invoke;
        return this.invoked;

    }

    isWaiverRevocable(revocable){
        if(revocable){
            this.valid=false;
        }else{
            this.valid=true;
        }
        return this.valid;
    }
}
console.log(mirandaWaiver.isWaiverValid(true, true)); // false
console.log(mirandaWaiver.isWaiverValid(true, false)); // true
console.log(mirandaWaiver.isWaiverValid(false, true)); // true
console.log(mirandaWaiver.isWaiverValid(false, false)); // true

console.log(mirandaWaiver.isInvoked(true)); // true
console.log(mirandaWaiver.isInvoked(false)); // false

console.log(mirandaWaiver.isWaiverRevocable(true)); // false
console.log(mirandaWaiver.isWaiverRevocable(false)); // true
