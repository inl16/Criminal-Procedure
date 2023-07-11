function berghuisVthompkins(mirandaWarnings, statements){
    //checkf if the mrinada warnings were read to the susepct 
    if(!mirandaWarnings){
        return false;
    }

    //check if the suspect made any statemnet during the interrogation 
    if(!statements){
        return false;
    }


    // oiterate throuhg the statemnet and check if any of them indicate that the suspectinvoked their right to silinece 
    for( const statement of statements){
        if(statement.toLowerCase().includes("i want to remain silent")||statement.toLowerCase().includes(" i want an attorney")){
            return true;
        }
    }
}

// if suspect did not inovke their right to silience then theitr statmenets are admissible 
return true;


const mirandaWarnings = true;

const statements=[' i didnt do it', 'i was somewehre else at the itme of the crime ']


const admissible=berghuisVthompkins(mirandaWarnings, statements);

console.log("admissible");//true 