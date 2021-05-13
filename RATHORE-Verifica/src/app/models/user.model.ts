export class UserModel{
    public name:any = {};
    public gender:string;
    public picture:any = {};
    public nat:string;
    public phone:string;
    public cell:string;
    public dob:any={};

    constructor(name:any,gender:string,picture:any,nat:string,phone:string,cell:string,dob:any){
        this.name=name;
        this.gender=gender;
        this.picture=picture;
        this.nat=nat;
        this.phone=phone;
        this.cell=cell;
        this.dob=dob;
    }
}