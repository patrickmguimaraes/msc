import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/_guards';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketComponent } from './ticket/ticket.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: {animation: 'HomePage'},
    children: [
      { path: '', component: ChatComponent, data: {animation: 'ChatPage' }},
      { path: 'create-ticket', component: TicketComponent, data: {animation: 'TicketPage' } },
      { path: 'tickets', component: TicketsComponent, data: {animation: 'TicketsPage' } }
  ]},
  { path: 'login', component: LoginComponent, data: {animation: 'LoginPage'} },
  { path: 'create', component: CreateAccountComponent, data: {animation: 'CreatePage'} },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
