class EmailyPrivacy{
    constructor(){
        this.reasonableExpectationOfPrivacy=true;
    }

    hasReasonableExpectationOfPrivacy(){
        //chekc if the subscriber has a reasonbale expectation of privacy in the contents of the emailthat are stored with or sen tor recievedthrouhg a commericla ISP 
        if(subscriber && ISP){
            //the subecriber has a roanbel expecation of privacy 
            return true;
        }

        //the subscriber does not have a rasobelexepcaiotn of privacy 
        return false;
    }
}

function hasSubscriberReasonableExpectationOfPrivacy(subscriber, ISP) {
    // Create a new EmailPrivacy object.
    const emailPrivacy = new EmailPrivacy(subscriber, ISP);
  
    // Check if the EmailPrivacy object has a reasonable expectation of privacy.
    return emailPrivacy.hasReasonableExpectationOfPrivacy();
}
