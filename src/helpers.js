const randomIndex = (limit) => {
  return Math.floor(Math.random() * limit);
};

const randomize = (num, arr) => {
  const tempArr = [...arr];
  const finalArray = [];
  for (let i = 0; i < num; i++) {
    let randomInd = randomIndex(tempArr.length);
    finalArray.push(tempArr[randomInd]);
    tempArr.splice(randomInd, 1);
  }
  return finalArray;
};

export function makeImageArray(num) {
  const totalImages = num / 2;
  const imageOptions = [
    "😄",
    "😉",
    "🥰",
    "😍",
    "🤩",
    "🤪",
    "😐",
    "🤭",
    "🤔",
    "😏",
    "🤥",
    "😴",
    "🥴",
    "😵‍💫",
    "🤑",
    "🥳",
    "🤠",
    "🥸",
    "😎",
    "🧐",
    "😲",
    "😳",
    "🥺",
    "😇",
    "🤒",
    "🤣",
    "😙",
    "🤫",
    "😮‍💨",
    "😶",
  ];
  const imageArray = randomize(totalImages, imageOptions);
  const doubledImageArray = [...imageArray, ...imageArray];
  const shuffledArray = randomize(num, doubledImageArray);

  return shuffledArray;
}

export function calcTime(num) {
  switch (num) {
    case 12:
      return 100;
    case 24:
      return 200;
    case 30:
      return 300;
    case 48:
      return 400;
    default:
      return 300;
  }
}
