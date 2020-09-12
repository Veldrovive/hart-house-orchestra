<template>
  <div id='contact-info-container'>
    <div class='new-section' id='contact'>
      <span>CONTACT US</span>
    </div>
    <p class='sub-text'>For any section-related inquiries, please send them to the following emails:</p>
    <div id='table-container'>
      <table align='center'>
        <tr v-for='(pos, index) in positions' :key='index'>
          <td><b>{{ pos.positionName[0] }}</b></td>
          <td><a :href='`mailto:${pos.email}`'>{{ pos.email[0] }}</a></td>
        </tr>
      </table>
    </div>

    <hr>
    <div class='contact-info'>
      <table>
        <tr v-if='mainEmail'>
          <td><font-awesome-icon icon="envelope" /></td>
          <td><a :href='`mailto:${mainEmail}`' target='_blank'>{{ mainEmail }}</a></td>
        </tr>
        <tr v-if='phoneNumber'>
          <td><font-awesome-icon icon="phone-alt" /></td>
          <td><a :href='`tel:${phoneNumber}`'>{{ phoneNumber }}</a></td>
        </tr>
        <tr v-if='facebookLink'>
          <td>
            <a :href='facebookLink'><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
          </td>
          <td>
            <a :href='facebookLink'>Hart House Chamber Strings</a>
          </td>
        </tr>
      </table>
    </div>

    <div class='footer'>
      <hr>
      <p>Copyright © Hart House Chamber Strings at University of Toronto, 2019. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import { parseString } from 'xml2js'

export default {
  name: 'ContactInfo',
  data: () => ({
    xmlDoc: require('@/assets/data/contact.xml').default,
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
    positions () {
      return this.xml.contacts.positions[0].position
    },
    orchInfo () {
      return this.xml.contacts.fullOrchestraInfo[0]
    },
    mainEmail () {
      return this.orchInfo.email ? this.orchInfo.email[0] : null
    },
    phoneNumber () {
      return this.orchInfo.phoneNumber ? this.orchInfo.phoneNumber[0] : null
    },
    facebookLink () {
      return this.orchInfo.facebook ? this.orchInfo.facebook[0] : null
    }
  }
}
</script>

<style lang='scss' scoped>
#contact-info-container {
  .contact-info {
    margin-left: 20px;
    color: #333;

    svg {
      margin-right: 15px;
    }
  }

  #table-container {
    padding-left: 20px;
    table {
      width: 75%;
    }
  }

  .footer > p {
    font-size: 9pt;
    color: #666;
  }
}
</style>
