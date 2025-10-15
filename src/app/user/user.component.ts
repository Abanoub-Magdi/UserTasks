import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user.model';
 
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // **************** the Old approach********************

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string; //this will be settable form outside
  // @Input({ required: true }) name!: string; //we can add a required configuration

  @Input({ required: true }) user!: User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id)
    // console.log('user id is: '+  this.id)

  }
  onUserNameSelected(userName: string) {
    console.log('User Name Is: ' + userName)

  }
  // **************** the New apprach********************
  //select = output<string>();

  // avatar = input.required<string>();// this will be settable form outside..
  // name = input.required<string>();// this will be settable form outside..

  // imagePath = computed(() => { return 'assets/users/' + this.avatar() })



}
