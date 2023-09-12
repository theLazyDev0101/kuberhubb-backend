const xss = require("xss");
let requestFilter   = (data) => {
    if (typeof data == "object"){
        return objFilter(data)
    }
   
    return data;
}

let objFilter   =   (data) =>{
    try {
        let objKeys = Object.keys(data);
        for(let i=0;i< objKeys.length;i++){
            if(data[objKeys[i]]==null){
                continue;
            } else if(typeof data[objKeys[i]]=="object"){
                data[objKeys[i]] = objFilter(data[objKeys[i]]) 
            } else {
                data[objKeys[i]] = xss(data[objKeys[i]])
            }
        }
        return data
    } catch (err){
        console.log('err', err)
        return {}
    }
};
module.exports = {
    requestFilter : requestFilter
}