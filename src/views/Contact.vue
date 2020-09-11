<template>
    <div id='contact'>
      <BackgroundImage page='faq'/>
      <NavBar/>
      <div id='content'>
        <div class='reveal'/>
        <div class='text-block'>
          <h1>Contact Us</h1>
          <div class='contact-point' v-for='(contact, index) in contacts' :key='index'>
            <span v-for='(point, index) in contact.point' :key='index'><p><b>{{ point.name[0] }}</b><span v-if='point.email'>: <a :href='`mailto:${point.email[0]}`' target="_blank">{{ point.email[0] }}</a></span></p></span>
            <p v-for='(note, index) in contact.note' :key='index' v-html='note'></p>
          </div>

          <hr>
          <p><b>Location</b></p>
          <table style="width:100%" cellpadding="15">
            <tr>
              <td>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.257172944585!2d-79.394967!3d43.663621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b9724a2e1b%3A0x9ac86516daa070f0!2s7+Hart+House+Cir%2C+University+of+Toronto+-+St.+George+Campus%2C+Toronto%2C+ON+M5S+3H3!5e0!3m2!1sen!2sca!4v1433100371642"
                  width="400" height="300" frameborder="0" style="border:0"></iframe>
              </td>
              <td valign="top">The Hart House Chamber Strings is located at:<br><br>
                Hart House, University of Toronto<br>
                7 Hart House Circle<br>
                Toronto, ON M5S 3H3<br>
                Canada<br><br>
                The Hart House Chamber Strings holds its rehearsals every Monday from 7:30pm to 10:00pm
                in the <b>East Common Room</b> at Hart House.<br><br>
                For more information on Hart House, please visit their website at <a
                  href="http://harthouse.ca/">http://harthouse.ca/</a>.

              </td>
            </tr>
          </table>
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
  name: 'Contact',
  components: {
    BackgroundImage,
    NavBar,
    ContactInfo
  },
  data: () => ({
    xmlDoc: require('@/assets/data/contactPage.xml').default,
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
    contacts () {
      return this.xml.contactPage.contact
    }
  }
}
</script>

<style lang="scss" scoped>
#contact {
  p {
    margin-bottom: 0;
    margin-top: 0;
  }

  .contact-point {
    margin-bottom: 20px;
  }
}
</style>
