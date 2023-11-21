<template>
    <div class="container-dence">
        <div class="boy-container">
            <div class="title">Хлопці</div>
            <div
                v-for="boy in getBoysList"
                :key="boy.id"
                class="boys"
                :class="{
                    'selected-list': getSelectedBoys(boy.id),
                }"
                @click="selectedBoy(boy.id)"
            >
                {{ boy.name }}
            </div>
        </div>
        <div class="btm">
            <button :disabled="isLackOfDancer" class="button" @click="addCouple">Вибрати</button>
        </div>
        <div class="girl-container">
            <div class="title">Дівчата</div>

            <div
                v-for="girl in getGirlsList"
                :key="girl.id"
                class="girl"
                :class="{
                    'selected-list': getSelectedGirls(girl.id),
                }"
                @click="selectedGirl(girl.id)"
            >
                {{ girl.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'DancingPair',

    computed: {
        ...mapGetters(['getBoysList', 'getGirlsList', 'getSelectedBoys', 'getSelectedGirls', 'isLackOfDancer']),
    },

    methods: {
        ...mapActions(['addCouple', 'selectedBoy', 'selectedGirl']),
    },
}
</script>

<style lang="scss" scoped>
.container-dence {
    font-size: 20px;
    align-items: center;
    gap: 20px;
    display: flex;

    justify-content: space-between;
}
.title {
    font-size: 30px;
    margin-bottom: 15px;
}
.boy-container {
    padding: 10px;
    border: 2px solid #000;
}
.boys {
    cursor: pointer;
    margin-bottom: 5px;
}
.girl-container {
    padding: 10px;

    border: 2px solid #000;
}
.girl {
    cursor: pointer;
    margin-bottom: 5px;
}
.selected-list {
    border: 2px solid #000;
}
.button {
    padding: 10px;
    background-color: teal;
    color: white;
    font-size: 20px;
    transition: all 0.3s;
    &:hover {
        background-color: rgb(28, 214, 214);
    }
}
</style>
