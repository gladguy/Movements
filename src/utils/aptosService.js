// src/aptosService.js
import { AptosClient } from "aptos";

const NODE_URL = "https://aptos.devnet.m1.movementlabs.xyz"; // Replace with the appropriate node URL
// const FAUCET_URL = "https://faucet.devnet.aptoslabs.com"; // Replace with the appropriate faucet URL
export const client = new AptosClient(NODE_URL);
// const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

export const contractAddress = "0x96c964b7d7545b65c32f97269dbd14125bc27160a9aa72e021d4f1344518cbee";
export const Module = { ORDINAL_NFT: "ordinal_nft", LOAN_LEDGER: "loan_ledger" };
export const Function = {
    CREATE: {
        INIT_ORDINAL: "init_ordinal",
        CREATE_ORDINAL: "create_ordinal",
        CREATE_LOAN_REQUEST: "create_loan_request",
        CREATE_BORROW_REQUEST: "create_borrow_request",
    },
    VIEW: {
        GET_ORDINAL: "get_ordinal",
        GET_ALL_LOANS: "get_all_loans",
        GET_ALL_BORROWERS: "get_all_borrowers",
        GET_BORROW_REQUEST: "get_borrow_request",
        GET_ORDINAL_DETAILS: "get_ordinal_details",
        GET_ORDINAL_ADDRESSES: "get_ordinal_addresses",
        GET_ALL_BORROW_REQUESTS: "get_all_borrow_requests",
    }
};

export const initOrdinal = async () => {
    try {
        const initPayload = {
            type: "entry_function_payload",
            function: `${contractAddress}::${Module.LOAN_LEDGER}::${Function.CREATE.INIT_ORDINAL}`,
            arguments: [],
            type_arguments: [],
        };
        await window.aptos.signAndSubmitTransaction(initPayload);
    } catch (error) {
        console.log("Init ordinal error", error);
    }
}