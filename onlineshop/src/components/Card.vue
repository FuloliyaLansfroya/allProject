<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    />
    <div style="padding: 14px;">
      <el-link type="primary">{{ value.title }}</el-link>
      <div class="bottom clearfix">
        <p>{{ value.introduce }}</p>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  props: {
    value: Object
  }
};
</script>
<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.card {
  height: 100%;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
