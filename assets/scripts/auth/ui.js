'use strict'

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed up!')
}

const signUpFailure = function (error) {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
