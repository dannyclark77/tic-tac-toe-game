'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  store.game = data.game
}

const createGameFailure = function (response) {
  console.error(response)
}

const updateGameSuccess = function (data) {
  console.log(store.game)
}

const updateGameFailure = function (response) {
  console.error(response)
}

const getGamesSuccess = function (data) {
  $('#totalGames').text('Total Games Played = ' + data.games.length)
  console.log(data.games)
}

const getGamesFailure = function (response) {
  console.error(response)
}

const getGameSuccess = function (data) {
  $('#gameData').text(data)
}

const getGameFailure = function (response) {
  console.error(response)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure,
  getGameSuccess,
  getGameFailure
}
