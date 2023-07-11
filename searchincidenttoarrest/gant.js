class GantRule {
    constructor() {
      this.isWithinImmediateReach = (area) => {
        // Check if the area is within immediate reach of the person being arrested.
        // This includes the person's person, clothing, and any objects that the person is holding.
        return area === this.person || area === this.clothing || area === this.objects;
      };
  
      this.canSearchArea = (area) => {
        // Check if the area can be searched without a warrant.
        // The area can be searched without a warrant if it is within immediate reach of the person being arrested or if there is a reasonable belief that the arrestee might access the vehicle at the time of the search or that the vehicle contains evidence of the offense of the arrest.
        return this.isWithinImmediateReach(area) || this.isVehicleSearchJustified();
      };
  
      this.isVehicleSearchJustified = () => {
        // Check if there is a reasonable belief that the arrestee might access the vehicle at the time of the search or that the vehicle contains evidence of the offense of the arrest.
        // This includes the following factors:
        // * Whether the arrestee was placed under arrest in close proximity to the vehicle.
        // * Whether the arrestee was immediately secured after being placed under arrest.
        // * Whether the vehicle was locked or otherwise inaccessible to the arrestee.
        // * Whether there is any evidence that the vehicle contains evidence of the offense of the arrest.
        return (
          this.wasArrestedInCloseProximityToVehicle &&
          this.wasImmediatelySecuredAfterArrested &&
          this.vehicleWasNotLockedOrInaccessible &&
          this.vehicleContainsEvidenceOfOffenseOfArrested
        );
      };
  
      // Properties
      person = null;
      clothing = null;
      objects = null;
      wasArrestedInCloseProximityToVehicle = false;
      wasImmediatelySecuredAfterArrested = false;
      vehicleWasNotLockedOrInaccessible = false;
      vehicleContainsEvidenceOfOffenseOfArrested = false;
    }
}




var gantRule = new GantRule();

gantRule.person = "John Doe";
gantRule.clothing = "a jacket";
gantRule.objects = ["a backpack", "a cell phone"];
gantRule.wasArrestedInCloseProximityToVehicle = true;
gantRule.wasImmediatelySecuredAfterArrested = true;
gantRule.vehicleWasNotLockedOrInaccessible = true;
gantRule.vehicleContainsEvidenceOfOffenseOfArrested = true;

var canSearchPerson = gantRule.canSearchArea(gantRule.person); // false
var canSearchClothing = gantRule.canSearchArea(gantRule.clothing); // false
var canSearchObjects = gantRule.canSearchArea(gantRule.objects); // false
var canSearchVehicle = gantRule.canSearchArea(gantRule.vehicle); // true