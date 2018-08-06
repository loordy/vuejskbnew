<template>
    <div class="grid-items-wrap">
        <div class="grid-item">
            <div class="grid-item_row">
                <div class="visual-edit">
                    <div class="visual-edit_item">
                        <input type="checkbox" class="checkbox" id="checkbox"/>
                        <label for="checkbox"></label>
                    </div>
                    <div class="visual-edit_item">
                        <div class="visual-artc-img"
                             :style="{ backgroundImage: 'url(' + require('@/assets/images/article.jpg') + ')' }">
                        </div>
                    </div>
                </div>
                <div class="visual-text">
                    <div class="visual-text_title">
                        <a href="#">Как добавить контент в базу знаний</a>
                    </div>
                    <div class="visual-post-text_edit">
                  <span class="post-favicon">
                      <i class="far fa-file-alt"></i>
                  </span>

                        <div class="visual-post-text_edit_tags">
                            <span class="tag-item"><span>продажи b2b</span></span>
                            <span class="tag-item"><span>продажи b2b</span></span>
                        </div>
                        <div class="visual-post-text_edit_prev">
                            Всем привет!&nbsp;Короткая видео инструкция с обзором возможностей по добавлению контента в
                            вашу базу
                            знаний.&nbsp;
                            SmartPortal позволяет добавлять на регулярной основе всеми сотрудниками нужный для компании
                            на
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-item_edit">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
        <div class="grid-item">
            <div class="grid-item_row">
                <div class="visual-edit">
                    <div class="visual-edit_item">
                        <input type="checkbox" class="checkbox" id="checkbox2"/>
                        <label for="checkbox2"></label>
                    </div>
                    <div class="visual-edit_item">
                        <div class="visual-artc-img"
                             :style="{ backgroundImage: 'url(' + require('@/assets/images/article.jpg') + ')' }">
                        </div>
                    </div>
                </div>
                <div class="visual-text">
                    <div class="visual-text_title">
                        <a href="#">Как добавить контент в базу знаний</a>
                    </div>
                    <div class="visual-post-text_edit">
                  <span class="post-favicon">
                      <i class="far fa-file-alt"></i>
                  </span>
                        <div class="visual-post-text_edit_tags">
                            <span class="tag-item"><span>продажи b2b</span></span>
                            <span class="tag-item"><span>продажи b2b</span></span>
                        </div>
                        <div class="visual-post-text_edit_prev">
                            Всем привет!&nbsp;Короткая видео инструкция с обзором возможностей по добавлению контента в
                            вашу базу
                            знаний.&nbsp;
                            SmartPortal позволяет добавлять на регулярной основе всеми сотрудниками нужный для компании
                            на
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-item_edit">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
        <div class="grid-item active">
            <div class="grid-item_row">
                <div class="visual-edit">
                    <div class="visual-edit_item">
                        <input type="checkbox" class="checkbox" id="checkbox3" checked/>
                        <label for="checkbox3"></label>
                    </div>
                    <div class="visual-edit_item">
                        <div class="visual-artc-img"
                             :style="{ backgroundImage: 'url(' + require('@/assets/images/article.jpg') + ')' }">
                        </div>
                    </div>
                </div>
                <div class="visual-text">
                    <div class="visual-text_title">
                        <a href="#">Как добавить контент в базу знаний</a>
                    </div>
                    <div class="visual-post-text_edit">
                  <span class="post-favicon">
                      <i class="far fa-file-alt"></i>
                  </span>
                        <div class="visual-post-text_edit_tags">
                            <span class="tag-item"><span>продажи b2b</span></span>
                            <span class="tag-item"><span>продажи b2b</span></span>
                        </div>
                        <div class="visual-post-text_edit_prev">
                            Всем привет!&nbsp;Короткая видео инструкция с обзором возможностей по добавлению контента в
                            вашу базу
                            знаний.&nbsp;
                            SmartPortal позволяет добавлять на регулярной основе всеми сотрудниками нужный для компании
                            на
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-item_edit">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  name: 'listItemList'
}
</script>
<style scoped>
    .article-cover img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }

    .article .article-content img {
        max-width: 100%;
    }

    .content-title h3 {
        font-size: 26px;
        color: #555;
        line-height: 30px;
        font-family: "ProximaNova-Bold";
        margin: 0;
    }

    .content-title a {
        color: #555;
        text-decoration: none !important;
        transition: color ease 0.3s;
    }

    .content-title a:hover {
        color: #2c77b1;
    }

    .article .content-text-wrap h1 {
        font-size: 26px;
        line-height: 30px;
    }

    .article .content-text-wrap h2 {
        font-size: 24px;
        line-height: 28px;
    }

    .article .content-text-wrap h3 {
        font-size: 22px;
        line-height: 26px;
    }

    .article .content-text-wrap h4 {
        font-size: 20px;
        line-height: 24px;
    }

    .article .content-text-wrap h5 {
        font-size: 18px;
        line-height: 22px;
    }

    .article .content-text-wrap h6 {
        font-size: 16px;
        line-height: 20px;
    }

    .article .content-text-wrap h1,
    .article .content-text-wrap h2,
    .article .content-text-wrap h3,
    .article .content-text-wrap h4,
    .article .content-text-wrap h5,
    .article .content-text-wrap h6 {
        color: #333;
        font-family: "ProximaNova-Bold";
        margin-top: 0;
        margin-bottom: 16px;
        text-rendering: optimizeLegibility;
        letter-spacing: -.5px;
    }

    .content-text-wrap a:hover {
        text-decoration: none;
    }

    .article .content-text-wrap ol {
        list-style-position: inside;
        counter-reset: item;
        list-style-type: none;
    }

    .article .content-text-wrap ol li:before {
        content: counter(item) ". ";
        left: 0;
        top: 0;
        font-weight: 700;
        counter-increment: item;
        position: absolute;
        z-index: 1;
    }

    .article .content-text-wrap ol,
    .article .content-text-wrap ul {
        padding-left: 0;
    }

    .article .content-text-wrap ol li,
    .article .content-text-wrap ul li {
        position: relative;
        padding-left: 26px;
        margin-bottom: 7px;
    }

    .article .content-text-wrap ul {
        padding-left: 20px;
    }

    .article .content-text-wrap ul li {
        padding-left: 7px;
    }

    .article .content-text-wrap table {
        width: 100%;
        border-collapse: collapse;
        empty-cells: show;
        margin-bottom: 16px;
    }

    .article .content-text-wrap table td,
    .article .content-text-wrap table th {
        border: 1px solid #eee;
        padding: 16px 16px 15px;
        font-size: 16px;
    }

    .article .content-text-wrap blockquote {
        position: relative;
        color: #333;
        font-size: 18px;
        line-height: 27px;
        font-family: "ProximaNova-RegularIt";
        padding-left: 16px;
        border-left: 1px solid rgba(0, 0, 0, .1);
        margin-left: 25px;
    }

    .article .content-text-wrap strong,
    .article .content-text-wrap b {
        font-family: "ProximaNova-Bold";
        letter-spacing: -.5px;
        font-weight: normal;
    }

    .article-footer-tags .tag-item {
        margin-right: 4px;
    }

    .empty-articles img {
        display: block;
        max-width: 120px;
        margin: 50px auto;
        opacity: 0.3;
    }

    /* ------ content edit drop css ---- */

    .content-edit_list li {
        display: block;
        width: 100%;
        list-style: none;
    }

    .content-edit_list li a {
        display: block;
        text-decoration: none !important;
        color: #979797;
        font-size: 14px;
        position: relative;
        text-align: left;
        padding-left: 35px;
        height: 32px;
        line-height: 32px;
        border-radius: 2px;

    }

    .content-edit_list li a span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        display: inline-block;
    }

    .content-edit_list > li > a i {
        position: absolute;
        left: 7px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        color: #9aa5ab;
    }

    .content-edit_list li a:hover {
        background-color: #f6f9fb;
        color: #556066;
    }

    .content-edit_list li a:hover i {
        color: #556066;
    }

    /* ------ content edit drop css end---- *

    /* -------grid list css start------ */

    .grid-item {
        padding: 16px 60px 18px 15px;
        border: 1px solid #ecf2f5;
        background-color: #fff;
        overflow: hidden;
        position: relative;
    }

    .grid-items-wrap .grid-item {
        margin-bottom: -1px;
    }

    .grid-item_row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .visual-edit {
        width: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .visual-edit input[type="checkbox"] {
        margin-top: 2px;
        cursor: pointer;
    }

    .visual-edit .visual-edit_item {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .visual-artc-img {
        width: 32px;
        height: 32px;
        overflow: hidden;
        background-color: #d8f1ec;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center center;
    }

    .visual-artc-img img {
        max-width: 100%;

    }

    .visual-text {
        width: calc(100% - 80px);
        padding-left: 15px;
    }

    .visual-text_title {
        font-size: 16px;
        color: #556066;
        text-align: left;
        font-family: "ProximaNova-Semibold";
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
        margin-bottom: 5px;
    }

    .visual-text_title a {
        color: #556066;
        text-decoration: none !important;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
        display: inline-block;
        white-space: nowrap;
    }

    .post-favicon {
        display: inline-block;
        width: 20px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: #56c1e4;
        font-size: 16px;
    }

    .visual-post-text_edit {
        display: flex;
        align-items: center;
    }

    .visual-post-text_edit .visual-post-text_edit_tags {
        padding-left: 10px;
        white-space: nowrap;
    }

    .visual-post-text_edit_tags .tag-item {
        margin-bottom: 0;
        margin-right: 1px;
    }

    .visual-post-text_edit_prev {
        color: #afbcc2;
        vertical-align: middle;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 15px;
        display: inline-block;
        font-family: "ProximaNova-Regular";
    }

    .grid-item_edit {
        width: 36px;
        line-height: 36px;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
        color: #9aa5ab;
    }

    .grid-item_edit:hover {
        color: #556066;
    }

    .grid-item .grid-item_edit {
        position: absolute;
        right: 15px;
        top: 50%;
        margin-top: -18px;
    }

    .grid-item:hover {
        background-color: #f6f9fb;
    }

    .grid-item.active {
        background-color: #f6f9fb;
        border-left: 2px solid #36b5df;
    }

    /* -------grid list css end------ */

</style>
