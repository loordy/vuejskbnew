<template>
    <div class="edit-modal-content">

        <div class="edit-group">
            <div class="edit-group-label">НАЗВАНИЕ БАЗЫ ЗНАНИЙ</div>
            <input type="text" class="kb-input">
        </div>

        <div class="edit-group">
            <div class="edit-group-label">ДОСТУП К БАЗЕ ЗНАНИЙ</div>
            <div class="radio-button-row">

                <div class="radio-button-label">
                    <input type="radio" class="radio" id="radio1" name="list"/>
                    <label for="radio1">Всем</label>
                </div>

                <div class="radio-button-label">
                    <input type="radio" class="radio" id="radio2" name="list"/>
                    <label for="radio2">Мне</label>
                </div>

                <div class="radio-button-label">
                    <input type="radio" class="radio" id="radio3" name="list"/>
                    <label for="radio3">Список</label>
                </div>

            </div>
        </div>

        <div class="edit-group text-right m-b-0">
            <button class="kb-btn green-btn">
                Добавить
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'modalAddNewBase'
    }
</script>
<style>
    @import './components/css/all.css';
    @import './components/css/fontawesome.css';
    @import './components/css/knowledgebase.css';

    .text-right {
        text-align: right;
    }

    /*------modal css start----*/

    .edit-group {
        margin-bottom: 20px;
    }

    .edit-group-label {
        color: #545c6a;
        font-size: 12px;
        line-height: 1;
        margin-bottom: 8px;
    }

    .kb-input {
        width: 100%;
        font-family: "ProximaNova-Regular";
        color: #556066;
        font-size: 14px;
        padding: 0 16px !important;
        margin: 0;
        border: none;
        display: inline-block;
        line-height: inherit;
        width: 100%;
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid #e4e5e9;
        height: 35px;
        line-height: 35px;
    }

    .kb-input:hover {
        border-color: #c4c7cc;
    }

    .kb-input:focus {
        border-color: #56c1e4;
    }

    .radio-button-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* ------modal css end---- */

    .tag-item span {
        color: #556066;
        padding: 0 4px;
    }

</style>