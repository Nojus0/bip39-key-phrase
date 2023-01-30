import * as bip39 from "@scure/bip39"
import crypto from "crypto"
import {wordlist} from "@scure/bip39/wordlists/english"
;(async()=>{

    const key = crypto.randomBytes(16)
    console.log(key)

    const iv = crypto.randomBytes(16)
    console.log(iv)

    const keyIv = Buffer.concat([key, iv])
    console.log(keyIv)

    const phrase = bip39.entropyToMnemonic(keyIv, wordlist)
    console.log(phrase)
    console.log("Words:", phrase.split(" ").length)

})();