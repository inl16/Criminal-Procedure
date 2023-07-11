class ThermalImager{
    constructor(home){
        this.home=home;
    }
    async scan(){
        //scan the outside of the home for heat radiation 
        //retun a list of the temperatirs detected 
        var temperatures= [];

        for(var i = 0; i <this.home.length; i++){
            temperatures.push(home[i].temperature);
        }
        return temperatures;
    }

    async isSuspicious(temperatures){
        //return true if the tmperatires detected ar suspicious 
        //return false if otherwise 
        var averageTemperature = temperatures.reduce((a,b)=> a+b)/temperatures.length;

        var isSuspicious(temperatures){
            // return true if the termperatures detected are suspisious 
            //return flase if otherwise 

            var averageTemperature = temperatures.reduce((a,b)=>a+b)/temperatures.length;

            var isSuspicious=false;

            for (vari=0; i < temperatures.length; i++){
                if(temperatures[i]> averageTemperature +10){
                    isSuspicious=true;
                    break;
                }
            }
            return isSuspicious
        }
    }


  

}

class FourthAmendmentRule{
    constructor(){
        this.isSearch= false;
    }

    async apply(ThermalImager, temperatures){
        // aplply the fourth amen ruele to the thermal images 
        //treun ture if the serac i slaue 
        //return flas eotherwise 

        if(await thermalImager.isSuspicious(temperatures)){
            this.isSearch=true;
        }

        return this.isSearch;
    }

    async function main(){
        //creat tthermal image object 
        var thermail_imgaer = new ThermalImager(home);

        //scan outside of the hone for heat radiation 
        var temperatures=await thermail_imgaer.scan();

        //aply the fourth amnemnt rule object 
        var fourthAmendmentRule= new FourthAmendmentRule(thermail_imgaer, temperatures);


        //print the rul 
        if(isSearch){
            print("the search is valid ")
        }else{
            print("the search is not valid")
        }
    }
}