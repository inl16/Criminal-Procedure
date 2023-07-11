class EdmondRule{
    constructor(){
        this.isCheckpoint=(object)=>{
            //check if the object is a checkpoint 
            //this inludes sobreity checkpoints, drug checkpoints, and other checpoint that arenot based on a reoansblesuspecion of criminal acitvity 
            return object instanceof(checkpoint|sobrietyCheckpoint|drugCheckpoint);
        };

        this.canSearchArea=(area)=>{
            // Check if the area can be searched without a warrant.
        // The area cannot be searched without a warrant if it is a checkpoint.
            return !this.isCheckpoint(area);
        };
    }
}