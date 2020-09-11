<template>
  <div id='members'>
    <BackgroundImage page='members'/>
    <NavBar/>
    <div id='content'>
      <div class='reveal'/>
      <div class='text-block'>
        <h1>Membership</h1>
        <h2>New Members</h2>
        <p v-for='(note, index) in newMembers.notes' :key='index' v-html='note'></p>
        <table style="width:75%" cellpadding="10">
          <tr>
            <td></td>
            <td>STUDENT/MEMBER*</td>
            <td>NON-MEMBER</td>
            <td>OVER 65</td>
          </tr>
          <tr>
            <td>ANNUAL REGISTRATION FEE</td>
            <td>$35</td>
            <td>$235</td>
            <td>$175</td>
          </tr>
          <tr>
            <td>FALL REGISTRATION FEE</td>
            <td>$20</td>
            <td>$125</td>
            <td>$95</td>
          </tr>
          <tr>
            <td>WINTER REGISTRATION FEE</td>
            <td>$20</td>
            <td>$125</td>
            <td>$95</td>
          </tr>
        </table>
        <p v-for='(note, index) in newMembers.feeNotes' :key='index' v-html='note'></p>

        <hr>
        <p>In the {{ members.years }} season, Hart House Chamber Strings has {{ members.count }} members who paid the membership fee:</p>
        <table id="member-table" class="center">
          <tr>
            <td>
              <h4 v-if='members.sections["Violin I"]'>Violin I</h4>
            </td>
            <td>
              <h4 v-if='members.sections["Violin II"]'>Violin II</h4>
            </td>
            <td>
              <h4 v-if='members.sections["Viola"]'>Viola</h4>
            </td>
          </tr>
          <tr>
            <td valign="top" v-if='members.sections["Violin I"]'><ul><li v-for='(member, index) in members.sections["Violin I"].members' :key='index'>{{ member.name }}{{ member.head ? members.sections["Violin I"].headCount == 1 ? '*' : '+' : ''}}</li></ul></td>
            <td valign="top" v-if='members.sections["Violin II"]'><ul><li v-for='(member, index) in members.sections["Violin II"].members' :key='index'>{{ member.name }}{{ member.head ? members.sections["Violin II"].headCount == 1 ? '*' : '+' : ''}}</li></ul></td>
            <td valign="top" v-if='members.sections["Viola"]'><ul><li v-for='(member, index) in members.sections["Viola"].members' :key='index'>{{ member.name }}{{ member.head ? members.sections["Viola"].headCount == 1 ? '*' : '+' : ''}}</li></ul></td>
          </tr>
          <tr>
            <td>
              <h4 v-if='members.sections["Cello"]'>Cello</h4>
            </td>
            <td>
              <h4 v-if='members.sections["Bass"]'>Bass</h4>
            </td>
            <td>
              <h4> </h4>
            </td>
          </tr>
          <tr>
            <td valign="top" v-if='members.sections["Cello"]'><ul><li v-for='(member, index) in members.sections["Cello"].members' :key='index'>{{ member.name }}{{ member.head ? members.sections["Cello"].headCount == 1 ? '*' : '+' : ''}}</li></ul></td>
            <td valign="top" v-if='members.sections["Bass"]'><ul><li v-for='(member, index) in members.sections["Bass"].members' :key='index'>{{ member.name }}{{ member.head ? members.sections["Bass"].headCount == 1 ? '*' : '+' : ''}}</li></ul></td>
          </tr>
        </table>

        <br>
        <p class="legend">* Section Principle</p>
        <p class="legend">+ Co-Principals</p>

        <hr>
          <h2>The Executive Team</h2>
          <p v-html='exec.note'></p>

          <table style="width:100%" cellpadding="10">
            <tr>
              <td>
                <table style="width:50%" align="center">
                  <tr v-for='(role, index) in exec.roles' :key='index'>
                    <td><b>{{ role.position[0] }}</b></td>
                    <td>{{ role.name[0] }}</td>
                  </tr>
                </table>
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
import parseCsv from 'csv-parse'

export default {
  name: 'Members',
  components: {
    BackgroundImage,
    NavBar,
    ContactInfo
  },
  data: () => ({
    xmlDoc: require('@/assets/data/members.xml').default,
    xml: null,

    csvDoc: require('@/assets/data/members.csv').default,
    csv: null
  }),
  created () {
    parseString(this.xmlDoc, (err, res) => {
      if (err) {
        console.log('Failed to parse xml')
        return
      }
      this.xml = res
    })
    parseCsv(this.csvDoc, (err, res) => {
      if (err) {
        console.log('Failed to parse csv')
        return
      }
      this.csv = res
    })
  },
  computed: {
    newMembers () {
      const data = this.xml.members.newMembers[0]
      return {
        notes: data.note,
        feeNotes: data.feeNote
      }
    },
    exec () {
      const data = this.xml.members.executive[0]
      return {
        note: data.note[0],
        roles: data.role
      }
    },
    members () {
      try {
        if (this.csv) {
          const firstNameIndex = this.csv[0].indexOf('First Name')
          const lastNameIndex = this.csv[0].indexOf('Last Name')
          const preferredNameIndex = this.csv[0].indexOf('Preferred Name')
          const paidIndex = this.csv[0].indexOf('Paid?')
          const sectionHeadIndex = this.csv[0].indexOf('Section Head?')

          let currentSection = 'Error: No Section'
          const sectionMembers = {}
          let memberCount = 0
          for (const person of this.csv.slice(1)) {
            const section = person[0]
            const firstName = person[firstNameIndex]
            const lastName = person[lastNameIndex]
            const preferredName = person[preferredNameIndex]
            const paid = person[paidIndex]
            const sectionHead = person[sectionHeadIndex] === 'Y'
            if (section && section.length > 2) {
              if (currentSection in sectionMembers) {
                sectionMembers[currentSection].headCount = sectionMembers[currentSection].members.filter(person => person.head).length
              }

              currentSection = section
            }
            if (!(currentSection in sectionMembers)) {
              sectionMembers[currentSection] = { members: [], headCount: 0 }
            }
            if (paid === 'Y') {
              memberCount++
              const memberObj = { name: `${preferredName || firstName} ${lastName}`, head: sectionHead }
              if (sectionHead) {
                sectionMembers[currentSection].members.unshift(memberObj)
              } else {
                sectionMembers[currentSection].members.push(memberObj)
              }
            }
          }
          if (currentSection in sectionMembers) {
            sectionMembers[currentSection].headCount = sectionMembers[currentSection].members.filter(person => person.head).length
          }
          const currentYear = this.xml ? this.xml.members.members[0].currentYear[0] : '0000 - 0000'
          return { sections: sectionMembers, count: memberCount, years: currentYear }
        } else {
          return { sections: {}, memberCount: 0, years: '0000 - 0000' }
        }
      } catch (err) {
        return { sections: {}, memberCount: 0, years: '0000 - 0000' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#members {
  #member-table {
    width: 75%;
    td {
      width: 25%;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    li {
      padding: 0;
      margin: 0;
    }
  }

  .legend {
    font-size: 9pt;
    color: #222;
    margin: 0 0 0 20px;
  }
}
</style>
