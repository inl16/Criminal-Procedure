class Immunity{
    constructor(witness, governement){
        this.witness=witness;
        this.governement;

    }

    grantImmunity(){
        ///check if the witness has inovked the fifth amendment right to silence 
        if(this.witnesshasInvokedFifthAmendmentRightToSilence){
                  // The government may compel testimony from the witness by giving that witness immunity from use of both the compelled testimony and any evidence derived from that testimony in a subsequent criminal proceeding.
            return true;
        }

        //the government cannot compel testimony from the wintess 
        return false;
    }
}


function grantImmunity(witness, government) {
    // Create a new Immunity object.
    const immunity = new Immunity(witness, government);
  
    // Check if the Immunity object can grant immunity.
    return immunity.grantImmunity();
  }