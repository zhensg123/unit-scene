<template>
  <div v-html="md"></div>
  <h3>效果</h3>
  <div class="review">
    <div class="unit-container">
      <template v-for="i in 4" :key="i">
        <div class="unit-queue" >
          <template v-for="j in 8" :key="j">
            <div class="unit-item"></div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
  <script>
import Waterfall from "../../../md/Waterfall.md";

export default {
  name: "瀑布流布局",
  data() {
    return {
      md: Waterfall,
    };
  },
  methods: {},
};
</script>
  <style lang="scss" scoped>
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
</style>