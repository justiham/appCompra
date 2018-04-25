import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';
import { IAulas } from '../../interfaces/IAulas';

/**
 * Generated class for the AulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-aula',
 	templateUrl: 'aula.html',
 })
 export class AulaPage {

 	item:IAulas;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer:DomSanitizer) {
 		this.item = this.navParams.get('dados');
 	}

 	ionViewDidLoad() {
 		
 	}

 }
