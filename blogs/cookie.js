class cookieControl{
    constructor(){
        this.tokenArr=[]
    }
    getToken(){
        var token=""
        
        var str="cbzikxbkjas[p[;][as[][][dasl[c1255464651"
        for(var i=0;i<20;i++){
            token+=str[parseInt(Math.random()*str.length) ]
        }
        this.tokenArr.push(token)
        return token
        
    }
    checkToken(token){
        for(var i=0;i<this.tokenArr.length;i++){
            if(this.tokenArr[i]==token){
                return true
            }
            else{
                return false
            }
        }
    }
    removeToken(token){
        for(var i=0;i<token.length;i++){
            if(this.tokenArr[i]==token){
               this.tokenArr.splice(i,1)
               return true
            }
            else{
                return false
            }
        }
    }
}

exports.cookieControl=cookieControl