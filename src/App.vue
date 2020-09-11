<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
@font-face {
    font-family: 'edmondsans';
    src: url('./assets/fonts/edmondsans-medium-webfont.eot');
    src: url('./assets/fonts/edmondsans-medium-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/edmondsans-medium-webfont.woff') format('woff'),
         url('./assets/fonts/edmondsans-medium-webfont.ttf') format('truetype'),
         url('./assets/fonts/edmondsans-medium-webfont.svg#edmondsansmedium') format('svg');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'edmondsans';
    src: url('./assets/fonts/edmondsans-regular-webfont.eot');
    src: url('./assets/fonts/edmondsans-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/edmondsans-regular-webfont.woff') format('woff'),
         url('./assets/fonts/edmondsans-regular-webfont.ttf') format('truetype'),
         url('./assets/fonts/edmondsans-regular-webfont.svg#edmondsansregular') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'proxima-nova';
    src: url('./assets/fonts/proxima_nova-webfont.eot');
    src: url('./assets/fonts/proxima_nova-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/proxima_nova-webfont.woff') format('woff'),
         url('./assets/fonts/proxima_nova-webfont.ttf') format('truetype'),
         url('./assets/fonts/proxima_nova-webfont.svg#proxima-nova') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'proxima-nova';
    src: url('./assets/fonts/proxima_nova_bold-webfont.eot');
    src: url('./assets/fonts/proxima_nova_bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/proxima_nova_bold-webfont.woff') format('woff'),
         url('./assets/fonts/proxima_nova_bold-webfont.ttf') format('truetype'),
         url('./assets/fonts/proxima_nova_bold-webfont.svg#proxima-nova-bold') format('svg');
    font-weight: bold;
    font-style: normal;
}

body {
  margin: 0;

  #app {
    font-family: "proxima-nova", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    h1, h2, h3, h4, h5, h6, h7 {
      margin-left: 20px;
      margin-right: 20px;
    }

    h4 {
      font-family: "edmondsans", Helvetica, Arial, sans-serif;
      font-weight: bold;
      font-size: 13.5pt;
      text-decoration: underline;
    }

    h1 {
      font-size: 32pt;
    }

    p {
      margin-bottom: 12px;
      margin-left: 20px;
      margin-right: 20px;
      font-size: 15pt;
      color: #222;
      line-height: 130%; /* makes the body slightly more legible */
    }

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #ddd;
      margin: 10px;
      padding: 0;
    }

    .reveal {
      opacity: 0;
      filter: alpha(opacity=0);
      -moz-opacity:0;
      -khtml-opacity:0;
      width: 100%;
      height: 500px;
    }

    .sub-text {
      font-size: 13.5pt;
    }

    .text-block {
      width: 90%;
      margin: 0 auto;
      padding: 5px;
      background-color: #fff;
    }

    .center {
      margin-left: auto;
      margin-right: auto;
    }

    .new-section {
      margin-top: 30px;
      margin-right: 30px;
      margin-left: 30px;
      background: url('~@/assets/img/line_pixel6.png') repeat-x left center;
      text-align: center;
      color: #000;
      padding: 10px 0px;
      font-size: 12pt;
      span {
        padding: 0 15px;
        background-color: #fff
      }
    }

    a {
      text-decoration: none;
      color: #002a5c;

      &:visited {
        text-decoration: none;
        color: #002a5c;
      }

      &:hover {
        opacity: 0.5;
        filter: alpha(opacity=50);
        -moz-opacity:0.5;
        -khtml-opacity:0.5;
      }
    }
  }
}
</style>
