import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhePage } from '../detalhe/detalhe';
import { ICurso } from '../../interfaces/ICurso';
import { CursosProvider } from '../../providers/cursos/cursos';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	lista:ICurso[];

	constructor(public navCtrl: NavController, public cursoProvider:CursosProvider) {
		// this.lista = this.cursoProvider.all();
	}

	ionViewDidEnter(){
		this.cursoProvider.allTeste().subscribe( res => {
			this.lista = res;
		}, erro => {
			console.log('Erro' + erro.message);
		});

		let data:ICurso = {
			"id": 2,
			"titulo": "Curso de Ionic",
			"descricao": "Aprenda Ionic na prática",
			"image": "https://ionicframework.com/img/meta/ionic-framework-og.png",
			"valorTxt": "R$ 10.60",
			"valor": 10.60,
			"aulas": [
			{
				"id": 1,
				"ordem": 1,
				"titulo": "Introdução ao curso",
				"tempo": "10:00",
				"video": "https://www.youtube.com/embed/u9Mv98Gr5pY"
			},
			{
				"id": 2,
				"ordem": 2,
				"titulo": "Realizando a instalação",
				"tempo": "22:00",
				"video": "https://www.youtube.com/embed/AzTQiHeU33c"
			}
			]
		}

		// this.cursoProvider.addTeste(data).subscribe( res => {
		// 	console.log(res);
		// }, erro => {
		// 	console.log('Erro' + erro.message);
		// });

		// this.cursoProvider.editTeste(data).subscribe( res => {
		// 	console.log(res);
		// }, erro => {
		// 	console.log('Erro' + erro.message);
		// });

		// this.cursoProvider.deleteTeste(data).subscribe( res => {
		// 	console.log(res);
		// }, erro => {
		// 	console.log('Erro' + erro.message);
		// });

		// this.cursoProvider.showTeste(data).subscribe( res => {
		// 	console.log(res);
		// }, erro => {
		// 	console.log('Erro' + erro.message);
		// });
	}

	abreDetalhe(item){
		this.navCtrl.push(DetalhePage, {dados: item});
	}

}
