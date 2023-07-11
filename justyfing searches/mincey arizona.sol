pragma solidity ^0.4.24;

contrat MinceVArizona{
    // the parites to teh case 
    address public plaintiff;
    address public defendant;

    // the search warrant 
    bytes public searchWarrant;

    // the judge decision 
    bool public searchWarrant;

    // the constructor function MinceV
    function MinceVArizona(address _plaintiff, address _defendant, bytes _searchWarrant){
        plaintiff=_plaintiff;
        defendant=_defendant;
        searchWarrant=_searchWarrant;

    }

    // the funcoitn to detmeirne whether the serach warrant is valid 
    function determineWarrantValiditty() public{
        // the police must have obtained a wrrant before conducting the searhc 
        if(searchWarrant.length==0){
            isWarrantlessSearchvalid =false;

        }else{
            // theserach must be condut iwhtin a reasonabletime after the warrant is issue d
            // the serarch must be ocnduteed in a reoanble manner 
            // teh serach must limited to the scope of  the warrant 
            isWarrantlessSearchValid=true;
        }
    }
}