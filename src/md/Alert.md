## Alert 警告展示 (展示-数据展示)

警告展示解释

- 页面上突出的提醒信息，需要用户关注
- 核心是html和css静态结构，只有一个关闭事件


### html

```

 <div
        class="unit-alert unit-alert--info is-light"
      >
        <div class="unit-alert__content">
          <span
            class="unit-alert__title is-bold"
          >
            <slot name="title">{{ title }}</slot>
          </span>
          <p class="unit-alert__description">
            {{ description }}
          </p>
          <i
            class="unit-alert__closebtn is-customed"
            >{{ closeText }}</i
          >
        </div>
      </div>

```

### JavaScript

```
 export default {
    name: "Alert 警告",
  
    props: {
      title: {
        type: String,
        default: "biaoti",
      },
      description: {
        type: String,
        default: "描述",
      },
      closeText: {
        type: String,
        default: "关闭",
      }
    },
  
    data() {
      return {
        visible: true,
      };
    }
  };

```


### scss

```


  .unit-alert {
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    opacity: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }
  .unit-alert.is-light .unit-alert__closebtn {
    color: #c0c4cc;
  }
  .unit-alert.is-dark .unit-alert__closebtn,
  .unit-alert.is-dark .unit-alert__description {
    color: #fff;
  }
  .unit-alert.is-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .unit-alert--info.is-light {
    background-color: #f4f4f5;
    color: #909399;
  }
 
  .unit-alert--info .unit-alert__description {
    color: #909399;
  }


  .unit-alert__content {
    display: table-cell;
    padding: 0 8px;
  }

 
  .unit-alert__title {
    font-size: 13px;
    line-height: 18px;
  }
  .unit-alert__title.is-bold {
    font-weight: 700;
  }
  .unit-alert .unit-alert__description {
    font-size: 12px;
    margin: 5px 0 0;
  }
  .unit-alert__closebtn {
    font-size: 12px;
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
  }
  .unit-alert__closebtn.is-customed {
    font-style: normal;
    font-size: 13px;
    top: 9px;
  }

```

