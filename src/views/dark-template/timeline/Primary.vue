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
        title      : 'Knew mechatronic engineering',
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
                    <p>Construction of Supervisory Systems in C ++ Language, Elipse Scada and participation in the construction of embedded Microcontrolled systems (RENESAS, PIC, Zilog), and proprietary protocol.</p>
                    <p>Implementation of ERP TOTVS RM (RMNucleus, RM Bonum, RM Officina, RM Solum, RM Chronus, RM BIS, etc.). Specialization in building non-native blocking system triggers, preventing inclusion / alteration in the system as needed.</p>
        `,
        iconImage: 'img/timeline/kofre-icon.png',
      },
      {
        year : '2011',
        title: 'Coordenador de TI',
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
        year       : '2017',
        transparent: true,
        title      : 'Founded Telepad',
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
        image    : 'img/timeline/telepad.png',
        iconImage: 'img/timeline/telepad-icon.png',
      },
      {
        year : '2017',
        title: 'Founded Delix.ir',
        html : `
          <p>
              Current status: <span class="green--text accent-4">Active</span>,
              Team: <span class="">1</span>
          </p>
          <p>
            <a target="_blank" href="http://delix.ir/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=delix">Delix.ir</a> is an online image text extractor (OCR) and PDF to Word converter which is built to support Persian language especially. The service also provides APIs to implement its OCR engines into customers' own applications.
          </p>
          <p>
            The reason I founded Delix.ir (<u>D</u>ocument <u>ELIXIR</u>) was because back in school, I found out that there is an unsolved need for this kind of services especially needed by teachers. However, it wasn't developed since 2017.
          </p>
          <p>
            Currently, 3330+ people are using the service. It's still under development and we're going to change the strategy to support B2B market soon.
          </p>
        `,
        image    : 'img/timeline/delix.ir.png',
        iconImage: 'img/timeline/delix.ir-icon.png',
      },
      {
        detailed   : true,
        transparent: true,
        year       : '2018',
        title      : 'A Turning Point',
        html       : `
          <p>
          It looks like that 2018 is missing from my CV isn't it? <strong>NOT AT ALL!</strong>
          </p>
          <p>
          This awesome year was a turning point in my life. I found out the reason why my businesses are not growing; what I'm doing wrong; what I've supposed to do and plenty of other thoughts.
          </p>
          <p>
          Technically, I got familiar with and tried to be best (not yet of course!) at the following technologies:
          <ul>
          <li>git</li>
          <li>Laravel</li>
          <li>Vue.js</li>
          <li>Arduino</li>
          <li>Ubuntu</li>
          <li>TTD and CI/CD</li>
          <li>Development best practices</li>
          <li>And more ...</li>
          </ul>
          </p>
          <p>
          So please don't underestimate this card by its height in pixels. It's worth a lot to me.
          </p>

        `,
        icon: 'mdi-cake-variant',
      },
      {
        year : '2019',
        title: 'Open Sourced Telegram Web Bridge',
        html : `
          <p>
              Current status: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/telegram-web-bridge">AmirrezaNasiri/telegram-web-bridge</a>
          </p>
          <p>
            Telegram Web Bridge is a bidirectional, web-based, proxy-like application which can act as a middleman for Telegram Bot API requests (from your actual application to Telegram) and Webhooks (from Telegram to your actual application).
          </p>
          <p>
            It was initially developed because of Telegram censorship in Iran and the need for it in a storage management software we've built. I decided to publish the codes so anyone with the same problem will be able to handle it.
          </p>
        `,
        image: 'img/timeline/telegram-web-bridge.png',
        icon : 'mdi-github-circle',
      },
      {
        year : '2019',
        title: 'Open Sourced USB Keystroke Injector',
        html : `
          <p>
            Current status: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/usb-keystroke-injector">AmirrezaNasiri/usb-keystroke-injector</a>
          </p>
          <p>
            An Arduino-based keyboard emulator which injects (i.e. types) a sequence of letters received via Bluetooth protocol or read from predefined SD card payloads. Demo GIF is available on the GitHub page.
          </p>
          <p>
            It was initially a university project, made at 2018 but I decided to extend it a little bit and publish it on my GitHub.
          </p>
        `,
        image: 'img/timeline/usb-keystroke-injector.png',
        icon : 'mdi-github-circle',
      },
      {
        year : '2019',
        title: 'Co-Founded Smo.li',
        html : `
          <p>
              Current status: <span class="green--text accent-4">Active</span>,
              Team: <span class="">2</span>
          </p>
          <p>
            <a target="_blank" href="https://smo.li/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=smoli">Smoli</a> is a URL shortener and link tracking platform that also allows you to add eye-catching and branded call-to-actions to any page on the web. See a demo of Forbes campaign on Business News Daily: <a target="_blank" href="http://smo.li/+demo-forbes">smo.li/+demo-forbes</a>.
          </p>
          <p>
            The service has been founded by <a target="_blank" href="https://www.linkedin.com/in/saeidhabibpour/">Saeid Habibpour</a> (CEO) and me (CTO). Currently, the MVP is ready and we're researching the market.
          </p>
        `,
        image    : 'img/timeline/smo.li.png',
        iconImage: 'img/timeline/smo.li-icon.png',
      },
      {
        year : '2019',
        title: 'Open Sourced This Resume',
        html : `
          <p>
              Current status: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/vue-modern-resume">AmirrezaNasiri/vue-modern-resume</a>
          </p>
          <p>
            A Vue.js-based and powered-by-Vuetify (material UI kit) resume template which you're seeing right now!
          </p>
        `,
        image: 'img/timeline/vue-modern-resume.png',
        icon : 'mdi-github-circle',
      },
      {
        year : '2019',
        title: 'Published Vue Registrar Package',
        html : `
          <p>
              Current status: <span class="light-blue--text lighten-3">Published</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/vue-registrar">AmirrezaNasiri/vue-registrar</a>
          </p>
          <p>
            A Vue.js package that makes developers' code a lot cleaner and much more understandable. It's consisted of two features that:
            <ul>
                <li>Registers all your common and frequently used components globally and ends the need for importing them manually;</li>
                <li>Assembles all your vuex modules in a nested manner.</li>
            </ul>
          </p>
        `,
        image    : 'img/timeline/vue-registrar-demo.png',
        iconImage: 'img/timeline/vue-registrar-logo.png',
      },
      {
        year : 'So far ...',
        title: 'Written 340+ Unique Articles!',
        html : `I'm the guy who loves teaching! So far, I've written 340+ unique articles which most of them are computer-related. You can access them here:
                    <ul><li><a target="_blank" href="https://bytegate.ir/author/amirrezanasiri/">My posts on Bytegate.ir</a> (260+ Computer-related)</li><li><a target="_blank" href="http://bobet.ir/author/amirrezanasiri/">My posts on Bobet.ir</a> (80+ translations)</li></ul>`,
        icon: 'mdi-fountain-pen-tip',
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
