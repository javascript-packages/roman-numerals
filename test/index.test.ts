import { toRoman } from '../src';

describe('Roman Converter', () => {
  it('should convert 1 to I', () => {
    // arrange
    const number = 1;

    // act
    const want = 'I';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 4 to IV', () => {
    // arrange
    const number = 4;

    // act
    const want = 'IV';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 5 to V', () => {
    // arrange
    const number = 5;

    // act
    const want = 'V';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 9 to IX', () => {
    // arrange
    const number = 9;

    // act
    const want = 'IX';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 10 to X', () => {
    // arrange
    const number = 10;

    // act
    const want = 'X';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 40 to XL', () => {
    // arrange
    const number = 40;

    // act
    const want = 'XL';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 50 to L', () => {
    // arrange
    const number = 50;

    // act
    const want = 'L';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 90 to XC', () => {
    // arrange
    const number = 90;

    // act
    const want = 'XC';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 100 to C', () => {
    // arrange
    const number = 100;

    // act
    const want = 'C';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 400 to CD', () => {
    // arrange
    const number = 400;

    // act
    const want = 'CD';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 500 to D', () => {
    // arrange
    const number = 500;

    // act
    const want = 'D';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 900 to CM', () => {
    // arrange
    const number = 900;

    // act
    const want = 'CM';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 1000 to M', () => {
    // arrange
    const number = 1000;

    // act
    const want = 'M';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should convert 4999 (Maximum) to MMMMCMXCIX', () => {
    // arrange
    const number = 4999;

    // act
    const want = 'MMMMCMXCIX';
    const have = toRoman(number);

    // assert
    expect(have).toEqual(want);
  });

  it('should fail on negative.', () => {
    // arrange
    const number = -1;

    // assert
    expect(() => {
      toRoman(number);
    }).toThrow(RangeError);
    expect(() => {
      toRoman(number);
    }).toThrow('(arg): number must be non-negativ.');
  });

  it('should fail on zero.', () => {
    // arrange
    const number = 0;

    // assert
    expect(() => {
      toRoman(number);
    }).toThrow(RangeError);
    expect(() => {
      toRoman(number);
    }).toThrow('(arg): number must not be zero.');
  });

  it('should fail if maximum value (4999) is exceeded.', () => {
    // arrange
    const number = 5000;

    // assert
    expect(() => {
      toRoman(number);
    }).toThrow(RangeError);
    expect(() => {
      toRoman(number);
    }).toThrow('(arg): number must be less than or equal to 4999.');
  });
});
