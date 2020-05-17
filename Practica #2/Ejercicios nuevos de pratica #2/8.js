
function  uniqueNumber(data){
    var new_data = Array.from(new Set(data))
    
    if (new_data.length === data.length) {
        return true;
    }else{
        return false;
    }
    
}

console.log(uniqueNumber([1,8,7,3,9,5,2]));

