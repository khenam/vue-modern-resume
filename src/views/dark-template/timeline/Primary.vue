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
            Since 2006 when I joined <a target="_blank" href="http://www.kofre.com.br">Kofre</a> I have been able to notice the growth of the Research and Development sector, also called in the company "project". I still feel very honored to be able to help consolidate this sector in the company.
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
            As radio systems were digitizing and basically a radio system was a set of servers running to assist base stations. So the sector that researched these technologies in the company ended up being transferred to my responsibility.
          </p>
          <p>
            We build work instructions and research how to use these new technologies within the company's business.
          </p>
          <p>
            A very important milestone was when we were selected to take care of the radio communication for the 2014 World Cup. We went to get the equipment and receive training from Sepura in Vienna, Austria.
          </p>
          <p>
            Our study allowed us to deal with several situations during the testing and implementation process, making the case a success, being a reference for other events. It was also necessary to create reports reading the data generated by the radio system to answer questions asked by the organizing committee and to better understand the health of the system. For that, I needed to create tools capable of collecting and exporting data to a database.
          </p>
        `,
        iconImage: 'img/timeline/kofre-icon.png',
      },
      {
        detailed   : true,
        year       : '2014',
        transparent: true,
        title      : 'Rethinking career',
        html       : `
          <p>
            That was a very important moment in my life. I came to the conclusion that I was very effective and generated a good return for the company when I worked in a technical way. Unfortunately the path I was taking completely removed me from this and made me more and more administrative.
          </p>
          <p>
            At that moment I decided to invest in my technical career. Ending a partnership that had lasted for years and putting me completely open to be judged and measured by the market.
          </p>
          <p>
            I started to invest more in studies, entering the master's degree at UFBA in Mechatronics engineering, and training myself in the technologies that I saw emerging during my period at Kofre.          </p>
          </p>
        `,
        icon: 'mdi-head-dots-horizontal-outline',
      },
      {
        year : '2014',
        title: 'Architect Developer',
        html : `
          <p>
            Also in 2013, I was invited as a consultant to identify a project that won a startups competition. The summary was: "<a target="_blank" href="https://www.repplica.com.br">Repplica</a> is a solution for Resellers and Dealers that optimizes the management of ads in the various classifieds in the country. Register your stock in our system and watch your cars be replicated automatically in the largest automotive sites on the Internet, such as: iCarros , Webmotors and other portals ".
          </p>
          <p>
            In that invitation, the main question they wanted me to answer was whether the project was scalable or how it could become. And so began a mentoring process with the developers, culminating in my dissatisfaction with my situation at the previous company.
          </p>
          <p>
            With that in 2014, my dedication was entirely to helping to restructure the project to be truly scalable. Having a base made in PHP and with developers with little experience in other languages, we work to extract as much as possible.
          </p>
          <p>
            The project helped in this regard, as the operational process was basically to synchronize information from our registry and convert it into integrated platforms. At that time, the response time of the platforms allowed us not to need a very performative language, enabling the project's growth in PHP without problems in the short and medium term.
          </p>
          <p>
            The process of redesigning the solution ranged from using Gluster to centralize and facilitate backups and other maneuvers on the platform, to the conversion mechanisms of the storage model in translators specific to the target platforms.
          </p>
          <p>
            Our synchronizers varied in implementation and, in some cases, were consumers of REST and SOAP APIs, and even with crowler features, accessing the portal as if it were the end user and performing operations.
          </p>
          <p>
            There was a movement in the automotive segment of tools similar to Repplica that larger companies started to buy them, and it was no different with us. In 2015 with the purchase process made by <a target="_blank" href="http://www.searchoptics.com.br">Search Optics</a>, I retired from the project and followed another path, with a focus on improving my skills.
          </p>
        `,
        image    : 'img/timeline/integracao-portais-automotivos.png',
        iconImage: 'img/timeline/repplica.png',
      },
      {
        detailed   : true,
        year       : '2015',
        transparent: true,
        title      : 'Testing Learning',
        html       : `
          <p>
            Still at Repplica, I had the opportunity to have a 1 month trial period at Jusbrasil. Thanks to the good relationship that I have cultivated over the years, it was possible for me to test my skills in the crowller team.
          </p>
          <p>
            It was a punch in the stomach, to notice how far I was still in the process of improving my skills, but it was revealing and magical at the same time, I could see the infrastructure, how the services' communication mechanisms worked, how they were monitored, etc.
          </p>
          <p>
            Unfortunately it had not been a good time to have joined, as there were other hires happening in parallel, and I had no experience at the level of those who were coming, so I had to make the most of all the knowledge shared with me that month.
          </p>
          <p>
            There, it was very good to have contact with Java again. In addition, I was introduced to other concepts that my academic background had not allowed me to have contact with, such as functional programming, and to practice some of it in Scala language, for example.
          </p>
        `,
        icon: 'mdi-head-dots-horizontal-outline',
      },
      {
        year : '2015',
        title: 'Research and Development Manager',
        html : `
          <p>
            As with cell phones, radio has been going through a digitization process, and many regulators are not allowing analog systems to be licensed. After having tested several tools, kofre approached me to start a project that aimed to democratize access to the resources that digitalization allowed for such equipment, such as GPS location, sending messages, situational signs, etc.
          </p>
          <p>
            I started as a freelancer creating a Gateway made in C #, for having a better integration with the tools made by most radio and systems manufacturers (Motorola, SEPURA, DAM, Hytera). At first, we chose to build a prototype in which the manufacturer did not block its use, in a standardized open protocol (TETRA) that would guarantee high compatibility.
          </p>
          <p>
            The project was presented with a very simple platform for demonstrating the data collected, and after that I was invited to return to the company to run an area that would create products for customers to use the resources made available by the radios, thus being born nTopus as a product and later as company.
          </p>
          <p>
            We built the solution using everything that has been learned over the past few years. Microservices, queue services, relational and non-relational databases, Docker as a development base, Kubernetes, Cloud, etc.
          </p>
          <p>
            Architecting the solution came with an extra challenge of using the cloud without surrendering and being blocked by it, since kofre's customer profiles, many do not have a good infrastructure to depend on the cloud, requiring that the solution could run on local physical servers in customers' data centers.
          </p>
          <p>
            We updated the gateways to use the Go language, as it has a better way to work on a multiplatform, and the C # was not effective in terms of integration with the manufacturers, since Golang gives us enough tools and with less computational cost, in addition to being really multiplataform.
          </p>
          <p>
            I worked on the construction of a communication protocol adhering to radio technology to transfer data (text files, spreadsheets, small images, etc.) with less overhead on the radio network and fewer packages.
          </p>
          <p>
            We created a scanner that allows us to provide indoor location, complementing what was already possible with GPS, making the platform more complete.
          </p>
          <p>
            In golang, we incorporate indoor gateways, vehicle trackers from different manufacturers, radio technologies, mototrbo, tetra with open protocol and also integrated to the manufacturer (Motorola), directly accessing the master system, without depending on a physical radio to work.
          </p>
          <p>
            I also raised all the support tools for the smooth functioning of the development cycle. The choice for GitLab was for allowing us a very good cycle from version control to CI / CD. Monitoring tools (prometheus + grafana), cloud management (Rancher), Api-gateways (Ambassador), Service Mesh (Istio), etc.
          </p>
        `,
        image    : 'img/timeline/ntopus-shoot.jpg',
        iconImage: 'img/timeline/kofre-icon.png',
      },
      {
        year : '2018',
        title: 'CTO',
        html : `
          <p>
            In 2018 the formal process of opening the company begins and we were born as a real startup. With that, the application needed improvements and optimizations. In the midst of striving to realize the value of our customers and improve the platform, we worked on several work fronts.
          </p>
          <p>
            Adding new vehicle tracker manufacturers and protocols, improving the reliability and robustness of our scanners, refining observability of our microservices, implementing tools for centralizing Log information, metrics and automating processes such as backups, time routines, and operations performed on devices remotely .
          </p>
          <p>
            Another very strong point was the use of OKR to better direct the company, in addition to improving our use of Scrum, becoming increasingly organic in the organization.
          </p>
          <p>
            We are testing new technologies (OpenFaas, k3s and many of the tools listed in the CNCF) and new forms of integration (Telegram, API Rest, etc.). Improving the granularity of our microservices, replacing language where it fits.
          </p>
          <p>
            This is a path that we are taking together, the tools and solution today are truly born together with the participation of the team in order to always listen to everyone's voice, as much as possible.
          </p>
        `,
        image    : 'img/timeline/pdca_cycle.svg',
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
