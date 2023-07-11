class ChimelRule{
    constructor(){
        this.isWithinImmediateReach=(area)=>{
            //chkec if the area is withi the immieate reach of the perosn being arrest 
            //this includes ther pseon person clothingand any object that the person is holding 
            return area==this.preson|| area ===this.clothing ||area ===this.objects;

        };

        this.isWithinHome=(area)=>{
             // Check if the area can be searched without a warrant.
      // The area can be searched without a warrant if it is within immediate reach of the person being arrested or if it is within the home of the person being arrested.
            return area===this.isWithinHome;
        };

        this.canSearchArea=(area)=>{
            return this.isWithinImmediateReach(area)||this.isWithinHome(area);
        }
    }

      // Properties
  person = null;
  clothing = null;
  objects = null;
  home = null;



}

var chimelRule = new ChimelRule();

chimelRule.person = "John Doe";
chimelRule.clothing = "a jacket";
chimelRule.objects = ["a backpack", "a cell phone"];
chimelRule.home = "123 Main Street";

var canSearchPerson = chimelRule.canSearchArea(chimelRule.person); // true
var canSearchClothing = chimelRule.canSearchArea(chimelRule.clothing); // true
var canSearchObjects = chimelRule.canSearchArea(chimelRule.objects); // true
var canSearchHome = chimelRule.canSearchArea(chimelRule.home); // true