const converter = require('./legacy-1559-converter');

let tx1559 = {
    accessList: [],
    blockHash: null,
    blockNumber: null,
    chainId: '0x3',
    from: '0x5cce6424c2066B926b4aF8F4e70A2A79E0759Cdd',
    gas: 32800,
    gasPrice: null,
    hash: '0x7b80d00d2cdee978c85692a774ac70121582e4832e483790e07b88a612b51b01',
    input: '0xa9059cbb0000000000000000000000005cce6424c2066b926b4af8f4e70a2a79e0759cdd0000000000000000000000000000000000000000000016b7498f66aa82721c00',
    maxFeePerGas: '1000000032',
    maxPriorityFeePerGas: '1000000000',
    nonce: 4807,
    r: '0x6b6867792dafc0f1687a85ae2477af28d79a5d4a63df37c102be085cbb41ee7e',
    s: '0x51a0b3bcc47857c00c4ed7cdef5cea94245576c5d1d7229800f1fc3f3d644df9',
    to: '0x11C1e537801CC1c37AD6E1b7D0BdC0E00FcC6dC1',
    transactionIndex: null,
    type: 2,
    v: '0x1',
    value: '0'
  }


  let legacyTx = converter.normalizeToLegacyTransaction(tx1559);
  console.log(legacyTx);

