# Mindera Graduates UI Test Automation Challenge

On this challenge we are going to use WebdriverIO to create automated test scripts. You can find a lot of information and how to use this tool on the website (http://webdriver.io/api.html).

## Challenge 1

On this first challenge let's do some tests on Mindera’s Public Website. The objective is for you to implement or change the test scripts in order to make them all pass. They are divided in 3 and you must:

* Automatically click on the “PEOPLE & CULTURE” button present on our webpage. The selector for the button is already defined as ```peopleAndCulture``` in the file ```challenge1.page.js``` so you must implement a click on the button so that way the test can pass. **BONUS:** Find another valid CSS selector for the same button!

* Complete the ```expect()``` so that way the test can pass.

* Go to the ```pageObjects/challenge1.page.js``` and define the ```jobList``` selector  so that way the test can pass.

## Challenge 2

Now that you figured how this framework works let's go to the next level :-). On this challenge we are going to use webdriverIO to do some automatic actions in a game.

The game consists in shoot bubbles that are going to keep showing in the screen, every time you shoot a bubble your score board will increase. On this challenge you must open the game webpage and wait a 5 seconds, meanwhile a few bubbles (you don't know how many) are going to show up on the screen  and you will need to count the number of bubbles that showed up during the time you waited and then you must shoot (click on) all of them. The score board will appear and will increase every time you shoot a bubble, so you must create an ```expect()``` to assert that the score displayed is the same as the number of bubbles that showed up during the time you waited.

**BONUS:** Run an endless test that is clicking on bubbles as fast as possible and validating the counter every time it clicks. See if you can do it so that no more than one bubble is ever present on the screen! :)

## Challenge 3

This last challenge is to test your ability to find some bugs :). On this last challenge we will give you a form where you are free to do and write an automated test script. The form might have some bugs so let’s see how many bugs your test script can catch.

## You’ll might need:

Mindera website: https://www.mindera.com/ for challenge 1;

Bubble game: https://qatools.mindera.com/bubbles/index.html for challenge 2;

Buggy form: https://qatools.mindera.com/buggy.html for challenge 3;

Github repository to fork: https://github.com/Mindera/ui-automation-chalenge 

### Setting up 

To run the tests you must first make sure you have Node.js installed on your machine

Then the first thing you must do is a fresh installation, to do that you must run the following command:

```
npm install
```

After this you must have all set up to start running the tests

### Running the tests

To run the tests you can run them separately or all together.

If you want to run all the suite tests run the following command:

```
npm run test
```
To run a suite separately:

```
npm run challenge1
```
or
```
npm run challenge2
```
or
```
npm run challenge3
```
## 
