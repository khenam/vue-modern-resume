<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="Who am I?"
        class="who-am-i"
      >
        I am passionate about the profession and enthusiastic about new technologies.
        I have a solid professional career of more than {{ experienceYears }} years in the technology area,
        working as a 'software engineer'.
        With academic background in Mechatronics Engineering, participation in project development,
        implementation and maintenance of computer systems, with an article published by (IEEE).
        I have several professional development courses, aiming mainly to simplify the use of
        technologies in the area of telecommunications with purposes for the benefit of life.
        Since I was a college student taking care of the IEEE student branch, i knew how to take
        advantage of all the experiences and thus guarantee today's professional with success in the
        development of computerized tools, microcontroller programming, communications protocols,
        test development and product validation.
      </content-section>
      <content-section
        v-if="prouds"
        title="What am I proud of?"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="educations"
        title="Education"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        title="Skills"
      >
        <template slot="actions">
          (% are relative not absolute)
        </template>
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    prouds: [
      {
        icon  : 'mdi-source-branch-plus',
        text  : 'Founding member of the IEEE - FTC student branch',
        source: '(IEEE records)',
      },
      {
        icon  : 'mdi-volleyball',
        text  : 'Design and develop rechargeable handball ball for the blind',
        source: '(IEEE-FTC student branch records)',
      },
      {
        icon  : 'mdi-account-multiple',
        text  : 'Mentoring fantastic developers at nTopus Tecnologia',
        source: '(My wonderful colleagues and friends in nTopus)',
      },
    ],
    educations: [
      {
        from       : '2003',
        to         : '2012',
        title      : 'Bachelor\'s degree, Mechatronics Engineering',
        location   : 'Faculdade de Tecnologia e Ciências da Bahia',
        description: 'Became a bachelor in  Mechatronics Engineering',
      },
    ],
    skills: [
      {
        title: 'PHP',
        icon : 'mdi-language-php',
        value: 95,
      },
      {
        title: 'Vue.js Framework',
        icon : 'mdi-vuejs',
        value: 85,
      },
      {
        title: 'JavaScript/Typescript',
        icon : 'mdi-language-javascript',
        value: 80,
      },
      {
        title: 'yii Framework',
        icon : 'mdi-laravel',
        value: 80,
      },
      {
        title: 'Golang',
        icon : 'mdi-language-go',
        value: 75,
      },
      {
        title: 'Python',
        icon : 'mdi-language-python',
        value: 70,
      },
      {
        title: 'c#',
        icon : 'mdi-language-csharp',
        value: 68,
      },
      {
        title: 'c/c++',
        icon : 'mdi-language-cpp',
        value: 58,
      },
      {
        title: 'Java',
        icon : 'mdi-language-java',
        value: 54,
      },
      {
        title: 'Kotlin',
        icon : 'mdi-language-kotlin',
        value: 43,
      },
      {
        title: 'Ruby',
        icon : 'mdi-language-kotlin',
        value: 40,
      },
      { divider: true },
      {
        title: 'Docker',
        icon : 'mdi-docker',
        value: 89,
      },
      {
        title: 'API Gateway',
        icon : 'mdi-axis-y-arrow-lock',
        value: 80,
      },
      {
        title: 'Linux Server',
        icon : 'mdi-linux',
        value: 75,
      },
      {
        title: 'Kubernetes',
        icon : 'mdi-kubernetes',
        value: 70,
      },
      {
        title: 'Test/Behaviour Driven Development',
        icon : 'mdi-test-tube',
        value: 70,
      },
      {
        title: 'Service Mash (istio, linkerd)',
        icon : 'mdi-arrow-decision-outline',
        value: 68,
      },
      {
        title: 'Continuous Integration / Continuous Delivery',
        icon : 'mdi-truck-fast',
        value: 65,
      },
      {
        title: 'Ansible',
        icon : 'mdi-ansible',
        value: 60,
      },
      {
        title: 'Chef',
        icon : 'mdi-chef-hat',
        value: 50,
      },
      {
        title: 'Jenkins',
        icon : 'mdi-run-fast',
        value: 50,
      },
      {
        title: 'Web Application Security',
        icon : 'mdi-shield-lock',
        value: 45,
      },
      { divider: true },
      {
        title: 'NativeScript Vue',
        icon : 'mdi-cellphone',
        value: 56,
      },
      {
        title: 'Hardware Development',
        icon : 'mdi-chip',
        value: 40,
      },
      {
        title: 'Assembler',
        icon : 'mdi-cpu-32-bit',
        value: 42,
      },
      { divider: true },
      {
        title: 'Scrum',
        icon : 'mdi-account-switch',
        value: 88,
      },
      {
        title: 'Leadership',
        icon : 'mdi-account-group',
        value: 70,
      },
    ],
  }),
  computed: {
    experienceYears: function () {
      const d = new Date()
      return d.getFullYear() - 2005
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.who-am-i {
  text-align: justify;
  text-justify: auto;
}
.progress {
  margin-top: 0.1rem;
}
</style>
