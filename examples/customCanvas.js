const editly = require('..');

async function func({ width, height, canvas }) {
  async function onRender(progress) {
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 40 * (1 + progress * 0.5);

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'hsl(350, 100%, 37%)';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#ffffff';
    context.stroke();
  }

  function onClose() {
    // Cleanup if you initialized anything
  }

  return { onRender, onClose };
}

editly({
  fast: true,
  outPath: './canvas.mp4',
  clips: [
    { duration: 2, layers: [{ type: 'canvas', func }] },
  ],
}).catch(console.error);
