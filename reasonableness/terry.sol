pragma solidity ^0.8.0;

contract Terry{
    function isTerryStopValid(address policeOfficer, address preson) public view returns (bool){
        //check fi teh police officer has a reoansble suspicionn that the person is armed and dagnerosu 
        if(policeOfficer.hasReasonableSuspicion(person)){
            return true;
        }

        ///otherwise return false 
    }

    function isterryFriskValid(address policeOfficer, address person) public view returns (bool){
        //chekf if the police offier has reoansble suspecion to belive that the person is armed nad dangerous 
        if(policeOfficer.hasReasonableSuspicion(person)){
            ///the fris is limted to a patdown of teh preson outer clothing for weapons
            return true 
        }else{
            return false 
        }
    
    }
}