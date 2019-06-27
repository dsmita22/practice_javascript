class phone{
    constructor(name,company){
        this.name =name;
        this.company =company;
    }
    hello(){
        console.log(`Hello!${ this.name }`);
    }
}
let details = new phone ('XS','apple');
//iphone.hello();

class ios extends phone{
    constructor(name,company,os){
        super(name,company);//this property using from super class so have to use super keyword
        this.os = os;
    }
    hello(){
        console.log(`Hello!${this.name}`);
    }
}
let specification= new ios("X","apple",14.0);


export{details};
export{specification};