import { Component } from '@angular/core';

import { GLOBAL } from '../app-config';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
nom = 'ali'
constructor(private MS:MemberService){}
datasource:any[]=this.MS.tab

displayedColumns: string[] = ['id','cin', 'name', 'cv', 'type','createdDate','action'];

delete(id:string):void
{
  //appeler la fonction de service ONDELETE
  this.MS.ONDELETE(id).subscribe(()=>{})
}
}

