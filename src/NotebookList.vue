<template>
    <div class="prev-notebook-list">
        <div class="notebook-list-item">
            <div class="notebook-cover">
                <div class="notebook-skin">
                    База знаний
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'NotebookList'
    }
</script>
<style scoped>
    @import './components/css/all.css';
    @import './components/css/fontawesome.css';
    @import './components/css/knowledgebase.css';

    /* ----- notebook-list-item ---- */
    .notebook-list-item {
        position: relative;
        transition: .4s ease-in-out;
        border-radius: 5px 15px 15px 5px;
        transform-origin: left center 0px;
        display: inline-block;
        margin: 15px;
        height: 180px;
        width: 130px;
    }

    .notebook-cover {
        background: #cc4b48;
        height: 180px;
        width: 130px;
        position: absolute;
        border-radius: 5px 15px 15px 5px;
        z-index: 10;
        transition: .5s linear;
        transform-style: preserve-3d;
        transform-origin: left center 0px;
    }

    .notebook-skin {
        height: 80px;
        background: #e8e8e0;
        margin-top: 55px;
        padding: 10px;
        font-size: 14px;
        position: relative;
        z-index: 10;
        color: #222;
        text-align: left;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }

    .notebook-skin:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 15px;
        left: 0;
        bottom: 0;
        background: #cddc39;
    }

    .notebook-cover:before {
        content: "";
        position: absolute;
        width: 10px;
        height: calc(100% + 2px);
        top: -1px;
        z-index: 100;
        border-radius: 2px;
        right: 25px;
        transition: 2s ease;
        background: linear-gradient(to right, #9c2e2b 0%, #cc4b48 12%, #9c2e2b 25%, #cc4b48 37%, #9c2e2b 50%, #cc4b48 62%, #9c2e2b 75%, #cc4b48 87%, #9c2e2b 100%);
    }

</style>
