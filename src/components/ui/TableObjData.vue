<style lang="scss" scoped></style>

<template>
        <table class="table zebra-rows zebra-cols auto compressed hover-rows">
            <tbody>
            <tr v-for="(key, kidx) in objectKeys" :key="kidx">
                <th class="font-mono"><span class="lowercase text-secondary">{{key}}</span></th>
                <td class="font-mono">{{getKeyValue(key)}}</td>
                <td><span class="small">{{typeof data[key]}}</span></td>
            </tr>
            </tbody>
        </table>
</template>

<script>

  export default {
    name      : 'TableObjData',
    components: {},
    props     : {
      data: {
        type    : Object,
        default : null,
        required: true
      }
    },
    data() {
      return {};
    },
    computed  : {
      objectKeys() {
        return Object.keys(this.data);
      }
    },
    methods   : {
      getKeyValue(key) {
        return JSON.stringify(this.data[key]);
      }
    },
    mounted() {
      console.log(this.data);
      console.log(this.objectKeys);
    }
  };
</script>