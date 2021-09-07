<template>
  <div class="about">
    <div class="photo">
      <Loader 
        v-if="imageLoading" 
        absolute />
      <!--<img-->
      <!--  src="~/assets/logo.png"-->
      <!--  :alt="name" />-->
      <img
        :src="image"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from "~/components/Loader";

export default {
  components: {
    Loader
  },
  data() {
    return {
      imageLoading: true
    }
  },
  computed: { // computed 에 mapState 를 직접 할당하면 다른 computed 를 사용하기 어려워짐. 따라서 ...(전개연산자)를 통해 computed 안쪽에 선언
    ...mapState('about', [
      'image',
      'name',
      'email',
      'phone'
    ]),
    // image() {
    //   return this.$store.state.about.image
    // },
    // name() {
    //   return this.$store.state.about.name
    // },
    // email() {
    //   return this.$store.state.about.email
    // },
    // phone() {
    //   return this.$store.state.about.phone
    // }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: relative;
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>