<template>
  <div>
    <ul class="is_root_path bx-disk-folder-container bx-disk-parent bx-disk-close" >
      <li  class="bx-disk-folder_item" v-for="section in sections" :key="'sidebarsec'+section.ID" :id="section.ID">
        <div class="bx-disk-folder-block">
          <div class="bx-disk-wf-arrow">
            <span v-show="getCountSections(section.ID)>0" @click="show" :id="section.ID"></span>
            <TreeItems v-if="showChildren === section.ID" :SECTION_ID="section.ID"></TreeItems>
          </div>
          <div class="bx-disk-wf-folder-icon"><span></span></div>
          <div class="bx-disk-wf-folder-name"><span><router-link :to="'/section/'+ section.CODE">{{ section.NAME }}</router-link></span></div>
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
export default {
  name: 'TreeItems',
  data () {
    return {
      showChildren: false,
      childSection: ''
    }
  },
  props: {
    SECTION_ID: {}

  },
  computed: {
    sections () {
      return this.$store.getters.getSectionsByParentID(this.SECTION_ID)
    }
  },
  methods: {
    getSections (SECTION_ID) {
      return this.$store.getters.getSectionsByParentID(SECTION_ID)
    },
    getCountSections (SECTION_ID) {
      return this.$store.getters.getCountSection(SECTION_ID)
    },
    show (event) {
      this.showChildren = event.currentTarget.id
      this.childSection = this.$store.getters.getSectionsByParentID(event.currentTarget.id)
    }
  }
}
</script>
<style scoped>
    aside {
        width: 200px;
        float: right;
    }

    .bx-disk-container.posr > table {
        table-layout: fixed;
    }

    body {
        font-family: "RobotoRegular", sans-serif !important;
        color: #38464f !important;
    }

    body {
        color: #000;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        width: auto;
        margin: 0;
        padding: 0;
    }

    body {
        /* background: #0c588d url(pattern-presents.svg) 0 0 repeat; */
    }

    html {
        height: 100%;
        width: 100%;
    }

    :root {
        --ui-btn-size-xs: 26px;
        --ui-btn-size-sm: 31px;
        --ui-btn-size-md: 39px;
        --ui-btn-size-lg: 47px;
        --ui-btn-inner-color-dark: #535c69;
        --ui-btn-inner-color-light: #fff;
        --ui-btn-bg-default: #868d95;
        --ui-btn-bg-default-hover: #5b6573;
        --ui-btn-bg-default-active: #3b506e;
        --ui-btn-bg-success: #bbed21;
        --ui-btn-bg-success-hover: #d2f95f;
        --ui-btn-bg-success-active: #b2e232;
        --ui-btn-bg-success-light: #e1f0b1;
        --ui-btn-bg-success-light-hover: #eaf5c5;
        --ui-btn-bg-success-light-active: #d3e59a;
        --ui-btn-bg-danger: #f1361a;
        --ui-btn-bg-danger-hover: #cc1c00;
        --ui-btn-bg-danger-active: #d24430;
        --ui-btn-bg-danger-light: #ffccca;
        --ui-btn-bg-danger-light-hover: #ffdcdb;
        --ui-btn-bg-danger-light-active: #f2b6b3;
        --ui-btn-bg-primary: #3bc8f5;
        --ui-btn-bg-primary-hover: #3eddff;
        --ui-btn-bg-primary-active: #12b1e3;
        --ui-btn-bg-secondary: #c5e7f4;
        --ui-btn-bg-secondary-hover: #d1eef9;
        --ui-btn-bg-secondary-active: #aee0f2;
        --ui-btn-bg-light: transparent;
        --ui-btn-bg-light-hover: #f6f8f9;
        --ui-btn-bg-light-active: #d6f1fb;
        --ui-btn-icon-color: black;
    }

    li.bx-disk-folder-container {
        overflow: hidden;
        height: 100%;
        margin-bottom: 10px;
        padding: 0;
    }
    ul.bx-disk-folder-container {
      margin: 20px 0;
      padding: 0;
    }
    ul.bx-disk-folder-container  ul.bx-disk-folder-container {
      padding-left: 30px;
      margin:10px 0;
    }

    .bx-disk-folder-container {
      list-style: none;
    }
    .bx-disk-folder-block {
      display: flex;
    }
    li.bx-disk-folder_item{
      margin-bottom: 10px;
      font-size: 22px;
    }

    div.bx-disk-folder-container {
        width: 100%;
        -webkit-transition: background .2s ease;
        -moz-transition: background .2s ease;
        -ms-transition: background .2s ease;
        -o-transition: background .2s ease;
        transition: background .2s ease;
        display:flex;
    }

    div.bx-disk-folder-container table {
        width: 100%;
        max-width: 500px;
        table-layout: fixed;
    }

    .bx-disk-wf-arrow {
        width: 18px !important;
    }

    .bx-disk-wf-folder-icon {
        width: 18px !important;
    }

    .bx-disk-wf-folder-name {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 13px;
        cursor: pointer;
        text-align: left;
        color: #535b69;
    }

    div.bx-disk-folder-container td {
        height: 24px;
        vertical-align: middle;
    }

    .bx-disk-wf-folder-name span {
        display: block;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        max-width: 500px;
        padding-left: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
    }

    a {
        color: #2067b0;
        text-decoration: none;
        -webkit-transition: border-bottom-color .2s linear;
        transition: border-bottom-color .2s linear;
    }

    .bx-disk-wf-folder-icon span {
        display: block;
        width: 16px;
        height: 16px;
        background: transparent url(../images/icons_files2.png) no-repeat -72px 0;
    }

    .bx-disk-wf-arrow > span {
        display: block;
        width: 17px;
        height: 17px;
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        -ms-transition: all .2s ease;
        -o-transition: all .2s ease;
        transition: all .2s ease;
        opacity: 0.8;
        border-radius: 50%;
        background: url(../images/sprite.png) no-repeat 5px -89px;
    }

    li.bx-disk-folder-container.bx-disk-close > div .bx-disk-wf-arrow span {
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        transform: rotate(-90deg);
    }
</style>
