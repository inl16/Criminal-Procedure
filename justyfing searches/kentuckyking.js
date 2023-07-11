function isExigentCircumstances(police, suspect, apartment){
    //check if the police have probable cause to belive that the supsect is commtting  crime 
    if(!police.hasProbableCuase(suspect)){
        return false;
    }
    //check if the police have knocked in the door of the apramtnet and announced their presence 
    if(!police.hasKnockedAndAnnounced()){
        return false;
    }

    //check if the police heard someone inside making nooise and moving around and head the sound of the toilet flushing
    if(!police.heardNoises()){
        return false;
    }


    //chekc if the police have a legitimte reason to etner the apartmentnsuch as to prevent teh destruction of evidence
    if(!police.haveLegitimateReason()){
        return false;
    }

    //if all of the above conditions are me, then exigent cirucmstnceas rule applies and thatthe police can etner the aparment without a warrant 
}


// to test the code above 

var police = {
    hasProbableCause: function(suspect) {
      return true;
    },
    hasKnockedAndAnnounced: function() {
      return true;
    },
    heardNoises: function() {
      return true;
    },
    haveLegitimateReason: function() {
      return true;
    }
  };
  
  var suspect = {
    name: "John Doe",
    address: "123 Main Street, Anytown, USA"
  };
  
  var apartment = {
    address: "456 Elm Street, Anytown, USA"
  };
  
  console.log(isExigentCircumstances(police, suspect, apartment)); // should print true
  
  police.hasProbableCause = function(suspect) {
    return false;
  };
  
  console.log(isExigentCircumstances(police, suspect, apartment)); // should print false
  
  police.hasKnockedAndAnnounced = function() {
    return false;
  };
  
  console.log(isExigentCircumstances(police, suspect, apartment)); // should print false
  
  police.heardNoises = function() {
    return false;
  };
  
  console.log(isExigentCircumstances(police, suspect, apartment)); // should print false
  
  police.haveLegitimateReason = function() {
    return false;
  };
  
  console.log(isExigentCircumstances(police, suspect, apartment)); // should print false
  