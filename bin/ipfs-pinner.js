#!/usr/bin/env node
'use strict';

const fs = require('fs');
const infura = new (require('ipfs-deploy/src/pinners/infura'))({ projectId: process.env.IPFS_PINNER_INFURA_PROJECT_ID, projectSecret: process.env.IPFS_PINNER_INFURA_PROJECT_SECRET });
const yargs = require('yargs');

(async () => {
  const [ filename ] = yargs.argv._;
  if (!filename) throw Error('must supply filename');
  const { cid } = await infura.ipfs.add({
    content: fs.readFileSync(filename)
  }, { pin: true });
  console.log(cid);
})().catch((err) => console.error(err));
