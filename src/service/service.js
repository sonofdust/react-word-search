export const setLocalStorage = (key, obj) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

export const getLocalStorage = (key) => {
  if (!localStorage.getItem(key)) {
    // setLocalStorage(key, JSON.stringify(new CLetterGrid(key)));
    localStorage.setItem(key, JSON.stringify(new LetterGrid(key)));
  }
  return JSON.parse(localStorage.getItem(key));
};

// export class CLetterGrid {
//   constructor(size = 10) {
//     console.log("CONSTRUCTOR IF FIRING!!!");
//     this.coordinates = [];
//     this.grid = Array.from(
//       {
//         length: size,
//       },
//       (_, y) =>
//         Array.from({length: size}, (_, x) => ({
//           selected: false,
//           char: this.getLetter(),
//           y,
//           x,
//         }))
//     );
//   }

//   deleteCoordinate(word) {
//     this.getCoordinate(word).points.forEach((item) => {
//       item.selected = false;
//       item.char = this.getLetter();
//       this.grid[item.y][item.x] = item;
//       console.log(item);
//     });
//     this.coordinates = [...this.coordinates.filter((e) => e.word != word)];
//   }

//   getLetter() {
//     return String.fromCharCode(
//       Math.floor(Math.random() * 26) + "A".charCodeAt(0)
//     );
//   }

//   getCoordinate(word) {
//     return this.coordinates.find((e) => e.word == word);
//   }

//   getWordList() {
//     return this.coordinates.map((e) => e.word);
//   }

//   setCoordinate(word) {
//     const random = (num) => Math.floor(Math.random() * num);
//     const size = this.grid.length;

//     const getPoints = (word, pos) => {
//       const validRange = (a) => {
//         const isRange = (points) => points.every((e) => e < size && e >= 0);
//         if (isRange(a.map((e) => e.x)) && isRange(a.map((e) => e.y))) {
//           const cross = a
//             .map((e) => this.grid[e.y][e.x])
//             .filter((e) => e.selected);
//           return cross.every((e) => e.char != this.grid[e.y][e.x].char);
//         }
//         return false;
//       };

//       const point = {
//         x: random(size),
//         y: random(size),
//       };

//       const obj = {
//         word,
//         points: [...word].map((e, i) => ({
//           selected: true,
//           char: e,
//           ...pos(point.x, i, point.y, i),
//         })),
//       };

//       if (!validRange(obj.points)) {
//         obj.points = [];
//       }
//       return obj;
//     };

//     for (let i = 0; i < 1000; i++) {
//       const vector = ["LH", "RH", "LUD", "LDD", "UV", "DV", "RUD", "RDD"];
//       const result = {
//         LH: getPoints(word, (x, i, y, j) => ({
//           x: x - i,
//           y: y + 0,
//         })),
//         RH: getPoints(word, (x, i, y, j) => ({
//           x: x + i,
//           y: y + 0,
//         })),
//         LUD: getPoints(word, (x, i, y, j) => ({
//           x: x - i,
//           y: y + j,
//         })),
//         LDD: getPoints(word, (x, i, y, j) => ({
//           x: x - i,
//           y: y - j,
//         })),
//         UV: getPoints(word, (x, i, y, j) => ({
//           x: x + 0,
//           y: y + j,
//         })),
//         DV: getPoints(word, (x, i, y, j) => ({
//           x: x + 0,
//           y: y - j,
//         })),
//         RUD: getPoints(word, (x, i, y, j) => ({
//           x: x + i,
//           y: y + j,
//         })),
//         RDD: getPoints(word, (x, i, y, j) => ({
//           x: x + i,
//           y: y - j,
//         })),
//       }[vector[random(vector.length)]];

//       if (result.points.length > 0) {
//         result.points.forEach((e) => {
//           this.grid[e.y][e.x].selected = true;
//           this.grid[e.y][e.x].char = e.char;
//         });
//         this.coordinates = [...this.coordinates, result];
//         break;
//       }
//     }
//     if (!this.coordinates.find((e) => e.word == word).points) {
//       throw {error: `Unable to add ${word}`};
//     }
//   }
// }

export class LetterGrid {
  constructor(size = 10) {
    let coordinates = [];

    const getLetter = () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0));

    const getCoordinate = (word) => coordinates.find((e) => e.word == word);

    this.getWordList = () => this.coordinates.map((e) => e.word);

    const grid = Array.from(
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
            return cross.every((e) => e.char != grid[e.y][e.x].char);
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
      if (!coordinates.find((e) => e.word == word).points) {
        throw {error: `Unable to add ${word}`};
      }
    };

    this.deleteCoordinate = (word) => {
      getCoordinate(word).points.forEach((item) => {
        item.selected = false;
        item.char = getLetter();
        grid[item.y][item.x] = item;
      });
      coordinates = [coordinates.filter((e) => e.word != word)];
    };
  }
}
