<template>
    <div class="container">
        <div class="danci">
            <dancing-pair />
        </div>
        <div class="couple-container">
            <h2 class="couple-title">Пари</h2>
            <div v-for="(couple, index) in getSelectedCouples" :key="couple.id" class="couple">
                {{ index + 1 }}. {{ couple.boy.name }} - {{ couple.girl.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import DancingPair from '@/components/DancingPair.vue'
export default {
    name: 'DanceCouple',
    components: {
        DancingPair,
    },
    computed: {
        ...mapGetters(['getSelectedCouples']),
    },

    methods: {
        ...mapActions(['loadBoysList', 'loadGirlsList']),
    },
    created() {
        this.loadBoysList()
        this.loadGirlsList()
    },
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 400px;
}
.danci {
    margin-bottom: 10px;
}
.couple-container {
    border: 2px solid #000;
    padding: 10px;
}
.couple-title {
    text-align: center;
}
.couple {
    font-size: 20px;
    text-align: center;
}
</style>
