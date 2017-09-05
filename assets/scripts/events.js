'use strict'

const store = require('./store')

const winner = function () {
  if (($('#box1').text() === $('#box2').text() && $('#box2').text() === $('#box3').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    $('.winner').text($('#box1').text() + ' WON!!!')
    store.game.over = true
    $("div[id^='box']").off()
  } else if (($('#box1').text() === $('#box5').text() && $('#box5').text() === $('#box9').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    $('.winner').text($('#box1').text() + ' WON!!!')
    $("div[id^='box']").off()
    store.game.over = true
  } else if (($('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    $('.winner').text($('#box1').text() + ' WON!!!')
    $("div[id^='box']").off()
    store.game.over = true
  } else if (($('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text()) && ($('#box2').text() === 'X' || $('#box2').text() === 'O')) {
    $('.winner').text($('#box2').text() + ' WON!!!')
    $("div[id^='box']").off()
    store.game.over = true
  } else if (($('#box3').text() === $('#box6').text() && $('#box6').text() === $('#box9').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
    $('.winner').text($('#box3').text() + ' WON!!!')
    $("div[id^='box']").off()
    store.game.over = true
  } else if (($('#box4').text() === $('#box5').text() && $('#box5').text() === $('#box6').text()) && ($('#box4').text() === 'X' || $('#box4').text() === 'O')) {
    $('.winner').text($('#box4').text() + ' WON!!!')
    $("div[id^='box']").off()
    store.game.over = true
  } else if (($('#box3').text() === $('#box5').text() && $('#box5').text() === $('#box7').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
    $('.winner').text($('#box3').text() + ' WON!!!')
    $("div[id^='box']").off()
    store.game.over = true
  } else if (($('#box7').text() === $('#box8').text() && $('#box8').text() === $('#box9').text()) && ($('#box7').text() === 'X' || $('#box7').text() === 'O')) {
    $('.winner').text($('#box7').text() + ' WON!!!')
    $("div[id^='box']").off()
    store.game.over = true
  } else if (clicks >= 9) {
    $('.winner').text('Draw game. There is no winner')
    store.game.over = true
  }
}

let clicks = 0
let gameArray = ['', '', '', '', '', '', '', '', '']

const clickCounter = function () {
  if (clicks > 8) {
    clicks = 0
  }
  clicks += 1
}

const XorO = function () {
  clickCounter()
  if (clicks % 2 === 0) {
    $(this).text('O')
    gameArray[$(this).data('id')] = ('O')
  } else {
    $(this).text('X')
    gameArray[$(this).data('id')] = ('X')
  }
  winner()
  store.game.cells = gameArray
  console.log(gameArray)
}

const play = function () {
  if ($(this).text() === 'X') {
    return 'X'
  } else if ($(this).text() === 'O') {
    return 'O'
  } else {
    $(this).text(XorO)
  }
}

// const click = function () {
//   $("div[id^='box']").on('click', play)
// }

const newGame = function (event) {
  event.preventDefault()
  $("div[id^='box']").text('')
  gameArray = ['', '', '', '', '', '', '', '', '']
  clicks = 0
  $("div[id^='box']").on('click', play)
  $('.winner').text('')
}

const newGameClick = function () {
  $('#new-game').on('click', newGame)
  $('#restart-game').on('click', newGame)
}

module.exports = {
  // click,
  winner,
  newGameClick,
  clicks,
  gameArray,
  clickCounter
}
