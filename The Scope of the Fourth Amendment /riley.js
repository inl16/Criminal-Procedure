// function take a proeprty input and reutruna  booleanindicating wheter or not the proeprty has a reaonebl expecatoinof privacy 
function hasExpectationOfPrivacy(property){
    //check if the preopryy is visible from public airspace 
    if(property.isVisibleFromPublicAirspace()){
        // if the rpoety is visible from public airpspace then it does not have a reoanbel expecation of privacy 
        return false;

    }else{
        // if the proeprty is not visible from public airspace then it may have a reasonele expecatoin of of privacy 
        return true;
    }
}

//this function takes a property and police officer as inputand returnsa booelaon indicating wheter or not the polce officers can condut warranltesareiallec surveillince 
function canPoliceConductAeiralSurveillance(property, policeOfficer){
    //check if the property has  a reasonable expecation of 
    if(hasExpectationOfPrivacy(property)){
        return false;
    }else{
        // if the property does not have a reoansble expecation of prvvacy then the pilice officer can conduct warrantles aerial surveillance of the proerpty 
        return true;
    }
}

var property ={
    isVisibleFromPublicAirspace:true,
    hasExpectationOfPrivacy:false,
    canPoliceConductAeiralSurveillance:true;

};

if(canPoliceConductAeiralSurveillance){
    //aerial serveillance of the property is legal 
}else{
    // aerial surveillance of the property is illeagl 
}