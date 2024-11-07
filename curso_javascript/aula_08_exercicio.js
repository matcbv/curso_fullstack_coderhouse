const buttons = document.querySelector('ul').querySelectorAll('button')
let totalValue = document.querySelector('.total-value');
const payment = document.querySelector('.payment')
const getChange = document.querySelector('.get-change');

for(const btn of buttons){
    btn.addEventListener('click', () => {
        cliente.kart.push(btn.previousElementSibling.innerHTML);
        cliente.getValue(btn.previousElementSibling.innerHTML);
        totalValue.innerHTML = cliente.value.toFixed(2);
    })
}

getChange.addEventListener('click', () => {
    const totalValue = cliente.getChange(parseFloat(payment.value));
    typeof totalValue === 'number' ? document.querySelector('.change').value = totalValue.toFixed(2): document.querySelector('.change').value = totalValue;
})

class Market{
    constructor(){
        this.productList = [
            {'nome': 'Tomate', 'preco': '4.99'}, {'nome': 'Alface', 'preco': '3.99'}, {'nome': 'Banana', 'preco': '6.99'}, {'nome': 'Melancia', 'preco': '5.99'}, {'nome': 'Frango', 'preco': '10.99'}, {'nome': 'Costela', 'preco': '12.99'}
        ];
        this.kart = [];
        this.value = 0;
    }

    getValue(item) {
        this.value += parseFloat(this.productList.find(obj => obj.nome === item).preco);
    }

    getChange(value){
        if(value - this.value < 0){
            return 'Valor insuficiente';
        } else{
            return value - this.value;
        };
    }
}

const cliente = new Market();
