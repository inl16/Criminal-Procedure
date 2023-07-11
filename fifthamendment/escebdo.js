class Confessoion{
    constructor(){
        this.voluntary=true;
        this.hasInvokedRightToCounsel=false;
    }


    isVoluntary(suspect, coerciveMeans){
        if(coerciveMeans){
            this.voluntary=false;
        }else{
            this.voluntary=true;
        }
        return this.voluntary;
    }

  isAdmissible(suspect, coerciveMeans) {
    if (this.isVoluntary(suspect, coerciveMeans)) {
      return true;
    } else {
      return false;
    }
  }

  isInherentlyCoerciveConfessionAdmissible(suspect) {
    if (this.isVoluntary(suspect, true)) {
      return true;
    } else {
      return false;
    }
  }

  isDuressConfessionAdmissible(suspect) {
    if (coerciveMeans) {
      return false;
    } else {
      return true;
    }
  }
  isRightToCouselConfessionAdmissible(suspect){
    if(suspectHasInvokedRightToCounsel){
        return false;
    }else{
        return true;
    }


  }

  isEscebedoConfessionAdmissible(suspect){
    if(suspectHasInvokedRightToCounsel && suspectinCustody){
        return false;
    }else{
        return true;
    }
  }



}


const confession = new Confessoion();

const suspect={
    hasInvokedRightToCounsel:true;
    isCustody:true;
}

console.log(isAdmissilbe); //false