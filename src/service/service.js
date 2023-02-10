export const setLocalStorage = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const getLocalStorage = (key) => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(new LetterGrid(key)));
  }
  return JSON.parse(localStorage.getItem(key));
};

export class LetterGrid {
  constructor(size = 10) {
    let coordinates = [];

    let title = "Puzzel";

    const saveToLocal = () => {
      const obj = {title, coordinates, grid};
      localStorage.setItem(size, JSON.stringify(obj));
    };

    this.setTitle = (newTitle) => {
      title = newTitle;
      saveToLocal();
    };

    this.getTitle = () => {
      return title;
    };

    const getLetter = () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0));

    const getCoordinate = (word) => coordinates.find((e) => e.word === word);

    this.getWordList = () => coordinates.map((e) => e.word);

    let grid = Array.from(
      {
        length: size,
      },
      (_, y) =>
        Array.from({length: size}, (_, x) => ({
          selected: false,
          char: getLetter(),
          y,
          x,
        }))
    );

    this.getGrid = () => grid;

    this.setCoordinate = (word) => {
      const random = (num) => Math.floor(Math.random() * num);
      const getPoints = (word, pos) => {
        const validRange = (a) => {
          const isRange = (points) => points.every((e) => e < size && e >= 0);
          if (isRange(a.map((e) => e.x)) && isRange(a.map((e) => e.y))) {
            const cross = a
              .map((e) => grid[e.y][e.x])
              .filter((e) => e.selected);
            return cross.every((e) => e.char !== grid[e.y][e.x].char);
          }
          return false;
        };

        const point = {
          x: random(size),
          y: random(size),
        };

        const obj = {
          word,
          points: [...word].map((e, i) => ({
            selected: true,
            char: e,
            ...pos(point.x, i, point.y, i),
          })),
        };

        if (!validRange(obj.points)) {
          obj.points = [];
        }
        return obj;
      };
      for (let i = 0; i < 1000; i++) {
        const vector = ["LH", "RH", "LUD", "LDD", "UV", "DV", "RUD", "RDD"];
        const result = {
          LH: getPoints(word, (x, i, y, j) => ({
            x: x - i,
            y: y + 0,
          })),
          RH: getPoints(word, (x, i, y, j) => ({
            x: x + i,
            y: y + 0,
          })),
          LUD: getPoints(word, (x, i, y, j) => ({
            x: x - i,
            y: y + j,
          })),
          LDD: getPoints(word, (x, i, y, j) => ({
            x: x - i,
            y: y - j,
          })),
          UV: getPoints(word, (x, i, y, j) => ({
            x: x + 0,
            y: y + j,
          })),
          DV: getPoints(word, (x, i, y, j) => ({
            x: x + 0,
            y: y - j,
          })),
          RUD: getPoints(word, (x, i, y, j) => ({
            x: x + i,
            y: y + j,
          })),
          RDD: getPoints(word, (x, i, y, j) => ({
            x: x + i,
            y: y - j,
          })),
        }[vector[random(vector.length)]];

        if (result.points.length > 0) {
          result.points.forEach((e) => {
            grid[e.y][e.x].selected = true;
            grid[e.y][e.x].char = e.char;
          });
          coordinates = [...coordinates, result];
          break;
        }
      }
      if (!coordinates.find((e) => e.word === word).points) {
        throw {error: `Unable to add ${word}`};
      }
      saveToLocal();
    };

    this.deleteCoordinate = (word) => {
      try {
        getCoordinate(word).points.forEach((item) => {
          item.selected = false;
          item.char = getLetter();
          grid[item.y][item.x] = item;
        });
        coordinates = [...coordinates.filter((e) => e.word !== word)];
        saveToLocal();
      } catch (e) {}
    };

    if (localStorage.getItem(size) !== null) {
      try {
        const obj = JSON.parse(localStorage.getItem(size));
        coordinates = obj.coordinates;
        title = obj.title;
        grid = obj.grid;
      } catch (e) {
        console.log(e.message);
      }
    }
  }
}
