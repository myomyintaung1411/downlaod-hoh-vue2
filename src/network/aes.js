/* eslint-disable */
// import CryptoJS from "crypto-js";

// export default {
//   XzttEnc(data) {
//     var key = CryptoJS.enc.Utf8.parse(`IsYkXJ5BuNGq8M3q4leEzTpTZa9HMLoW`)
//     var iv = CryptoJS.enc.Utf8.parse(`0OwXILQguBXhqKX4`)
//     var encrypted = CryptoJS.AES.encrypt(data, key, {
//       iv: iv,
//       mode: CryptoJS.mode.ECB,
//       padding: CryptoJS.pad.Pkcs7
//     });
//     return encrypted.toString()
//   },

//   XZttDec(data) {
//     var key = CryptoJS.enc.Utf8.parse(`MbWRL6S6ajLnetP4qFWoJIEzktelovAY`)
//     var iv = CryptoJS.enc.Utf8.parse(`vzA5FpSkXjWkgZmQ`)
//     var decrypted = CryptoJS.AES.decrypt(data, key, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7,
//     });
//     return decrypted.toString(CryptoJS.enc.Utf8);
//   },
// };


(function (_0x394303, _0x514fca) {
  var _0x36fd93 = _0x4270, _0x41e3ea = _0x394303();
  while (!![]) {
    try {
      var _0x328b56 = -parseInt(_0x36fd93(0x150)) / 0x1 + parseInt(_0x36fd93(0x14c)) / 0x2 * (-parseInt(_0x36fd93(0x158)) / 0x3) + -parseInt(_0x36fd93(0x156)) / 0x4 * (-parseInt(_0x36fd93(0x15a)) / 0x5) + -parseInt(_0x36fd93(0x159)) / 0x6 * (-parseInt(_0x36fd93(0x151)) / 0x7) + parseInt(_0x36fd93(0x155)) / 0x8 + parseInt(_0x36fd93(0x15e)) / 0x9 + parseInt(_0x36fd93(0x15c)) / 0xa * (parseInt(_0x36fd93(0x161)) / 0xb);
      if (_0x328b56 === _0x514fca) break;
      else _0x41e3ea['push'](_0x41e3ea['shift']());
    } catch (_0x372ffb) {
      _0x41e3ea['push'](_0x41e3ea['shift']());
    }
  }
}(_0x4f67, 0xc07e2));
function _0x4f67() {
  var _0x2cf15b = ['0OwXILQguBXhqKX4', 'pad', 'Utf8', '11530176tDkDBP', '10872aiDMtR', 'mode', '21OWuomn', '738ECVnvb', '540JhFrFF', 'vzA5FpSkXjWkgZmQ', '33940ijMCnb', 'enc', '1326339bYSjDU', 'MbWRL6S6ajLnetP4qFWoJIEzktelovAY', 'Pkcs7', '187uyHTgo', 'encrypt', 'IsYkXJ5BuNGq8M3q4leEzTpTZa9HMLoW', 'parse', '139808tirKeb', 'toString', 'decrypt', 'AES', '1342666OWZwtA', '38731WUfMJH'];
  _0x4f67 = function () { return _0x2cf15b; };
  return _0x4f67();
} import _0x1c02ac from 'crypto-js';
function _0x4270(_0x1dce99, _0x385025) {
  var _0x4f67b4 = _0x4f67(); return _0x4270 = function (_0x427008, _0x4dc1c1) {
    _0x427008 = _0x427008 - 0x149;
    var _0x5d56f4 = _0x4f67b4[_0x427008];
    return _0x5d56f4;
  }, _0x4270(_0x1dce99, _0x385025);
}
export default {
  'Xztt'(_0x3e9ab5) { var _0x36467f = _0x4270, _0x5ed2c3 = _0x1c02ac[_0x36467f(0x15d)][_0x36467f(0x154)][_0x36467f(0x14b)](_0x36467f(0x15f)), _0x14324b = _0x1c02ac[_0x36467f(0x15d)]['Utf8'][_0x36467f(0x14b)](_0x36467f(0x15b)), _0x1117c4 = _0x1c02ac['AES'][_0x36467f(0x149)](_0x3e9ab5, _0x5ed2c3, { 'iv': _0x14324b, 'mode': _0x1c02ac[_0x36467f(0x157)]['ECB'], 'padding': _0x1c02ac[_0x36467f(0x153)][_0x36467f(0x160)] }); return _0x1117c4[_0x36467f(0x14d)](); },
  'XZtt_H'(_0x5a8ff9) { var _0x569940 = _0x4270, _0x5d40a2 = _0x1c02ac[_0x569940(0x15d)]['Utf8']['parse'](_0x569940(0x14a)), _0x53f183 = _0x1c02ac[_0x569940(0x15d)][_0x569940(0x154)][_0x569940(0x14b)](_0x569940(0x152)), _0x46ae54 = _0x1c02ac[_0x569940(0x14f)][_0x569940(0x14e)](_0x5a8ff9, _0x5d40a2, { 'iv': _0x53f183, 'mode': _0x1c02ac[_0x569940(0x157)]['CBC'], 'padding': _0x1c02ac[_0x569940(0x153)][_0x569940(0x160)] }); return _0x46ae54[_0x569940(0x14d)](_0x1c02ac[_0x569940(0x15d)]['Utf8']); }
};