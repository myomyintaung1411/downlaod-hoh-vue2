/* eslint-disable */
import CryptoJS from "crypto-js";

export default {
  /**
   * aes加密解密
   * 加密encrypt
   * 解密decrypt
   */

  Cryptoencrypt(data, G_KP) {
    var key = CryptoJS.enc.Utf8.parse(`8zxQgYL2zg9cvxMrXuv3kz7dFuDqoR6n`)
    var iv = CryptoJS.enc.Utf8.parse(`bnLpDy2CFeV1sAeP`)
    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString()
  },

  Cryptodecrypt(data, G_KP) {
    // console.log("KEYIV ======> ", G_KP);
    var key = CryptoJS.enc.Utf8.parse(`8zxQgYL2zg9cxvMrXvu3kz7dFuDq0R6n`)
    var iv = CryptoJS.enc.Utf8.parse(`bnLpDy2CFeVl5AeP`)
    var decrypted = CryptoJS.AES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  },
};
