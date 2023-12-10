<template>
    <div class="el-page-header">
      <div class="el-page-header__left" @click="$emit('back')">
        <i class="el-icon-back"></i>
        <div class="el-page-header__title">
          <slot name="title">{{ title }}</slot>
        </div>
      </div>
      <div class="el-page-header__content">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
  </template>
  
  <script>
//   import { t } from '../util/locale';
  export default {
    name: 'UnitPageHeader',
  
    props: {
      title: {
        type: String,
        default() {
            return '返回'
        //   return t('el.pageHeader.title');
        }
      },
      content: String
    }
  };
  </script>
  