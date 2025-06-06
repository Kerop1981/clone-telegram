import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, orderBy, query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private firestore = inject(Firestore);
  private auth = inject(Auth)

  private messageRef = collection(this.firestore, 'message');

  getMessages(){
    const q = query(this.messageRef, orderBy('createdAt'));
    return collectionData(q, {idField:'id'}) as any;
  }
  async sendMessage(text:string){
    const user = this.auth.currentUser;
    if(!user) return;

    await addDoc(this.messageRef, {
      text,
      author:user.email,
      createdAt: new Date()
    })
  }
}
