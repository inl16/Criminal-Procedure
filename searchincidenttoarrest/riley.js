class RileyRule {
    constructor() {
      this.isCellPhone = (object) => {
        // Check if the object is a cell phone.
        // This includes smartphones, tablets, and other devices that can make and receive calls and access the internet.
        return object instanceof (phone|tablet|otherDevice);
      };
  
      this.canSearchArea = (area) => {
        // Check if the area can be searched without a warrant.
        // The area can be searched without a warrant if it is within immediate reach of the person being arrested or if the object is a cell phone.
        return this.isWithinImmediateReach(area) || this.isCellPhone(area);
      };
  
      this.isWithinImmediateReach = (area) => {
        // Check if the area is within immediate reach of the person being arrested.
        // This includes the person's person, clothing, and any objects that the person is holding.
        return area === this.person || area === this.clothing || area === this.objects;
      };
  
      // Properties
      person = null;
      clothing = null;
      objects = null;
    }
}

var rileyRule = new RileyRule();

rileyRule.person = "John Doe";
rileyRule.clothing = "a jacket";
rileyRule.objects = ["a backpack", "a cell phone"];

var canSearchPerson = rileyRule.canSearchArea(rileyRule.person); // false
var canSearchClothing = rileyRule.canSearchArea(rileyRule.clothing); // false
var canSearchObjects = rileyRule.canSearchArea(rileyRule.objects); // false
var canSearchCellPhone = rileyRule.canSearchArea(rileyRule.cellPhone); // true