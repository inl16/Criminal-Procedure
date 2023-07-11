pragma solidity ^0.2.24;

contract ProbableCause{
    // the parites to the case 
    address public plaintiff;
    address public defendant;

    // the affidavit 
    bytes public affidavit;

    // the judge decision 
    bool public isProbableCause ;

    // the constructor 
    function ProbableCause(address _plaintiff, address _defendant, bytes _affidavit){
        plaintiff=_plaintiff;
        defendant=_defendant;
        affidavit=_affidavit
    }

    // the funcoitn to determine probable cause 
    function determineProbableCuase() public{
        // the totality of the cirucmstnces test 
        bool isInformationcredible=isInformationCredible(affidavit);
        bool isSuspiciousActivityObserved=isSuspiciousActivtyObserved(affidavit);


        // if infomraotin is credible and suspecious activty has beenobserved , then there is probable cause
        if(isInformationcredible&&isSuspiciousActivityObserved){
            isProbableCause=true;
        }else{
            isProbableCause=false;
        }


    }

    //functoin to determine whether the informatoin is creidble 
    function isInformantCredible(bytes _affidavit) public pure returns (bool){
        // the infomration must have a good track recod 
        // the informatoin must have perosn knoweldg of the informatointhey are providing 
        // the infmraoitn must have a motive to porvide truthful infomrmatoin
        return true;
    }

    // the funcoitn to dtermine whether supsecis activity has been observed 
    function isSuspiciousActivityObserved(bytes _affidavit) public pure returns (bool){
        // the police must have observed the suspect engaging inactivty that is consistent with drug trafficking
    }
}