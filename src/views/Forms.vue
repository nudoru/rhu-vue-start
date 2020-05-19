<style lang="scss" scoped>
    .comp{}
</style>

<template>
    <div class='container'>
        <h1>Compact</h1><form class="form form-inline"><fieldset><legend>A compact inline form</legend><div class="form-hgroup"><input type="email" placeholder="Email"><input type="password" placeholder="Password"></div><label for="default-remember"><input id="default-remember" type="checkbox">Remember me</label><button type="submit">Sign in</button></fieldset></form><h1>Stacked</h1><form class="form form-stacked"><fieldset><legend>A Stacked Form</legend><label class="required" for="stacked-email">Email</label><input id="stacked-email" type="email" placeholder="Email"><span class="form-message">This is a required field.</span><label for="stacked-password">Password</label><input id="stacked-password" type="password" placeholder="Password"><label for="stacked-state">State</label><select id="stacked-state"><option>AL</option><option>CA</option><option>IL</option></select><label class="form-checkbox" for="stacked-remember"><input id="stacked-remember" type="checkbox"> Remember me</label><button type="submit">Sign in</button></fieldset></form><h1>Aligned Form</h1><form class="form form-aligned"><fieldset><div class="control-group"><label class="required" for="aligned-name">Username</label><input id="aligned-name" type="text" placeholder="Username"><div class="form-message-inline">This is a required field.</div></div><div class="control-group"><label class="required" for="aligned-password">Password</label><input id="aligned-password" type="password" placeholder="Password"></div><div class="control-group"><label for="aligned-email">Email Address</label><input id="aligned-email" type="email" placeholder="Email Address"></div><div class="control-group"><label for="aligned-foo">Supercalifragilistic Label</label><input id="aligned-foo" type="text" placeholder="Enter something here..."></div><div class="control-group"><div class="controls"><label class="form-checkbox" for="aligned-cb"><input id="aligned-cb" type="checkbox"> I've read the terms and conditions</label><button type="submit">Submit</button></div></div></fieldset></form>
    </div>
</template>

<script>
  export default {
    name: 'Forms',
    components: {},
    props: {
      p: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>