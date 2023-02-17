<template>
  <div>
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndUp"
      color="#FCFEF1"
      height="80px"
      fixed
      style="z-index: 2"
    >
      <v-spacer />
      <v-toolbar-title>
        <v-btn text height="80px" @click="$router.push({ name: 'Main' })">
          <v-img
            src="../assets/header-logo-nowall.png"
            height="60px"
            width="90px"
          />
        </v-btn>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs, value }">
            <v-btn text v-bind="attrs" v-on="on"
              >Услуги<v-icon v-if="!value">mdi-menu-down</v-icon
              ><v-icon v-else>mdi-menu-up</v-icon></v-btn
            >
          </template>
          <v-list style="background: #fcfef1">
            <v-list-item v-for="i in services" :key="i.id">
              <v-list-item-title
                ><v-btn
                  text
                  @click="
                    $router.push({
                      name: 'Service',
                      params: {
                        id: i.id,
                      },
                    })
                  "
                  >{{ i.title }}</v-btn
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Objects' })">Объекты</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Customers' })"
          >Заказчики</v-btn
        >
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Vacancies' })"
          >Вакансии</v-btn
        >
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Partners' })">Партнеры</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Documentation' })"
          >Документация</v-btn
        >
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text @click="$router.push({ name: 'Contacts' })">Контакты</v-btn>
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>
    <v-app-bar
      v-if="$vuetify.breakpoint.smAndDown"
      fixed
      style="z-index: 2"
      height="80px"
    >
      <v-toolbar-title>
        <v-btn text height="80px" @click="$router.push({ name: 'Main' })">
          <v-img
            src="../assets/header-logo-nowall.png"
            height="60px"
            width="90px"
          />
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-menu transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <v-icon class="text-h4">mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(button, i) in buttonsPhone" :key="i">
              <v-list-item-title
                ><v-btn
                  width="200"
                  style="font-size: 15px; overflow-wrap: break-word"
                  @click="
                    $router.push({
                      path: button.path,
                    })
                  "
                  >{{ button.title }}</v-btn
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      services: {
        1: {
          id: 1,
          title: "Генеральный подрядчик",
        },
        2: {
          id: 2,
          title: "Строительно-монтажные работы",
        },
        3: {
          id: 3,
          title: "Проектирование в строительстве",
        },
        4: {
          id: 4,
          title: "Финансово-строительный аудит и мониторинг",
        },
        5: {
          id: 5,
          title: "Технический заказчик",
        },
        6: {
          id: 6,
          title: "Консалтинг",
        },
        7: {
          id: 7,
          title: "Чистые помещения",
        },
        8: {
          id: 8,
          title: "Пусконаладочные работы (ПНР)",
        },
        9: {
          id: 9,
          title: "Дизайн интерьеров",
        },
      },

      buttonsPhone: [
        {
          path: "/documentation",
          title: "Документация",
        },
        {
          path: "/contacts",
          title: "Контакты",
        },
        {
          path: "/services/1",
          title: "Услуги",
        },
        {
          path: "/objects/1",
          title: "Объекты",
        },
        {
          path: "/customers/",
          title: "Заказчики",
        },
        {
          path: "/partners/",
          title: "Партнеры",
        },
        {
          path: "/vacancies/",
          title: "Вакансии",
        },
      ],
    };
  },
};
</script>