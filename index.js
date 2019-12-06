function add(Str){
    let stringSplit = Str.split(/\/|;|,|\n/g);
    let sum = 0;
    if (Str == ""){
        return 0
    }
        for (var i = 0; i < stringSplit.length;i++){
            sum += parseInt(stringSplit[i]);
        }
         return sum   

}

console.log(add("" ) + "should return 0" );
console.log(add("1") + "should return 1");
console.log(add("1,1") + "should return 2");
console.log(add("1,2,3,4") + "should return 10");
console.log(add("1") + "should return 1");
console.log(add("1\n2,3" )+ "should return 6");
console.log(add("//;\n1;2")+ "should return 3");