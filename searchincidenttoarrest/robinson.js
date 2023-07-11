class RobinsonRule{
    constructor(){
        this.isWithinImmediateReach=(area)=>{
                  // Check if the area is within immediate reach of the person being arrested.
      // This includes the person's person, clothing, and any objects that the person is holding.
            return area===this.person||area===this.clothing||area===this.objects;
        };

        this.canSearchArea=(area)=>{
               // Check if the area can be searched without a warrant.
      // The area can be searched without a warrant if it is within immediate reach of the person being arrested or if the person was arrested for a crime.
            return this.isWithinImmediateReach(area) || this.wasArrestedForCrime;
        };
    }

    person = null;
    clothing = null;
    objects = null;
    wasArrestedForCrime = false;

}

var robinsonRule = new RobinsonRule();

robinsonRule.person = "John Doe";
robinsonRule.clothing = "a jacket";
robinsonRule.objects = ["a backpack", "a cell phone"];
robinsonRule.wasArrestedForCrime = true;

var canSearchPerson = robinsonRule.canSearchArea(robinsonRule.person); // true
var canSearchClothing = robinsonRule.canSearchArea(robinsonRule.clothing); // true
var canSearchObjects = robinsonRule.canSearchArea(robinsonRule.objects); // true