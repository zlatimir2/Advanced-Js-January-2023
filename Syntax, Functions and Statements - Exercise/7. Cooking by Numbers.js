function solve(...params) {
  let number = Number(params.shift())

  for (const el of params) {
    switch (el) {
      case 'chop': number /= 2;
        break;
      case 'dice': number = Math.sqrt(number)
        break;
      case 'spice': number++;
        break;
      case 'bake': number *= 3;
        break;
      case 'fillet': number *= 0.8;
        break;

    }
    console.log(number);

  }


}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')