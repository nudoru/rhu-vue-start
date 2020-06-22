<style lang="scss">
    .progress-donut-wrap {
        position: relative;
        display: inline-block;
        .progress-donut-container {
            position: relative;
            z-index: 1;
            svg {
                transform: rotate(90deg);
            }
        }
        .wrapped-component {
            position: absolute;
            z-index: 0;
            top: 0;
            left: 0;
        }
    }
</style>

<template>
    <div class="progress-donut-wrap">
        <div class="progress-donut-container">
            <svg :width="sizePx" :height="sizePx" :class="cls">
                <circle :r="radius" :cx="halfsize" :cy="halfsize"
                        :transform="rotateval" :style="trackstyle"
                        class="track"/>
                <circle :r="radius" :cx="halfsize" :cy="halfsize"
                        :transform="rotateval" :style="indicatorstyle"
                        class="indicator"/>
            </svg>
        </div>
        <div class="wrapped-component" :style="{top: wrappedCompOffset, left: wrappedCompOffset}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  import {
    getStatusColor,
    getStatusHueShiftColor,
    sizeStringToPixel,
    validateSize,
    validateStatus
  } from '../../libs/uiComponentUtilities.js';

  export default {
    name      : 'ProgressDonutWrap',
    components: {},
    props     : {
      size       : {
        type     : String,
        default  : 'xl',
        validator: validateSize
      },
      stroke     : {
        type   : Number,
        default: 5
      },
      status     : {
        type     : String,
        default  : 'info',
        validator: validateStatus
      },
      percent    : {
        type   : Number,
        default: 0
      }
    },
    data() {
      return {};
    },
    computed  : {
      gradColorA() {
        return getStatusColor(this.status);
      },
      gradColorB() {
        return getStatusHueShiftColor(this.status);
      },
      percentRounded() {
        let value = Math.abs(Math.round(this.percent))
        return isNaN(value) ? 0 : value;
      },
      wrappedCompOffset() {
        return (this.stroke + 3) + 'px';
      },
      sizePx() {
        return sizeStringToPixel(this.size) + (this.stroke * 2) + 6;
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
        return (this.percentRounded * this.circumference) / 100;
      },
      dashval() {
        return this.strokeval + ' ' + this.circumference;
      },
      trackstyle() {
        return {strokeWidth: this.stroke};
      },
      indicatorstyle() {
        return {
          strokeWidth    : this.stroke,
          strokeDasharray: this.dashval,
          strokeLinecap  : 'round',
          stroke: this.gradColorA
        };
      },
      rotateval() {
        return 'rotate(-90 ' + this.halfsize + ',' + this.halfsize + ')';
      },
      cls() {
        return ['progress-donut', this.status].join(' ');
      }
    },
    methods   : {}
  };
</script>