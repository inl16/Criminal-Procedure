class Confession{
    constructor(){
        true;
        this.voluuntary=true;
    }

    isVoluntary(suspect, coerciveMeans){
        if(coerciveMeans){
            this.voluntary=false;
        }else{
            this.voluntary=true;
        }
        return this.voluuntary;
    }


    isAdmissible(suspect, coerciveMeans){
        if(this.isVoluntary(suspect, coerciveMeans)){
            return true;
        }else{
            return false;
        }


    }

    IsInherentlyCoerciveConfessionAdmissible(suspect){
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
}


const confession = new Confession();

const suspect ={
    hasInvokedRightToCounsel=true;
};


const isAdmissilbe = confession.isRightToCounselConfessionAdmissible(suspect);

console.log(isAdmissible);//false;

const suspect={
    hasInvokedRightToCounsel:false;
}

const isAdmissible = confession.isRightToCounselConfessionAdmissible;
console.log(isAdmissible);//true