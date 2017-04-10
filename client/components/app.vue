<template>
    <div>
        <navbar></navbar>
        <div class="container">
            <hello></hello>
        </div>
    </div>
</template>

<script>
  import hello from './hello.vue';
  import navbar from './navbar.vue';

  export default {
    components:{
      hello, navbar
    }
  }
</script>