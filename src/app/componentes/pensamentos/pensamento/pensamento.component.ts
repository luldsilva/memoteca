import { Component,Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Lucas',
    modelo: 'modelo3'
  }

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  navigateToExcluir() {
    this.router.navigate(['/pensamentos/excluirPensamento', this.pensamento.id]);
  }

  editarPensamento() {
      this.router.navigate(['/pensamentos/editarPensamento', this.pensamento.id])
  }
}
