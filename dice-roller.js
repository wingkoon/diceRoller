const dice = function(max) {
  const result = Math.floor(Math.random() * max) + 1;
  return result;
};

const numDice = Number(process.argv[2]);
process.stdout.write(" Rolled " + numDice + " dice: " + dice(6));
for (let i = 1; i < numDice; i++) {
  process.stdout.write(", " + dice(6));
}
console.log("\n");


