import { AbstractControl } from "@angular/forms";


export default class MyValidations {
    
    constructor(){
        
    }

    public isYoung ( nacimiento: string){
        return(control : AbstractControl) =>{
            const edad = new Date(nacimiento);
            console.log(edad)
        }
    }

}