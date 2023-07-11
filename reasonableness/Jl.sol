pragma soliidty ^0.8.0;

contract FloridaVsJl{
    function isStopAndFriskLegal(
        bool isAnonymousTip, 
        bool isTipCorroborated, 
    
    )public pure returns (bool){
        if(isAnonymousTip && !isCorroborated){
            return false;
        }

        return true;
    }
}