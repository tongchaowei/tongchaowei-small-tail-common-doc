<script setup lang="ts">
import LoginForm from "./login-form.vue"
</script>

<template>
  <div class="login-form-by-email">
    <LoginForm title="邮箱登录">
      <el-form-item label="邮箱">
        <el-input placeholder="请输入邮箱" clearable/>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input placeholder="请输入验证码" clearable/>
      </el-form-item>
    </LoginForm>
  </div>
</template>

<style scoped>

</style>
