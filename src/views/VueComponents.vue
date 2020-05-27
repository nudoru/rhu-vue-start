<style lang="scss" scoped>
.system-name {
  font-weight: $font-weight-bold;
  font-size: 1.2rem;
}
</style>

<template>
  <div class="container">
    <Icon status="primary" glyph="fa fa-cog" />
    <Badge status="neutral" glyph="far fa-calendar-alt">I'm a badge!</Badge>
    <!--    <button class="danger" @click="onShowModal">-->
    <!--      <i class="fas fa-external-link-alt left"></i>Open Modal-->
    <!--    </button>-->
    <Button
      @click="onShowModal"
      status="success"
      glyph="fas fa-external-link-alt"
      large
      >Ima button</Button
    >
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
import Icon from "@/components/ui/Icon";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

export default {
  name: "Home",
  components: { Modal, Icon, Badge, Button },
  props: {
    p: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {},
  methods: {
    onShowModal() {
      this.showModal = true;
    },
    onCloseModal() {
      this.showModal = false;
    },
  },
};
</script>
