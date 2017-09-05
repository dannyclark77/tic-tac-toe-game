'use strict'

const store = require('../store')
const gameEvents = require('../game/events')

const signUpSuccess = function (data) {
  $('#authMessage').text('Sign Up Successful! Sign in to continue.')
  $('#change-password').show()
  $('#sign-out').show()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#authMessage').text('Sign Up Unsuccessful')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#authMessage').text('Sign-In Successful. Select \'New Game\' to Begin.')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#new-game').show()
  $('#get-games').show()
  $('.container').show()
}

const signInFailure = function (error) {
  console.error(error)
  $('#authMessage').text('Sign In Unsuccessful')
}

const changePasswordSuccess = function (data) {
  console.log('Successfully changed password')
  $('#authMessage').text('Password Successfully Changed!')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#authMessage').text('Password Change Unsuccessful')
}

const signOutSuccess = function (data) {
  store.user = null
  $('#authMessage').text('Sign Out Successful!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#get-games').hide()
  $('.container').hide()
  $('#restart-game').hide()
  $('.winner').text('')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#authMessage').text('Sign Out Unsuccessful!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
