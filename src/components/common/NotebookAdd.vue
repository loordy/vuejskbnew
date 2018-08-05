<template>
    <div class="notebook-list-item add-notebook">
        <div class="notebook-cover">
            <div class="notebook-skin">
                <span><i class="fas fa-plus"></i></span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'notebookAdd'
    }
</script>
<style scoped>

    /* ----- notebook-list-item ---- */
    .notebook-list-item.add-notebook .notebook-cover {
        background-image: none;
        background-color: #dce1e4;
        padding: 20px;
    }

    .notebook-list-item.add-notebook .notebook-skin {
        text-align: center;
        color: #9aa5ab;
        font-size: 30px;
        text-shadow: none;
        justify-content: center;
    }

    .notebook-list-item.add-notebook .notebook-cover:before {
        content: none;
    }

</style>