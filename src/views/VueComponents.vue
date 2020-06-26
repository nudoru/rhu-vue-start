<style lang="scss" scoped>
.system-name {
  font-weight: $font-weight-bold;
  font-size: 1.2rem;
}
</style>

<template>
  <div class="container">
    <div class="text-primary">
      <SVGIcon icon="aperture" size="xl" startColor="red" endColor="blue" />
      <SVGIcon icon="camera" size="xs" class="ml-ms0" />
      <SVGIcon icon="camera" size="sm" class="ml-ms0" />
      <SVGIcon icon="camera" size="md" class="ml-ms0" />
      <SVGIcon icon="camera" size="lg" class="ml-ms0" />
      <SVGIcon icon="camera" size="xl" class="ml-ms0" />
    </div>
    <hr />
    <div>
      <div class="card-stack-horizontal">
        <Card active stackBottom>
          <template v-slot:header>
            <div class="image">
              <img
                src="https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
              />
            </div>
            <div class="icon"><i class="fa fa-air-freshener"></i></div>
            <h1>Card!</h1>
          </template>
          <template v-slot:content>
            <div class="title"><h1>Card title</h1></div>
            <div class="description"><p v-dummy="(5, 25)"></p></div>
          </template>
          <template v-slot:footer>
            <Badge glyph="far fa-calendar-alt">I'm a badge!</Badge>
            <Badge glyph="far fa-calendar-alt">I'm a badge!</Badge>
          </template>
        </Card>
        <Card active stackRight status="danger">
          <template v-slot:header>
            <div class="icon"><i class="fa fa-air-freshener"></i></div>
            <h1>Card!</h1>
          </template>
          <template v-slot:content>
            <div class="title"><h1>Card title</h1></div>
            <div class="description"><p v-dummy="(5, 25)"></p></div>
          </template>
          <template v-slot:footer>
            <Badge glyph="far fa-calendar-alt">I'm a badge!</Badge>
            <Badge glyph="far fa-calendar-alt">I'm a badge!</Badge>
          </template>
        </Card>
        <Card active status="success">
          <template v-slot:header>
            <h1>Card!</h1>
          </template>
          <template v-slot:content>
            <div class="title"><h1>Card title</h1></div>
            <div class="description"><p v-dummy="(5, 25)"></p></div>
          </template>
          <template v-slot:footer>
            <Badge glyph="far fa-calendar-alt">I'm a badge!</Badge>
            <Badge glyph="far fa-calendar-alt">I'm a badge!</Badge>
          </template>
        </Card>
      </div>
      <hr />
      <Box class="text-center p-ms0 mb-ms5" shadow="md">
        <Box
          class="text-center p-ms0 bg-neutral-light"
          shadow="md"
          pill
          recessed
          >Box</Box
        >
      </Box>
    </div>
    <h6>Testing inline components</h6>
    <div class="flex items-center justify-between">
      <Badge status="neutral" glyph="far fa-calendar-alt">I'm a badge!</Badge>
      <DropDown
        label="This is a drop down"
        status="secondary"
        glyph="fas fa-air-freshener"
      >
        <Button>Hi</Button>
        <Button>There</Button>
      </DropDown>
      <CheckBox>Check the box</CheckBox>
      <ProgressDonut
        :percent="50"
        label="Completed"
        size="md"
        status="danger"
        :stroke="4"
        :showPercent="false"
      />
      <ProgressBar
        :percent="50"
        label="Completed"
        size="md"
        width="100px"
        status="warning"
        :showPercent="true"
      />
      <Icon size="md" status="success" glyph="fa fa-cog" />
      <Avatar
        size="md"
        status="primary"
        imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"
      />
      <ProgressDonut :percent="50" :stroke="2" size="md" status="success">
        <Avatar
          size="md"
          status="primary"
          imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"
        />
      </ProgressDonut>
      <Button glyph="fas fa-external-link-alt">
        Show Modal
      </Button>
    </div>
    <hr />
    <DropDown
      label="This is a drop down"
      status="secondary"
      glyph="fas fa-air-freshener"
    >
      <Button>Hi</Button>
      <Button>There</Button>
    </DropDown>
    <hr />
    <Button @click="onShowModal" glyph="fas fa-external-link-alt" large>
      Show Modal
    </Button>
    <hr />
    <div class="flex-group-col">
      <Loading
        label="Reticulating all of the splines ..."
        :visible="showLoading"
      />
      <Button @click="onToggleLoading" status="neutral">
        Toggle Loading
      </Button>
    </div>
    <hr />
    <AccordionRow
      :open="false"
      v-on:opened="onAccordionOpen"
      v-on:closed="onAccordionClose"
    >
      <template v-slot:label>
        <span>Custom label area</span>
        <span class="right">
          <Badge status="neutral" glyph="far fa-calendar-alt"
            >I'm a badge!</Badge
          >
        </span>
      </template>
      <h1>Vel vitae enim dolor sagittis lorem nunc libero curabitur a</h1>
    </AccordionRow>
    <AccordionRow :open="false" label="Click to read more">
      <h1>Vel vitae enim dolor sagittis lorem nunc libero curabitur a</h1>
      <p>
        Amet elit dolor sit est amet lorem consectetur libero consectetur
        viverra nullam sagittis adipiscing nunc adipiscing sit auctor tincidunt
        libero vitae a odio ipsum nec dolor libero tincidunt nullam dolor
        curabitur id in id nec in id atlorem libero in elit amet amet ipsum
        consectetur adipiscing euismod a dolor vitae elit euismod sit laoreet
        nunc ipsum sit nunc vel dolor dolor vel viverra condimentum nunc auctor
        odio euismod enim nec laoreet dolor nullam euismod nullam viverra elit
        amet consectetur nec nec nunc auctor tincidunt vel adipiscing enim est
        laoreet vel laoreet enim dolor libero condimentum odio libero a libero
        odio curabitur sit laoreet condimentum est libero tincidunt libero
        atlorem sagittis vitae dolor curabitur a in in libero a id vel amet
        sagittis sit id consectetur dolor id atlorem vitae id elit atlorem
        laoreet viverra ipsum euismod id elit nec nec condimentum auctor vel id
        auctor dolor libero tincidunt adipiscing nullam viverra consectetur
        viverra nullam dolor dolor euismod vitae libero ipsum odio vel nunc enim
        id laoreet condimentum a consectetur id enim odio libero curabitur
        atlorem odio est nunc est nullam condimentum vitae adipiscing enim
        sagittis curabitur elit adipiscing euismod auctor elit atlorem id id
        sagittis ipsum atlorem curabitur nec libero viverra est vel sagittis
        laoreet condimentum curabitur enim libero tincidunt auctor amet euismod
        tincidunt odio in libero condimentum vitae sagittis nullam viverra
        atlorem ipsum dolor in est tincidunt enim sagittis dolor a amet id sit
        consectetur auctor ipsum nunc adipiscing dolor ipsum sit dolor sit
        curabitur vitae adipiscing elit est amet in id consectetur a id nec
        vitae vel dolor viverra libero nunc auctor euismod vel nullam curabitur
        euismod a dolor laoreet enim condimentum in laoreet condimentum nec odio
        nullam id at tincidunt auctor odio libero libero viverra est id id est
        id enim tincidunt libero sagittis atlorem in vitae sagittis curabitur a
        dolor amet ipsum sit adipiscing consectetur elit nunc
      </p>
    </AccordionRow>
    <hr />
    <GridSquare>
      <h6>Progress Donut</h6>
      <ProgressDonut
        :percent="progressPct.value"
        label="Completed"
        size="xs"
        status="success"
        :stroke="7"
      />
      <ProgressDonut
        :percent="progressPct.value"
        label="Completed"
        size="sm"
        status="danger"
        :stroke="4"
      />
      <ProgressDonut
        :percent="progressPct.value"
        label="Completed"
        size="md"
        status="primary"
        :stroke="8"
        :center="`${progressPct.value}`"
      />
      <ProgressDonut
        :percent="progressPct.value"
        label="Completed"
        size="lg"
        status="warning"
        :stroke="2"
        :center="`${progressPct.value}%`"
      />
      <ProgressDonut
        :percent="progressPct.value"
        label="Completed"
        size="xl"
        status="secondary"
        :stroke="10"
        :center="`${progressPct.value}%`"
        labelPosition="right"
      />

      <ProgressDonut
        v-for="(size, idx) in compSizes"
        :percent="50"
        :stroke="(idx + 1) * 2"
        :size="size"
        :key="idx"
        :rotate="idx * 45"
        status="success"
      >
        <Avatar
          :size="size"
          status="primary"
          imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"
        />
      </ProgressDonut>

      <ProgressDonut
        v-for="(size, idx) in compSizes"
        :percent="50"
        :stroke="10 - idx * 2"
        :size="size"
        :key="idx"
        status="info"
      >
        <Icon :size="size" status="secondary" glyph="fa fa-cog" />
      </ProgressDonut>
    </GridSquare>
    <hr />
    <div class="flex-group-col">
      <ProgressBar
        :percent="progressPct.value"
        label="Completed blah"
        size="xs"
        width="200px"
        status="success"
        :showPercent="true"
        inlinepercent
      />
      <ProgressBar
        :percent="progressPct.value"
        label="Completed"
        size="sm"
        width="300px"
        status="danger"
        :showPercent="true"
      />
      <ProgressBar
        :percent="progressPct.value"
        label="Completed blah blah"
        size="md"
        width="250px"
        status="primary"
        :showPercent="true"
      />
      <ProgressBar
        :percent="progressPct.value"
        label="Completed"
        size="lg"
        width="100px"
        status="warning"
        :showPercent="true"
      />
      <ProgressBar
        :percent="progressPct.value"
        label="Completed"
        size="xl"
        width="500px"
        status="secondary"
        :showPercent="true"
        striped
        inlinepercent
      />
    </div>
    <hr />
    <GridAuto mode="fit">
      <Ribbon />
      <Ribbon status="danger" />
      <Ribbon status="success" />
      <Ribbon status="neutral" />
      <Ribbon status="warning" />
      <Ribbon position="top" status="success" />
      <Ribbon position="top" status="danger" />
      <Ribbon position="top" status="neutral" />
      <Ribbon position="top" status="secondary" />
    </GridAuto>
    <hr />
    <div class="flex-group-row">
      <Icon size="xs" status="primary" glyph="fa fa-cog" />
      <Icon size="sm" status="secondary" glyph="fa fa-cog" />
      <Icon size="md" status="success" glyph="fa fa-cog" />
      <Icon size="lg" status="warning" glyph="fa fa-cog" />
      <Icon size="xl" status="danger" glyph="fa fa-cog" />
    </div>

    <hr />
    <div class="flex-group-row">
      <Badge
        v-for="(status, idx) in compStatus"
        :status="status"
        :key="idx"
        glyph="far fa-calendar-alt"
        >{{ status }} Badge
      </Badge>
    </div>
    <!--        <div class="badge-group-horizontal">-->
    <!--            <Badge v-for="(status, idx) in compStatus" :status="status"-->
    <!--                   glyph="far fa-calendar-alt">{{status}} Badge-->
    <!--            </Badge>-->
    <!--        </div>-->
    <!--        <div class="badge-group-vertical">-->
    <!--            <Badge v-for="(status, idx) in compStatus" :status="status"-->
    <!--                   glyph="far fa-calendar-alt">{{status}} Badge-->
    <!--            </Badge>-->
    <!--        </div>-->
    <hr />
    <GridSquare>
      <h6>Avatar</h6>
      <Avatar
        size="xs"
        status="primary"
        imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"
      />
      <Avatar
        size="sm"
        status="primary"
        imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"
      />
      <Avatar
        size="md"
        status="primary"
        imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"
      />
      <Avatar
        size="lg"
        status="primary"
        imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"
      />
      <Avatar
        size="xl"
        status="primary"
        imgUrl="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=500&w=500"
      />
      <Avatar size="xs" status="primary" initials="MP" />
      <Avatar size="sm" status="neutral" initials="MP" />
      <Avatar size="md" status="success" initials="MP" />
      <Avatar size="lg" status="warning" initials="MP" />
      <Avatar size="xl" status="secondary" initials="MP" />
    </GridSquare>
    <hr />
    <div class="flex-group-row">
      <Button
        v-for="(status, idx) in compStatus"
        :status="status"
        :key="idx"
        glyph="fas fa-air-freshener"
        >{{ status }} Button
      </Button>
    </div>
    <div class="flex-group-row">
      <Button
        v-for="(status, idx) in compStatus"
        :status="status"
        :key="idx"
        glyph="fas fa-air-freshener"
        outline
        >{{ status }} Button
      </Button>
    </div>
    <hr />
    <p>button groups: horizontal / vertical, spaced and joined (not spaced)</p>
    <div class="button-stack-vertical">
      <Button
        v-for="(status, idx) in compStatus"
        :status="status"
        :key="idx"
        glyph="fas fa-air-freshener"
        >{{ status }} Button
      </Button>
    </div>
    <div class="button-stack-horizontal-spaced mt-ms0">
      <Button
        v-for="(status, idx) in compStatus"
        :status="status"
        :key="idx"
        glyph="fas fa-air-freshener"
        >{{ status }} Button
      </Button>
    </div>
    <div class="button-stack-horizontal mt-ms0">
      <Button
        v-for="(status, idx) in compStatus"
        :status="status"
        toggle
        @click="onClick"
        outline
        v-on:toggleOn="onToggleOn"
        v-on:toggleOff="onToggleOff"
        glyph="fas fa-air-freshener"
        :key="idx"
        >Toggle Button
      </Button>
    </div>
    <hr />
    <h5>Data table</h5>
    <Table
      alignTop
      sizeAuto
      zebraRows
      hoverRows
      :data="getSampleJson()"
      :columns="[
        {
          heading: 'Avatar',
          slot: 'avatar',
          path: ['picture'],
        },
        {
          heading: 'Name',
          slot: 'name',
          path: ['name'],
          sortPath: ['name', 'last'],
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
        <Avatar size="lg" status="neutral" :imgUrl="value" />
      </template>
      <template v-slot:name="{ value }">
        <p class="mb-0">{{ value.first }} {{ value.last }}</p>
      </template>
      <template v-slot:email="{ value }">
        <p class="mb-0 font-mono">{{ value }}</p>
      </template>
      <template v-slot:about="{ value }">
        <p class="mb-0">{{ value }}</p>
      </template>
    </Table>
    <hr />
    <h5>TableObjectData - debug for showing objects</h5>
    <TableObjData :data="getSampleJson()[0]" />

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id orci
          elementum nisl bibendum tincidunt ac sit amet odio. Ut volutpat odio
          eu leo pellentesque cursus. In non dui vitae turpis mollis
          pellentesque a a erat. Phasellus sollicitudin imperdiet elit, egestas
          blandit ante tincidunt molestie. Proin in risus metus. Suspendisse
          eleifend nisl sit amet fringilla rhoncus. Quisque ultricies nunc orci,
          vel laoreet quam vehicula vel. Aliquam erat volutpat. Nulla tristique
          sem sit amet dui sollicitudin, at tristique lorem luctus. Pellentesque
          quam ligula, consequat gravida tincidunt sit amet, ultrices porttitor
          nisi. Nulla sodales, dui vel mollis bibendum, libero urna cursus
          tortor, lacinia pretium diam nunc ultricies nulla. Suspendisse
          convallis ultrices posuere. Sed diam lorem, interdum quis ornare quis,
          vulputate a urna. Nullam rutrum blandit libero, sed lobortis ex.
        </p>
      </div>
    </Modal>
  </div>
</template>

<script>
import sampleJson from "../libs/sampleJson";
import gsap from "gsap";
import Icon from "../components/ui/atoms/Icon";
import Badge from "../components/ui/atoms/Badge";
import Modal from "../components/ui/molecules/Modal";
import Button from "../components/ui/atoms/Button";
import Table from "../components/ui/molecules/Table";
import Avatar from "../components/ui/atoms/Avatar";
import TableObjData from "../components/ui/molecules/TableObjData";
import GridAuto from "../components/ui/molecules/GridAuto";
import GridSquare from "../components/ui/molecules/GridSquare";
import Loading from "../components/ui/atoms/Loading";
import ProgressDonut from "../components/ui/atoms/ProgressDonut";
import Ribbon from "../components/ui/atoms/Ribbon";
import AccordionRow from "../components/ui/molecules/AccordionRow";
import ProgressBar from "../components/ui/atoms/ProgressBar";
import DropDown from "../components/ui/molecules/DropDown";
import MobileMenuIcon from "../components/ui/atoms/micro/MobileMenuIcon";
import CheckBox from "../components/ui/atoms/CheckBox";
import CalendarDate from "../components/ui/atoms/CalendarDate";
import Box from "../components/ui/atoms/Box";
import Card from "../components/ui/molecules/Card";
import SVGIcon from "../components/ui/atoms/SVGIcon";

export default {
  name: "Home",
  components: {
    SVGIcon,
    Card,
    CalendarDate,
    CheckBox,
    MobileMenuIcon,
    DropDown,
    ProgressBar,
    AccordionRow,
    Ribbon,
    ProgressDonut,
    Loading,
    Modal,
    Icon,
    Badge,
    Button,
    Table,
    Avatar,
    TableObjData,
    Box,
    GridAuto,
    GridSquare,
  },
  props: {
    p: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      compStatus: [
        "neutral",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
      ],
      compSizes: ["xs", "sm", "md", "lg", "xl"],
      showModal: false,
      showLoading: true,
      progressPct: { value: 60 },
    };
  },
  computed: {},
  methods: {
    onClick() {
      console.log("Master click");
    },
    onToggleOn() {
      console.log("toggle ON");
    },
    onToggleOff() {
      console.log("toggle OFF");
    },
    onAccordionOpen() {
      console.log("accordion open");
    },
    onAccordionClose() {
      console.log("accordion close");
    },
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
  mounted() {
    // gsap.fromTo(
    //   this.progressPct,
    //   { value: 0 },
    //   {
    //     value: 100,
    //     duration: 3,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: 'none',
    //   }
    // );
  },
};
</script>
