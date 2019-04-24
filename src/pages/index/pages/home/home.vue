<template>
    <div class="index-home">
        <h2>Index -> home Page</h2>
        <h3 @click="addNum">{{num}}</h3>
    </div>
</template>
<script>
export default {
    computed: {
        num() {
            return this.$store.state.num;
        }
    },
    methods: {
        addNum() {
            this.$store.commit("addNum");
        }
    }
};
</script>
