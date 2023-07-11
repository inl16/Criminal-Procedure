class MirandaWaiver {

    constructor() {
      this.valid = true;
      this.invoked = false;
      this.publicSafetyException = false;
    }
  
    isWaiverValid(deception, noInform) {
      if (deception || noInform) {
        this.valid = false;
      } else {
        this.valid = true;
      }
      return this.valid;
    }
  
    isInvoked(invoke) {
      this.invoked = invoke;
      return this.invoked;
    }
  
    isWaiverRevocable(revocable) {
      if (revocable) {
        this.valid = false;
      } else {
        this.valid = true;
      }
      return this.valid;
    }
  
    isInterrogationValid(invoked, hasBeenGivenAccessToCounsel) {
      if (invoked && !hasBeenGivenAccessToCounsel) {
        return false;
      } else {
        return true;
      }
    }
    isWitnessTestimonyAvailable(wtinessName, invoked, hasBeenGivenAccessToCounsel){
        if(invoked && !hasBeenGivenAccessToCounsel){
            return false;
        }else{
            return true;
        }

    }
    isPublicSafetyException(publicSafety){
        this.publicSafetyException=publicSafety;
        return this.publicSafetyException;
    }

} 

const mirandaWaiver = new MirandaWaiver();

console.log(mirandaWaiver.isWaiverValid(true, true)); // false
console.log(mirandaWaiver.isWaiverValid(true, false)); // true
console.log(mirandaWaiver.isWaiverValid(false, true)); // true
console.log(mirandaWaiver.isWaiverValid(false, false)); // true

console.log(mirandaWaiver.isInvoked(true)); // true
console.log(mirandaWaiver.isInvoked(false)); // false

console.log(mirandaWaiver.isWaiverRevocable(true)); // false
console.log(mirandaWaiver.isWaiverRevocable(false)); // true

console.log(mirandaWaiver.isInterrogationValid(true, false)); // false
console.log(mirandaWaiver.isInterrogationValid(false, false)); // true

console.log(mirandaWaiver.isWitnessTestimonyAdmissible("John Doe", true, false)); // false
console.log(mirandaWaiver.isWitnessTestimonyAdmissible("Jane Doe", false, false)); // true

console.log(mirandaWaiver.isPublicSafetyException(true)); // true
console.log(mirandaWaiver.isPublicSafetyException(false)); // false