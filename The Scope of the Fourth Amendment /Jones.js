function isSearch(governementAction){
    //check if teh govenremetn actoin constitues a physcial intrustoinor private proeprty 
    if(governementAction.type==='physcialIntrustoin'){
        return true;
    }


    //check if the government actoin consittues a tresspass 
    if(governementAction.type==='tresspass'){
        return true;
    }

    //check if teh government action violates a reasonable expectation of privacy 
    if(governementAction.type==='privacy Violation'){
        return true;
    }

    //check if the government actoin doe snot consttute a phsycil intrustoin or privacy violation or tresspass - if so it is not  asearch 
    return false;
}

function isAdmissible(evidence){
    //check fi teh evidence was obtained in violation of the fourth amendment 
    if(isSearch(evidence.governementAction)){
        return false;
    }

    // if the evidence was not obtained in violation 
    return true;
}