<style lang="scss" scoped>
    .obj-table {
        max-width: 100%;
    }
</style>

<template>
    <table class="table top zebra-rows zebra-cols auto compressed hover-rows obj-table">
        <tbody>
        <tr v-for="(key, kidx) in objectKeys" :key="kidx">
            <th class="font-mono"><span
                    class="lowercase text-secondary">{{key}}</span></th>
            <td>
                <PrettyPrintJSON>{{getKeyValue(key)}}</PrettyPrintJSON>
            </td>
            <td><span class="small">{{typeof data[key]}}</span></td>
        </tr>
        </tbody>
    </table>
</template>

<script>

  import PrettyPrintJSON from "../atoms/PrettyPrintJSON";
  export default {
    name      : 'TableObjData',
    components: {PrettyPrintJSON},
    props     : {
      data   : {
        type    : [Object, Array],
        default : null,
        required: true
      },
      exclude: {
        type   : Array,
        default: () => []
      }
    },
    data() {
      return {};
    },
    computed  : {
      objectKeys() {
        return Object.keys(this.data).filter(key => this.exclude.indexOf(key) === -1);
      }
    },
    methods   : {
      getKeyValue(key) {
        return this.data[key];
      },
    },
  };
</script>