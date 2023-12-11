const message = "hello there from lighthouse labs";
let delayTime = 0;

for (const char of message) {
  setTimeout(() => {
    process.stdout.write(char);

    // Check if it's the last character, then add a newline
    if (char === message[message.length - 1]) {
      console.log();
    }
  }, delayTime);

  delayTime += 50;
}