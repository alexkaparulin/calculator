export const ZERO = '0';
export const ONE = '1';
export const TWO = '2';
export const THREE = '3';
export const FOUR = '4';
export const FIVE = '5';
export const SIX = '6';
export const SEVEN = '7';
export const EIGHT = '8';
export const NINE = '9';

export const CLEAR = '';
export const WORTH = '=';
export const COMMA = ',';

export const NUMBER_SELECTED = 'NUMBER_SELECTED';
export const INPUT_CLEAR = 'INPUT_CLEAR';

export const DOT = '.';
export const ADD = '+';
export const MINUS = '-';
export const MULTI = '*';
export const DIVIDE = '/';
export const LEFTBRACKET = '(';
export const RIGHTBRACKET = ')';
export const PERCENT = '%';

export const SIN = 'Math.sin';
export const COS = 'Math.cos';
export const TAN = 'Math.tan';
export const TANH = 'Math.tanh';
export const ROOT = 'Math.sqrt';
export const POWER = 'Math.pow';
export const PI = 'Math.PI';
export const E = 'Math.E';
export const LOG = 'Math.log';

export const number_select = (number)=>({
    type:NUMBER_SELECTED,
    number:number
})

export const input_clear = (input)=>({
    type:INPUT_CLEAR,
    number:input
})
export const worth = (input)=>({
    type:WORTH,
    input:input
})

