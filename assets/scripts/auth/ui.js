'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed up!')
}

const signUpFailure = function (error) {
  console.error(error)
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
}

const changePasswordSuccess = function (data) {
  console.log('Successfully changed password')
}

const changePasswordFailure = function (error) {
  console.error(error)
}

const signOutSuccess = function (data) {
  console.log('Successfully signed out')
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
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
