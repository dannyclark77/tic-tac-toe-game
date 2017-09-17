This is a tic-tac-toe game created as my first project at General Assembly. I built the game using html, css, javascript, and jquery. Ajax was used to connect to the back end.

I was able to quickly develop a workable game within the DOM before connecting to the API. However, in the process of connecting to the API and meeting the requirements of the project, I realized that the way I constructed the game did not easily provide the data that needed to be passed to the API. Creating the PATCH request to communicate each move in the game to the API required a reworking of the structure of my game to include an array in which each index of the array corresponded to a position on the board, and was populated by Xs and Os as they were played. Determining what information was needed for the PATCH request, how to pass that information into the request, and how to set up the game to provide that information was by the most challenging step in creating the game.

While the game as constructed is functional, given more time I would clean up some replicated code in the events page in the game folder that is identical to the events page in the scripts folder. I had designed the game events page to hold only those functions that were necessary to communicate requests to the API, but I could not figure out how to pull the info that populated the arrays from the scripts events page, and so had to reconstruct those functions in both pages to adequately work.

These are a few user stories that I used to plan the project:

1. As a frequent gamer, I want stats on how I've done previously so I know who
the best is.

2. As a novice player, I want to be able to reset the game if I make a mistake.

3. As a novice player, I want to be able to ask the computer for recommendations
on what move I should make so I can learn.

4. As an avid social gamer, I want to be able to play against my friends.

I was only able to accomplish 1 of the 4 user stories listed, and given more time, I would hope to be able to tackle the other 3 to create a more dynamic gaming experience.

Link to my original wireframe: https://imgur.com/a/uwqEk
