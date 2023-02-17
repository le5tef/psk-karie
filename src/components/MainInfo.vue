<template>
  <div style="min-height: 100vh">
    <v-row class="ma-0">
      <v-col cols="12" offset-md="1" md="5" class="pa-6" sm="7">
        <div class="mt-16">
          <span
            class="ubuntu orange-underline mt-16"
            :class="currentWidthforTitle"
          >
            ООО “ПСК КАРЬЕ”
          </span>
        </div>
        <div :class="backgroundBlur">
          <div :class="blockUnderline">
            <div class="pt-4" v-if="!showText">
              <span class="croogla" :class="currentWidthforSubTitle">
                Коллектив профессионалов, который создан для достижения общей
                цели, отвечает за результат и способен оперативно, эффективно и
                качественно решать поставленные перед ним профессиональные
                задачи.
              </span>
            </div>
            <div v-if="showText">
              <div class="pt-4" v-for="par in paragraphs" :key="par.id">
                <span class="croogla" :class="currentWidthforSubTitle">
                  {{ par.text }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-4">
          <v-btn
            x-large
            tile
            outlined
            color="black"
            @click="showText = !showText"
            >Подробнее</v-btn
          >
        </div>
      </v-col>
    </v-row>

    <!-- <v-row>
      <v-col
        cols="12"
        offset-md="3"
        md="4"
        class="rounded-xl mb-16 pa-10 wrapper"
      >
        <span class="croogla" style="font-size: 30px">ООО “ПСК КАРЬЕ”</span>
        <span class="croogla"
          >- это коллектив профессионалов, который создан для достижения общей
          цели, отвечает за результат и способен оперативно, эффективно и
          качественно решать поставленные перед ним профессиональные задачи.
        </span></v-col
      >
    </v-row>
    <v-row>
      <v-col
        cols="12"
        offset-md="5"
        md="4"
        class="rounded-xl mb-16 pa-10 wrapper"
      >
        <span class="croogla">
          С первых дней мы применяем самые передовые технологии, работаем лишь с
          проверенными поставщиками, наша команда состоит из лучших специалистов
          в своей области. Но мы напоминаем сами себе, что всегда есть куда
          расти и стремиться.
        </span></v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" offset-md="3" md="4" class="rounded-xl pa-10 wrapper">
        <span class="croogla"
          >Все это возможно благодаря непрерывному обучению, повышению
          квалификации, а главное внедрению корпоративной культуры, которая
          сближает всех нас и делает настоящей командой! Делать качественно,
          сдавать вовремя, экономить средства заказчика - это то, к чему мы
          стремимся!
        </span>
      </v-col>
    </v-row> -->
  </div>
</template>
<script>
export default {
  computed: {
    blockUnderline() {
      switch (this.showText) {
        case true:
          return "orange-underline";
        default:
          return "";
      }
    },
    currentWidthforTitle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs" || "sm":
          return "titlep";
        default:
          return "title1";
      }
    },
    currentWidthforSubTitle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs" || "sm":
          return "subtitlep";
        default:
          return "subtitle";
      }
    },
    currentWidthforSubSubTitle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs" || "sm":
          return "subsubtitlep";
        default:
          return "subsubtitle";
      }
    },
    backgroundBlur() {
      switch (this.showText) {
        case true:
          return "blur";
        default:
          return "";
      }
    },
  },
  data() {
    return {
      showText: false,
      paragraphs: [
        {
          text: "Коллектив профессионалов, который создан для достижения общей цели, отвечает за результат и способен оперативно, эффективно и качественно решать поставленные перед ним профессиональные задачи.",
        },
        {
          text: "С первых дней мы применяем самые передовые технологии, работаем лишь с проверенными поставщиками, наша команда состоит из лучших специалистов в своей области. Но мы напоминаем сами себе, что всегда есть куда расти и стремиться.",
        },
        {
          text: "Все это возможно благодаря непрерывному обучению, повышению квалификации, а главное внедрению корпоративной культуры, которая сближает всех нас и делает настоящей командой! Делать качественно, сдавать вовремя, экономить средства заказчика - это то, к чему мы стремимся!",
        },
      ],
    };
  },
};
</script>
<style>
.title1 {
  font-size: 60px;
  font-weight: 500;
}
.titlep {
  font-size: 40px;
  font-weight: 500;
}
.subtitle {
  font-size: 25px;
  font-weight: 500;
}
.blur {
  backdrop-filter: blur(2px);
}
.subtitlep {
  font-size: 20px;
  font-weight: 500;
}
.orange-underline {
  border-bottom: 6px solid rgba(255, 158, 28, 1);
  display: inline-block;
  padding: 0px 7px;
  font-weight: 700;
}
</style>