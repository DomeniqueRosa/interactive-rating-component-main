import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  numeros : string[] = ['1','2','3','4','5'];
  numeroSelecionado : string = '0';
  ativo : Boolean = true;

  pegar(numero : string){
    this.numeroSelecionado = numero;
  }

  trocar(){
    if(this.numeroSelecionado != '0'){
      this.ativo = !this.ativo;
    }
  }
  

}
