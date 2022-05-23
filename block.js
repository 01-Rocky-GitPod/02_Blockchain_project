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

    static mineBlock(){
        const timestamp = Date.now();
        const lastHash = Block.hash("h1");
        const hash = Block.hash("h2");


        return new this(timestamp, lastHash, hash, "owndata");

    } 

    static hash(testData){
        return SHA256(testData).toString();
    }

}

module.exports = Block;