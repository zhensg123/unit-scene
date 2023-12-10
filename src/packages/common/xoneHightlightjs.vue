<template>
  <div class="xone-monaco" :style="{ marginTop: marginTop }">
    <div class="tool">
      <button @click="copyCode">
        <i class="el-icon-document-copy"></i> {{ copyStatus }}
      </button>
    </div>
    <!-- <pre ref="heightlightPre"><code :class="lang">{{ value }}</code></pre> -->
    <div
      class="hljs-box"
      :style="{ minHeight: minHeight }"
      v-html="codeHtml"
    ></div>
  </div>
</template>
  <script>
import hljs from "highlight.js";
// import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/a11y-dark.css'
// import 'highlight.js/styles/a11y-light.css'
// import 'highlight.js/styles/vs.css'

// import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/monokai.css'
// import 'highlight.js/styles/tomorrow-night-blue.css'
// import 'highlight.js/styles/tomorrow-night-bright.css'
import "highlight.js/styles/atom-one-dark.css";
// import 'highlight.js/styles/idea.css'

export default {
  name: "xoneHightlightjs",
  props: {
    lang: {
      type: String,
      default: "html",
    },
    value: {
      type: String,
      default: "",
    },
    keyword: {
      type: String,
      default: "",
    },
    minHeight: {
      type: String,
      default: "auto",
    },
    useMaster: {
      type: String,
      default: "chapt-answer",
    },
  },
  data() {
    return {
      copyStatus: "Copy",
      codeHtml: "",
    };
  },
  watch: {
    value: {
      handler(val) {
        if (this.setTimeout) {
          return false;
        }
        this.setTimeout = setTimeout(() => {
          val && this.highlightCode(val);
          this.setTimeout = null;
        });
      },
      immediate: true,
    },
  },
  computed: {
    marginTop() {
      return this.useMaster === "chapt-answer" ? 0 : "15px";
    },
  },
  mounted() {
    const value = this.$slots.default;
    value && this.highlightCode(value);
  },
  methods: {
    highlightCode(val) {
      let html = hljs.highlight(val, { language: this.lang }).value;
      if (this.keyword) {
        const regex = new RegExp(this.keyword, "gi");
        html = html.replace(regex, function (word) {
          return `<span class="highlight">${word}</span>`;
        });
      }
      this.codeHtml = html;
    },
    copyCode() {
      this.$copyConsole(this.value, () => {
        this.copyStatus = "Copied";
        setTimeout(() => {
          this.copyStatus = "Copy";
        }, 1000);
      });
    },
  },
};
</script>
  <style >
.highlight {
  color: yellow;
}
pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;
}
code.hljs {
  padding: 3px 5px;
}
.hljs {
  color: #abb2bf !important;
  background: #282c34;
}
.hljs-comment,
.hljs-quote {
  color: #5c6370 !important;
  font-style: italic;
}
.hljs-doctag,
.hljs-formula,
.hljs-keyword {
  color: #c678dd !important;
}
.hljs-deletion,
.hljs-name,
.hljs-section,
.hljs-selector-tag,
.hljs-subst {
  color: #e06c75 !important;
}
.hljs-literal {
  color: #56b6c2 !important;
}
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string,
.hljs-regexp,
.hljs-string {
  color: #98c379 !important;
}
.hljs-attr,
.hljs-number,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
  color: #d19a66 !important;
}
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-symbol,
.hljs-title {
  color: #61aeee !important;
}
.hljs-built_in,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #e6c07b !important;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: 700;
}
.hljs-link {
  text-decoration: underline;
}
.hljs-box.light {
  padding: 10px;
  background: #fefefe;
  color: #545454;
}
.hljs-box {
  font-size: 15px;
  line-height: 1.4;
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; */
  /* font-family: 'JetBrains Mono', monospace; */
  padding: 10px;
  padding-bottom: 0;
  overflow: auto;
  background: #1e1e1e;
  color: #f8f8f2;
  white-space: pre;
  max-height: 100%;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>
        <style lang="scss" scoped>
pre {
  margin: 0;
}
pre code {
  height: fit-content;
}
.xone-monaco {
  height: 100%;
  width: 100%;
}

.tool {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  background: rgb(25, 25, 25);
  height: 42px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  button {
    padding: 0px 8px;
    appearance: none;
    text-align: left;
    text-decoration: none;
    box-sizing: border-box;
    height: 26px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    width: auto;
    border-radius: 4px;
    font-weight: 600;
    position: relative;
    line-height: 1;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    color: #afafaf;
    &:hover {
      background-color: rgba(25, 113, 194, 0.2);
    }
  }
}
</style>
  