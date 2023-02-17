<template>
  <div
    class="
      background
      d-flex
      align-center
      justify-center
      pt-8
      pa-md-8
      py-md-16
      mt-4
    "
  >
    <v-container>
      <v-row class="no-guuters">
        <v-col
          cols="12"
          sm="10"
          offset-sm="1"
          lg="6"
          offset-lg="3"
          v-for="vacance in vacancies"
          :key="vacance.id"
          class="text-h7 text-sm-h6 text-md-h6 wrapper pa-8"
        >
          <div class="orange-underline text-h6 text-sm-h5 text-md-h4">
            <strong>Вакансия:</strong>
          </div>
          <div style="white-space: pre-wrap">{{ vacance.title }}</div>

          <div v-html="vacance.subtitle"></div>
          <div class="orange-underline text-h6 text-sm-h5 text-md-h4 mt-4">
            <strong>Обязанности:</strong>
          </div>
          <div style="white-space: pre-wrap">{{ vacance.duties }}</div>
          <div class="orange-underline text-h6 text-sm-h5 text-md-h4 mt-4">
            <strong>Требования:</strong>
          </div>
          <div style="white-space: pre-wrap">{{ vacance.requirements }}</div>
          <div class="orange-underline text-h6 text-sm-h5 text-md-h4 mt-4">
            <strong>Условия:</strong>
          </div>
          <div style="white-space: pre-wrap">{{ vacance.conditions }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vacancies: [
        {
          title: `Прораб / Производитель работ`,
          subtitle: `Опыт работы от 2 лет, полная занятость.

Объекты: г.Москва и МО,
Справки по телефону 8(926)4070684(Viber/WhatsApp)`,
          duties: `Организация и координация работ субподрядчиков и бригад.
Контроль выполнения графика и соблюдения технологии и качества работ.
Планирование и организация материально-технического обеспечения
строительства.
Формирование ВОР.
Работа с проектно-сметной и технической документацией.
Взаимодействие с заказчиком.
Контроль качества и исполнения работ
Отчетность`,
          requirements: `Опыт работы:
Знание ПК(Excel,Word,AutoCAD),
Желательно наличие автомобиля`,
          conditions: `Полный рабочий день`,
        },
      ],
    };
  },
};
</script>