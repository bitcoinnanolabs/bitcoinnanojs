'use strict';

const bananodeApi = require('./mock-bananode-api.js');

const getAccountInfo = async (account) => {
  const accountInfo = {};
  accountInfo.balance = undefined;
  return accountInfo;
};

exports.getAccountBalanceRaw = bananodeApi.getAccountBalanceRaw;
exports.getAccountRepresentative = bananodeApi.getAccountRepresentative;
exports.getPrevious = bananodeApi.getPrevious;
exports.process = bananodeApi.process;
exports.getGeneratedWork = bananodeApi.getGeneratedWork;
exports.getAccountInfo = getAccountInfo;
exports.getAccountsPending = bananodeApi.getAccountsPending;
exports.getAccountHistory = bananodeApi.getAccountHistory;
exports.getFrontiers = bananodeApi.getFrontiers;
