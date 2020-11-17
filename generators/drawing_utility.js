//wraps
function wordWrap(str = "", maxWidth = 30) {
  if (str.length <= maxWidth) {
    return str;
  } else {
    let newLineStr = "\n";
    done = false;
    res = "";
    while (str.length > maxWidth) {
      found = false;
      // Inserts new line at first whitespace of the line
      for (i = maxWidth - 1; i >= 0; i--) {
        if (testWhite(str.charAt(i))) {
          res = res + [str.slice(0, i), newLineStr].join("");
          str = str.slice(i + 1);
          found = true;
          break;
        }
      }
      // Inserts new line at maxWidth position, the word is too long to wrap
      if (!found) {
        res += [str.slice(0, maxWidth), newLineStr].join("");
        str = str.slice(maxWidth);
      }
    }
    return res + str;
  }
}
function testWhite(x) {
  let white = new RegExp(/^\s$/);
  return white.test(x.charAt(0));
}

module.exports = {
  wordWrap,
};
