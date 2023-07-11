function isSearchOfPassengerBelongingsConstitutional(car, officerProbableCause, passenger){
    //check if the officer has probabl cuase ot search the car 
    if(!officerProbableCause){
        return false;
    }

    //chekc if the passenger has reaosnble expectation of priacy i their belongings 
    if(passenger===car.driver){
        ///the driver of th car has a reoanble expectation of privacy in their belongings 
        return false;
    }else{
        //the passenger of th car does not ahve a reasonbel expectation of privacy 
        return true;
    }
}

function isSearchOfPassengersBelongingsConstitutional(car, passenger, probableCause) {
    // Check if the officer has probable cause to search the car.
    if (!probableCause) {
      return false;
    }
  
    // Check if the passenger has a reasonable expectation of privacy in their belongings.
    if (passenger.isTheOwnerOfTheCar) {
      return false;
    }
  
    // Check if the belongings are capable of concealing the object of the search.
    if (!belongings.canConcealedTheObjectOfTheSearch) {
      return false;
    }

      // The search is constitutional.
  return true;
}
