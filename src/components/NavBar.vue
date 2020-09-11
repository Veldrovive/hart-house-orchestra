<template>
  <nav id='navContainer' :style='styles'>
    <div class='blueLine'></div>
    <div class='greyLine'></div>
    <div class='navBar'>
      <ul id='nav'>
        <li><router-link id='navHome' to='home'><b>Home</b></router-link></li>
        <li><router-link id='navConcerts' to='concerts'><b>Concerts</b></router-link></li>
        <li><router-link id='navMembership' to='members'><b>Membership</b></router-link></li>
        <li><router-link id='navFaq' to='faq'><b>FAQ</b></router-link></li>
        <li><router-link id='navContact' to='contact'><b>Contact</b></router-link></li>
        <li><a id='navListserv' href='https://bit.ly/chamberstrings' target='_blank'><b>Sign up for our
            LISTSERV!</b></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['fixed'],
  computed: {
    styles () {
      if (this.fixed || this.fixed === undefined) {
        return {
          position: 'fixed',
          top: '0',
          'z-index': 1
        }
      }
      return {}
    }
  }
}
</script>

<style lang='scss' scoped>
#navContainer {
  width: 100%;
  .blueLine {
    width:100%;
    height: 16px;
    background-color:#002a5c;
  }

  .greyLine {
    width:100%;
    height: 4px;
    background-color:#555555;
  }

  .navBar {
    background-color:#111;
    opacity: 0.95;
      filter: alpha(opacity=95);
      -moz-opacity:0.95;
      -khtml-opacity:0.95;
    width: 100%;
    height: auto;
    text-align: center;

    #nav {
      margin: 0;
      padding: 0;
      display: inline-table;

      li {
        display: inline-flex;
        padding:0;
        margin:0;
      }

      a {
        color: #fff;
        font-size: 26px;
        font-family: "edmondsans", Helvetica, Arial, sans-serif;
        padding: 16px;
        text-align: center;

        &:visited {
          color: #fff;
        }
      }
    }
  }
}
</style>
