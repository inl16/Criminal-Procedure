class Confession{
    constructor(){
        this.voluntary=true;
        this.hasInvokedrghToCounsel=false;
        this.inCustody=false;
    }

    isVoluntary(suspect, coerciveMeans){
        if(coerciveMeans){
            this.voluntary=false;
        }else{
            this.voluntary=true;
        }

        return this.voluntary;
    }

    isAdmissible(suspect, coerciveMeans){
        if(this.isVoluntary(suspect, coerciveMeans)){
            return true;
        }else{
            return false;
        }
    }

    isInherentlyCoerciveConfessionAdmissible(suspect){
        if(this.isVoluntary(suspect, true)){
            return true;
        }else{
            return false;
        }
    }

    isDuressConfessionAdmissible(suspect){
        if(coerciveMeans){
            return false;
        }else{
            return true;
        }


    }

    isRightToCounselConfessionAdmissible(suspect){
        if(suspectHasinvokedRightToCounsel && suspecInCustody){
            return false;
        }else{
            return true;
        }
    }

    isMirandaConfessionAdmissible(suspect){
        if(suspecInCustody&&!suspectHasinvokedRightToCounsel&&!suspectWasReadMirandaWarnings){
            return false;
        }else{
            return true;
        }
    }
}
const confession = new Confession();

const suspect = {
  hasInvokedRightToCounsel: true,
  inCustody: true,
};

const isAdmissible = confession.isMirandaConfessionAdmissible(suspect);

console.log(isAdmissible); // false

const suspect = {
  hasInvokedRightToCounsel: false,
  inCustody: true,
};

const isAdmissible = confession.isMirandaConfessionAdmissible(suspect);

console.log(isAdmissible); // true