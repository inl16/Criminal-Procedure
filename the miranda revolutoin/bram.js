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

}

const confession = new Confession();

const suspect = {
  isSubjectToStateInfluence: true,
};

const isVoluntary = confession.isVoluntary(suspect);

console.log(isVoluntary); // false

const suspect = {
  isSubjectToStateInfluence: false,
};

const isVoluntary = confession.isVoluntary(suspect);

console.log(isVoluntary); // true

