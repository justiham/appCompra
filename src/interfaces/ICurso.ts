import { IAulas } from './IAulas';

export interface ICurso {
	id?: number;
	titulo: string;
	descricao: string;
	image: string;
	valorTxt: string;
	valor: number;
	aulas: IAulas[]
}