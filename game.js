module.exports = {
  scoreGame: scoreGame,
  scoreFrame: scoreFrame
  }

function scoreGame(frames){
  var gameScore = 0
  for (var i=0; i<frames.length - 1; i++){
    gameScore += scoreFrame(frames[i], frames[i+1], frames[i+2])
  }
  var tenthFrame = frames[9]
  gameScore += scoreTenth(tenthFrame)
  return gameScore
}

function scoreFrame (frame, nextFrame, nextNextFrame) {
  if (isStrike(frame)) {
    return scoreStrike(frame, nextFrame, nextNextFrame)
  }
  else if (isSpare(frame)) {
    return scoreSpare(frame, nextFrame)
  }
  return frame[0] + frame[1]
}

function scoreTenth (frame) {
  var sum = 0
  for (var i=0; i<frame.length; i++) {
  sum += frame[i]
  } 
  return sum
}

function scoreStrike(frame, nextFrame, nextNextFrame){
  var score = frame[0] + nextFrame[0] + nextFrame[1]
  if (nextFrame[0] === 10) {
    score += nextNextFrame[0]
  }
  return score
}

function scoreSpare(frame, nextFrame){
  return frame[0] + frame[1] + nextFrame[0] //returns frame score (number)
}

function isStrike(frame) {
  return frame[0] === 10
}

function isSpare(frame) {
  return (frame[0] + frame[1]) === 10   //true or false
}

// function scoreFrame (frame, nextFrame, nextNextFrame) {
//   var score = frame[0] + frame[1]
//   if (frame[0] === 10) {
//     score += nextFrame[0] + nextFrame[1]
//     if (nextFrame[0] === 10) {
//       score += nextNextFrame[0]
//     }
//   }
//   else if (score === 10) {
//     score += nextFrame[0]
//   }
//   return score
// }
