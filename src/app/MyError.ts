import { ErrorStateMatcher } from '@angular/material';
import { FormGroupDirective, NgForm, FormControl } from '../../node_modules/@angular/forms';
export class MyError implements ErrorStateMatcher{
    isErrorState(control:FormControl | null, form: FormGroupDirective | NgForm | null):boolean{
       const isSubmitted  = form && form.submitted;
       return !!(control && control.invalid &&(control.dirty || control.touched || isSubmitted))
    }
}
