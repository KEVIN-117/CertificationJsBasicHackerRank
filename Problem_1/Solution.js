'use strict';

function joinedLogger(level, sep) {
    // write your code here
    return function (...messages) {
        let result = [];
        for (let i = 0; i < messages.length; i++) {
            console.log(messages[i])
            if (messages[i].level >= level) {
                result.push(messages[i].text);
            }
        }
        console.log(result.join(sep))
    }
}

function main() {

    const myLog = joinedLogger(21, ";");
    console.log(myLog)

    let messages = [{level: 40, text: "foo"}, {level: 90, text: "bar"}, {level: 20, text: "baz"}];

    myLog(...messages);
}
main()