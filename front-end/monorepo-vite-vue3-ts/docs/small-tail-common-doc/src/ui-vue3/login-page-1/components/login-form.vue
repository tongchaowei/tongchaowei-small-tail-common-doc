<script setup lang="ts">
/**
 * 组件参数
 */
withDefaults(
  defineProps<{
    // 表单标题
    title?: string;
    // 表单标签宽度
    labelWidth?: number | string | "auto";
    // 按钮文本
    btnText?: string;
  }>(),
  {
    title: "登录",
    labelWidth: 'auto',
    btnText: "登录",
  }
)
</script>

<template>
  <div class="login-form box-bg box-shadow">
    <h1 class="login-form__title">
      {{ title }}
    </h1>
    <div class="login-form__form">
      <el-form :label-width="labelWidth" label-position="left">
        <slot></slot>
        <el-form-item>
          <n-button type="primary" block round attr-type="submit">{{ btnText }}</n-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  width: 95%;
  max-width: 425px;
  padding: 2rem 0;
  margin: 0 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-form__title {
    width: fit-content;
    margin-bottom: 0.5rem;
    background-image: linear-gradient(to bottom right, #92fe9d, #18A058);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.5;
  }
}
</style>
