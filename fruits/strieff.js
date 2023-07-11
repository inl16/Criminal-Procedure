class FruitOfThePoisonousTree {
    constructor(evidence, illegalSearch) {
      this.evidence = evidence;
      this.illegalSearch = illegalSearch;
    }

    isFruitOfThePoisonousTree(){
        //check i the evidence was obaiend as a resutl of the illegal search 
        if(!this.illegalSearch){
            //the evidence was not obtained as a result of an illegal search 
            return false;
        }
        //check if the illegal serach was made in good faitih 
        if(this.illegalSearchInGoodFaith){
            //the evidence is not the furit fo teh poinsonous tree
            return false;
        }

        //teh evidence is the fruit of the poinsonous tree 
        return true;
    }
  

}
  
  function isEvidenceFruitOfThePoisonousTree(evidence, illegalSearch, illegalSearchInGoodFaith) {
    // Create a new FruitOfThePoisonousTree object.
    const fruitOfThePoisonousTree = new FruitOfThePoisonousTree(evidence, illegalSearch);
  
    // Check if the FruitOfThePoisonousTree object is the fruit of the poisonous tree.
    return fruitOfThePoisonousTree.isFruitOfThePoisonousTree(illegalSearchInGoodFaith);
}