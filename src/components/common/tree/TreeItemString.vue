<template>
    <div class="cat-nav_list-item_link">
        <router-link :to="'/detailItem/'+ section.CODE" class="link_text"><span>{{ section.NAME }}</span></router-link>
        <div class="icon_sidebar_block">
              <span class="icon_sidebar icon_pencil" @click="editCatModalMethod">
                <i class="fas fa-pencil-alt"></i>
              </span>
            <span class="icon_sidebar icon_menu ">
                <i class="fas fa-ellipsis-v"></i>
              </span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'treeItemString',
  props: {
    section: {}
  },
  methods: {
    editCatModalMethod () {
      let topY = ((Math.trunc(event.pageY / 36)) * 36 - 63) + 'px'
      this.$store.commit('openModal',
        {
          openModal: 'EditCatModal',
          modalData: {
            element: this.section,
            top: topY
          }
        })
    }
  }
}
</script>
<style scoped>

    .cat-nav_list-item_link > a{
        display: block;
        color: #556066;
        font-family: "ProximaNova-Light";
        font-size: 16px;
        text-decoration: none;
        line-height: 36px;
        padding: 0 16px;
        padding-right: 30px;
        position: relative;
        border-radius: 2px;
    }

    .cat-nav_list-item_link a:hover {
        background-color: #ebf1f4;
    }

    .cat-nav_list-item_link a:hover:before {
        content: "";
        background-color: transparent;
    }

    .cat-nav_list-item_link a:hover:before {
        content: "";
        position: absolute;
        left: -100%;
        top: 0;
        right: 0;
        bottom: 0;
        max-width: 246px;
        min-width: 246px;
        background-color: #ebf1f4;
        z-index: 1;
    }

    .cat-nav_list-item.open .tree-caret i:before {
        content: "\f0d7";
    }

    .cat-nav_list-item_link .icon_sidebar_block {
        position: absolute;
        right: 5px;
        top: 0;
        opacity: 0;
    }

    .cat-nav_list-item_link:hover .icon_sidebar_block {
        opacity: 1;
    }

    .icon_sidebar {
        width: 18px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: #9aa5ab;
        z-index: 3;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        transition: color ease 0.3s;
    }

    .icon_menu:hover {
        cursor: move;
    }

    .icon_sidebar:hover {
        color: #556066;
    }

</style>
