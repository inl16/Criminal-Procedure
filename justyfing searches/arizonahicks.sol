pragma solidity ^0.4.24;

contract ArizonaVHicks{
    // the partie sto the case 
    address public plaintiff;
    address public defendant;

    // teh police officers 
    address public officer1;
    address public officer2;

    // the location of the serach 
    bytes public evidence;

    // the juges decision 
    bool public isWarrantlessSearchValid;

    // the constructor 
    function ArizonaVHicks(address _plaintiff, address _defendant, address _officer1, address _officer2, bytes _location, bytes _evidence ){
        plaintiff = _plaintiff;
        defendant = _defendant;
        officer1=_defendat;
        officer2  _officer2;
        loaction =_location;
        evidence =_evidence;

    }

    //the functio to detmerine ether teh serach warrant is valid 
    function determineWarrantValidity()public{
        // the police must have probabl cause to blieve that a cirme has been commitedor is about to be commited 
        bool hasProbableCuase = hasProbableCause(locatio, evidence);

        // teh poclice mst have acted in ar eoable manner
        bool actedInReasonableMnaner= actedInReasonableManner(offier1, officer2);


        // bool teh search must be limted to thescope of the exigent circusmtnaces
        bool limtedToScopeOfExigentCircumstances=limitdToScopeOfExigentCircumstances(location, evdience);

        if(hasProbableCuase && actedInReasonableMnaner && limtedToScopeOfExigentCircumstances){
            isWarrantlessSearchValid=true;

        }else{
            isWarrantlessSearchValid=false;
        }
    }

    // the funciotn to determien whete reht elice have proable cause 
    function hasProbableCause(bytes _location, bytes _evidence) public pure returns(bool){
        // the polce must ahve observed the sepceengaging in activiesthat is consietnwith a crime 
        return true;
    }

    //funcito to dterimie wehther teh search was limited to the sope of teh exigenct cirucsntase
    function limitedToScopeOfExigentCircumstances(bytes _location, bytes _evidence) public pure returns (bool){
        // the serach must be litmed to the are wehre teh exitgent cirucmstnacesextist 
        return true;
    }
}

