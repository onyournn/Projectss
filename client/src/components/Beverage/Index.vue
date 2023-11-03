<template>
    <div>

        <h2>Get all users </h2>
        
        <hr>
        <div v-for="beverage in beverages" v-bind:key="beverage.id">
            <!-- <p>ID : {{ user.id }}</p>
            <p>ชื่อ : {{ user.name }} </p>
            <p>นามสกุล : {{ user.lastname }}</p>
            <p>
                <button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button>
                <button v-on:click="navigateTo('/user/edit/' + user.id)">edit user</button>
                <button v-on:click="deleteUser(user)">delete user</button>

            </p> -->
            <hr>
        </div>

    </div>
</template>

<script>

import BeverageService from '@/services/BeverageService'

export default {
    data() {
        return {
           beverages: []
        }
    },

    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteBeverage(beverage) {
            let result = confirm("Want to delete?");
            if (result) {
                try {
                    await BeverageService.delete(beverage);
                    this.refreshData();
                } catch (err) {
                    console.log(err);
                }
            }
        },

        async refreshData() {
            this.beverages = (await BeverageService.index()).data
        }
    },

    async created() {
        this.beverages = (await BeverageService.index()).data
    }

}

</script>

<style scoped></style>
   