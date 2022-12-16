
var teg =['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
var total = {};
for (var i = 0; i < teg.length; i++){
    var o = teg[i]
    if (total[o] !== undefined) ++total[o];
    else{total[o] = 1;}
}
for (var key in total)
    console.log(`teg "${key}" - ${total[key]}`)
string()


console.log(total)
string()
console.log(teg.sort())




    // for (j = 0; j < teg.length; j++){
    //     for (var t = 0; t < teg-1; t++){
    //         if(teg[t ] < teg[t + 1]){
    //             var temp = teg[t]
    //             teg[t] = teg [t + 1]
    //             teg [t + 1] = temp
    //             console.log(temp)
    //         }
    //     }
    // }

        function string (){
    console.log('_'.repeat(70))
}
string()

