'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#authMessage').text('Sign Up Successful! Sign in to continue.')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#authMessage').text('Sign Up Unsuccessful')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#authMessage').text('Sign-In Successful. Select \'New Game\' to Begin.')
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#new-game').show()
  $('#get-games').show()
  $('.container').show()
  $('#sign-up').trigger('reset')
}

const signInFailure = function () {
  $('#authMessage').text('Sign In Unsuccessful')
}

const changePasswordSuccess = function (data) {
  $('#authMessage').text('Password Successfully Changed!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
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

const signOutFailure = function () {
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
