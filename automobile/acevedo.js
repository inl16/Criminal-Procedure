class ProbableCause{
    constructor(){
        this.isPresent=false;
    }

    isPresent(container){
        if(container.isClosed){
            this.isPresent=true;
        }else{
            this.isPresent=false;
        }
    }

    toString(){
        return `Probable Cause: {isPresent: ${this.isPresent}}`;

    }
}

class Container{
    constructor(isClosed, isInPlainView){
        this.isClosed=isClosed;
        this.isInPlainView=isInPlainview;
    }

    toString() {
        return `Container: {isClosed: ${this.isClosed}, isInPlainView: ${this.isInPlainView}}`;
    }



}

class PoliceOfficer{
    constructor(){
        this.probableCause=new ProbableCause();
    }

    searchContainer(container){
        if(this.probableCause.isPresent&&container.isInPlainView){
            return true;
        }else{
            return false;
        }
    }
    toString() {
        return `Police Officer: {probableCause: ${this.probableCause}}`;
    }


}

const officer = new PoliceOfficer();
const container = new Container(true, true);

console.log(officer.searchContainer(container)); // true