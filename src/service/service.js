export const setLocalStorage = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
};

export const getLetter = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0));

export const getGrid = (size) => {
  let grid = getLocalStorage(size);
  if (!grid) {
    grid = Array.from(
      {
        length: size,
      },
      (e, y) =>
        Array.from({length: size}, (e, x) => ({
          selected: false,
          char: getLetter(),
          point: {x, y},
        }))
    );
    setLocalStorage(size, grid);
  }

  return grid;
};

export const getCoordinate = (word, size) => {
  const random = (num) => Math.floor(Math.random() * num);

  let count = 0;
  while (count++ < 100) {
    const direction = ["h", "dl", "v", "dr"];
    let point = {
      x: random(size),
      y: random(size),
    };

    switch (direction[random(direction.length)]) {
      case "h":
        if (point.x + word.length < size) {
          return {
            word,
            points: [...word].map((e, i) => ({
              char: e,
              x: i + point.x,
              y: point.y,
            })),
          };
        }
        break;
      case "dl":
        if (point.x - word.length >= 0 && point.y + word.length < size) {
          return {
            word,
            points: [...word].map((e, i) => ({
              char: e,
              x: point.x - i,
              y: point.y + i,
            })),
          };
        }
        break;
      case "v":
        if (point.y + word.length < size) {
          return {
            word,
            points: [...word].map((e, i) => ({
              char: e,
              x: point.x,
              y: point.y + i,
            })),
          };
        }
        break;
      case "dr":
        if (point.x + word.length < size && point.y + word.length < size) {
          return {
            word,
            points: [...word].map((e, i) => ({
              char: e,
              x: point.x + i,
              y: point.y + i,
            })),
          };
        }
        break;
    }
  }
};

export class letterGrid {
  constructor(size = 10) {
    this.grid = Array.from(
      {
        length: size,
      },
      (e, y) =>
        Array.from({length: size}, (e, x) => ({
          char: getLetter(),
          point: {x, y},
        }))
    );
  }

  getCoordinate(word) {
    const random = (num) => Math.floor(Math.random() * num);
    const size = this.grid.length;
    let count = 0;

    while (count++ < 100) {
      const direction = ["h", "dl", "v", "dr"];
      let point = {
        x: random(size),
        y: random(size),
      };
      //*************************************************
      const validateIntersect = (obj) => {};

      //*************************************************

      switch (direction[random(direction.length)]) {
        case "h":
          if (point.x + word.length < size) {
            return {
              word,
              points: [...word].map((e, i) => ({
                char: e,
                x: i + point.x,
                y: point.y,
              })),
            };
          }
          break;
        case "dl":
          if (point.x - word.length >= 0 && point.y + word.length < size) {
            return {
              word,
              points: [...word].map((e, i) => ({
                char: e,
                x: point.x - i,
                y: point.y + i,
              })),
            };
          }
          break;
        case "v":
          if (point.y + word.length < size) {
            return {
              word,
              points: [...word].map((e, i) => ({
                char: e,
                x: point.x,
                y: point.y + i,
              })),
            };
          }
          break;
        case "dr":
          if (point.x + word.length < size && point.y + word.length < size) {
            return {
              word,
              points: [...word].map((e, i) => ({
                char: e,
                x: point.x + i,
                y: point.y + i,
              })),
            };
          }
          break;
      }
    }
  }

  getGrid() {
    return this.grid;
  }
}
