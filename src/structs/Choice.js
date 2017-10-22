// @flow
// There is no such things a struct/enumerates in JS so I'm just going to export a class with a bunch of static properties on it.

class Choice {
    static ROCK: number = 1;
    static PAPER: number = 2;
    static SCISSORS: number = 3;
}

export default Choice;