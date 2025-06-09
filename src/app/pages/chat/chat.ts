import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat';
import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-chat',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css']
})
export class Chat implements OnInit {

  messages: Message[] = [];
  
  newMessage = '';

  constructor(private chat: ChatService){}

  ngOnInit() {
    this.chat.getMessages().subscribe((msgs: Message[]) => {
      this.messages = msgs;
    });
  }

  send(){
    if (this.newMessage.trim()){
      this.chat.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
