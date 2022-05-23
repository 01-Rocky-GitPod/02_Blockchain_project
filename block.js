const SHA256 = require("crypto-js/sha256");

class Block {

    constructor (timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        
    }

    toString(){
        return ` Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash}
        Hash: ${this.hash}
        Data: ${this.data}
        `
    }

    static genesis(){
        return new this("Genesis time", "------", "nbdjkjedn", ["data1","data2","data3"]);

    }

    static mineBlock(lastBlock,ownData){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp,lastHash,ownData);


        return new this(timestamp, lastHash, hash, ownData);

    } 

    static hash(timestamp,lastHash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

}

module.exports = Block;