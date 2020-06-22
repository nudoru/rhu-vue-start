<script type="text/jsx">

export default {
  name      : "Box",
  functional: true,
  props     : {
    class: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'div'
    },
    square: {
      type   : Boolean,
      default: false
    },
    round : {
      type   : Boolean,
      default: true
    },
    pill  : {
      type   : Boolean,
      default: false
    },
    active  : {
      type   : Boolean,
      default: false
    },
    recessed  : {
      type   : Boolean,
      default: false
    },
    shadow: {
      type   : String,
      default: ''
    }
  },
  render(h, context) {
    const props = context.props;
    const cls = ['box',
      props.shadow.length ? `shadow-${props.shadow}` : '',
      props.round ? 'round' : '',
      props.pill ? 'pill' : '',
      props.square ? 'square' : '',
      props.active ? 'active' : '',
      props.recessed ? 'recessed' : '',
      context.data.class ? context.data.class : '',
      context.data.staticClass ? context.data.staticClass : ''].join(' ');
    const data = {
      class: cls,
      on: {
        ...context.data.on
      }
    };
    return h(props.tag, data, context.children);
  },
};
</script>
