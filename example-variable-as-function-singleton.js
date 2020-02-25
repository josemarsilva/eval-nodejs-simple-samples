var conta = (function(){
    var contador = 0;
    return function(){ contador++; console.log(contador)}
})();

conta();
conta();
conta();