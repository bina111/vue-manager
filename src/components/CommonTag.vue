<template>
  <div class="tabs">
    <el-tag
        v-for="(tag,index) in tags"
        size="small"
        :key="tag.name"
        :closable = "tag.name !== 'home'"
        :effect="$route.name === tag.name ? 'dark': 'plain'"
        @click="changeMenu(tag)"
        @close="handleClose(tag,index)">
        {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Tag',
    computed:{
        ...mapState({
            tags: state=> state.tab.tableList
        })
    },
    methods:{
        ...mapMutations({
            close: 'closeMenu'
        }),
        changeMenu(tag){
            this.$router.push({
                name:tag.name
            })
        },
        handleClose(tag,index){
            const length = this.tags.length - 1;
            this.close(tag);
            if(tag.name !== this.$route.name){
                return;
            }
            if(index === length){
                this.$router.push({
                    name:this.tags[index-1].name
                })
            }
            else{
                this.$router.push({
                    name:this.tags[index].name
                })
            }
        }
    }
}
</script>

<style lang="css">
    .tabs{
        margin-top: 10px;
    }
    .el-tag{
        cursor: pointer;
    }
</style>