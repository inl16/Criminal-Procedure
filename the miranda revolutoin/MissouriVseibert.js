class MissouriSiebert{
    constructor(){
        this.isAdmissible=false;

    }

    isAdmissible(statement){
        if(this.isAdmissible){
            return true;
        }

        //check if teh staemtnet was made after beign read teh mirnda warnigns 
        if(!statement.mirandaWarnings){
            return false;
        }

        //check if teh stamenet was made after being givena break in the interrogiotn 
        if(!statement.break){
            return false;
        
        }

        //check if teh staemnet was made after the policehad already obtained an inadmissible confessoin from the suspet 
        if(statement.previousConfession){
            return false;
        }
        
    }

    
}