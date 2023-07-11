class FruitOfThePoisonousTree{
    constructor(evidence, illegalSearch, subjectiveMotivation){
        this.evidence=evidence;
        this.illegalSearch=illegalSearch;
        this.subjectiveMotivation=subjectiveMotivation;
        
        isEvidenceFruitOfThePoisonousTree(){
            //chekc if the evidence was obtaiend as aruelst of an illegal search 
            if(!this.illegalSearch){
                //teh evidnece was not obtained as a resutl fo teh illegal search 
                return false;
            }

            //check if the police offier were subjectivelymotivated to obtaine a serach warrant by what they learnedduring na orginal warranltes leaseserach pf teh primesis 
            if(this.subjectiveMotivation){
                //the evidence is the fruit of the poinstonous tree
                return true;
            }
            //the evidence is not the furit of teh poinstos tree
            retrnfalse;
        }
    }
}

function isEvidenceFruitOfThePoisonousTree(evidence, illegalSearch, subjectiveMotivation) {
    // Create a new FruitOfThePoisonousTree object.
    const fruitOfThePoisonousTree = new FruitOfThePoisonousTree(evidence, illegalSearch, subjectiveMotivation);
  
    // Check if the FruitOfThePoisonousTree object is the fruit of the poisonous tree.
    return fruitOfThePoisonousTree.isFruitOfThePoisonousTree();
}