pragma solidity ^0.4.24;

contract BrighamCityVStuart{
    // te partes to the case 
    address public plaintiff;
    address public defendant;

    // the police officeres 
    address public officer1;
    address public officer2;

    // the location of the serach 
    bytes public location;

    // the evidnec sezied 
    bytes public evidence;

    // tthe judges decion 
    bool public isWarrantlessSearchValid;

    // the construcotr 
    function BrighamCityVStuart(address _plaintiff, address _defendant, address _officer1, address _officer2, bytes _location, bytes _evidence){
        plaintiff =_plaintiff;
        defendant=_defendant;
        officer1=_officer1;
        officer2=_officer2;
        location=_location;
        evidence=_evidence;

    }

    // teh funcoitn to detmeirne wther teh serach warrant is valid 
    function determineWarrantValidity() public{
        // the polcie must have probable cause to bleie that a crimehas been commitedor is about to be commite d
        bool hasProbableCause=hasProbableCause(location, evidence);

        // the poice must have acted in a reaosnble manner
        bool actedInReasonableManner = actedInReasonableManner(officer1, officer2);

        //the search must be limted t eht scope fothe exigent cirucsmtnaces
        bool limitedToScopeOfExigentCircumstances = limitedToScopeOfExigentCircumstances(location, evidence);

        if(hasProbableCause && actedInReasonableManner && limitedToScopeOfExigentCircumstances){
            isWarrantlessSearchValid=true;
        }else{
            isWarrantlessSearchValid=false;
        }
    }

    // the funotin to detemrin wehte rht epolice have proabble cause 
    function hasProbableCause(bytes, _location, bytes evidence) public pure returns (bool){
        // the police must have observed the suspect engaging iactivty that is consiten with a crime 
        return true;
    }

    // the function to dtermine whet erh tepolice cacted in a reaosnble manner
    function actedInReasonableManner(address _officer1, address _officer2) public pure returns (bool){
        // teh police must have used reoansble force 
        return true;
    }

    // the function to determien whether teh serach was limited to the socpe fo the exigent cirucsmtnaes 
    function limitedToScopeOfExigentCrircumstances(bytes _location, bytes _evidence) public pure return (bool){
        // teh searchj must be limited to teh area where the exigenet circusmtnaces exist 
        return true;


    }

    // the ciont to detmen whetehr teh sarch was limted to ht socpe fo teh exitgent cricusmtatnces 

    function limitedToScopeOfExigentCrircumstances(bytes _location, bytes _evidence) publci pure returns (bool){
        // the serach must be limited to the rae where the exigent cirucsmtnace exists
        return true;
    }

