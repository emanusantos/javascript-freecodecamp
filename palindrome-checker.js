function palindrome(str) {
  
    let cond = /[\W_]/g;
    let low = str.toLowerCase().replace(cond, '');
    let rev = low.split('').reverse().join('');
    return rev === low;
  }
  
  palindrome("eye");

  function convertToRoman(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = '';
  
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
  }

function rot13(str) {
  return str.replace(/[A-Z]/g, (letter) => {
  let asciiValue = letter.charCodeAt(0) + 13;

  if (asciiValue > 90) {
    asciiValue = asciiValue % 90 + 64;
  }

  return String.fromCharCode(asciiValue)
});
}

rot13("SERR PBQR PNZC");

const re = /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})([ -]{0,1}\d{4}$)/g;
return str.match(re)
