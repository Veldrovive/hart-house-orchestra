<template>
  <div id='concerts'>
    <BackgroundImage page='concerts'/>
    <NavBar/>
    <div id='content'>
      <div class='reveal'/>
      <div class='text-block'>
        <h1>Concerts</h1>
        <p>The Hart House Chamber Strings hosts two concerts each year: one in December and one in March. All Chamber
          Strings concerts are open to the public and admission is free. We hope to see you there!</p>

        <hr>
        <h2>Upcoming Concerts</h2>
        <h3 class='concert-year'>{{ nextConcerts.label }}</h3>
        <p class='concert-note'>{{ nextConcerts.note }}</p>
        <template v-for='(concert, index) in nextConcerts.concerts' :key='index'>
          <p class='concert-title'><b><u>{{ concert.title }}</u></b> - {{ concert.date }}</p>
          <p class='concert-note'>{{ concert.note }}</p>
          <ul class='concert-pieces'>
            <li v-for='(piece, index) in concert.pieces' :key='index'>{{ piece.name }}<span v-if='piece.composer'> by {{ piece.composer }}</span><span v-if='piece.arranger'> arranged by {{ piece.arranger }}</span></li>
          </ul>
        </template>

        <hr>
        <h2>Past Concerts</h2>
        <div class='past-concert' v-for='(year, index) in pastConcerts' :key='index'>
          <h3 class='concert-year'>{{ year.label }}</h3>
          <p v-if='year.note'>{{ year.note }}</p>
          <template v-for='(concert, index) in year.concerts' :key='index'>
            <p class='concert-title'><b><u>{{ concert.name[0] }}</u></b> - {{ concert.date[0] }}</p>
            <p class='concert-note' v-if='concert.note'>{{ concert.note[0] }}</p>
            <ul class='concert-pieces'>
              <li v-for='(piece, index) in concert.piece' :key='index'>{{ piece.name[0] }}<span v-if='piece.composer'> by {{ piece.composer[0] }}</span><span v-if='piece.arranger'> arranged by {{ piece.arranger[0] }}</span></li>
            </ul>
          </template>
        </div>
        <ContactInfo/>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundImage from '@/components/BackgroundImage'
import NavBar from '@/components/NavBar'
import ContactInfo from '@/components/ContactInfo'
import { parseString } from 'xml2js'

export default {
  name: 'Concerts',
  components: {
    BackgroundImage,
    NavBar,
    ContactInfo
  },
  data: () => ({
    xmlDoc: require('@/assets/data/concerts.xml').default,
    xml: {}
  }),
  created () {
    parseString(this.xmlDoc, (err, res) => {
      if (err) {
        console.log('Failed to parse xml')
        return
      }
      this.xml = res
    })
  },
  computed: {
    nextConcerts () {
      const year = this.xml.concerts.next[0].year[0]
      return {
        label: year.label[0],
        note: year.note ? year.note[0] : undefined,
        concerts: year.concert
      }
    },
    pastConcerts () {
      const years = this.xml.concerts.previous[0].year
      const concerts = []
      for (const year of years) {
        concerts.push({
          label: year.label[0],
          note: year.note ? year.note[0] : undefined,
          concerts: year.concert
        })
      }
      return concerts
    }
  }
}
</script>

<style lang="scss" scoped>
#concerts {
  .past-concert {
    margin-bottom: 30px;
  }

  .concert-year {
    margin-bottom: 5px;
  }
  .concert-title {
    margin-bottom: 0;
    margin-top: 0;
  }
  .concert-note {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 17px;
  }
  .concert-pieces {
    margin-top: 0;
  }
}
</style>
