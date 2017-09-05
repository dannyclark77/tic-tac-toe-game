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
  console.log(store)
}

const getGamesFailure = function (response) {
  console.error(response)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
