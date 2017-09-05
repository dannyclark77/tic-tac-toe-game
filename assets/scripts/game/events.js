'use strict'

const gameApi = require('./api')
const gameUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const mainEvents = require('../events')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.createGame(data)
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = {
    game: {
      cell: {
        index: mainEvents.clicks,
        value: mainEvents.gameArray[mainEvents.clicks]
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

const gameHandlers = function () {
  $('#new-game').on('click', onCreateGame)
  $("div[id^='box']").on('click', onUpdateGame)
  $('#get-games').on('click', onGetGames)
}

module.exports = {
  gameHandlers
}
