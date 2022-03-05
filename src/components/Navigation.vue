<template>
  <nav class="flex">
    <div class="branding flex">
      <img src="@/assets/file-invoice-dollar-solid.png" alt="logo" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigationComponent",
};
</script>

<style lang="scss" scoped>
nav {
  z-index: 99;
  flex-direction: row;
  background-color: $MODAL_COLOR;
  @media (min-width: 900px) {
    min-height: 100%;
    min-width: 90px;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }
}

.branding {
  border-radius: 0 20px 20px 0;
  background-color: $BRANDING_COLOR;
  justify-content: center;
  padding: 24px;
  @media (min-width: 900px) {
    width: 100%;
  }

  img {
    width: auto;
    height: 30px;
  }
}
</style>
