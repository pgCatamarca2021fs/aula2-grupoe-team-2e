import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";


export default class MyValidations {
    
    // constructor( formRegistracion: FormGroup ){
    // }

    public isYoung ( control: FormGroup, texto: string): ValidatorFn{
        return(): ValidationErrors | null => {
            console.log( control.get('birthday')?.value, texto);
            if ( control ) {
                // console.log(this.formRegistracion.get('passwordRepeat')?.value)
                return null;
            }
            return { valuesDoNotMatch: true }
        }
    }

    // export const validarQueSeanIguales: ValidatorFn = (
    //     control: FormGroup
    //   ): ValidationErrors | null => {
    //     const password = control.get("password")
    //     const confirmarPassword = control.get("confirmarPassword")
      
    //     return password.value === confirmarPassword.value
    //       ? null
    //       : { noSonIguales: true }
    //   }

}