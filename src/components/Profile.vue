<template>
  <div class="profile">
    <div class="content tip">
      <p class="top">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ren"></use>
        </svg>
      </p>
      <p class="text">主要填写名字，专业以及联系方式</p>
    </div>
    <div class="content">
      <h2>个人信息</h2>
      <el-form class="p_info">
        <div class="write">
          <el-form-item label="姓名">
            <el-input placeholder="请输入姓名" v-bind:value="profile.name" v-on:input="setProfile('name')"></el-input>
          </el-form-item>
          <el-form-item label="身高">
            <el-input placeholder="请输入身高" v-bind:value="profile.height" v-on:input="setProfile('height')"></el-input>
          </el-form-item>
          <el-form-item label="学历">
            <el-input placeholder="请输入手机号码" v-bind:value="profile.education" v-on:input="setProfile('education')"></el-input>
          </el-form-item>
          <el-form-item label="职位意向">
            <el-input placeholder="请输入职位" v-bind:value="profile.workDirection" v-on:input="setProfile('workDirection')"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input placeholder="请输入有效邮箱" v-bind:value="profile.email" v-on:input="setProfile('email')"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input placeholder="请输入手机号码" v-bind:value="profile.number" v-on:input="setProfile('number')"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input placeholder="请输入内容" v-bind:value="profile.age" v-on:input="setProfile('age')"></el-input>
          </el-form-item>
          <el-form-item label="社交网站">
            <el-input placeholder="请输入网站名称" v-bind:value="profile.website" v-on:input="setProfile('website')"></el-input>
          </el-form-item>
        </div>
        <div class="portrait">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="profile.imageUrl" :src="profile.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </el-form>
    </div>
    <div class="content">
      <h2>地址 </h2>
      <el-input
        type="textarea"
        :rows="1"
        placeholder="请输入内容" v-on:input="setProfile('address')"
      >
      </el-input>
    </div>
    <div class="content">
      <h2>个人评价</h2>
      <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容" v-on:input="setProfile('summary')"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
  export default{
//      props:['profile'],
    components:{

    },
    computed:{
      profile:{
        get(){
          return this.$store.state.resume.profile
        },
        /*set(value){
          return this.$store.commit('',value)
        }*/
      }
    },

    methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      setProfile(key){
        let obj={}
        obj[key]=event.target.value
        return this.$store.commit("editProfile",obj)
      }
    }
  }
</script>

<style lang="scss">
  .p_info{
    display: flex; justify-content: space-between; align-items: center;
    .write{
      flex: 1;
      .el-form-item{
        width: 49%; padding-right: 6%; display: inline-block; margin-bottom: 10px;
      }
      .el-input__inner{
        border: 1px solid #bfcbd9;
      }
    }
    .el-upload{
      float: right; margin-right: 10px;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #bfcbd9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-textarea__inner{
      border: 1px solid #bfcbd9;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
</style>
