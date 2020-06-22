<script type="text/jsx">
export default {
  name      : "CalendarDate",
  functional: true,
  props   : {
    month: {
      type: String,
      default: 'Jan'
    },
    day: {
      type: String,
      default: '1'
    },
    year: {
      type: String,
      default: '202X'
    }
  },
  render(h, context) {
    return (
      <div>
        <ul class="calendar-date">
            <li class="month">{context.props.month}</li>
            <li class="day">{context.props.day}</li>
            <li class="year">{context.props.year}</li>
        </ul>
    </div>
    );
  },
};
</script>
