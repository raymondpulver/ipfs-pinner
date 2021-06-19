'use strict';

const infura = new (require('ipfs-deploy/src/pinners/infura'))();
const yargs = require('yargs');

(async () => {
  const [ filename ] = yargs.argv._;
  if (!filename) throw Error('must supply filename');
  const { cid } = await infura.ipfs.add({
    content: fs.readFileSync(filename)
  }, { pin: true });
  console.log(cid);
})().catch((err) => console.error(err));
