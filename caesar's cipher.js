// Código usado para decodificar uma estrutura de Caesar Cipher (ou Cipher Shift)

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