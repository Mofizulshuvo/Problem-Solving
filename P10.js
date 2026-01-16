//PingPong
function pingPong(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("PingPong");
    } else if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Ping");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Pong");
    } else {
        console.log(i);
    }   
    }
}
const n = 15;
pingPong(n);
