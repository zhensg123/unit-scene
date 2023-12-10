<template>
    <div class="msg">{{msg}}</div>
</template>
<script>
export default {
    name: 'XoneToast',
    data(){
        return {
            msg: '我是测试'
        }
    }
}
</script>
<style scoped lang='scss'>
.msg {
    color: red;
}
</style>