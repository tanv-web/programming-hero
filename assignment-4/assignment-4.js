function totalFine(fare) {
  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }

  return fare + fare * 0.2 + 30;
}

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let chars = str.split("");

  let new_str = "";

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== " ") {
      new_str += chars[i];
    }
  }

  return new_str.toUpperCase();
}

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  let player1Rank = player1.foul + player1.cardY + player1.cardR;

  let player2Rank = player2.foul + player2.cardY + player2.cardR;

  if (player1Rank < player2Rank) {
    return player1.name;
  } else if (player1Rank === player2Rank) {
    return "Tie";
  } else {
    return player2.name;
  }
}

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }

  let result = 0;

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        result += 1;
      }
    }

    if (result === arr1.length) {
      return true;
    } else {
      return false;
    }
  }
}

function resultReport(marks) {
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }

  let finalResult = {
    finalScore: 0,

    pass: 0,

    fail: 0,
  };

  for (let i = 0; i < marks.length; i++) {
    finalResult.finalScore += marks[i] / marks.length;

    if (marks[i] >= 40) {
      finalResult.pass += 1;
    } else {
      finalResult.fail += 1;
    }
  }

  finalResult.finalScore = Math.round(finalResult.finalScore);

  return finalResult;
}
