class Confession{
    constructor(){
        this.voluntary=true;
    }

    isVoluntary(suspect, stateInfluence){
        if(stateInfluence){
            this.voluntary=false;
        }else{
            this.voluntary=true;
        }
        return this.voluntary;
    }

    isAdmissible(suspect, stateInfluence){
        if(this.isVoluntary(suspect, stateInfluence)){
            return true;
        }else{
            return false;
        }
    }


    isStripSeachConfessionAdmissible(suspect){
        if(this.isVoluntary(suspect, true)){
            return true;
        }else{
            return false;
        }


    }



}

const confession = new Confession();

const suspect = {
  isSubjectToStateInfluence: true,
};

const isAdmissible = confession.isStripSearchConfessionAdmissible(suspect);

console.log(isAdmissible); // false

const suspect = {
  isSubjectToStateInfluence: false,
};

const isAdmissible = confession.isStripSearchConfessionAdmissible(suspect);

console.log(isAdmissible); // true

