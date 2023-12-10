<template>
    <div class="el-empty">
      <div class="el-empty__image" :style="imageStyle">
        <img v-if="image" :src="image" ondragstart="return false">
        <slot v-else name="image">
          <unit-img-empty />
        </slot>
      </div>
      <div class="el-empty__description">
        <slot v-if="$slots.description" name="description"></slot>
        <p v-else>{{ emptyDescription }}</p>
      </div>
      <div v-if="$slots.default" class="el-empty__bottom">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import ImgEmpty from './unit-img-empty.vue';
//   import { t } from 'element-ui/src/locale';
  
  export default {
    name: 'UnitEmpty',
    components: {
      [ImgEmpty.name]: ImgEmpty
    },
    props: {
      image: {
        type: String,
        default: ''
      },
      imageSize: Number,
      description: {
        type: String,
        default: ''
      }
    },
    computed: {
      emptyDescription() {
        return this.description || '暂无数据';
      },
      imageStyle() {
        return {
          width: this.imageSize ? `${this.imageSize}px` : ''
        };
      }
    }
  };
  </script>
  