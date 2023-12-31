## 瀑布流布局 (展示-布局)

这里使用flex实现：实际就是4个瀑布，然后其中的div，按照顺序布局。


### html

```
   <div class="unit-container">
      <template v-for="i in 4" :key="i">
        <div class="unit-queue" >
          <template v-for="j in 8" :key="j">
            <div class="unit-item"></div>
          </template>
        </div>
      </template>
    </div>

```
### scss

```
$lineCount: 4;
$count: 8;

@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}

@function randomColor() {
  @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.unit-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
}

.unit-queue {
  display: flex;
  flex-direction: column;
  flex-basis: 24%;
}

.unit-item {
  position: relative;
  width: 100%;
  margin: 2.5% 0;
}

@for $i from 1 to $lineCount + 1 {
  .unit-queue:nth-child(#{$i}) {
    @for $j from 1 to $count + 1 {
      .unit-item:nth-child(#{$j}) {
        height: #{randomNum(300, 50)}px;
        background: randomColor();

        &::after {
          content: "#{$j}";
          position: absolute;
          color: #fff;
          font-size: 24px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
```

