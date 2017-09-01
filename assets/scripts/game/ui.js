'use strict'

const createGameSuccess = function (data) {
  if (!data) {
    console.warn('Something went wrong')
  } else if (data.game) {
    console.log(data.game)
  }
}

const createGameFailure = function (response) {
  console.error(response)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
