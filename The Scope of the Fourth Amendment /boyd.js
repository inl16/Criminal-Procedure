class Search{
    constructor(governmentAction){
        this.governmentAction=governmentAction;

    }

    isSearch(){
        //check if teh government action consitutes a physcial intrustoinon private proeprty 
        if(this.governmentAction.type==='physcial intrustion'){
            return true;
        }

        //check if teh government actoin constitutes a tresspass{
        if(this.governmentAction.type=='tressppas'){
            return true;
        }
        //check fi teh government actoin violates a reasonble expectation of privacy
        if(this.governmentAction.type==='privacy Violation'){
            return true;
        }

        // if the govenremnt action does not constuti a physycial intrustoin 
        return false;
    }


}

class Evidence{
    constructor(governmentAction, evidence){
        this.governmentAction=governmentAction;
        this.evidence = evidence;
    }

    isAdmissible(){
        //chekc if teh evdience was obtaine din violationof the fourth admenment 
        if(this.governmentAction.isSearch()){
            return false;
        }

        // if the evidenc was not obtained in violation of the fourth amendment, then it is admisible 
        return true;
    }
}

