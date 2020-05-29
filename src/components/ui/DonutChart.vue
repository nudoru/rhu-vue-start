// Based on this pen https://codepen.io/zeroskillz/pen/mPmENy?editors=0010

<style lang="scss" scoped></style>

<template>
    <div class="donutchart-container">
        <svg :width="sizePx" :height="sizePx" :class="cls">
            <circle :r="radius" :cx="halfsize" :cy="halfsize"
                    :transform="rotateval" :style="trackstyle"
                    class="track"/>
            <circle :r="radius" :cx="halfsize" :cy="halfsize"
                    :transform="rotateval" :style="indicatorstyle"
                    class="indicator"/>
            <text class="text" :x="halfsize" :y="halfsize+7"
                  :style="{textAnchor:'middle'}" v-if="showPercent">
                <tspan class="text-percent">{{percent}}</tspan>
                <tspan class="text-percent-sign">%</tspan>
            </text>
        </svg>
        <span class="label">{{label}}</span>
    </div>
</template>

<script>
  import {validateStatus, validateSize, sizeStringToPixel} from '@/libs/uiComponentPropValidation.js';

  export default {
    name      : 'DonutChart',
    components: {},
    props     : {
      size       : {
        type   : String,
        default: 'xl',
        validator: validateSize
      },
      stroke: {
        type   : Number,
        default: 10
      },
      status     : {
        type     : String,
        default  : 'info',
        validator: validateStatus
      },
      label      : {
        type   : String,
        default: ''
      },
      percent    : {
        type   : Number,
        default: 50
      },
      showPercent: {
        type   : Boolean,
        default: true
      }
    },
    data() {
      return {};
    },
    computed  : {

sizePx() {
  return sizeStringToPixel(this.size);
},
      halfsize() {
        return this.sizePx * 0.5;
      },
      radius() {
        return this.halfsize - (this.stroke * 0.5);
      },
      circumference() {
        return 2 * Math.PI * this.radius;
      },
      strokeval() {
        return (this.percent * this.circumference) / 100;
      },
      dashval() {
        return this.strokeval + ' ' + this.circumference;
      },
      trackstyle() {
        return {strokeWidth: this.stroke};
      },
      indicatorstyle() {
        return {strokeWidth: this.stroke, strokeDasharray: this.dashval};
      },
      rotateval() {
        return 'rotate(-90 ' + this.halfsize + ',' + this.halfsize + ')';
      },
      cls() {
        return ['donutchart', this.status].join(' ');
      }
    },
    methods   : {}
  };
</script>