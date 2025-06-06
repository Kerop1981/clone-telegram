import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Chat } from './pages/chat/chat';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {path: '', redirectTo:'login', pathMatch:'full'},
      {path:'login', component: Login},
      {path:'register', component: Register},
      {path:'chat',component:Chat}
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};