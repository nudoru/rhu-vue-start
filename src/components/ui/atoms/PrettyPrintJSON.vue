<script type="text/jsx">
import { syntaxHighlightJSON } from '../../libs/uiComponentUtilities';
    export default {
      name      : "PrettyPrintJSON",
      functional: true,
      props   : {},
      render(h, context) {
        let data;
        try {
          data = JSON.parse(context.slots().default[0].text);
        } catch {
          data = context.slots().default[0].text;
        }
        let highlighted = syntaxHighlightJSON(data);
        return (
          <span>
            <pre domPropsInnerHTML={highlighted}></pre>
          </span>
        );
      },
    };
</script>
