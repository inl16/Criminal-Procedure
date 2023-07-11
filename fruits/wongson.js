class FruitOfThePoisonousTree{
    constructor(evidence, illegalSearch){
        this.evidence =evidece;
        this.illegalSearch=illegalSearch;
    }

    isFruitOfThePoisonousTree(){
        //chekc if the evidence was obtained as a result of an illegal search 
        if(!this.illegalSearch){
            //the evidnece was not obtainedas a result of an illegal serach 
            return false;
        }

        //the evidence is the furit of teh poisonous tree
        return true;
    }
 
}

function isEvidenceFruitOfThePoisonousTree(evidence, illegalSearch) {
    // Create a new FruitOfThePoisonousTree object.
    const fruitOfThePoisonousTree = new FruitOfThePoisonousTree(evidence, illegalSearch);
  
    // Check if the FruitOfThePoisonousTree object is the fruit of the poisonous tree.
    return fruitOfThePoisonousTree.isFruitOfThePoisonousTree();
}
  