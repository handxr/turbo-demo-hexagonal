<script setup lang="ts">
import {POST_API} from './injections'
import {PostAPI, IPost} from 'domain'
import { inject, onMounted } from 'vue';

let postAPI: PostAPI;


onMounted(() => {
  console.log(postAPI);
});

</script>


<template>
  <h1>Hello World</h1>
</template>


