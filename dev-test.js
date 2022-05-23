// Import

const Block = require ("./block");
const Blockchain = require ("./blockchain");

// const block = new Block("aktuelle Zeit", "hash 1", "hash 2", "block data");
// console.log(block.toString());
// console.log(Block.genesis().toString());
// console.log(Block.mineBlock().toString());

// const testBlock = Block.mineBlock(Block.genesis(), "testData");
// console.log(testBlock.toString());

const blockChain = new Blockchain();
console.log(blockChain);
blockChain.addBlock("Daten von Block 1");
console.log(blockChain);
blockChain.addBlock("Daten von Block 2");
console.log(blockChain);
