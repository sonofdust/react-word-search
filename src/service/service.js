export const getLetter = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0));

export const getGrid = (side) =>
  Array.from(
    {
      length: side,
    },
    (e) => Array.from({length: side}, (e) => getLetter())
  );
