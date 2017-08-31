'use strict'

const position = ['#box1', '#box2', '#box3', '#box4', '#box5', '#box6', '#box7', '#box8', '#box9']

let clicks = 0

const clickCounter = function () {
  clicks += 1
}

const XorO = function () {
  clickCounter()
  if (clicks % 2 === 0) {
    return 'X'
  } else {
    return 'O'
  }
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

const click = function () {
  $("div[id^='box']").on('click', play)
}

module.exports = {
  click
}
