class EvidenceAdmissibility{
    constructor(evidnce, illegalSearch, indepdendentSourceOfInformation){
        this.evidence=evidence;
        this.illegalSearch=illegalSearch;
        this.indepdendentSourceOfInformation=indepdendentSourceOfInformation;

    }

    isAdmissible(){
        //chekc i the evidence was obtained as a result of the illegal search 
        if(!this.illegalSearch){
            //the evidence wa snot obtained as a result of an illegal search 
            return true;
        }

        //check i the police had an indepdent serach source of information 
        if(this.indepdendentSourceOfInformation){
            //the evidence is admissilbe
            return true;
        }

        //the evidence is inadmisisble 
        return false;
    }
}

