class Confession{
    constructor(){
        this.voluntary=true;
    }

    isVoluntary(suspect, coerciveMeans){
        if(coerciveMeans){
            this.voluntary=false;
        }else{
            this.voluntary=true;
        }
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
}

const confession = new Confession();

const suspect = {
  isSubjectToCoerciveMeans: true,
};

const isAdmissible = confession.isInherentlyCoerciveConfessionAdmissible(suspect);

console.log(isAdmissible); // false

const suspect = {
  isSubjectToCoerciveMeans: false,
};

const isAdmissible = confession.isInherentlyCoerciveConfessionAdmissible(suspect);

console.log(isAdmissible); // true