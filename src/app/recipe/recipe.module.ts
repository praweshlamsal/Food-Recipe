export class Recipe {
    public id:number;
    public name: string;
    public detail: string;
    public imgPath: string;

    constructor(id:number,name:string,detail:string,imgPath:string ){
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.imgPath = imgPath;
    }
}