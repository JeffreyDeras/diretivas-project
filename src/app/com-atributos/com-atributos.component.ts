import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-atributos',
  templateUrl: './com-atributos.component.html',
  styleUrls: ['./com-atributos.component.css'],
})
export class ComAtributosComponent implements OnInit {
  estilo: string = 'disable';
  corFundo: string = 'blue';
  corDaFonte: string = 'yellow';
  item: string = '';
  lista: string[] = []
  isEnableBlock: boolean = true;

  constructor() {}

  adicionarLista(){
    this.lista.push(this.item)
  }

  ngOnInit(): void {}

  trocar() {
    if (this.estilo == 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
