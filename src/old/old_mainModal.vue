<template>
  <transition name="slide-fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="side-panel side-panel-overlay side-panel-overlay-open">
            <div class="side-panel side-panel-container side-panel-container-open">
              <span class="side-panel-close" title="Закрыть"><span class="side-panel-close-inner"></span></span>
              <div class="side-panel-content-container">
                <div id="kb-iframe-popup-scope"
                     class="template-bitrix24 kb-iframe-popup no-paddings kb-detail-page kb-iframe-popup-side-slider">
                  <div class="kb-iframe-workarea kb-iframe-workarea-own-padding" id="kb-content-outer">
                    <div class="side-panel-iframe" id="iframe_plov3nanc5">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style>

  body {
    font-family: "RobotoRegular", sans-serif !important;
    color: #38464f !important;
  }

  .btn-kb-delete .menu-popup-item-icon {
    display: none !important;
  }

  .btn-kb-delete .menu-popup-item-text {
    margin-left: 5px;
  }

  .uf_kb_files .adm-input {
    width: 50%;
  }

  .title-confrim-delete-kb {
    padding: 26px 71px 26px 71px;
    background: #eef2f4;
    text-align: center;
  }

  .kb-short-link {
    width: 300px;
    height: 50px;
  }

  .kb-short-link input {
    max-width: 270px;
    height: 30px;
    margin-top: 0;
    padding: 0 25px 0 4px;
    border: 1px solid;
    border-color: #b9bcbe #bdc1c3 #c1c5c8 #babec0;
    -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    -webkit-border-radius: 2px;
    border-radius: 2px;
    outline: none;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .kb-edit-input {
    width: 100%;
    height: 35px;
    margin-top: 0;
    padding: 8px 10px;
    border: 1px solid;
    border-color: #b9bcbe #bdc1c3 #c1c5c8 #babec0;
    -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    -webkit-border-radius: 2px;
    border-radius: 2px;
    outline: none;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  }

  .kb-name-sort {
    font-size: 16px;
    line-height: 26px;
    width: 450px;
    float: left;
    margin-top: -28px;
  }

  .popup-window-buttons {
    padding: 10px 0 0px !important;
  }

  .popup-window-titlebar {
    text-align: center;
  }

  .popup-window-titlebar span {
    font-size: 18px;
  }

  .editormd-preview-container.hidden {
    display: none;
  }

  .kb-section {
    float: left;
    padding-left: 55px;
    font-size: 16px;
    line-height: 26px;
    margin-top: -27px;
    width: 459px;
  }

  .kb-section select {
    width: 100%;
    height: 35px;
    font-size: 14px;
    margin-top: 0;
    border: 1px solid;
    border-color: #b9bcbe #bdc1c3 #c1c5c8 #babec0;
    -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.14);
    -webkit-border-radius: 2px;
    border-radius: 2px;
    outline: none;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  input.kb-upload-file {
    width: 100%;
    height: 30px;
    padding-top: 6px;
  }

  #bx-admin-prefix {
    z-index: 1101 !important;
    font-size: 14px;
    font-weight: bold;
    padding-top: 10px;
  }

  #bx-admin-prefix .adm-input-file-top-shift {
    padding: 4px 11px 14px 0px !important;
  }

  #bx-admin-prefix img {
    display: none !important;
  }

  .reference-link {
    display: none;
  }

  #bx-admin-prefix .adm-input-cont-bordered {
    float: left;
    padding-right: 15px !important;
  }

  .adm-input-file-control {
    overflow: hidden;
    max-width: 800px;
    padding-bottom: 2px;
  }

  .delete-confrim-kb {
    background: #d73b41 !important;
    color: #fff !important;
    box-shadow: none !important;
  }

  .public_kb_title h1 {
    font-size: 2em;
    line-height: 1.2;
    position: relative;
    font-weight: 700;
    padding: 20px;
    border-bottom: 1px solid #eee;
  }

  .copy_link {
    text-align: center;
    font-size: 14px;
  }

  .uf_kb_files .adm-input-cont-bordered {
    width: 100%;
    padding-top: 7px !important;
  }

  /*
  .tree_container .table_of_content > .bx-disk-wood-folder{
     padding-left: 0px;
  }
  */
  div[data-id^="kbdisabled_item"] a {
    pointer-events: none;
    cursor: default;
    color: #cecece !important;
  }

  div[data-id^="kbdisabled_item"] a:after {
    content: "\f023";
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 21px;
    position: relative;
    top: 3px;
  }

  .disable-add {
    pointer-events: none;
    cursor: default;
    color: #cecece !important;
  }

  .disable-edit {
    pointer-events: none;
    cursor: default;
    color: #cecece !important;
  }

  .disable-delete {
    pointer-events: none;
    cursor: default;
    color: #cecece !important;
  }

  .disable-delete:after {
    content: "\f023";
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 14px;
    position: relative;
    top: 1px;
    left: 3px;
  }

  .disable-edit:after {
    content: "\f023";
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 14px;
    position: relative;
    top: 1px;
    left: 3px;
  }

  .disable-add:after {
    content: "\f023";
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 14px;
    position: relative;
    top: 1px;
    left: 3px;
  }

  .disable-delete .menu-popup-item-text {
    color: #cecece !important;
  }

  .editormd-preview-container ul,
  .editormd-preview-container ol {
    margin-bottom: 20px;
  }

  .editormd-preview-container.markdown-body table td,
  .editormd-preview-container.markdown-body table th {
    max-width: 250px;
  }

  .markdown-body table td, .markdown-body table th {
    padding-left: 10px;
    padding-right: 10px;
  }

  .bx-disk-container.posr > table {
    table-layout: fixed;
  }

  .first_td {
    vertical-align: top;
  }

  /* GRID */

  .main-grid-cell-left {
    text-align: left;
    vertical-align: middle !important;
  }

  .main-grid-action-container, .main-grid-checkbox-container {
    margin-top: 0px !important;
  }

  .main-grid-cell {
    vertical-align: middle !important;
  }

  .grid-mode .workarea-content-paddings {
    padding: 15px 0px 20px;
  }

  .grid-mode .bx-disk-interface-bread-crumbs {
    margin-left: 15px;
    margin-right: 15px;
    max-width: 100%;
  }

  .grid-mode .bx-disk-table-sidebar-cell {
    padding: 0px 15px 0 20px;
  }

  .grid-mode .editormd-preview-container {
    padding: 20px 20px 20px 20px;
  }

  .grid-mode .bx-disk-interface-filelist {
    padding: 0 15px 13px 15px;
  }

  .markdown-body table {
    display: table !important;
  }

  /*
   * Markdown title
   */

  .markdown-body h1 {
    font-size: 26px !important;
  }

  .markdown-body h2 {
    font-size: 22px !important;
  }

  .markdown-body h3 {
    font-size: 20px !important;
  }

  .markdown-body h4 {
    font-size: 18px !important;
  }

  .markdown-body h5 {
    font-size: 16px !important;
  }

  .markdown-body h2 span.octicon-link,
  .markdown-body h3 span.octicon-link,
  .markdown-body h4 span.octicon-link,
  .markdown-body h5 span.octicon-link {
    color: #2b2929 !important;
  }

  .title-sidebar-sections {
    font-size: 26px;
    text-align: left;

  }

  .sections-tree {
    padding-bottom: 10px;
  }

  .title-sidebar-files {
    border-top: 1px solid #edeef0;
    font-size: 26px;
    text-align: left;
    padding-top: 10px;
  }

  .files_sidebar ul {
    text-align: left;
    font-size: 14px;
    padding-left: 20px;
  }

  .files_sidebar ul li {
    text-decoration: underline;
    padding-bottom: 10px;
  }

  .files_sidebar ul li a {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    display: inline-block;
    text-decoration: underline;
  }

  .files_sidebar ul li a:hover {
    text-decoration: none;
  }

  .focus_input {
    width: 100%;
    height: 30px;
    padding: 0px;
  }

  .kb-switcher-block .feed-comments-block {
    margin: 50px 35px 0px 22px;
  }

  .make_main_section-active {
    background-position: 0 -78px;
  }

  .text_inote {
    padding: 20px 15px 20px 25px;
    margin-bottom: 15px;
    color: #616161;
    background: #FAFCFD;
    box-shadow: inset 0 0 1px 1px #e0e0e0;
    border: 1px solid #FAFCFD;
  }

  .pagetitle {
    padding: 15px 15px 20px;
  }

  .popup-window-buttons {
    padding: 10px 10px 0px !important;
  }

  .popup-window-button-accept, .popup-window-button-create {
    background: #bbed21;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #535c69;
  }

  .popup-window-button {
    display: inline-block;
    height: 39px;
    line-height: 39px;
    margin: 0 12px 0 0;
    border-radius: 2px;
    cursor: pointer;
    color: #535c69;
    font-family: "OpenSans-Bold", Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: normal;
    outline: 0;
    padding: 0 18px;
    vertical-align: middle;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: none;
    white-space: nowrap;
  }

  .kb-iframe-workarea {
    padding: 15px 0px 0px;
    background-color: #fff;
  }

  .kb-iframe-popup {
    background: #eef2f4 !important;
    padding: 0 15px 21px 21px;
  }

  .kb-iframe-content {
    padding-bottom: 15px;
    margin-bottom: 20px;
  }

  .uf_kb_files {
    padding: 20px 10px 0px 13px !important;
  }

  .kb-switcher-block {
    padding-bottom: 20px;
  }

  .print-block {
    text-align: right;
    padding-bottom: 10px;
    padding-right: 22px;
  }

  .webform-button-icon {
    display: inline-block;
    vertical-align: middle;
    width: 16px;
    height: 16px;
    background: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23828993%22%20d%3D%22M10.9549333%2C8.65814133%20C10.7131867%2C9.79457067%209.81950667%2C10.6882747%208.68312%2C10.9299507%20C6.51653333%2C11.39074%204.63442667%2C9.508024%205.09529333%2C7.34183467%20C5.31324%2C6.317524%206.34252%2C5.28813733%207.3668%2C5.07014133%20C9.53297333%2C4.60907333%2011.4158133%2C6.49137067%2010.9549333%2C8.65814133%20M15.4145333%2C6.83496533%20L13.8296133%2C6.57054%20L13.8296133%2C6.57054%20C13.7170133%2C6.11019333%2013.554%2C5.66968667%2013.3424133%2C5.25791333%20C13.33352%2C5.24058933%2013.3355867%2C5.219748%2013.3478133%2C5.20459067%20L14.3423333%2C3.97143467%20C14.5581333%2C3.70554267%2014.5483333%2C3.322992%2014.3208267%2C3.06639067%20L13.6904667%2C2.35694%20C13.4619733%2C2.10059467%2013.0830667%2C2.04638667%2012.79404%2C2.228988%20L11.4386133%2C3.08106%20L11.4386133%2C3.08106%20C10.8510133%2C2.67052%2010.18652%2C2.365788%209.47001333%2C2.18623733%20C9.45101333%2C2.181464%209.4366%2C2.165956%209.43336%2C2.14660533%20L9.17350667%2C0.584968%20C9.11785333%2C0.247566667%208.82588%2C0%208.48314667%2C0%20L7.53321333%2C0%20C7.19117333%2C0%206.8982%2C0.247566667%206.84378667%2C0.584968%20L6.58249333%2C2.147188%20C6.57925333%2C2.16649067%206.56486667%2C2.181952%206.54589333%2C2.18670267%20C5.96604%2C2.33202533%205.4214%2C2.56138267%204.92248%2C2.861248%20C4.90566667%2C2.87135467%204.88454667%2C2.87060933%204.86857333%2C2.8592%20L3.60581333%2C1.957996%20C3.32801333%2C1.75951467%202.94642667%2C1.79055333%202.70398667%2C2.03248533%20L2.03289333%2C2.70407467%20C1.79096%2C2.94651867%201.75992%2C3.32811467%201.95893333%2C3.60592933%20L2.86225333%2C4.87121733%20C2.87364%2C4.887168%202.87442667%2C4.90828667%202.86434667%2C4.92509867%20C2.5674%2C5.420164%202.34042667%2C5.96156533%202.19525333%2C6.536148%20C2.19045333%2C6.55512533%202.175%2C6.56946933%202.15572%2C6.57268267%20L0.584933333%2C6.83498933%20C0.248053333%2C6.89061733%200%2C7.18263467%200%2C7.525392%20L0%2C8.474608%20C0%2C8.81734133%200.248053333%2C9.10938267%200.584933333%2C9.16501067%20L2.15566667%2C9.42729467%20C2.17497333%2C9.43053067%202.19045333%2C9.44489867%202.19522667%2C9.46389867%20C2.31332%2C9.933%202.48153333%2C10.3817267%202.70266667%2C10.7994387%20C2.71188%2C10.816856%202.70993333%2C10.8380213%202.69754667%2C10.8533667%20L1.70793333%2C12.0790467%20C1.49288%2C12.344684%201.50190667%2C12.7274907%201.72942667%2C12.9838587%20L2.35929333%2C13.693332%20C2.5878%2C13.950144%202.96692%2C14.0033733%203.25597333%2C13.8212373%20L4.60374667%2C12.974568%20C4.62026667%2C12.9641827%204.64132%2C12.9646027%204.65748%2C12.9755467%20C5.23272%2C13.3642907%205.88164%2C13.6505573%206.57718667%2C13.8212373%20L6.57718667%2C13.8212373%20L6.84381333%2C15.4149853%20C6.89822667%2C15.7524093%207.19117333%2C16%207.53321333%2C16%20L8.48314667%2C16%20C8.82589333%2C16%209.11785333%2C15.7524333%209.17350667%2C15.4150093%20L9.4338%2C13.853068%20C9.43704%2C13.8337413%209.45145333%2C13.8182573%209.47045333%2C13.8135067%20C10.0428133%2C13.6701867%2010.5803733%2C13.44488%2011.0745867%2C13.1503013%20C11.0914%2C13.140288%2011.11244%2C13.14108%2011.1283467%2C13.1524427%20L12.44492%2C14.0927653%20C12.72224%2C14.2919693%2013.1040933%2C14.26072%2013.34628%2C14.01802%20L14.0176667%2C13.3466413%20C14.2593067%2C13.1049413%2014.2920267%2C12.7235547%2014.09136%2C12.445228%20L13.15412%2C11.1311347%20C13.1427333%2C11.115184%2013.14196%2C11.094088%2013.15204%2C11.0772987%20C13.4498667%2C10.5805587%2013.6780533%2C10.0381093%2013.8224267%2C9.46094133%20C13.8271733%2C9.44194133%2013.8426533%2C9.427528%2013.86196%2C9.42429067%20L15.4150667%2C9.16496533%20C15.7529467%2C9.10931333%2016%2C8.81729467%2016%2C8.47456133%20L16%2C7.52534533%20C15.9994933%2C7.18263467%2015.75244%2C6.89061733%2015.4145333%2C6.83496533%22/%3E%0A%3C/svg%3E%0A') center center no-repeat;
    background-size: cover;
    margin-right: 10px;
    margin-top: 3px;
  }

  .bx-disk-search-settings-btn:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: calc(100% - 2px);
    margin: 0 0 0 -3px;

  }

  .btn-kb-edit, .btn-kb-add, .btn-kb-exp, .btn-kb-history {
    color: #828993 !important;
  }

  .btn-kb-edit:hover, .btn-kb-add:hover, .btn-kb-exp:hover, .btn-kb-history:hover {
    color: #828993 !important;
    background-color: #cfd4d8 !important;
  }

  #error_box {
    border: 1px solid rgb(206, 247, 199);
    position: fixed;
    width: 284px;
    right: 20px;
    top: 20px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 1px 1px;
    border-radius: 5px;
    text-align: center;
    display: none;
    z-index: 999;
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

  #error_message {
    margin-top: 18px;
    font-weight: bold;
    font-size: 16px;
    text-shadow: 1px 1px 1px #FFFFFF;
  }

  .file-upload {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 8px 0px 8px 0px;
    height: 25px;
    background: #fff;
    border-radius: 3px;
    color: #535c69;
    text-align: center;
    box-shadow: inset 0 0 0 1px #a1a6ac;
    transition: .3s;

  }

  .file-upload:hover {
    background: #cfd4d8;
  }

  .file-upload input[type="file"] {
    display: none;
  }

  .file-upload label {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

  }

  .disabled:disabled {
    background: #464646;
    color: white;
  }

  .file-upload span {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 800;
    line-height: 24.5px;
  }

  .custom {
    width: 100%;
    font-size: 14px;
  }

  .main-title-history {
    font: 26px/26px "OpenSans-Light", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 21px 0;
    display: block;
    word-wrap: break-word;
    margin-top: 15px;
  }

  .history-line {
    font-size: 15px;
    font-family: Arial,sans-serif;
    font-weight: 500;
    padding: 15px 15px;
    background-color: white;
    border: 1px white;
    border-radius: 5px;
  }

  .overlay-exp {
    background-color: grey;
    color: white;
    opacity: 0.4;
    position: absolute;
    width: 60.9%;
    height: inherit;
    border-radius: 2px;
    margin-top: 0.05em;
    height: 33px;
    text-align: center;
    text-transform: lowercase;
    vertical-align: middle;
    line-height: 32px;
    text-shadow: 0px 2px black;
    font-family: Helvetica;
    box-shadow: inset 1px 1px 1px 1px black;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 100%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

</style>
<script>
export default {
  name: 'modalWindow'
}
</script>
