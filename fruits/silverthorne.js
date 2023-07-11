class FruitOfThePoisonousTree{
    constructor(evidence, illegalSearch){
        this.evidence=evidence;
        this.illegalSearch=illegalSearch;
    }

    isFruitOfThePoisonousTree(){
        //check fi the evidence was btaiend a sarueslt of an illegal search 
        if(!this.illegalSearch){
            //the evidece was not obtained as aruelst of an illegal search 
            return false;
        }

        //teh evidne is the furit of the poinsous tree
        return true;
    }
}
function isEvidenceFruitOfThePoisonousTree(evidence, illegalSearch){
    //create a new fruitof the obejct
    const fruitOfThePoisonousTree= new FruitOfThePoisonousTree(evidence, illegalSearch);
    //check if the furit of the poinsonous tree object is the fruti fo teh poisonous tree 
    return fruitOfThePoisonousTree.isEvidenceFruitOfThePoisonousTree();

}