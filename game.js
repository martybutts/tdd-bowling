module.exports = {
  scoreFrame: scoreFrame
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

function scoreStrike(frame, nextFrame, nextNextFrame){
  var score = frame[0] + frame[1] + nextFrame[0] + nextFrame[1]
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
