module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame, nextFrame, nextNextFrame) {
  var score = frame[0] + frame[1]
  if (frame[0] === 10) {
    score += nextFrame[0] + nextFrame[1]
    if (nextFrame[0] === 10) {
      score += nextNextFrame[0]
    }
  }
  else if (score === 10) {
    score += nextFrame[0]
  }
  return score
}
