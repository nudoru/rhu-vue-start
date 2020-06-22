<style lang="scss" scoped></style>

<template>
    <div class="content-group">
    <div v-if="getSurveyDetails === null">
        <Loading />
    </div>
    <div v-else>
        <h1>{{getSurveyDetails.title}}</h1>
        <div class="badge-group-horizontal mb-ms4">
            <Badge status="neutral">ID {{getSurveyDetails.id}}</Badge>
            <Badge status="neutral">Created on {{getSurveyDetails.created_on}}</Badge>
            <Badge status="neutral">Last modified on {{getSurveyDetails.modified_on}}</Badge>
        </div>
        <h4><strong>{{getSurveyDetails.statistics.Complete}}</strong> completions</h4>
        <p><a :href="getSurveyDetails.links.default" target="_blank"><i class="fas fa-link pr-ms-2"></i> View Survey</a></p>
        <div>

        </div>
    </div>
    </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import store from '../../store/index';
  import Loading from "../ui/atoms/Loading";
  import Badge from "../ui/atoms/Badge";
  export default {
    name: 'SurveySummary',
    components: {Badge, Loading},
    props: {
      p: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    computed  : {
      ...mapGetters(['isLoading','getSurveyDetails']),
    },
    methods: {}
  };
</script>