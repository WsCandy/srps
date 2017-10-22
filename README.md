Super Rock Paper Scissors - v1.0.0
=====

Super Rock Paper Scissors was built in honour of the old 8bit systems, in particular the NES. The design is a twist on the original Super Mario Bros. released in 1985.

Features
---
Super Rock Paper Scissors includes the following features:

* Scoring System
    * Keeps a record of your high score
    * Earn more points the more times you win consecutively

* Game Play
    * Features a game of 10 rounds
    * Each round is timed
    * Face off against the CPU
    
SetUp
---

Simply clone down this repository and run `npm install` or `yarn install` if you are using `yarn`.

Once you have all the dependencies installed you can spin up the app on `localhost:3000` by using either:
    
    npm start
    
or 

    yarn start

Technologies
---
Super Rock Paper Scissors is build using React. The app was created using `react-create-app` with a few small additions. 

Additions include:
* `Redux` - For state management - https://github.com/reactjs/redux
* `Flow` - For static type checking - https://github.com/facebook/flow

Testing
---
`react-create-app` comes pre-packed with `jest` https://github.com/facebook/jest as a result I used Jest for unit testing. There are 67 tests across 3 suits. The majority of the test cases test the game logic such as the outcome of your play.

Tests are located in `__test__` folders adjacent to the files they're testing.

To run the tests simply do the following after set up:

    npm test

or

    yarn test
    
You may be prompted to press `a` to run all the tests.

Flow can also be used ran to check for potential typing errors, simply run the following after set up:

    npm flow
   
or

    yarn flow

How to Play
---

When the game starts up you will be on a title screen simply select `1 player game` to being playing!

When you start the game you will notice 3 `?` blocks, hovering over these boxes will show you what is inside, click on a box to select that option. When you have selected an option the CPU player will reveal their choice and the result will be displayed. To start the next round simply click on `Next Round`.

There are 10 rounds in total, see if you can get the highest possible score!


Development Time
---

This project took around 5-6 hours for the tests and logic and a further 4 hours for the UI. Work was started on a Saturday evening and then the UI was finished Sunday evening.
 
Improvements
---

There are a few things I would like to improve for the next version, I would like to add a lot more polish to game as a whole. I feel that scene transitions, additional animations, and sound effects would definately help give this even more of a retro feel.
In addition to the UI improvements I would like to store the high score in local storage for subsequent visits to the game.