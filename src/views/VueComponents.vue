<style lang="scss" scoped>
    .system-name {
        font-weight: $font-weight-bold;
        font-size: 1.2rem;
    }
</style>

<template>
    <div class="container">
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


  export default {
    name      : "Home",
    components: {Modal, Icon, Badge, Button, Table, Avatar, TableObjData},
    props     : {
      p: {
        type   : Boolean,
        default: false,
      },
    },
    data() {
      return {
        showModal: false
      };
    },
    computed  : {},
    methods   : {
      getSampleJson() {
        return sampleJson.sample;
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
