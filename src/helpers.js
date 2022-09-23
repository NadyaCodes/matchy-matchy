const randomIndex = (limit) => {
  return Math.floor(Math.random() * limit)
}


const randomize = (num, arr) => {
  const tempArr = [...arr]
  const finalArray = []
  for (let i = 0; i < num; i++) {
    let randomInd = randomIndex(tempArr.length)
    finalArray.push(tempArr[randomInd])
    tempArr.splice(randomInd, 1)
  }
  return finalArray
}


export function makeImageArray(num) {
  const totalImages = num / 2;
  const imageOptions = ['cat', 'dog', 'smile', 'banana', 'frown', 'apple', 'pineapple', 'orange', 'mug', 'laptop', 'lamp', 'book', 'elephant', 'rose', 'lily', 'daisy', 'headphones', 'puzzle', 'desk', 'chair', 'ball', 'blanket', 'pillow', 'shampoo', 'plate', 'pot', 'teddy bear', 'skirt', 'dress', 'basket']
  const imageArray = randomize(totalImages, imageOptions)
  const doubledImageArray = [...imageArray, ...imageArray]
  const shuffledArray = randomize(num, doubledImageArray)

 return shuffledArray
}