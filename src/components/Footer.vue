<template>
  <v-footer color="#ff5f15" padless>
    <v-row no-gutters v-if="$vuetify.breakpoint.smAndDown">
      <v-col cols="12" class="d-flex flex-column justify-center">
        <v-divider />
        <v-btn
          v-if="this.$route.name !== 'Documentation'"
          :to="{ name: 'Documentation' }"
          color="white"
          text
          rounded
          class="my-2"
        >
          Документация
        </v-btn>
        <v-divider />
        <v-btn
          v-if="this.$route.name !== 'Contacts'"
          :to="{ name: 'Contacts' }"
          color="white"
          text
          rounded
          class="my-2"
        >
          Контакты
        </v-btn>
        <v-divider />
        <v-btn
          v-if="this.$route.name !== 'Service'"
          :to="{ name: 'Service', params: { id: 1 } }"
          color="white"
          text
          rounded
          class="my-2"
        >
          Услуги
        </v-btn>
      </v-col>
      <v-col
        class="py-4 text-center"
        style="
          background-color: rgb(230, 230, 230);
          color: #414141;
          font-size: 15px;
        "
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>ООО “ПСК КАРЬЕ”</strong>
      </v-col>
    </v-row>
    <v-row no-gutters class="pt-6" v-else>
      <v-col cols="12" offset-lg="2" lg="2" class="d-flex flex-column">
        <v-btn text color="white" :to="{ name: 'Documentation' }"
          >Документация</v-btn
        >
        <v-btn text color="white" :to="{ name: 'Contacts' }">Контакты</v-btn>
      </v-col>
      <v-col cols="12" lg="2" class="d-flex flex-column">
        <v-btn text color="white" :to="{ name: 'Objects' }">Объекты</v-btn>
        <v-btn text color="white" :to="{ name: 'Customers' }">Заказчики</v-btn>
      </v-col>
      <v-col cols="12" lg="2" class="d-flex flex-column">
        <v-btn text color="white" :to="{ name: 'Partners' }">Партнеры</v-btn>
        <v-btn text color="white" :to="{ name: 'Vacancies' }">Вакансии</v-btn>
      </v-col>
      <v-col cols="12" lg="2" class="flex-column pb-6">
        <v-btn text color="white" :to="{ name: 'Service', params: { id: 1 } }"
          >Генеральный подрядчик</v-btn
        >
        <v-btn text color="white" :to="{ name: 'Service', params: { id: 2 } }"
          >Строительно-монтажные работы</v-btn
        >
        <v-btn text color="white" :to="{ name: 'Service', params: { id: 3 } }"
          >Проектирование в строительстве</v-btn
        >
        <v-btn text color="white" :to="{ name: 'Service', params: { id: 4 } }"
          >Финансово-строительный аудит и мониторинг</v-btn
        >
        <v-btn text color="white" :to="{ name: 'Service', params: { id: 5 } }"
          >Технический заказчик</v-btn
        >
        <v-btn text color="white" :to="{ name: 'Service', params: { id: 6 } }"
          >Консалтинг</v-btn
        >
        <v-btn text color="white" :to="{ name: 'Service', params: { id: 7 } }"
          >Чистые помещения
        </v-btn>
        <v-btn text color="white" :to="{ name: 'Service', params: { id: 8 } }"
          >Пусконаладочные работы (ПНР)
        </v-btn>
        <v-btn text color="white" :to="{ name: 'Service', params: { id: 9 } }"
          >Дизайн интерьеров
        </v-btn>
      </v-col>

      <v-col
        class="py-4 text-center"
        style="
          color: #414141;
          font-size: 15px;
          color: white;
          border-top: 1px solid white;
        "
        cols="12"
      >
        {{ new Date().getFullYear() }} —
        <strong>ООО “ПСК КАРЬЕ”</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>