<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <input type="file" accept=".csv" @change="fileHandler" />
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
      };
      reader.onerror = function () {
        alert("エラー：ファイルをロードできません。");
      };
    },
  },

}
</script>
