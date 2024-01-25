'use strict';

const counter = (function counter() {
    let value = 0;
    return {
        getValue: function() {
            return value;
        },
        changeBy: function(k) {
            value += k;
        },
    }
})();
function getFixedCounter(k) {
    // write your code here
    let value = 0;
    console.log(value)
    return {
        increment: function(){
            return value + k
        },
        decrement: function(){
            return value - k
        },
        getValue: function(){
            return value
        },
        changeBy: function(){
            value += k
        }
    }
}
function main(op) {

    const val = 2;

    const c = getFixedCounter(val);

    if (op === '+') {
        c.increment();
    } else if (op === '-') {
        c.decrement();
    } else if (op === '?') {
        console.log(c.getValue())
    }
}