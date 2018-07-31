<template>

  <div id="app">
    <div class="main">
    <Top></Top>
    <!--<div>
      <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
    </div>-->

    <!-- Заглушки
      <div class="liset-item empty-articles">
        <img src="./components/images/write-letter.svg" alt="">
        <div class="text">Здесь пока ничего нет. Добавь статью или ссылку</div>
      </div>

      <div class="liset-item empty-articles">
        <img src="./components/images/document-favorite.svg" alt="">
        <div class="text">Здесь пока ничего нет.</div>
      </div>

      <div class="liset-item empty-articles">
        <img src="./components/images/trash.svg" alt="">
        <div class="text">Корзина пуста</div>
      </div>
    -->

    <div class="liset-item article">

      <div class="article-cover" :style="{ backgroundImage: 'url(' + require('@/components/images/article.jpg') + ')' }">

      </div>

      <div class="article-content">

        <div class="content-title">

          <h3>Существуют ли B2B-продажи? </h3>

          <div class="content-edit-btn">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <div class="article-source-line">
          <span class="source-line-item">19 янв. 2018 г.</span>
          <span class="source-line-item cnt-none">Альберт Эйнштейн</span>
        </div>

        <div class="content-text-wrap">
          <ol>
              <li>Первое правило B2B-продаж – найти внутреннего лоббиста.</li>
              <li>Внутренний лоббист – это сотрудник компании, который заинтересован во внедрении вашего продукта по
                своим карьерным соображениям. Его недооценивают, поэтому ему нужно расширение зоны ответственности.
                Нужно уменьшить влияние другого департамента, обескровив его или сделать его зависимым от себя за счет
                нового продукта. Нужно получить дополнительные баллы перед начальством, показав ему, что внедрение нового
                продукта – это выполнение его пожеланий или указаний. И так далее.</li>
              <li>Надо понять главное: компания – это "коллективное бессознательное". "Оно" у вас ничего не покупает,
                поэтому обращаться к нему бесполезно. Обращаться нужно к конкретным людям, которые будут покупать нечто
                не для абстрактной пользы компании, а для своей конкретной пользы. И нет, я не говорю об откатах. Я
                говорю о той пользе, которую этот человек на этой позиции в этой конкретной ситуации может получить внутри
                своей компании от внедрения вашего продукта. За счет повышения себя или принижения кого-то другого.</li>
              <li>Апеллировать к выгоде для компании очень сложно. Компания в целом, конечно, заинтересована в выгоде.
                Вот только приоритет для каждого сотрудника – это уменьшение личных рисков, а не общая польза.
                Любое новое внедрение – это риск. Внедрение нового продукта – это риск в квадрате. Пойти на него
                сотрудник может только в том случае, если личная польза превышает риск.</li>
              <li>Так что, B2B-продаж на самом деле нет. Это все тот самый старый добрый B2C. Главное, как обычно –
                понять, кто твой потребитель. А этот потребитель и есть тот самый внутренний лоббист.
              </li>
          </ol>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim maxime minus modi odit quis sunt. Eum magnam mollitia quasi!
          </p>
        </div>

        <div class="article-collapse">
          <button class="artc-collapse-btn">
              <span class="fas fa-angle-down"></span>
          </button>
        </div>

        <div class="article-footer">
          <div class="article-footer-tags">
               <span class="tag-item">
                  <span class="icon-list"><i class="fas fa-list-ul"></i></span>
                  <span>брендинг</span>
              </span>
              <span class="tag-item">
                  <span>обучение менеджеров</span>
              </span>
          </div>
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

    <div class="liset-item article">

      <div class="article-cover"  :style="{ backgroundImage: 'url(' + require('@/components/images/article2.jpeg') + ')' }">

      </div>

      <div class="article-content">

        <div class="content-title" @click="detailArticleModalMethod">
          <h3>Существуют ли B2B-продажи? </h3>
          <div class="content-edit-btn" @click="detailArticle=!detailArticle">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <!-- modal -->
        <detailArticleModal v-if="detailArticle"  @close="detailArticle= false"/>
        <!-- modal end-->

        <div class="article-source-line">
          <span class="source-line-item">19 янв. 2018 г.</span>
          <span class="source-line-item cnt-none">Альберт Эйнштейн</span>
        </div>

        <div class="content-text-wrap">
          <p>
            Существуют разные техники продаж и переговоров. Но можно назвать 4 главные ошибки в&nbsp;навыках
            менеджеров, которые существенно тормозят закрытие сделки и которые надо исключить во время обучения.
          </p>
          <p>
            <img src="./components/images/article2.jpeg" alt="">
          </p>
          <p><strong>ОШИБКА № 1</strong></p>
          <p>
            Менеджеры не умеют формировать потребность в продукте. Не используют технику СПИН продажи. Техника
            СПИН — это правильные вопросы, заданные вовремя клиенту, и контроль прохождения 5 важных стадий
            в переговорном процессе, чтобы привести клиента к покупке.
          </p>

          <p>
            Менеджеры не умеют формировать потребность в продукте. Не используют технику СПИН продажи. Техника
            СПИН — это правильные вопросы,  <a href="#">Ссылка</a>
          </p>

          <h1>Заголовок 1</h1>
          <h2>Заголовок 2</h2>
          <h3>Заголовок 3</h3>
          <h4>Заголовок 4</h4>
          <h5>Заголовок 5</h5>
          <h6>Заголовок 6</h6>

          <table>
            <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            </tbody>
          </table>

          <p>
            <strong>Проследите, чтобы во время обучения тренер уделил внимание следующим навыкам.</strong>
          </p>

          <blockquote>Свойство продукта + фраза перехода + выгода = понятный для клиента язык</blockquote>

          <ul>
              <li>Обучение менеджеров, как торговаться,</li>
              <li>Обучение менеджеров не отступать после первого же отказа</li>
              <li>Обучение менеджеров получать уступку за уступку</li>
              <li>Обучение менеджеров делать допродажи и смежные продажи.</li>
          </ul>

          <i>Просто текст курсивом</i>
        </div>

        <div class="article-footer">
          <div class="article-footer-tags">
             <span class="tag-item">
                <span class="icon-list"><i class="fas fa-list-ul"></i></span>
                <span>брендинг</span>
            </span>
            <span class="tag-item">
                <span>обучение менеджеров</span>
            </span>
          </div>
          <div class="article-footer-pin">
            <div class="pin-item">
              <i class="far fa-comments"></i>
            </div>
            <div class="pin-item like-btn">
              <i class="fas fa-heart"></i>
              <div class="like-num">2</div>
            </div>
          </div>
        </div>

      </div>

    </div>

      <div class="grid-items-wrap">

        <div class="grid-item">

          <div class="grid-item_row">

            <div class="visual-edit">
              <div class="visual-edit_item">
                <input type="checkbox" class="checkbox" id="checkbox" />
                <label for="checkbox"></label>
              </div>
              <div class="visual-edit_item">
                <div class="visual-artc-img" :style="{ backgroundImage: 'url(' + require('@/components/images/article.jpg') + ')' }">

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
                    Всем привет!&nbsp;Короткая видео инструкция с обзором возможностей по добавлению контента в вашу базу знаний.&nbsp;
                    SmartPortal позволяет добавлять на регулярной основе всеми сотрудниками нужный для компании на
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
                <input type="checkbox" class="checkbox" id="checkbox2" />
                <label for="checkbox2"></label>
              </div>
              <div class="visual-edit_item">
                <div class="visual-artc-img" :style="{ backgroundImage: 'url(' + require('@/components/images/article.jpg') + ')' }">

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
                  Всем привет!&nbsp;Короткая видео инструкция с обзором возможностей по добавлению контента в вашу базу знаний.&nbsp;
                  SmartPortal позволяет добавлять на регулярной основе всеми сотрудниками нужный для компании на
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
                <div class="visual-artc-img" :style="{ backgroundImage: 'url(' + require('@/components/images/article.jpg') + ')' }">

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
                  Всем привет!&nbsp;Короткая видео инструкция с обзором возможностей по добавлению контента в вашу базу знаний.&nbsp;
                  SmartPortal позволяет добавлять на регулярной основе всеми сотрудниками нужный для компании на
                </div>

              </div>

            </div>

          </div>

          <div class="grid-item_edit">
            <i class="fas fa-ellipsis-h"></i>
          </div>

        </div>

      </div>

    <router-view/>

    </div>


    <Sidebar/>

    <div class="fixed-add-btn">
        <i class="fas fa-plus"></i>
    </div>

  </div>
</template>
<script>
import Top from './components/common/header'
import Content from './components/pages/section'
import Sidebar from './components/common/Sidebar'
import detailArticleModal from './components/common/modals/detailArticleModal';
/* import store from './store' */
export default {
  name: 'App',
  components: {
    Top,
    Content,
    Sidebar,
    detailArticleModal
  },
  data () {
    return {
      detailArticle: false
    }
  },
  methods: {
    /*GetElements () {
      let self = store
      GetElements(null, function (data) {
        self.commit('setElements', data)
      })
    },
    GetSections () {
      let self = store
      GetSections(null, function (data) {
        self.commit('setSections', data)
      })
    },
    GetUsers () {
      let self = store
      GetUsers(null, function (data) {
        self.commit('setUsers', data)
      })
    },
    GetCurrentUser () {
      let self = store
      GetCurrentUser(null, function (data) {
        self.commit('currentUser', data)
      })
    }*/

    detailArticleModalMethod (event) {
      this.detailArticle = !this.detailArticle
      console.log(event)
      console.log(event.currentTarget)
    },
  },
  mounted () {
    console.log('mounted app.vue')
    console.log('mounted app.vue')
    console.log('mounted app.vue')
    console.log('mounted app.vue')
    this.$store.dispatch('installEntity')
    this.$store.dispatch('setElements')
    this.$store.dispatch('setSections')
    this.$router.push({ path: `/` })
  }
}

</script>

<style>
  @import './components/css/all.css';
  @import './components/css/fontawesome.css';
  @import './components/css/knowledgebase.css';

  .article{
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 5px;
    box-shadow: 0 3px 16px rgba(158,157,163,.08);
    margin-bottom: 28px;
    background-color: #fff;
    overflow: hidden;
  }

  .article-cover{
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 210px;
    overflow: hidden;
    position: relative;
  }

  .article-cover img{
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

  .article-content{
    padding: 24px;
    display: inline-block;
    box-sizing: border-box;
    font-family: "ProximaNova-Regular";
    font-size: 14px;
    width: 100%;
  }

  .content-title{
    position: relative;
    padding-right:  50px;
    margin-bottom: 10px;
  }

  .content-edit-btn{
    width:  40px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size:  20px;
    color: #9aa5ab;
    cursor: pointer;
    transition: color ease 0.3s;
  }

  .content-edit-btn.active,
  .content-edit-btn:hover{
    color: #556066;
  }

  .content-title .content-edit-btn{
    position: absolute;
    right: 10px;
    top:  0px;
  }

  .content-title h3{
    font-size: 26px;
    color: #333;
    line-height: 30px;
    font-family: "ProximaNova-Bold";
    margin:  0;
  }

  .source-line-item{
    position: relative;
    padding: 0 20px 0 0;
    color: #9aa5ab;
    font-size: 14px;
    display: inline-block;
  }

  .source-line-item:after{
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

  .cnt-none.source-line-item:after{
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

  .content-text-wrap a:hover{
    text-decoration: none;
  }

  .article .content-text-wrap ol{
    list-style-position: inside;
    counter-reset: item;
    list-style-type: none;
  }

  .article .content-text-wrap ol li:before{
    content: counter(item) ". ";
    left: 0;
    top: 0;
    font-weight: 700;
    counter-increment: item;
    position: absolute;
    z-index: 1;
  }

  .article .content-text-wrap ol,
  .article .content-text-wrap ul{
    padding-left: 0;
  }

  .article .content-text-wrap ol li,
  .article .content-text-wrap ul li{
    position: relative;
    padding-left: 26px;
    margin-bottom: 7px;
  }

  .article .content-text-wrap  ul {
    padding-left: 20px;
  }

  .article .content-text-wrap  ul li {
    padding-left: 7px;
  }

  .article .content-text-wrap table {
    width: 100%;
    border-collapse: collapse;
    empty-cells: show;
    margin-bottom: 16px;
  }

  .article .content-text-wrap table td,
  .article .content-text-wrap table th{
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
    border-left: 1px solid rgba(0,0,0,.1);
    margin-left: 25px;
  }

  .article .content-text-wrap strong,
  .article .content-text-wrap b{
    font-family: "ProximaNova-Bold";
    letter-spacing: -.5px;
    font-weight: normal;
  }

  .article-footer{
    display: flex;
    align-items: center;
  }

  .article-footer .article-footer-tags{
    width:  calc(100% - 100px);
  }

  .article-footer-tags .tag-item{
    margin-right:  4px;
  }

  .article-footer .article-footer-pin{
    width:  100px;
    text-align: right;
    margin-bottom: 4px;
  }

  .pin-item{
    display: inline-block;
    width:  30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size:  18px;
    color: #979797;
    cursor: pointer;
    margin:  0 4px;
    transition: color ease 0.3s;
  }

  .pin-item:hover{
    color: #556066;
  }

  .pin-item.like-btn{
    color: #f15f5e!important;
    position: relative;
  }

  .pin-item.like-btn .like-num{
    position: absolute;
    right: -4px;
    top:  50%;
    font-size: 14px;
    color: #9aa5ab;
    top: 50%;
    transform: translateY(-50%);
  }

  .article-collapse{
    text-align: center;
    margin-bottom: 17px;
    margin-top: -8px;
    width: 100%;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }

  .article-collapse:before{
    content: "";
    display: block;
    position: absolute;
    top: 16px;
    left: 0px;
    right: 0px;
    border-top: 1px solid #f7f7f7;
    z-index: 1;
  }

  .artc-collapse-btn{
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
    outline: none!important;
  }

  .fixed-add-btn{
    box-shadow: 0 0 30px rgba(158,157,163,.5);
    margin: 0 7.5px;
    position: fixed;
    right: 70px;
    bottom: 30px;
    z-index: 10;
    width: 55px;
    height: 55px;
    line-height: 58px;
    font-size:  18px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    background-color: #36b5df;
    transition: all ease 0.3s;
    text-decoration: none!important;
    outline: none!important;
    cursor: pointer;
  }

  .fixed-add-btn:hover{
    background-color: #56c1e4;
  }

  .empty-articles{
    text-align: center;
    padding:  40px;
  }

  .empty-articles img{
    display: block;
    max-width: 120px;
    margin: 50px auto;
    opacity: 0.3;
  }

  .empty-articles .text{
    font-size: 16px;
    font-family: "ProximaNova-Semibold";
    color: #c4c7cc;
    line-height: 21px;
    flex: 1 1 100%;
    text-align: center;
    margin: 0 0 32px;
  }

  /* -------grid list css start------ */

  .grid-item{
    padding: 16px 60px 18px 15px;
    border: 1px solid #ecf2f5;
    background-color: #fff;
    overflow: hidden;
    position: relative;
  }

  .grid-items-wrap .grid-item{
    margin-bottom: -1px;
  }

  .grid-item_row{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .visual-edit{
    width:  80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .visual-edit input[type="checkbox"]{
    margin-top:  2px;
    cursor: pointer;
  }

  .visual-edit .visual-edit_item{
    width:  32px;
    height: 32px;
    line-height:  32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .visual-artc-img{
    width:  32px;
    height: 32px;
    overflow: hidden;
    background-color: #d8f1ec;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
  }

  .visual-artc-img img{
    max-width: 100%;

  }

  .visual-text{
    width: calc(100% - 80px);
    padding-left:  15px;
  }

  .visual-text_title{
    font-size: 16px;
    color: #556066;
    text-align: left;
    font-family: "ProximaNova-Semibold";
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
    margin-bottom: 5px;
  }

  .visual-text_title a{
    color: #556066;
    text-decoration: none!important;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
    white-space: nowrap;
  }

  .post-favicon{
    display: inline-block;
    width: 20px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #56c1e4;
    font-size: 16px;
  }

  .visual-post-text_edit{
    display: flex;
    align-items: center;
  }

  .visual-post-text_edit .visual-post-text_edit_tags{
    padding-left: 10px;
    white-space: nowrap;
  }

  .visual-post-text_edit_tags .tag-item{
    margin-bottom: 0;
    margin-right: 1px;
  }

  .visual-post-text_edit_prev{
    color: #afbcc2;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 15px;
    display: inline-block;
    font-family: "ProximaNova-Regular";
  }

  .grid-item_edit{
    width: 36px;
    line-height: 36px;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
    color: #9aa5ab;
  }

  .grid-item_edit:hover{
    color: #556066;
  }

  .grid-item .grid-item_edit{
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -18px;
  }

  .grid-item:hover{
    background-color: #f6f9fb;
  }

  .grid-item.active{
    background-color: #f6f9fb;
    border-left: 2px solid #36b5df;
  }
  /* -------grid list css end------ */

</style>
