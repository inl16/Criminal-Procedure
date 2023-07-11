class Person{
    constructor(name, location, conversation ){
        this.name=name;
        this.location =location;
        this.conversation  = conversation;
    }

    isSearched(){
        //check if the government actions vioalted the persons reaonable expecation og privacy 
        if(this.location ===' a public phonbe booth ' && this.conversation === 'a private conversation'){
            // the goverionment action violated the persons'reaosnable expectation of privacy 
            return true;
        }

        // the governement actions did not violate the persons reasonable expectaion of privacy 
        return false;
    }
}

class Government{
    constructor(){

    }



    searchesPerson(person){
        //check fi the govenrment actions violate the personreaonbel expectations of prvacy 
        if(person.isSearched()){
            // the governments action violate the person reaonsbel expecation of prigacy 
            return true;
        }

        //the government aciton do violate the persons reaonsble expectation of privacy 
        return false;
    }
}


class Main{
    constructor(){
        this.person= new Person('katz,','public phoone booth','prviate conversatino');
        this.government= new Government();


    }

    run(){
        //chekc if the governement action violate the personreaonebl expectation of privacy 
        if( this.government.searchesPerson(this.person)){
            print(' the governments aciotn ovioalte teh reoansebl eexpectation fo provacy ')
        }else{
            print('the govenrment aciton do not vioatle teh reoanble expecation fo prigacy ');
        }
    }
}

// creat new main object 
var main = new Main();

//run the main object 
main.run();