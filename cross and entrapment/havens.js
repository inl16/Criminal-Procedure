class ImpeachmentException{
    constructor(illegallyObtainedEvidence, goverenmentCaseInChief){
        this.illegallyObtainedEvidence=illegallyObtainedEvidence;
        this.goverenmentCaseInChief=goverenmentCaseInChief;

        isAdmissible(){
            //chekc if the govermnt obtained evidece was suppressd in the case in cheif 
            if(!this.goverenmentCaseInChief){
                // the illegaly obtaiend evidence was not supprssed in the government case in chief 
                return false;
            }

            //check if the defenant testifeied falseely in response to appropriatequestion on cross examination 
            if(!this.illegallyObtainedEvidence){
                ///the defnat did nto tesitfy falasey in responseto approparite questioning on cross exmaination 

                return false;
            }

            //the illaly obtaine devidence is admissble for impeachment purposes 
            return true;
        }
    }

}


function isEvidenceAdmissibleForImpeachment(illegallyObtainedEvidence, governmentCaseInChief) {
    // Create a new ImpeachmentException object.
    const impeachmentException = new ImpeachmentException(illegallyObtainedEvidence, governmentCaseInChief);
  
    // Check if the ImpeachmentException object is admissible.
    return impeachmentException.isAdmissible();
}

