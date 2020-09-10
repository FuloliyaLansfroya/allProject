Array.prototype.unique=function(){
    let res=[];
    let json=[];
    for(let i=0;i<this.length;i++){
        if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]]=1;
        }
    }
    return res;
}