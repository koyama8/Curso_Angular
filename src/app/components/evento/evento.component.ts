import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit{

  show: boolean = true;
  action: boolean = true;

  constructor(){}
  ngOnInit(): void {}
  
  showMessage():void{
     this.show = !this.show;//toggle
  }
  showAction():void{

    this.action = !this.action;
  }
}
