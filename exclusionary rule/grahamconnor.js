function excessiveForceClaimsAnalysis(claim) {
    // Check if the claim is brought under §1983.
    if (claim.broughtUnder1983) {
      // Determine which constitutional right is allegedly violated by the use of force.
      if (claim.allegedViolation == "Fourth Amendment") {
        // Analyze the claim under the Fourth Amendment's reasonableness standard.
        // Balance the individual's Fourth Amendment interest against the government's interest.
        // Consider the particular circumstances surrounding each individual claim, how severe the crime at issue is, the threat posed to officers, and whether the suspect is resisting arrest.
        // The correct inquiry is whether the use of force was objectively reasonable under the circumstances from the point of view of a reasonable officer on the scene.
      } else {
        // Analyze the claim under the appropriate constitutional standard.
      }
    } else {
      // Claim is not brought under §1983.
      // Analyze the claim under the appropriate legal standard.
    }
  }