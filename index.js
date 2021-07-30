const hairetu = [
  [
    "PRE13/ARE11/SUB1103",
    35.5875477,
    139.7325523,
    "ラーメン・麺類",
    "17:00:00",
    "22:00:00",
  ],
  [
    "PRE13/ARE11/SUB1103",
    35.6991495,
    139.758853,
    "ラーメン・麺類",
    "17:00:00",
    "22:00:00",
  ],
  [
    "PRE13/ARE11/SUB1103",
    35.6991495,
    139.758853,
    "ラーメン・麺類",
    "17:00:00",
    "22:00:00",
  ],
];

function distance(lat1, lng1, idokeido) {
  lat1 *= Math.PI / 180;
  lng1 *= Math.PI / 180;

  const h = hairetu.map((a) => {
    return a[1];
  });

  console.log(h);
  const max = hairetu.map((ido) => {
    ido[1] *= Math.PI / 180;
    ido[2] *= Math.PI / 180;
  });

  console.log(max);

  const a = hairetu.map((hairetu) => {
    return (
      6371 *
      Math.acos(
        Math.cos(lat1) * Math.cos(hairetu[2]) * Math.cos(hairetu[1] - lng1) +
          Math.sin(lat1) * Math.sin(hairetu[2])
      )
    );
  });

  console.log(a);

  return a;
}
//　経度、緯度を定義
let tokyoLat = 139.7369874, // ある駅の緯度
  tokyoLng = 35.6546783 // ある駅の経度

console.log(distance(tokyoLat, tokyoLng, idokeido)); //1.5268670823169612
