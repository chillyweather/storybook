/* eslint-disable prefer-const */
export function generateRandomHexColor(): string {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
  
    while (true) {
      for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
      }
  
      const rgbColor = hexToRgb(color);
      const hsbColor = rgbToHsb(rgbColor);
  
      if (hsbColor.s > 20 && hsbColor.b >= 25 && hsbColor.b <= 80) {
        break;
      } else {
        color = "#";
      }
    }
  
    return color;
  }
  
  function hexToRgb(hex: string): [number, number, number] {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  }
  
  function rgbToHsb(rgb: [number, number, number]): {
    h: number;
    s: number;
    b: number;
  } {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
  
    let h,
      s,
      b2 = max;
  
    if (delta > 0) {
      s = delta / max;
  
      if (max === r) {
        h = (g - b) / delta;
      } else if (max === g) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
  
      h *= 60;
  
      if (h < 0) {
        h += 360;
      }
    } else {
      s = 0;
      h = 0;
    }
  
    return { h, s: s * 100, b: b2 * 100 };
  }
  