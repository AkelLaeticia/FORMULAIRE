
import { Component,  OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl,FormControlName,FormGroup, NgForm, Validators,} from '@angular/forms';
import { User } from './user';
function Validator(c:AbstractControl):{ [ key:string] : boolean} | null {
  if(!! c.value && (isNaN(c.value) || c.value >10)){
  return { 'rangeError':true};
}
return null ;
}
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
   public myform: FormGroup;
  formbuilder = new FormBuilder();
  public user : User = new User();
  
  

  

  constructor () {
    this.myform=new FormGroup({
      nom:new FormControl(),
      prenom:new FormControl(),
      email:new FormControl(),
      Motdepasse
      :new FormControl()
    });
      

   }
  ngOnInit(): void {
    this.myform = this.formbuilder.group({
      nom: ['' ,[Validators.required]],
      prenom: ['' ,[Validators.required]],
      email:  ['' ,[Validators.required]],
      Motdepasse: ['' ,[Validators.required]], 
      SendCatalog : ['' ,[Validators.required]],
     

    })
       
}
 onSubmit (myform : NgForm ) { 
  console.log( this.myform);
  console.log( 'valeurs' , JSON.stringify(this.myform.value));
  console.log( 'hello');
  
}

}