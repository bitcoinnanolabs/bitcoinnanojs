'use strict';

const bananojs = require('../../index.js');

const bananodeApi = require('./mock-bananode-api.js');

const process = async (block, subtype) => {
  if (block == undefined) {
    throw Error(`'block' is a required parameter.'`);
  }
  if (subtype == undefined) {
    throw Error(`'subtype' is a required parameter.'`);
  }
  const hash = bananojs.getBlockHash(block);
  return new Promise((resolve, reject) => {
    reject(Error(`process block:${hash}`));
  });
};

exports.getAccountBalanceRaw = bananodeApi.getAccountBalanceRaw;
exports.getAccountRepresentative = bananodeApi.getAccountRepresentative;
exports.getPrevious = bananodeApi.getPrevious;
exports.process = process;
exports.getGeneratedWork = bananodeApi.getGeneratedWork;
exports.getAccountInfo = bananodeApi.getAccountInfo;
exports.getAccountsPending = bananodeApi.getAccountsPending;
exports.getAccountHistory = bananodeApi.getAccountHistory;
exports.getFrontiers = bananodeApi.getFrontiers;
