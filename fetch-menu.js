

async function fetchMenu(){

}

async function getColor(percent) {
    hue = (100 - percent) * 1.20;
    saturation = 100;
    lightness = 50;
    return hslToHex(hue, saturation, lightness);
}

async function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `${f(0)}${f(8)}${f(4)}`;
  }



module.exports = { fetchMenu, getColor };