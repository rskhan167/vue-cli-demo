<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an Awesome user!</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="userDetail">
                <app-user-detail 
                    :myName="name" 
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"></app-user-detail>
            </div>
            <div class="userEdit">
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age = $event"></app-user-edit>
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
                name: 'Max',
                age: 27
            };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName(){
                this.name = 'Anna';
            },
            resetName() {
                this.name = 'Max';
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