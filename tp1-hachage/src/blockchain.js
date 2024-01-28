import {createBlock, findBlocks} from "./blockchainStorage.js";
import {json} from "node:stream/consumers"

export async function liste(req, res, url) {
    return findBlocks()
}

export async function create(req, res) {
    return createBlock(await json(req))
}
