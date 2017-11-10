<template>
  <div class="item">
    <div class="content tip">
      <p class="top">
        <svg class="icon" aria-hidden="true">
          <use v-bind:xlink:href="'#icon-'+icons[4]"></use>
        </svg>
      </p>
      <p class="text">{{textContent}}</p>
    </div>
    <div class="content" v-for="(work,index) in projects">
      <!--{{work}}-->
      <h2>{{title.zero}} {{index+1}}
        <i class="el-icon-remove" v-on:click='removeProject(index)'></i>
        <i class="el-icon-circle-plus" v-on:click="addProject"></i>
      </h2>
      <div class="itemEditor">
        <el-form>
          <el-form-item v-bind:label="title.one">
            <el-input  v-model='work[keys[0]]'></el-input>
          </el-form-item>
          <el-form-item v-bind:label="title.two">
            <el-input  v-model='work[keys[1]]'></el-input>
          </el-form-item>
          <el-form-item v-bind:label="title.three">
            <el-input  v-model='work[keys[2]]'></el-input>
          </el-form-item>
          <el-form-item v-bind:label="title.four">
            <el-date-picker
              v-model="work[keys[3]]"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item v-bind:label="title.five" class="width100">
            <el-input
              type="textarea"
              :rows="3"
              v-model="work[keys[4]]"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/arrayEditor.scss'
  export default{
//    props:["items",'title','textContent','icons'],
    computed:{
      keys(){
        return Object.keys(this.$store.state.resume.projects[0]);
      },
      projects:{
        get(){
          return this.$store.state.resume.projects
        }
      },
      icons:{
        get(){
          return this.$store.state.icons
        }
      }
    },
    data(){
      return {
        title:{
          zero:'项目',one:'预览地址',two:'负责版块',three:'团队定位',four:'日期',five:'总结'
        },
        textContent:'主要填写在线项目预览、负责模块、团队定位、项目时长，以及在本项目里面的收获与体会'
      }
    },
    methods:{
      addProject(){
        const empty={}
        this.keys.map(function(value,index){
          empty[value]=''
        })
        let obj={}
        obj["projects"]=empty
        return this.$store.commit('addItem', obj)
      },
      removeProject(index){
        let obj={}
        obj["projects"]=index
        return this.$store.commit("removeItem",obj)
      }
    }
  }
</script>

<style lang="scss">

</style>
