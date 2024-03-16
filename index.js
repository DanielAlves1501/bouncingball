const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

const gravity = 1;

class Ball {
  constructor(radius, color, x, y, vx, vy) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fill();
    c.fillStyle = this.color;
    c.stroke();
  }

  update() {
    this.draw();

    if (this.y + this.radius + this.vy < canvas.height) {
      this.vy += gravity * 0.1;
    }

    if (this.y + this.radius + this.vy > canvas.height) {
      this.vy = -this.vy;
    }

    if (this.x + this.radius > canvas.width || this.x - this.radius <= 0) {
      this.vx = -this.vx;
    }

    this.x += this.vx;

    this.y += this.vy;
  }
}

var balls = [];
var colors = [
  "red",
  "green",
  "purple",
  "blue",
  "orange",
  "black",
  "gray",
  "violet",
  "brown",
  "red",
];

// new Ball(50, "green", innerWidth / 2, innerHeight / 2, 2, 2);

for (let i = 0; i < 500; i++) {
  let newBall = new Ball(
    Math.random() * 50,
    colors[i],
    Math.round(Math.random() * canvas.width),
    Math.round(Math.random() * canvas.width),
    1,
    1
  );

  balls.push(newBall);
}

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => {
    ball.update();
  });
};

animate();
