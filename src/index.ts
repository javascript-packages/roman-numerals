/**
 * A pair consisting of Roman numerals and their numeric value.
 */
export type Roman = {
  value: number;
  numerals: string;
};

/**
 * Converts an integer to a Roman numeral.
 *
 * @param number An integer. Must be in range [1, 4999].
 * @returns Roman numeral.
 */
export const toRoman = (number: number) => {
  const recurse = (
    number: number,
    stack: Array<Roman>,
    roman = ''
  ): Roman['numerals'] => {
    // No negatives.
    if (number < 0) {
      throw new RangeError(`(arg): number must be non-negativ.`);
    }

    // No zero.
    if (number === 0) {
      throw new RangeError(`(arg): number must not be zero.`);
    }

    // No numbers outside interval [1, 4999].
    if (number > 4999) {
      throw new RangeError(`(arg): number must be less than or equal to 4999.`);
    }

    // The stack contains all the numerals available,
    // greatest on the top. The stack also includes
    // the values of "composite numerals" - pairs of
    // numerals that follow the subtractive rule,
    // e. g. 4 (IV), 9 (IX) and 40 (XL).
    const { value: largest, numerals } = stack.shift()!;

    // Each iteration checks how many times the number
    // on top of the stack is divisible by the number
    // to be converted.
    const quotient = Math.floor(number / largest);

    // Then, a portion of the Roman numeral sequence
    // can be generated by looking up the corresponding
    // Roman numerals and repeating as many times as the
    // number to be converted is divisible by the largest
    // number in the stack.
    roman = `${roman}${numerals.repeat(quotient)}`;

    // In the next iteration, the current remainder of the
    // division corresponds to the number that is to be
    // converted into a Roman numeral.
    const remainder = number % largest;

    // Finally, the division remainder (new number to be
    // converted) is passed recursively with the stack
    // whose largest element was removed.
    // However, if the remainder of the division is zero,
    // the recursion is terminated and the Roman numeral
    // has been found.
    return remainder === 0 ? roman : recurse(remainder, stack, roman);
  };

  // The list of all available Roman numerals, beginning
  // with the largest.
  const stack: Array<Roman> = [];

  stack.push({ value: 1000, numerals: 'M' });
  stack.push({ value: 900, numerals: 'CM' });
  stack.push({ value: 500, numerals: 'D' });
  stack.push({ value: 400, numerals: 'CD' });
  stack.push({ value: 100, numerals: 'C' });
  stack.push({ value: 90, numerals: 'XC' });
  stack.push({ value: 50, numerals: 'L' });
  stack.push({ value: 40, numerals: 'XL' });
  stack.push({ value: 10, numerals: 'X' });
  stack.push({ value: 9, numerals: 'IX' });
  stack.push({ value: 5, numerals: 'V' });
  stack.push({ value: 4, numerals: 'IV' });
  stack.push({ value: 1, numerals: 'I' });

  return recurse(number, stack);
};