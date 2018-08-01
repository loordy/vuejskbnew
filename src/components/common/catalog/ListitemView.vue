<template>
  <div>
    <div class="liset-item article">
        <div class="article-cover"
             :style="{ backgroundImage: 'url(' + require('@/components/images/article.jpg') + ')' }">
        </div>
        <div class="article-content">
            <div class="content-title">
                <h3><a href="#">Существуют ли B2B-продажи?</a></h3>
              <contentEditBtn/>
            </div>
            <div class="article-source-line">
                <span class="source-line-item">19 янв. 2018 г.</span>
                <span class="source-line-item cnt-none">Альберт Эйнштейн</span>
            </div>
            <div class="content-text-wrap">
                <ol>
                    <li>Первое правило B2B-продаж – найти внутреннего лоббиста.</li>
                    <li>Внутренний лоббист – это сотрудник компании, который заинтересован во внедрении вашего продукта
                        по
                        своим карьерным соображениям. Его недооценивают, поэтому ему нужно расширение зоны
                        ответственности.
                        Нужно уменьшить влияние другого департамента, обескровив его или сделать его зависимым от себя
                        за счет
                        нового продукта. Нужно получить дополнительные баллы перед начальством, показав ему, что
                        внедрение
                        нового
                        продукта – это выполнение его пожеланий или указаний. И так далее.
                    </li>
                    <li>Надо понять главное: компания – это "коллективное бессознательное". "Оно" у вас ничего не
                        покупает,
                        поэтому обращаться к нему бесполезно. Обращаться нужно к конкретным людям, которые будут
                        покупать нечто
                        не для абстрактной пользы компании, а для своей конкретной пользы. И нет, я не говорю об
                        откатах. Я
                        говорю о той пользе, которую этот человек на этой позиции в этой конкретной ситуации может
                        получить
                        внутри
                        своей компании от внедрения вашего продукта. За счет повышения себя или принижения кого-то
                        другого.
                    </li>
                    <li>Апеллировать к выгоде для компании очень сложно. Компания в целом, конечно, заинтересована в
                        выгоде.
                        Вот только приоритет для каждого сотрудника – это уменьшение личных рисков, а не общая польза.
                        Любое новое внедрение – это риск. Внедрение нового продукта – это риск в квадрате. Пойти на него
                        сотрудник может только в том случае, если личная польза превышает риск.
                    </li>
                    <li>Так что, B2B-продаж на самом деле нет. Это все тот самый старый добрый B2C. Главное, как обычно
                        –
                        понять, кто твой потребитель. А этот потребитель и есть тот самый внутренний лоббист.
                    </li>
                </ol>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim maxime minus modi odit
                    quis
                    sunt. Eum magnam mollitia quasi!
                </p>
            </div>
            <div class="article-collapse">
                <button class="artc-collapse-btn">
                    <span class="fas fa-angle-down"></span>
                </button>
            </div>
            <div class="article-footer">
              <listTagItem :listTag="tagName"/>
                <div class="article-footer-pin">
                    <div class="pin-item">
                        <i class="far fa-comments"></i>
                    </div>
                    <div class="pin-item like-btn">
                        <i class="far fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import ContentEditBtn from '../buttons/ContentEditBtn'
export default {
  name: 'listitemView',
  components: {ContentEditBtn}
}
</script>
<style>
    .article {
        border: 1px solid rgba(0, 0, 0, .06);
        /* border-radius: 5px; */
        /* box-shadow: 0 3px 16px rgba(158,157,163,.08); */
        margin-bottom: 28px;
        background-color: #fff;
        overflow: hidden;
    }

    .article-cover {
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 210px;
        overflow: hidden;
        position: relative;
    }

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

    .article-content {
        padding: 24px;
        display: inline-block;
        box-sizing: border-box;
        font-family: "ProximaNova-Regular";
        font-size: 14px;
        width: 100%;
    }

    .content-title {
        position: relative;
        padding-right: 50px;
        margin-bottom: 10px;
        cursor: pointer;
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

    .source-line-item {
        position: relative;
        padding: 0 20px 0 0;
        color: #9aa5ab;
        font-size: 15px;
        display: inline-block;
    }

    .source-line-item:after {
        content: "";
        display: block;
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 100%;
        top: 50%;
        margin-top: -2px;
        z-index: 2;
        background-color: #9aa5ab;
        right: 6px;
    }

    .cnt-none.source-line-item:after {
        content: none;
    }

    .article .content-text-wrap {
        font-size: 18px;
        line-height: 27px;
        font-family: "ProximaNova-Regular";
        color: #333;
        text-rendering: optimizeLegibility;
        margin-top: 10px;
        padding-bottom: 10px;
        overflow: hidden;
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

    .article-footer {
        display: flex;
        align-items: center;
    }

    .article-footer .article-footer-tags {
        width: calc(100% - 100px);
    }

    .article-footer-tags .tag-item {
        margin-right: 4px;
    }

    .article-footer .article-footer-pin {
        width: 100px;
        text-align: right;
        margin-bottom: 4px;
    }

    .pin-item {
        display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 18px;
        color: #979797;
        cursor: pointer;
        margin: 0 4px;
        transition: color ease 0.3s;
    }

    .pin-item:hover {
        color: #556066;
    }

    .pin-item.like-btn {
        color: #f15f5e !important;
        position: relative;
    }

    .article-collapse {
        text-align: center;
        margin-bottom: 17px;
        margin-top: -8px;
        width: 100%;
        cursor: pointer;
        position: relative;
        z-index: 1;
    }

    .article-collapse:before {
        content: "";
        display: block;
        position: absolute;
        top: 16px;
        left: 0px;
        right: 0px;
        border-top: 1px solid #f7f7f7;
        z-index: 1;
    }

    .artc-collapse-btn {
        position: relative;
        z-index: 2;
        border: none;
        width: 40px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        background-color: #fff;
        cursor: pointer;
        color: #a0a0a0;
        display: inline-block;
        font-size: 22px;
        border-radius: 500px;
        box-sizing: border-box;
        white-space: nowrap;
        outline: none !important;
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

    .visual-edit input[type="checkbox"] {
        margin-top: 2px;
        cursor: pointer;
    }

    .visual-artc-img img {
        max-width: 100%;

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

    .visual-post-text_edit_tags .tag-item {
        margin-bottom: 0;
        margin-right: 1px;
    }

    /* -------grid list css end------ */

</style>
