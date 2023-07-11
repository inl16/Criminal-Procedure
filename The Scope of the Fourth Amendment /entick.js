//define a function to check if a sarch is legal 
function  isearchLegal(search){
    if(search.hasWarrant){
        //if the search has a warrant check if the warrant is valid 
        if(search.warrantIsValid){
            //if the search warrant is valid the search is legal 
            return true;
        }else{
            // if the warrant is not valid the search is illegal 
            return false;
        }
    }else{
        // if theree is no exception to the warrnat requrment the serach is illegal 
        return false;
    }
}
//define  a function to chekc if tehe seizure is legal 
function isSeizureLegal(seizure){
    //chekc if the seizure is based on a  legal search 
    if(seizure.basedOnLegalSearch){
        // if the seizure is absed on  alegal serach check if the rpoerpty seizuredis relevant ot the investigatoin
        if(seizure.propertyRelevantToInvestigation){
            // if the proeprty seized is relevant ot the investitgation 
            return true;
        }else{
            return false;
        }
    }else{
        // if the seizure is not based on a legal search the seizure is eilleagl 
        return false;
    }
}