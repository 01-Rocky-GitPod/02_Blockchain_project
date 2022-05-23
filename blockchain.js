const { genesis } = require("./block");
const Block = require ("./block");

class Blockchain{
    constructor(){
        // Chain - Array mit Blöcken
        this.chain = [Block.genesis()];
    }

    addBlock(data){
        const lastBlock = this.chain[this.chain.length -1]

        const block = Block.mineBlock(lastBlock,data);

        this.chain.push(block);

        
    }

}

module.exports = Blockchain;