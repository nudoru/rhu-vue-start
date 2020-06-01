<style lang="scss" scoped>
    .system-name {
        font-weight: $font-weight-bold;
        font-size: 1.2rem;
    }
</style>

<template>
    <div class="container">
        <AccordionRow :expanded="false">
            <h1>Vel vitae enim dolor sagittis lorem nunc libero curabitur a</h1>
            <p>Amet elit dolor sit est amet lorem consectetur libero consectetur viverra nullam sagittis adipiscing nunc adipiscing sit auctor tincidunt libero vitae a odio ipsum nec dolor libero tincidunt nullam dolor curabitur id in id nec in id atlorem libero in elit amet amet ipsum consectetur adipiscing euismod a dolor vitae elit euismod sit laoreet nunc ipsum sit nunc vel dolor dolor vel viverra condimentum nunc auctor odio euismod enim nec laoreet dolor nullam euismod nullam viverra elit amet consectetur nec nec nunc auctor tincidunt vel adipiscing enim est laoreet vel laoreet enim dolor libero condimentum odio libero a libero odio curabitur sit laoreet condimentum est libero tincidunt libero atlorem sagittis vitae dolor curabitur a in in libero a id vel amet sagittis sit id consectetur dolor id atlorem vitae id elit atlorem laoreet viverra ipsum euismod id elit nec nec condimentum auctor vel id auctor dolor libero tincidunt adipiscing nullam viverra consectetur viverra nullam dolor dolor euismod vitae libero ipsum odio vel nunc enim id laoreet condimentum a consectetur id enim odio libero curabitur atlorem odio est nunc est nullam condimentum vitae adipiscing enim sagittis curabitur elit adipiscing euismod auctor elit atlorem id id sagittis ipsum atlorem curabitur nec libero viverra est vel sagittis laoreet condimentum curabitur enim libero tincidunt auctor amet euismod tincidunt odio in libero condimentum vitae sagittis nullam viverra atlorem ipsum dolor in est tincidunt enim sagittis dolor a amet id sit consectetur auctor ipsum nunc adipiscing dolor ipsum sit dolor sit curabitur vitae adipiscing elit est amet in id consectetur a id nec vitae vel dolor viverra libero nunc auctor euismod vel nullam curabitur euismod a dolor laoreet enim condimentum in laoreet condimentum nec odio nullam id at tincidunt auctor odio libero libero viverra est id id est id enim tincidunt libero sagittis atlorem in vitae sagittis curabitur a dolor amet ipsum sit adipiscing consectetur elit nunc</p>
        </AccordionRow>
        <div>
            <Loading label="Reticulating all of the splines ..." :visible="showLoading"/>
            <Button
                    @click="onToggleLoading"
                    status="neutral">
                Toggle Loading
            </Button>
        </div>
        <hr>
        <DonutChart :percent="75" label="Completed" size="xs" status="success" :stroke="7" :showPercent="false"/>
        <DonutChart :percent="75" label="Completed" size="sm" status="danger" :stroke="4" :showPercent="false"/>
        <DonutChart :percent="75" label="Completed" size="md" status="primary" :stroke="8" :showPercent="false"/>
        <DonutChart :percent="75" label="Completed" size="lg" status="warning" :stroke="2" :showPercent="true"/>
        <DonutChart :percent="75" label="Completed" size="xl" status="secondary" :stroke="5" :showPercent="true"/>
        <hr>
        <Ribbon/>
        <Ribbon status="danger"/>
        <Ribbon status="success"/>
        <Ribbon status="neutral"/>
        <Ribbon status="warning"/>
        <Ribbon position="top" status="success"/>
        <Ribbon position="top" status="danger"/>
        <Ribbon position="top" status="neutral"/>
        <Ribbon position="top" status="secondary"/>
        <hr>
        <Icon size="xs" status="primary" glyph="fa fa-cog"/>
        <Icon size="sm" status="secondary" glyph="fa fa-cog"/>
        <Icon size="md" status="success" glyph="fa fa-cog"/>
        <Icon size="lg" status="warning" glyph="fa fa-cog"/>
        <Icon size="xl" status="danger" glyph="fa fa-cog"/>
        <hr>
        <Badge status="neutral" glyph="far fa-calendar-alt">I'm a badge!</Badge>
        <hr>
        <Avatar size="xs" status="primary"
                imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"/>
        <Avatar size="sm" status="primary"
                imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"/>
        <Avatar size="md" status="primary"
                imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"/>
        <Avatar size="lg" status="primary"
                imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"/>
        <Avatar size="xl" status="primary"
                imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"/>
        <Avatar size="xs" status="primary"
                initials="MP"/>
        <Avatar size="sm" status="neutral"
                initials="MP"/>
        <Avatar size="md" status="success"
                initials="MP"/>
        <Avatar size="lg" status="warning"
                initials="MP"/>
        <Avatar size="xl" status="secondary"
                initials="MP"/>
        <hr>
        <Button
                @click="onShowModal"
                status="success"
                glyph="fas fa-external-link-alt"
                large>
            Show Modal
        </Button>
        <hr>
        <h5>Data table</h5>
        <Table
                alignTop
                sizeAuto
                zebraRows
                hoverRows
                :data="getSampleJson()"
                :format="[
                    {
            heading: 'Avatar',
            slot: 'avatar',
            path: ['picture'],
          },
          {
            heading: 'Name',
            slot: 'name',
            path: ['name'],
            sortPath: ['name','last'],
            sortable: true,
            sorted: true,
            sortDirection: 1,
          },
          {
            heading: 'Email',
            slot: 'email',
            path: ['email'],
          },
          {
            heading: 'About',
            slot: 'about',
            path: ['about'],
          },
        ]"
        >
            <template v-slot:avatar="{ value }">
                <Avatar size="lg" status="neutral" :imgUrl="value"/>
            </template>
            <template v-slot:name="{ value }">
                <p class="mb-0">{{value.first}} {{value.last}}</p>
            </template>
            <template v-slot:email="{ value }">
                <p class="mb-0 font-mono">{{ value }}</p>
            </template>
            <template v-slot:about="{ value }">
                <p class="mb-0">{{ value }}</p>
            </template>
        </Table>
        <hr>
        <h5>TableObjectData - debug for showing objects</h5>
        <TableObjData :data="getSampleJson()[0]"/>

        <Modal
                :visible="showModal"
                :coverCallback="onCloseModal"
                title="Some Modal"
                glyph="fa fa-air-freshener"
                status="primary"
                full
                :controls="[
        {
          label: 'Close',
          cls: 'secondary outline link',
          callback: onCloseModal,
        },
        { label: 'Save', callback: onCloseModal },
      ]"
        >
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    id orci
                    elementum nisl bibendum tincidunt ac sit amet odio. Ut
                    volutpat odio
                    eu leo pellentesque cursus. In non dui vitae turpis mollis
                    pellentesque a a erat. Phasellus sollicitudin imperdiet
                    elit, egestas
                    blandit ante tincidunt molestie. Proin in risus metus.
                    Suspendisse
                    eleifend nisl sit amet fringilla rhoncus. Quisque ultricies
                    nunc orci,
                    vel laoreet quam vehicula vel. Aliquam erat volutpat. Nulla
                    tristique
                    sem sit amet dui sollicitudin, at tristique lorem luctus.
                    Pellentesque
                    quam ligula, consequat gravida tincidunt sit amet, ultrices
                    porttitor
                    nisi. Nulla sodales, dui vel mollis bibendum, libero urna
                    cursus
                    tortor, lacinia pretium diam nunc ultricies nulla.
                    Suspendisse
                    convallis ultrices posuere. Sed diam lorem, interdum quis
                    ornare quis,
                    vulputate a urna. Nullam rutrum blandit libero, sed lobortis
                    ex.
                </p>
            </div>
        </Modal>
    </div>
</template>

<script>
  import sampleJson from '@/libs/sampleJson';
  import Icon from "@/components/ui/Icon";
  import Badge from "@/components/ui/Badge";
  import Modal from "@/components/ui/Modal";
  import Button from "@/components/ui/Button";
  import Table from '@/components/ui/Table';
  import Avatar from "@/components/ui/Avatar";
  import TableObjData from "@/components/ui/TableObjData";
  import Loading from "../components/ui/Loading";
  import DonutChart from "../components/ui/DonutChart";
  import Ribbon from "../components/ui/Ribbon";
  import AccordionRow from "../components/ui/AccordionRow";


  export default {
    name      : "Home",
    components: {
      AccordionRow,
      Ribbon,
      DonutChart,
      Loading,
      Modal, Icon, Badge, Button, Table, Avatar, TableObjData},
    props     : {
      p: {
        type   : Boolean,
        default: false,
      },
    },
    data() {
      return {
        showModal: false,
        showLoading: true
      };
    },
    computed  : {},
    methods   : {
      getSampleJson() {
        return sampleJson.sample;
      },
      onToggleLoading() {
        this.showLoading = !this.showLoading;
      },
      onShowModal() {
        this.showModal = true;
      },
      onCloseModal() {
        this.showModal = false;
      },
    },
  };
</script>
