import { Studio } from './studio';

export class Game{
    /*public title: string;
    public price: number;
    public studio: string;
    public genre: Array<String>;*/

    constructor(
        public id: number,
        public title: string,
        public price: number,
        public studio: Studio,
        public genre: Array<string>){}


}
