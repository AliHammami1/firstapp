import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Modeles/Member';
import { GLOBAL } from 'src/app/app-config';

@Injectable({  
  providedIn: 'root'
})
// le service accepte detre injecte dans les composants
export class MemberService {
  tab:Member[]=GLOBAL.DB.members;

  constructor(private httpClient:HttpClient) { }
  ONSAVE(memberToSave:any): Observable<any>
  {
    // generer la requete http en mode post vers back end
    // a3melneha commentaire 5ater ma 3andenech back end
    //return this.httpClient.post('127.0.0.1:8080/api/Member',memberToSave)

    const member1={
      ...memberToSave,
      id: Math.ceil(Math.random()*1000),
      createdDate:new Date().toISOString()
    }
    this.tab.push(member1)

    //bech na3mel observable a la main 5ater na7ina return mte3 back end
    return new Observable(observer => observer.next())
  }

  ONDELETE(id:string): Observable<any>
  {
    //return this.httpClient.delete('127.0.0.1:8080/api/Member/{id}');
    
  }
  
}
