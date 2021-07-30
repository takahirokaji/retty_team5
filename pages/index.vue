<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <input type="file" accept=".csv" @change="fileHandler" />
      <button @click=""></button>
    </v-col>
  </v-row>
</template>

<script lang="js">
export default {
  data() {
    return {
      file: '',
    }
  },
  methods: {
    fileHandler(e) {
      const target = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(target);

      reader.onload = async(e) => {
        const result = await e.target.result;
        const array = result.split("\r\n");
        array.shift();
        const array2 = array.map(el => {
          return el.split(',')
        })
        const onlyYakiniku = [];
        array2.forEach(el=> {
          if (el[3].indexOf('焼肉') !== -1) {
            onlyYakiniku.push(el)
          }
        });
        const only5 = [];
        onlyYakiniku.map(el => {
          if(el[4] <= '17:00:00') {
            only5.push(el)
          }
        })
        only5.map(el => {
          let tokyoLat = 139.7369874;// ある駅の緯度
          let tokyoLng = 35.6546783;
          if(this.distance(tokyoLat, tokyoLng, el[2], el[1]) < 1) {
            console.log(el[0])
          };
        })
      };
      reader.onerror = function () {
        alert("エラー：ファイルをロードできません。");
      };
    },
    distance(lat1, lng1, lat2, lng2) {
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
  },

}
</script>
