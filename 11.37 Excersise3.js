const canvasDimensions = function (width, initialHeight) {
  const height = (initialHeight * 9) / 16;
  return {
    width,
    height,
  };
};

const canvas = canvasDimensions(600, 400);

console.log(canvas);
