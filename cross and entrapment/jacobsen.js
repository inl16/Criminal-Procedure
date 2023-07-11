class Entrapment{
    constructor(defendant, governmentAgents){
        this.defendant=defendant;
        this.governmentAgents=governmentAgents;
    }

    isEntrapment(){
        //chekc if the defndant was disposed to commit the criminal act prior to first being approached by government agent s
        if(this.defendant.wasDipsosedToCommitCrime){
            //there is no entrapment 
            return false;
        }

        //the govenremntagents induced the defdeant to commit the crimnial act 
        return true;
    }

}

function isEntrapment(defendant, governmentAgents) {
    // Create a new Entrapment object.
    const entrapment = new Entrapment(defendant, governmentAgents);
  
    // Check if the Entrapment object is entrapment.
    return entrapment.isEntrapment();
}


