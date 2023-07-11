class TrafficStop{
    constructor(officer, vehicle){
        this.officer = office;
        this.vehicle =vehicle;
    }

    isLegal(){
        //if the vehicle has vioalted the traffic laws the stop is legal 
        if(this.vehicle.hasViolatedTrafficLaws()){
            return true;
        }
        //otherise the stop is illegal 
        return false;


    }
}