<style lang="scss">
    .string {
        color: $grey8;
    }

    .number {
        color: $grey8;
    }

    .boolean {
        color: $indigo;
    }

    .null {
        color: $grey6;
    }

    .key {
        color: $purple;
    }

    .brace {
        color: silver;
    }

    .none {
        color: grey;
    }

</style>

<template>
    <table class="table top zebra-rows zebra-cols auto compressed hover-rows">
        <tbody>
        <tr v-for="(key, kidx) in objectKeys" :key="kidx">
            <th class="font-mono"><span
                    class="lowercase text-secondary">{{key}}</span></th>
            <td>
                <pre v-html="getKeyValue(key)"></pre>
            </td>
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
        return this.syntaxHighlight(JSON.stringify(this.data[key], null, 2));
      },
      syntaxHighlight(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        // TODO, color braces
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          let cls = 'none';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key';
            } else {
              cls = 'string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean';
          } else if (/null/.test(match)) {
            cls = 'null';
          } else if (/[0-9]/.test(match)) {
            cls = 'number'
          }  else if (/(\[)?(\])?(\{)?(\})?/.test(match)) {
            cls = 'brace'
          }
          return '<span class="' + cls + '">' + match + '</span>';
        });
      },
    },
    mounted() {
    }
  };
</script>