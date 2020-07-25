<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an Awesome user!</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="userDetail">
                <app-user-detail :name="name"></app-user-detail>
            </div>
            <div class="userEdit">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name: 'Max'
            };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName(){
                this.name = 'Anna';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
    .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .userDetail, .userEdit {
        padding: 15px;
    }
</style>