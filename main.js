
const Web3 = require('web3');

let web3 = new Web3(Web3.givenProvider || "wss://ropsten.infura.io/ws/v3/[id]");


var subscription = web3.eth.subscribe('pendingTransactions', function(error, result){
    if (!error)
        console.log(result);
})
.on("data", function(transaction){
    web3.eth.getTransaction(transaction).then( (tx)=> {
        if(tx && tx.type && tx.type != 0) {
            console.log(tx);
        }
    });
});