'use strict'

const winner = function () {
  if (($('#box1').text() === $('#box2').text() && $('#box2').text() === $('#box3').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    $('.winner').text($('#box1').text() + ' WON!!!')
    $("div[id^='box']").off()
  } else if (($('#box1').text() === $('#box5').text() && $('#box5').text() === $('#box9').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    $('.winner').text($('#box1').text() + ' WON!!!')
    $("div[id^='box']").off()
  } else if (($('#box1').text() === $('#box4').text() && $('#box4').text() === $('#box7').text()) && ($('#box1').text() === 'X' || $('#box1').text() === 'O')) {
    $('.winner').text($('#box1').text() + ' WON!!!')
    $("div[id^='box']").off()
  } else if (($('#box2').text() === $('#box5').text() && $('#box5').text() === $('#box8').text()) && ($('#box2').text() === 'X' || $('#box2').text() === 'O')) {
    $('.winner').text($('#box2').text() + ' WON!!!')
    $("div[id^='box']").off()
  } else if (($('#box3').text() === $('#box6').text() && $('#box6').text() === $('#box9').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
    $('.winner').text($('#box3').text() + ' WON!!!')
    $("div[id^='box']").off()
  } else if (($('#box4').text() === $('#box5').text() && $('#box5').text() === $('#box6').text()) && ($('#box4').text() === 'X' || $('#box4').text() === 'O')) {
    $('.winner').text($('#box4').text() + ' WON!!!')
    $("div[id^='box']").off()
  } else if (($('#box3').text() === $('#box5').text() && $('#box5').text() === $('#box7').text()) && ($('#box3').text() === 'X' || $('#box3').text() === 'O')) {
    $('.winner').text($('#box3').text() + ' WON!!!')
    $("div[id^='box']").off()
  } else if (($('#box7').text() === $('#box8').text() && $('#box8').text() === $('#box9').text()) && ($('#box7').text() === 'X' || $('#box7').text() === 'O')) {
    $('.winner').text($('#box7').text() + ' WON!!!')
    $("div[id^='box']").off()
  }
}

let clicks = 0

const clickCounter = function () {
  clicks += 1
}

const XorO = function () {
  clickCounter()
  if (clicks % 2 === 0) {
    $(this).text('O')
  } else {
    $(this).text('X')
  }
  winner()
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
  click,
  winner
}
