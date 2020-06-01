<style lang="scss">
    .string {
        color: $green-shade2;
    }

    .number {
        color: $green-shade3;
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
    <span>
        <pre v-html="processJSON(json)"></pre>
    </span>
</template>

<script>
  export default {
    name: 'PrettyPrintJSON',
    methods: {
      processJSON(json) {
        let data;
        try {
          data = JSON.parse(this.$slots.default[0].text);
        } catch {
          data = this.$slots.default[0].text;
        }
        return this.syntaxHighlight(JSON.stringify(data, null, 2));
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
          } else if (/(\[)?(\])?(\{)?(\})?/.test(match)) {
            cls = 'brace'
          }
          return '<span class="' + cls + '">' + match + '</span>';
        });
      },
    }
  };
</script>