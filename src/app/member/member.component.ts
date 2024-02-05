import { Component } from '@angular/core';

import { GLOBAL } from '../app-config';
import { Member } from 'src/Modeles/Member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
nom = 'ali'

datasource:Member[]=GLOBAL.DB.members

displayedColumns: string[] = ['id','cin', 'name', 'cv', 'type','createdDate','action'];
}

