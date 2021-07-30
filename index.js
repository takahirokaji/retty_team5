function distance(lat1, lng1, lat2, lng2) {
  lat1 *= Math.PI / 180;
  lng1 *= Math.PI / 180;
  lat2 *= Math.PI / 180;
  lng2 *= Math.PI / 180;
  return (
    6371 *
    Math.acos(
      Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) +
        Math.sin(lat1) * Math.sin(lat2)
    )
  );
}
//　経度、緯度を定義
let tokyoLat = 139.7369874, // ある駅の緯度
  tokyoLng = 35.6546783, // ある駅の経度
  shinbashiLat = 139.7524000, // 新橋駅の緯度
  shinbashiLng = 35.7799264; // 新橋駅の経度
console.log(distance(tokyoLat, tokyoLng, shinbashiLat, shinbashiLng)); //1.5268670823169612
