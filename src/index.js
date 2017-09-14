module.exports = function check(str, bracketsConfig) {
    var mas =[];
    var count=0;
    for (var i = 0;i<str.length;i++){
        bracketsConfig.map(function (item,index) {
            for (var y=0;y<item.length;y++){
                if (str[i]===item[y]){
                    if(y===0){
                        if((mas[mas.length - 1] != item[y])||(item[0]!=item[1])) {
                            mas.push(item[y]);
                            break;
                        }
                    }
                    if (y === 1) {
                        if (mas[mas.length - 1] === item[y - 1]) {
                            mas.pop();
                        } else {
                            mas.unshift('*');
                        }
                    }
                }
            }
        })
    }
    return mas.length===0?true:false;
}
