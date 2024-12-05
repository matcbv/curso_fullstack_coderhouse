(function fibonacci(){
    let currentValue = 1;
    let lastValue = 0;
    let i = 1;
    let keepIteration = true;

    while(keepIteration){
        const tempValue = currentValue;
        currentValue = currentValue + lastValue;
        lastValue = tempValue;
        keepIteration = confirm(`${i}º índice: ${currentValue}. Continuar?`)
        i += 1
    }
})();
