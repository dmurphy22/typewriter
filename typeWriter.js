const animateText = (sentence) => {
  
  for (const [index, char] of Array.from(sentence).entries()) {
    setTimeout(() => {
      process.stdout.write(char);
    }, index * 50);
  }
  console.log();
};

animateText("Lol this is a long sentence.Lol this is a long sentence.Lol this is a long sentence.Lol this is a long sentence.");