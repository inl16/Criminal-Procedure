// This function takes in the following arguments:
// - suspect: The suspect whose custody status is being determined.
// - circumstances: The circumstances surrounding the interrogation.
// - reasonablePerson: A function that returns the response of a reasonable person in the suspect's situation.
//
// The function returns a boolean value indicating whether the suspect is "in custody".
function isInCustody(suspect, circumstances, reasonablePerson){
    if(suspect.isArrested){
        return true;
    }
    // Otherwise, check whether the suspect's freedom of movement was restrained to the degree associated with a formal arrest.
    if(circumstances.restrainFreedomOfMovement){
        return true;
    }
    // Children are more likely to feel pressured to submit to police questioning than adults, so we need to take that into account.
    // To do that, we'll ask a reasonable person whether a child in the suspect's situation would have felt free to leave.
    if(suspect.isChild){
        return reasonablePerson, suspect, circumstances, {isChild: true}
    }
    return false;
    // If the suspect is not a child, then we can assume that they would have felt free to leave, regardless of the circumstances.

}