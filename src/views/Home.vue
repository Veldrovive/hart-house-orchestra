<template>
  <div class='home'>
    <BackgroundImage page='home'/>
    <div id='header' ref='headerBox'>
      <img id='welcome-image' src='@/assets/img/logo4.png'>
      <div id='divider'>
        <span><img src="@/assets/img/divider.png" /></span>
      </div>
    </div>
    <NavBar :fixed='headerStatic' ref='navbar'/>
    <div id='nav-substitute' :style='{ display : headerStatic ? "block" : "none", height: `${navbarHeight}px` }'/>
    <div id='content'>
      <div class='reveal'></div>
      <div class='text-block'>
        <h1>Hart House Chamber Strings</h1>
        <p>*<i>COVID Update:</i> We are currently in the process of planning for the 2020-2021 season and will provide
          updates as we go.</p>

        <p>The Hart House Chamber Strings is a student-run ensemble at Hart House, University of Toronto. Conducted by
          Mr. Keith Reid, the HHCS performs two concerts in the year: one in the fall and one in the spring, with a mix
          of both classical and popular repertoire.</p>
        <!-- <p>This year, we will have a booth at the Clubs Fair on Wednesday, September 4th, 2019 and a table at Explore
          Hart House on Thursday, September 12th, 2019, and our first (open) rehearsal will be on Monday, September 9th,
          2019 from 7:30 p.m. to 10 p.m.</p> -->
        <p>This year, we will be hosting a virtual Explore Hart House activity on Wednesday, September 16th from 11:30am
          to 12pm. For more information, refer to the “<a href="http://hhchamberstrings.sa.utoronto.ca/">Explore Hart House-Virtually</a>” page.</p>
        <p>Current U of T members and non-students may join the Hart House Chamber Strings. Find membership information
          on our <a href="members.html">membership</a> page.</p>
        <p>During the year, rehearsals take place from 7:30 p.m. to 10:00 p.m. This is a non-audition ensemble, and
          there are several open rehearsals in September where interested musicians are welcome to come out with their
          instrument. New members need to note that joining an orchestra requires a commitment, and that our group is
          not a drop-in orchestra.</p>
        <div id="promo-video-container">
          <iframe id="promo-video" src="https://www.youtube.com/embed/NLMrMgWv_u8" width="600" height="337"></iframe>
        </div>

        <div class="new-section">
          <span>MEET OUR MUSICAL DIRECTOR</span>
        </div>

        <div class="image-container" id="oliver">
          <img src="@/assets/img/keith.jpg" />
        </div>

        <div>
          <p class="sub-text"><b>Keith Reid</b> is very active as a conductor and educator in Toronto. He has a Master of
            Music in Orchestral Conducting from the University of Toronto and in 2006 he was the recipient of the Victor
            Feldbrill National Graduate Fellowship in Orchestral Conducting.</p>
          <p class="sub-text">As a conductor, Keith has led ensembles comprised of members of the Toronto Symphony
            Orchestra and the Windsor Symphony Orchestra. He has conducted at the University of Toronto's Walter Hall
            and MacMillan Theatre, and also at Massey Hall.</p>
          <p class="sub-text">Currently, Keith is the conductor of the Hart House Chamber Strings and is the Artistic
            Director of the Festival Wind Orchestra. Previously, he was Music Director of the Hart House Symphonic Band
            and the Hart House Summer Orchestra. He has also served as Assistant Conductor of the Cambridge Community
            Orchestra, the Kindred Spirits Orchestra, and Conductor of the Settlement Singers chamber choir at the
            University Settlement Music and Arts School.</p>
          <p class="sub-text">Keith has also been active as a music director, conductor, and performer for many musical
            theatre productions including <i>How To Succeed In Business Without Really Trying, Once On This Island, Kiss
              of the Spider Woman</i>, and <i>A Chorus Line</i>. With No Strings Theatre he has been an Associate Music
            Director in charge of the Orchestra Training program for <i>Sweeney Todd, Curtains</i>, and <i>Anne of Green
              Gables</i>.</p>
        </div>
        <ContactInfo/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BackgroundImage from '@/components/BackgroundImage'
import NavBar from '@/components/NavBar'
import ContactInfo from '@/components/ContactInfo'

export default {
  name: 'Home',
  components: {
    BackgroundImage,
    NavBar,
    ContactInfo
  },
  data: () => ({
    headerStatic: false,
    navbarHeight: 0,
    headerHeight: 0
  }),
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.handleScroll()
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.headerHeight = this.$refs.headerBox.clientHeight
      this.navbarHeight = this.$refs.navbar.$el.clientHeight
      const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      this.headerStatic = scrollTop > this.headerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .static {
    position: fixed;
    top: 0;
  }

  #header {
    background-color: #002a5c;
    #welcome-image {
      width: 100%;
      height: auto;
    }

    #divider {
      margin: 0 30px;
      text-align: center;
      color: #fff;
      padding: 10px 0;
      font-size: 14px;
      background: #002a5c url('~@/assets/img/line_pixel.png') repeat-x left center;
      img {
        background-color: #002a5c;
        padding: 0 15px;
      }
    }
  }

  #content {
    #promo-video-container {
      display: flex;
      width: 100%;
      #promo-video {
        margin: 0 auto;
      }
    }

    #oliver {
      margin: 20px 30px;
      max-width: 190px;
      float: left;
      img {
        width: 200px;
        height: auto;
      }
    }
  }
}
</style>
