<template>
   <table style="width:100%;">
     <tr>
       <td class="kb-layout-inner-inner-cont">
         <div id="workarea">
           <div id="sidebar"></div>
           <div id="workarea-content">
             <div class="workarea-content-paddings">
               <div class="kb-disk-container posr" style="position: relative;">
                 <table style="width: 100%;" cellpadding="0" cellspacing="0">
                   <tr>
                     <td>
                       <empty/>
                       <filelist/>
                       <fileView/>
                     </td>
                   </tr>
                 </table>
               </div>
               <div class="wduf-uploader area" style="display: none;">
                    <span class="kb-disk wd-fa-add-file-light">
                      <span class="wd-fa-add-file-light-text">
                        <span class="wd-fa-add-file-light-title">
                          <span class="wd-fa-add-file-light-title-text">Загрузить файл или картинку</span>
                        </span>
                        <span class="wd-fa-add-file-light-descript">Перетащить с помощью Drag'n'drop</span>
                      </span>
                    </span>
               </div>
             </div>
           </div>
         </div>
       </td>
     </tr>
  </table>
</template>

<script>
import Filelist from './Filelist'
import fileView from './FileView'
import empty from './empty'
import main from './common/mainModal'
export default {
  name: 'mainpage',
  components: {fileView, Filelist, empty, main}
}
</script>
