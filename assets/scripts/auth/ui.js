'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed up!')
  $('#authMessage').text('Sign Up Successful!')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#authMessage').text('Sign Up Unsuccessful')
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in')
  store.user = data.user
  $('#authMessage').text('Sign In Successful!')
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
  console.log('Successfully signed out')
  store.user = null
  $('#authMessage').text('Sign Out Successful!')
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
