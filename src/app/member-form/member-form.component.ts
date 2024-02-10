import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  // injection de dépendence 
  constructor(private MS:MemberService,private router:Router) {}
form!:FormGroup

ngOnInit(): void { // hethi kima onLoad kif t7el page yetebwanti 3ala hethi méthode ama tzid implements OnInit
  this.initForm();
}

initForm(): void
{
  this.form=new FormGroup({
    cin: new FormControl(null,[Validators.required]),
    name:new FormControl(null,[Validators.required]),
    cv: new FormControl(null,[Validators.required]),
    type:new FormControl(null,[Validators.required])
  })
}

onsub():void {
  console.log(this.form.value);
  // appeler la fonction ONSAVE du service MemberService
  const memberToSave=this.form.value;
  this.MS.ONSAVE(memberToSave).subscribe(()=>{
    this.router.navigate(['/members'])
  })
}
}
