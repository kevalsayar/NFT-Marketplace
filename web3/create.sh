#!/bin/bash

export WEB3_RPC_URL=$5
export WEB3_PRIVATE_KEY=$6


web3 generate contract erc721 --symbol $1 --name $2 --base-uri https://thenftagency-api.theblockchain.team/
web3 contract build $3
web3 contract deploy $4
