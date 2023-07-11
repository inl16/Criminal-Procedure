class Confession {

    constructor() {
      this.voluntary = true;
    }
  
    isVoluntary(suspect, coerciveMeans) {
      if (coerciveMeans) {
        this.voluntary = false;
      } else {
        this.voluntary = true;
      }
      return this.voluntary;
    }
  
    isAdmissible(suspect, coerciveMeans) {
      if (this.isVoluntary(suspect, coerciveMeans)) {
        return true;
      } else {
        return false;
      }
    }
  
    isInherentlyCoerciveConfessionAdmissible(suspect) {
      if (this.isVoluntary(suspect, true)) {
        return true;
      } else {
        return false;
      }
    }
  
    isDuressConfessionAdmissible(suspect) {
      if (coerciveMeans) {
        return false;
      } else {
        return true;
      }
    }
  }
  
  const confession = new Confession();
  
  const suspect = {
    isSubjectToCoerciveMeans: true,
  };
  
  const isAdmissible = confession.isDuressConfessionAdmissible(suspect);
  
  console.log(isAdmissible); // false
  
  const suspect = {
    isSubjectToCoerciveMeans: false,
  };
  
  const isAdmissible = confession.isDuressConfessionAdmissible(suspect);
  
  console.log(isAdmissible); // true
  