<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        id="timeline"
        :title="detailed ? 'My Life in a Nutshell' : 'My Experiences'"
      >
        <template slot="actions">
          <div>
            <v-switch
              v-model="detailed"
              :label="detailed ? 'Detailed' : 'Summary'"
            />
          </div>
        </template>

        <v-timeline
          dense
        >
          <v-timeline-item
            v-for="(item, i) in orderedItems"
            :key="i"
            :icon="item.icon || ''"
            :class="{transparent: item.transparent}"
            large
          >
            <template
              v-if="item.iconImage"
              v-slot:icon
            >
              <v-avatar>
                <img
                  :src="publicPath(item.iconImage)"
                >
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex
                v-if="$vuetify.breakpoint.smAndUp"
                md1
                sm2
                align-self-center
              >
                <span>{{ item.year }}</span>
              </v-flex>
              <v-flex
                md11
                sm10
                xs12
              >
                <v-card class="elevation-1">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ item.year }}
                      </p>
                      <h3>{{ item.title }}</h3>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex
                        :md7="!!item.image"
                        :md12="!item.image"
                        xs12
                      >
                        <div class="mr-1">
                          <span
                            v-if="item.text"
                            class="pre"
                          >{{ item.text }}</span>
                          <!-- eslint-disable vue/no-v-html -->
                          <div
                            v-else-if="item.html"
                            v-html="item.html"
                          />
                          <!-- eslint-enable vue/no-v-html -->
                        </div>
                      </v-flex>
                      <v-flex
                        v-if="item.image"
                        md5
                        xs12
                      >
                        <div
                          class="mt-2"
                        >
                          <v-carousel
                            v-if="Array.isArray(item.image)"
                            :show-arrows="false"
                            :height="325"
                          >
                            <v-carousel-item
                              v-for="(citem,ci) in item.image"
                              :key="ci"
                              :src="publicPath(citem)"
                            />
                          </v-carousel>
                          <v-img
                            v-else
                            :max-height="item.imageHeight ? item.imageHeight : ''"
                            :src="publicPath(item.image)"
                          />
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'Timeline',
  components: { ContentSection },
  data      : () => ({
    detailed: true,
    items   : [
      {
        detailed   : true,
        transparent: true,
        year       : '1983',
        title      : 'Born on Apr 22, 1983',
        html       : 'With a chance lower than %0.00000000000512.<br>I\'m reborn practically without life, purple, and come back!',
        icon       : 'mdi-cake-variant',
      },
      {
        detailed   : true,
        transparent: true,
        year       : '1990',
        title      : 'Touched a electronic tv circuit',
        html       : 'ME: "HUM...!"<br><i>... Whats is inside and what is this lines!</i>',
        icon       : 'mdi-source-commit',
      },
      {
        detailed   : true,
        transparent: true,
        year       : '1993',
        title      : 'See a code for the first time',
        html       : 'ME: "texts?"<br><i>... For what exactly!?</i>',
        icon       : 'mdi-mouse-variant',
      },
      {
        detailed   : true,
        year       : '1998',
        transparent: true,
        title      : 'Work for free in exchange for computer courses',
        html       : `
                <p>
                    At this point in my life, my desire to learn was so intense that I managed to do an internship. After completing a microcomputer maintenance course, I offered to work in exchange for being able to attend the other courses that were offered.
                </p>
                <p>
                    At that time I studied in the morning at the engineering school in Bahia (EEEMBA), interned in the afternoon and attended the courses at night.
                </p>
        `,
        image      : 'img/timeline/eeemba-1998.jpg',
        imageHeight: 200,
        icon       : 'mdi-teach',
      },
      {
        detailed   : true,
        year       : '2002',
        transparent: true,
        title      : 'I met mechatronic engineering',
        html       : 'That moment was where I was able to discover that theory and practice go together, and that the subjects learned in college can be applied to something real, physical. My first robot was born, writing words typed on a computer, or plotting a graph of an x function.',
        icon       : 'mdi-teach',
      },
      {
        detailed   : true,
        year       : '2004',
        transparent: true,
        title      : 'First Big Event of IEEE - FTC student branch',
        html       : `
          <p>
            Being created in the same year, the Bahia session of the IEEE encouraged its student branches to create an event that served to stimulate and encourage educational institutions to learn about the organization and the benefits inherent to it.
          </p>
          <p>
            With this, a joint event was created involving several educational institutions to "Gerra de Robots Salvador" similar to BattleBots.
          </p>
          <p>
            My participation was in the creation of the student branch and in the organization of the event.
          </p>
          <p>
            In 2005 I was able to help again and the event evolved and became a technological olympiad, with more modalities, such as robot sumo, Lego line follower
          </p>
        `,
        image    : 'img/timeline/olimpiada-tecnologica-2005.jpeg',
        iconImage: 'img/timeline/marca_ftc_ieee-2004.jpg',
      },
      {
        detailed   : true,
        year       : '2006',
        transparent: true,
        title      : 'First chance to show my work away from home',
        html       : `
          <p>
            Up until this moment, I have always had the chance to train the skills learned in the company that my parents had, creating spreadsheets with VBA codes on them, creating mini applications to help with controls and day-to-day operations of the company, but over time the skills learned in college had no space there.
          </p>
          <p>
            Thanks to having contact with friends and colleagues at these events, I had the opportunity to be invited to work at Kofre Telecomunicações as an intern, beginning my journey of applying all my knowledge.
          </p>
        `,
        iconImage: 'img/timeline/kofre-icon.png',
      },
      {
        year : '2008',
        title: 'Programmer',
        html : `
          <p>
            Since 2006 when I joined Kofre I have been able to notice the growth of the Research and Development sector, also called in the company "project". I still feel very honored to be able to help consolidate this sector in the company.
          </p>
          <p>
            It was wonderful to be able to create products and improve others.
          </p>
          <p>
            I created an application that was used to configure equipment that already existed in the company, created by the area that I came to add. This equipment allowed it to be possible to generate a behavior similar to a computer network hub, but with analog radios.
          </p>
          <p>
            Another fantastic project was a modem capable of transferring data over analog radios. My main function was to create an application to configure this equipment, allowing it to be adjusted to work in different conditions. A nice point to highlight was that I was able to help optimize the code that ran onboard. At that time we used a microcontroller that had a known and reported problem by the manufacturer (it was normal to skip a line of code depending on the situation), we simulated the conditions and modified the code so that even in these conditions it was able to maintain the correct behavior.
          </p>
          <p>
            The last and most important project done by the sector was a Programmable logic controller (PLC). We considered everything we had learned over the years, we selected a more robust microcontroller including electromagnetic interference. My main role in this project was to build a supervisory system to be used wherever the equipment was to operate. In addition, I created an application that was used to test and validate the equipment's operation once assembled and for simple drives. I worked together with a friend and partner, the same one that allowed me to help in the previous project, to create the communication and programming protocols, in addition to a mechanism that allowed defective codes to be recorded in the PLC, but it did not lock the same nor affect others blocks of code that were already working.
          </p>
          <p>
            We did all the development in c and c ++, as well as a little assembler.
          </p>
          <p style="font-size: 60%">
            I take this opportunity to thank you Ivan Mascarenhas for being so generous and being a mainspring for my professional growth.
          </p>
        `,
        iconImage: 'img/timeline/kofre-icon.png',
      },
      {
        year : '2011',
        title: 'IT Coordinator',
        html : `
          <p>
            The company was growing, at that time still had the opportunity to develop to help in the implementation of the company's ERP (TOTVS RM). As this process allowed me to be close to several sectors in a short period of time, it was a natural move to receive a promotion and lead the company's IT direction.
          </p>
          <p>
            We assume the implementation of all modules active at the time, RM Nucleus, RM Bonum, RM Officina, RM Solum, RM Chronus, RM BIS, etc.). We help with various activities, trying to align existing procedures with system resources, in addition to suggesting changes in others.
          </p>
          <p>
            I developed a portal in PHP (Yii Framework) integrated to the company's AD (Active Directory), to deal with very common ERP query operations that made processes more dynamic, because, unfortunately, the system was not so fast and practical, mainly the user profile dependency. This portal allowed us to reduce the number of licenses, generating significant savings and allowed us to grow more organically.
          </p>
          <p>
            An important point at the time was that the server structure was incompatible with the size of the company; we set up a project to expand and virtualize servers using VMware esxi.
          </p>
          <p>
            Thanks to the large volume of parallel and new actions for everyone, it was my first contact with the Scrum methodology, which we tried to implement in the area.
          </p>
        `,
        iconImage: 'img/timeline/kofre-icon.png',
      },
      {
        year : '2013',
        title: 'ICT Coordinator',
        html : `
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
        `,
        iconImage: 'img/timeline/kofre-icon.png',
      },
      {
        year       : '2014',
        transparent: true,
        title      : 'Architect Developer',
        html       : `
          <p>
              Current status: <span class="red--text darken-3">Failed</span>,
              Team: <span class="">1</span>
          </p>
          <p>
            <a target="_blank" href="http://t.me/Telepad_Bot">Telepad</a> was a Telegram assistant bot which helped channel owners to manage their posts easily by scheduling posts, instant editing, ready-to-be-published post suggestions and administrators' role management.
          </p>
          <p>
            The reason behind founding it was personal usage. It was initially created to make Bobet.ir publishing process easier but I decided to let others use it too.
          </p>
          <p>
            <span class="red--text darken-3">Failing Reason</span>:
             Well, I was alone and couldn't handle its development since I'd been working on other projects too.<br />
             Starting from there, slowly, I understood the actual value of having a team and focusing on a specific business.
          </p>
        `,
        image    : 'img/timeline/integracao-portais-automotivos.png',
        iconImage: 'img/timeline/repplica.png',
      },
      {
        year : '2015',
        title: 'Research and Development Manager',
        html : `
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
        `,
        iconImage: 'img/timeline/kofre-icon.png',
      },
      {
        year : '2018',
        title: 'CTO',
        html : `
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
        `,
        iconImage: 'img/timeline/marca-ntopus-full.jpg',
      },
    ],
  }),
  computed: {
    orderedItems () {
      const items = [...this.items].reverse()
      if (this.detailed)
        return items
      return items.filter((item) => {
        return !item.detailed
      })
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.pre {
  white-space: pre;
}
.transparent{
  opacity: 0.6;
}
</style>
