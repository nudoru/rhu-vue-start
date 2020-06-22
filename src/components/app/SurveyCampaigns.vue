<style lang="scss">
    .table {
        td {
            p {
                margin-bottom: 0;
            }
        }
    }

</style>

<template>
    <div v-if="getSurveyCampaignDetails === null">
        <Loading/>
    </div>
    <div v-else class="mt-ms10">
        <h4>{{getSurveyCampaignDetails.length}} Active Email Campaigns</h4>
        <div class="button-stack-horizontal-spaced">
            <Button glyph="fas fa-plus" status="success">Create new email
                campaign
            </Button>
        </div>
        <div v-for="(campaign, index) in getSurveyCampaignDetails"
             class="mt-ms3"
             :key="index">
            <AccordionRow :open="campaign.contacts.length > 0">
                <template v-slot:label>
                    <span>{{campaign.name}}</span>
                    <span class="right">
                        <Badge status="secondary" glyph="fas fa-users">{{campaign.contacts.length + ' contacts'}}</Badge>
                        <ProgressDonut
                                :percent="campaign.pct_complete"
                                :showPercent="false" :stroke="2"
                                status="success" size="xs"/>
                    </span>
                </template>
                <div class="flex-group-row mt-ms0 mb-ms4">
                    <ProgressDonut
                            :percent="campaign.pct_complete"
                            status="success" size="lg"/>
                    <div>
                        <div class="badge-group-horizontal">
                            <Badge status="neutral">Created
                                {{campaign.date_created}}
                            </Badge>
                            <Badge status="neutral">Modified
                                {{campaign.date_modified}}
                            </Badge>
                        </div>
                    </div>
<!--                    <div class="button-group-horizontal-spaced">-->
<!--                        <Button glyph="fas fa-user">Add Contact</Button>-->
<!--                        <Button glyph="fas fa-file-upload">Import Contacts-->
<!--                        </Button>-->
<!--                    </div>-->
                </div>
                <div class="flex-group-row">
                <CSVUpload @change="(payload) => {onCSVUpload(campaign.id, payload)}">Upload a CSV to add contacts to this campaign.</CSVUpload>
                    <div class="button-stack-horizontal">
                    <Button status="info" glyph="fas fa-binoculars" @click="() => {onPreviewCSVData(campaign.id)}" :disabled="!hasStagedCSVData(campaign.id)">Review</Button>
                    <Button status="success" glyph="fas fa-file-upload"  @click="() => {onCommitStagedContacts(campaign.id)}"  :disabled="!hasStagedCSVData(campaign.id)">Add uploaded contacts</Button>
                    </div>
                </div>
                <hr>
                <div v-if="campaign.contacts.length > 0">
                    <!--                    <TableObjData :data="campaign.data"/>-->
                    <Table
                            alignTop
                            sizeAuto
                            zebraRows
                            hoverRows
                            :data="campaign.contacts"
                            :columns="[
          {
            heading: 'Selection',
            slot: 'selection',
            path: null,
          },
                              {
            heading: 'Status',
            slot: 'substatus',
            path: ['subscriber_status'],
            sortPath: ['subscriber_status'],
            sortable: true,
            sorted: true,
            sortDirection: 1,
          },
          {
            heading: 'Name',
            slot: 'name',
            path: null,
            sortPath: ['last_name'],
            sortable: true,
            sortDirection: 1,
          },
          {
            heading: 'Class',
            slot: 'class',
            path: null,
            sortPath: ['customfield1'],
            sortable: true,
            sortDirection: 1,
          },
          {
            heading: 'Last Sent',
            slot: 'lastsent',
            path: ['date_last_sent'],
            sortPath: ['date_last_sent'],
            sortable: true,
            sortDirection: 1,
          },
          {
            heading: 'Options',
            slot: 'options',
            path: null,
          },
        ]"
                    >
                        <template v-slot:selection="{ value }">
                            <div class="text-secondary">
                                <CheckBox @click="onCheckBoxClick(campaign.id, value.id)"/>
                            </div>
                        </template>
                        <template v-slot:substatus="{ value }">
                            <Badge :status="getStatusForSubscriberStatus(value)">
                                {{value}}
                            </Badge>
                        </template>
                        <template v-slot:name="{ value }">
                            <p>{{value.first_name}}
                                {{value.last_name}}</p>
                            <p class="small">{{ value.email_address }}<br/>
                                <a :href="value.invitelink" target="_blank"><i
                                        class="fas fa-link"></i> Unique invite
                                    link</a>
                            </p>
                        </template>
                        <template v-slot:class="{ value }">
                            <p><strong>{{value.customfield1}}</strong></p>
                            <p>{{value.customfield2}}</p>
                            <p>{{value.customfield3}}</p>
                        </template>
                        <template v-slot:lastsent="{ value }">
                            <p>{{ value }}</p>
                        </template>
                        <template v-slot:options="{value}">
                            <DropDown label="Actions" status="secondary"
                                      glyph="fas fa-bolt">
                                <Button status="neutral"
                                        @click="logDetails(value)">
                                    Log details
                                </Button>
                            </DropDown>

                        </template>
                    </Table>
                    <hr>
                    <div v-for="(email, emlsindex) in campaign.emails"
                         class="mb-ms0 layout-3-part "
                         :key="emlsindex">
                        <div class="icon">
<!--                            <Icon glyph="fas fa-envelope" size="md"></Icon>-->
                            <Badge>{{email.subtype.toUpperCase()}}</Badge>
                        </div>
                        <div class="content">

                            <h5>{{email.subject}}</h5>
                            <p>{{email.body.text}}</p>
                        </div>

                    </div>
                </div>
                <div v-else class="text-center mt-ms0">
                    <p>This campaign has no contacts</p>
                </div>
            </AccordionRow>

        </div>
    </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import store from '../../store/index';
  import Loading from "../ui/atoms/Loading";
  import TableObjData from "../ui/molecules/TableObjData";
  import AccordionRow from "../ui/molecules/AccordionRow";
  import Badge from "../ui/atoms/Badge";
  import Button from "../ui/atoms/Button";
  import Table from "../ui/molecules/Table";
  import ProgressBar from "../ui/atoms/ProgressBar";
  import ProgressDonut from "../ui/atoms/ProgressDonut";
  import DropDown from "../ui/molecules/DropDown";
  import Icon from "../ui/atoms/Icon";
  import CheckBox from "../ui/atoms/CheckBox";
  import CSVUpload from "../ui/molecules/CSVUpload";

  export default {
    name      : 'SurveyCampaigns',
    components: {
      CSVUpload,
      CheckBox,
      Icon,
      DropDown,
      ProgressDonut,
      ProgressBar,
      Button, AccordionRow, Loading, TableObjData, Badge, Table
    },
    props     : {
      p: {
        type   : Boolean,
        default: false
      }
    },
    data() {
      return {
        substatus: {
          'Unset'   : 'danger',
          'Sent'    : 'info',
          'Bounced' : 'danger',
          'Partial' : 'warning',
          'Complete': 'success',
          'Reminded': 'warning'
        },
        stagedNewContacts: {}
      };
    },
    computed  : {
      ...mapGetters(['isLoading','getSurveyID', 'getSurveyCampaignDetails','getAuthParam']),
      hasStagedCSVData() {
        return (campaignId) => {
          return this.stagedNewContacts.hasOwnProperty(campaignId);
        }
      },
    },
    methods   : {
      getStatusForSubscriberStatus(substatus) {
        return this.substatus[substatus];
      },
      logDetails(contactObj) {
        console.log(contactObj);
      },
      onCheckBoxClick(campaign, user) {
        console.log('click',campaign, user);
      },

      onCSVUpload(campaignId,fileContents) {
        fileContents.shift(); // remove header row
        console.log('csvupload',fileContents);
        this.stagedNewContacts = {...this.stagedNewContacts, [campaignId]: fileContents};
      },
      onPreviewCSVData(campaignId) {
        if(this.stagedNewContacts.hasOwnProperty(campaignId)) {
          console.table(this.stagedNewContacts[campaignId]);
        } else {
          console.warn(`No staged contacts to add for campaign ${campaignId}`);
        }
      },
      async onCommitStagedContacts(campaignId) {
        if(this.stagedNewContacts.hasOwnProperty(campaignId)) {
          await store.dispatch('addSurveyCampaignContactsCSV', {auth:this.getAuthParam, surveyId:this.getSurveyID, campaignId, csv:this.stagedNewContacts[campaignId]});
          // todo clear staged data
          // todo clear fileupload component
        } else {
          console.warn(`No staged contacts to add for campaign ${campaignId}`);
        }
      }
    },
    mounted() {
    }
  };
</script>