const subjects = ["The chicken", "A computer", "A banana", "An astronaut", "A cactus"];
const actions = ["jumps over", "sings to", "dances with", "fights against", "paints"];
const objects = ["a rainbow", "the moon", "a pile of spaghetti", "a sleeping bear", "an invisible friend"];

function generateJoke() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
    return `${subject} ${action} ${object}`;
}
generateJoke()
console.log(generateJoke())
