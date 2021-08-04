
//Basandome en https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md

const _normalizeToLegacyTransaction =  (newTx) => {
    const normalizedLegacyTx = Object.assign({}, newTx);
    normalizedLegacyTx.gasPrice = newTx.maxPriorityFeePerGas;
    return normalizedLegacyTx;
}

const _normalizeTo1559Transacion = (legacyTx) => {
    const normalized1559Tx = Object.assign({}, legacyTx);
    normalized1559Tx.maxPriorityFeePerGas = newTx.gasPrice;
    normalized1559Tx.maxFeePerGas = newTx.gasPrice;
    return normalized1559Tx;
}

const _normalizeToLegacyTxBundle = (bundle) => {
    let normalizedLegacyBundle = [];
    for (let index = 0; index < bundle.length; index++) {
        const tx = bundle[index];
        normalizedLegacyBundle.push(normalizeToLegacyTransaction(tx));
    }
    return normalizedLegacyBundle;
}

const _normalizeTo1559TxBundle = (bundle) => {
    let normalized1559Bundle = [];
    for (let index = 0; index < bundle.length; index++) {
        const tx = bundle[index];
        normalized1559Bundle.push(_normalizeTo1559Transacion(tx));
    }
    return normalized1559Bundle;
}

module.exports = {
    normalizeToLegacyTransaction:_normalizeToLegacyTransaction,
    normalizeTo1559Transacion:_normalizeTo1559Transacion,
    normalizeToLegacyTxBundle:_normalizeToLegacyTxBundle,
    normalizeTo1559TxBundle:_normalizeTo1559TxBundle
}


