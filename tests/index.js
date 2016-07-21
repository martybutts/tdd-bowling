var test = require('tape')
var game = require('../game')

test('scores a gutterball frame', function(t) {
  var frame = [0, 0]
  var score = game.scoreFrame(frame)
  t.equals(score, 0)
  t.end()
})

test('scores a normal frame', function(t) {
  var frame = [2, 3]
  var score = game.scoreFrame(frame)
  t.equals(score, 5)
  t.end()
})

test('scores a spare frame', function(t) {
  var frame = [4, 6]
  var nextFrame = [4,4]
  var score = game.scoreFrame(frame, nextFrame)
  t.equals(score, 14)
  t.end()
})

test('scores a single strike frame', function(t) {
  var frame = [10,0]
  var nextFrame = [4,4]
  var score = game.scoreFrame(frame, nextFrame)
  t.equals(score, 18)
  t.end()
})

test('scores a double strike frame', function(t) {
  var frame = [10,0]
  var nextFrame = [10,0]
  var nextNextFrame = [5,3]
  var score = game.scoreFrame(frame, nextFrame, nextNextFrame)
  t.equals(score, 25)
  t.end()
})

test('scores a game', function(t){
  var allFrames = [ [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4] ]
  var totalScore = game.scoreGame(allFrames)
  t.equals(totalScore, 119)
  t.end()
})
