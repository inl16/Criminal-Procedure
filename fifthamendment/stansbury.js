const isCustodialInterrogation = (suspect) => {
  // Whether an interrogation is custodial or noncustodial is an objective determination based on the totality of the circumstances.
  // If a reasonable person in the suspect’s place would believe that they were not free to leave and could not end the interview, then that is a custodial interrogation.
  // A police officer’s undisclosed, subjective views about a suspect are irrelevant.
  // The only facts relevant to the custodial-interrogation test are those that are objectively available to the suspect.
  // Further, even if the police inform an individual that they are a prime suspect, that alone is insufficient to give rise to a custodial interrogation; the suspect must reasonably believe, or be told, that they are in custody and cannot freely leave.
  // If the suspect is not in custody, then Miranda rights do not apply.

  // Check if the suspect is in custody.
  const isInCustody = suspect.inCustody;

  // If the suspect is in custody, then the interrogation is custodial.
  if (isInCustody) {
    return true;
  }

  // If the suspect is not in custody, then the interrogation is non-custodial.
  return false;
};