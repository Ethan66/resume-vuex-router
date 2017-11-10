<template>
  <div class="item">
    <div class="content tip">
      <p class="top">
        <svg class="icon" aria-hidden="true">
          <use v-bind:xlink:href="'#icon-'+icons[2]"></use>
        </svg>
      </p>
      <p class="text">{{textContent}}</p>
    </div>
    <div class="content" v-for="(work,index) in education">
      <!--{{work}}-->
      <h2>{{title.zero}} {{index+1}}
        <i class="el-icon-remove" v-on:click='removeEducation(index)'></i>
        <i class="el-icon-circle-plus" v-on:click="addEducation"></i>
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
        return Object.keys(this.$store.state.resume.education[0]);
      },
      education:{
        get(){
          return this.$store.state.resume.education
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
          zero:'学校',one:'学校名称',two:'学位',three:'专业',four:'日期',five:'在校荣誉'
        },
        textContent:'主要填写学校名，所学专业，学位以及在校荣誉'
      }
    },
    methods:{
      addEducation(){
        const empty={}
        this.keys.map(function(value,index){
          empty[value]=''
        })
        let obj={}
        obj["education"]=empty
        return this.$store.commit('addItem', obj)
      },
      removeEducation(index){
        let obj={}
        obj["education"]=index
        return this.$store.commit("removeItem",obj)
      }
    }
  }
</script>

<style lang="scss">

</style>
