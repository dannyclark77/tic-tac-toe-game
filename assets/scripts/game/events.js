'use strict'

const gameApi = require('./api')
const gameUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.createGame(data)
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const onUpdateGame = function (id, value, over) {
  const data = {
    game: {
      cell: {
        index: id,
        value: value
      },
      over: store.game.over
    }
  }
  gameApi.updateGame(data)
    .then(gameUi.updateGameSuccess)
    .catch(gameUi.updateGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  gameApi.index()
    .then(gameUi.getGamesSuccess)
    .catch(gameUi.getGamesFailure)
}

let clicks = 0

const clickCounter = function () {
  if (clicks > 8) {
    clicks = 0
  }
  clicks += 1
}

const XorO = function () {
  clickCounter()
  if (clicks % 2 === 0) {
    return 'O'
  } else {
    return 'X'
  }
}

const onRestartGame = function (event) {
  event.preventDefault()
  onCreateGame(event)
  $("div[id^='box']").on('click', function () {
    onUpdateGame($(this).data('id'), XorO)
  })
}

const gameHandlers = function () {
  $('#new-game').on('click', onCreateGame)
  $("div[id^='box']").on('click', function () {
    onUpdateGame($(this).data('id'), XorO)
  })
  $('#get-games').on('click', onGetGames)
  $('#restart-game').on('click', onRestartGame)
}

module.exports = {
  gameHandlers
}
