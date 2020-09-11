<template>
  <div id='faq'>
    <BackgroundImage page='faq'/>
    <NavBar/>
    <div id='content'>
      <div class='reveal'/>
      <div class='text-block'>
        <h1>Frequently Asked Questions</h1>
        <div class='question-group' v-for='(q, index) in questions' :key='index'>
          <h3 class='question'>{{ q.statement[0] }}</h3>
          <p class='answer' v-html='q.answer[0]'></p>
          <p class='note' v-if='q.note' v-html='q.note[0]'></p>
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
  name: 'FAQ',
  components: {
    BackgroundImage,
    NavBar,
    ContactInfo
  },
  data: () => ({
    xmlDoc: require('@/assets/data/faq.xml').default,
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
    questions () {
      return this.xml.questions.question
    }
  }
}
</script>

<style lang="scss" scoped>
#faq {
  .question-group {
    margin-bottom: 30px;

    .question {
      margin-bottom: 5px;
    }
    .answer {
      margin-top: 0;
    }
    .note {
      margin-top: 5px;
    }
  }
}
</style>
