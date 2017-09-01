'use strict'

const gameApi = require('./api')
const gameUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.createGame(data)
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const gameHandlers = function () {
  $('#new-game').on('click', onCreateGame)
}

module.exports = {
  gameHandlers
}
