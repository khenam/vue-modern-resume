<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Ronald <span class="light-blue--text text--lighten-3">Lima</span>
        </h1>
        <span>
          A passionate about solving real life problems
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md4
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="85"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'ssa.ronald@gmail.com',
            },
            {
              name: 'Birth Date',
              icon: 'mdi-cake-variant',
              text: 'Apr 22, 1983',
            },
            {
              name: 'Wedding Date',
              icon: 'mdi-diamond-stone',
              text: 'Oct 21, 2017',
            },
            {
              name: 'Habitation',
              icon: 'mdi-map-marker',
              text: 'Salvador-Ba, Brazil',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github',
              text: 'github.com/khenam',
              link: 'https://github.com/khenam',
            },
            {
              icon: 'mdi-linkedin',
              text: 'linkedin.com/in/ronaldlima',
              link: 'https://linkedin.com/in/ronaldlima',
            },
            {
              icon: 'mdi-twitter',
              text: 'twitter.com/khenam',
              link: 'https://twitter.com/khenam',
            },
            {
              icon: 'mdi-facebook',
              text: 'facebook.com/khenam',
              link: 'https://www.facebook.com/khenam',
            },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: 'mdi-auto-fix',
              text: 'Hacking Stuffs',
            },
            {
              icon: 'mdi-teach',
              text: 'Teaching',
            },
            {
              icon: 'mdi-music',
              text: 'Music',
            },
            {
              icon: 'mdi-video-vintage',
              text: 'Movie',
            },
            {
              icon: 'mdi-play',
              text: 'Series/streaming',
            },
            {
              icon: 'mdi-robot',
              text: 'Animes',
            },
            {
              icon: 'mdi-star-four-points',
              text: 'Spiritual Improvement',
            },
            {
              icon: 'mdi-alien',
              text: 'Ancient Aliens',
            },
          ],
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text : 'English',
              value: 70,
            },
            {
              text : 'Portuguese',
              value: 99,
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>
