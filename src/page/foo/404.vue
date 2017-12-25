<!--
    @ 404
    @ author: tangyuan
    @ desc: 404页面
    @ date: 07-12-21 am
-->
<template lang="jade">
  section.fzf_container
    div.f_img_wrap
      img(src="./../../public/imgs/404.png")
      h2 Sorry, this page flew to the moon!
      span perhaps you would like to go our 
      router-link.l_link(to="/") home page
      span ?
</template>
<script>
    export default {
        name: 'f_z_f'
    }
</script>
<style lang="sass" scoped>
    @import './../../public/scss/_variables.scss';

    .fzf_container {
        width: 100%;
        min-width: $min-width;
        color: #8c8c8c;
        text-align: center;
        .f_img_wrap {
            width: 500px;
            margin: 100px auto 0;
            img {
                width: 100%;
            }
            h2 {
                font-size: 30px;
                margin: 15px 0;
            }
            a {
                text-decoration: underline;
                color: #8c8c8c;
                &:hover {
                    color: $gray;
                }
            }
        }
    }
</style>
