<template>
    <div class="el-breadcrumb" aria-label="Breadcrumb" role="navigation">
      <slot></slot>
    </div>
  </template>
  <script>
    export default {
      name: 'UnitBreadcrumb',
  
      props: {
        separator: {
          type: String,
          default: '/'
        },
        separatorClass: {
          type: String,
          default: ''
        }
      },
  
      provide() {
        return {
          unitBreadcrumb: this
        };
      },
  
      mounted() {
        const items = this.$el.querySelectorAll('.el-breadcrumb__item');
        if (items.length) {
          items[items.length - 1].setAttribute('aria-current', 'page');
        }
      }
    };
  </script>
  