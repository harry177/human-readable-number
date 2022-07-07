module.exports = function toReadable (number) {
    let one_digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let two_digits = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number < 10) return one_digits [number];
    else if (number < 20) return tens [number%10];
    else if ((number < 100) && (number%10 === 0)) return two_digits [number/10];
    else if ((number < 100) && (number%10 !== 0)) return two_digits [Math.trunc (number/10)] + ' ' + one_digits [number%10];
    else if ((number < 999) && (number%100 === 0)) return one_digits [number/100] + ' ' + 'hundred';
    else if ((number < 999) && (number%100 !== 0) && (number%100 <=9))
    return one_digits [Math.trunc (number/100)] + ' ' + 'hundred' + ' ' + one_digits [Math.trunc (number%100%10)];
    else if ((number < 999) && (number%100 !== 0) && (number%100 > 9) && (number%100 < 20))
    return one_digits [Math.trunc (number/100)] + ' ' + 'hundred' + ' ' + tens [Math.trunc (number%100%10)];
    else if ((number < 999) && (number%100 !== 0) && (number%10 === 0))
    return one_digits [Math.trunc (number/100)] + ' ' + 'hundred' + ' ' + two_digits [Math.trunc (number%100/10)];
    else return one_digits [Math.trunc (number/100)] + ' ' + 'hundred' + ' ' + two_digits [Math.trunc (number%100/10)] + ' ' + one_digits [Math.trunc (number%100%10)];
}
