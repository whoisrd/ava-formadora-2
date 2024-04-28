import { Component } from '@angular/core';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //variáveis globais
  peso: string = "";
  altura: string = "";
  resultado: string = "";


  constructor() {
  }

  public Calcular(){
    //variaveis locais
    let p = parseFloat(this.peso);
    let a = parseFloat(this.altura);

    let imc = p / (a * a);

    let result = imc.toString(); 

    this.resultado = result;



  }

}
