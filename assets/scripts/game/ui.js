'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  store.game = data.game
  $('#restart-game').show()
  $('#new-game').hide()
  $('#authMessage').text('')
}

const createGameFailure = function (response) {
  $('#authMessage').text('Please sign in to continue')
}

const updateGameSuccess = function (data) {
}

const updateGameFailure = function (response) {
}

const getGamesSuccess = function (data) {
  $('#totalGames').text('Total Games Played = ' + data.games.length)
}

const getGamesFailure = function (response) {
}

const getGameSuccess = function (data) {
  $('#gameData').text(data)
}

const getGameFailure = function (response) {
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
