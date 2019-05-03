# FEND_MemoryGame

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

##  Download Procedure from GitHub

Memory Game project repository on GitHUB: https://github.com/udacity/fend-project-memory-game The Zipped File : https://github.com/udacity/fend-project-memory-game/archive/master.zip Download from any of the given sources Now Extract the folder

## Files and Folder structure

  + css
      - app.css
  + img
      - geometry2.png
  + js
      - app.js
  + index.html
  + REAdME.md

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Steps To Be Done

1. Got all the cards and stored in an array named `cards` added an `EventListener` to all cards
2. Add `classList` to the clicked Cards for performing styles on those cards
3. Shuffled all cards at the time of reloading the page every time
4. Clicked cards are stored in an array. Array named as `clickedCards`. If the array Length equals to 2. Then incremented  `moveCounter by 1`. Checked for matching Cards by using `children[0].classList.item(1)`
5. If matched, applied few styles to those cards with non-clickable property
6. Clicked the first card at that time started the timer count
7. Added star rating. If the game completed with in 18 moves, star count is 3. If stars exceed the 18 moves the star count will diminished by one, The condition is same for 35 moves also. If the move counter exceeds 35 then the star count will be diminished by another one
8. If the match count == `8` then shows a congratulations message in a popup. I implemented this by using sweet alert

## Conclusion

It's very interesting to design Memory Game by using `frontEnd` technologies. It's right platform to design Java Script game.
