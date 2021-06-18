<template>
  <div class="activitys-container">
    <h2 class="activitys-container__title">Последняя активность</h2>
    <div class="activitys-container__list-container">
      <div
      class="activitys-container__list"
      v-for="(activity, key) in lastActivitys"
      :key="activity.id"
      custom
      >
        <div class="activitys-container__date-title">
          {{ date(activity.date) }}
        </div>
        <div
        class="activitys-container__grid-container"
        v-for="operations in lastActivitys[key].activitys"
        :key="operations.id"
        custom
        >
          <div class="activitys-container__grid-item">
            <div class="activitys-container__operation-status"
            :class="{
            'activitys-container__operation-status_green': operations.operation === 'Пополнение',
            'activitys-container__operation-status_red': operations.operation === 'Списание',
            'activitys-container__operation-status_yellow': operations.operation === 'P2P'
            }">
              <img v-if="operations.operation === 'Пополнение'"
              class="activitys-container__image" width="20" height="20"
              src="/img/app-icons/menu-items/operation-status/repl-icon.svg">
              <img v-else-if="operations.operation === 'Списание'"
              class="activitys-container__image" width="20" height="20"
              src="/img/app-icons/menu-items/operation-status/write-icon.svg">
              <img v-else-if="operations.operation === 'P2P'"
              class="activitys-container__image" width="20" height="20"
              src="/img/app-icons/menu-items/operation-status/process-icon.svg">
            </div>
            <span>{{ operations.operation }}</span>
          </div>
          <div class="activitys-container__grid-item">
            <span>{{ operations.name }}</span>
          </div>
          <div class="activitys-container__grid-item activitys-container__grid-item_content-center">
            <span>
              {{ operations.number }}
              <img class="activitys-container__image"
              src="/img/app-icons/activity-table-arrow-icon.svg" width="16" height="16">
              {{ operations.numberto }}
            </span>
          </div>
          <div class="activitys-container__grid-item activitys-container__grid-item_content-center">
            <span>{{ operations.time }}</span>
          </div>
          <div class="activitys-container__grid-item activitys-container__grid-item_content-center">
            <span>{{ operations.total }} ₸</span>
          </div>
          <div class="activitys-container__grid-item">
            <div class="activitys-container__status-dot"
            :class="{
            'activitys-container__status-dot_green': operations.status === 'Выполнен',
            'activitys-container__status-dot_red': operations.status === 'Отмена',
            'activitys-container__status-dot_yellow': operations.status === 'В обработке'}"
            ></div>
            <span>{{ operations.status }}</span>
          </div>
        </div>
      </div>
      <div class="empty-activitys"
      v-if="lastActivitys.length === 0">
      За последнее время операций не было обнаружено
      </div>
    </div>
  </div>
</template>

<script>
const lastActivitys = [
  {
    id: '1',
    date: new Date(2021, 6, 10),
    activitys:
    [
      {
        id: '1', operation: 'Пополнение', name: 'Султан Османов', number: '3232 2323 3232 3232', numberto: '4344 4341 2315 6567', time: '12:30', total: 15000, status: 'В обработке',
      },
      {
        id: '2', operation: 'Списание', name: 'Игнат Колпаков', number: '3232 2323 3232 3232', numberto: '4344 4341 2315 6567', time: '14:30', total: 5000, status: 'Выполнен',
      },
    ],
  },
  {
    id: '1',
    date: new Date(2021, 6, 9),
    activitys:
    [
      {
        id: '1', operation: 'P2P', name: 'Султан Османов', number: '3232 2323 3232 3232', numberto: '4344 4341 2315 6567', time: '12:30', total: 15000, status: 'Отмена',
      },
      {
        id: '2', operation: 'Пополнение', name: 'Игнат Колпаков', number: '3232 2323 3232 3232', numberto: '4344 4341 2315 6567', time: '14:30', total: 5000, status: 'Отмена',
      },
    ],
  },
  {
    id: '2',
    date: new Date(2021, 6, 4),
    activitys:
    [
      {
        id: '1', operation: 'P2P', name: 'ООО Артем Смирнов', number: '3232 2323 3232 3232', numberto: '4344 4341 2315 6567', time: '11:30', total: 25000, status: 'Выполнен',
      },
      {
        id: '2', operation: 'Пополнение', name: 'TОО "Bloomzed.kz"', number: '3232 2323 3232 3232', numberto: '4344 4341 2315 6567', time: '12:30', total: 53000, status: 'Выполнен',
      },
      {
        id: '3', operation: 'Списание', name: 'ТОО "ESH MART"', number: '3232 2323 3232 3232', numberto: '4344 4341 2315 6567', time: '14:30', total: 53000, status: 'Отмена',
      },
    ],
  },
];

export default {
  name: 'activitys-container',
  data: () => ({
    lastActivitys,
  }),
  methods: {
    date(ldate) {
      const date = new Date();
      if (date.getDate() === ldate.getDate()) {
        return 'Сегодня';
      }
      if (ldate.getDate() === date.getDate() - 1) {
        return 'Вчера';
      }
      return `${ldate.toLocaleString('default', { day: 'numeric', month: 'long' })}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.activitys-container {
  margin-top: calc(-2.5rem - 2vw);

  .activitys-container__title {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: calc(1.3rem + .8vw);
    line-height: 52px;
    margin: 0;
  }
  .activitys-container__list-container {
    margin-bottom: 3rem;
    font-family: Inter;
    font-style: normal;
    line-height: 24px;
    font-weight: 500;

    .activitys-container__list {
      display: grid;
      grid-gap: 15px;
      margin-top: 20px;
    }
    .activitys-container__date-title {
      font-size: 14px;
      color: #B8B8B8;
    }
    .activitys-container__grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr;
      grid-gap: 10px;
      background: #fff;
      border-radius: 12px;
      padding: 16px;
      font-size: 16px;
      color: #000;
    }
    .activitys-container__grid-item {
      align-items: center;
      grid-column-gap: 10px;
      display: flex;
    }
    .activitys-container__operation-status {
      width: 36px;
      height: 36px;
      border-radius: 9px;
      background: rgba(153, 153, 153, 0.1);
      justify-content: center;
      align-items: center;
      display: flex;

      &_green {
        background: rgba(0, 156, 140, 0.1);
      }
      &_yellow {
        background: rgba(253, 177, 2, 0.1);
      }
      &_red {
        background: rgba(172, 9, 47, 0.1);
      }
    }
    .activitys-container__grid-item_content-center {
      justify-content: center;
    }
    .activitys-container__image {
      user-select: none;
      -webkit-user-drag: none;
    }
    .empty-activitys {
      font-size: 18px;
      color: #ebebeb;
    }
    .activitys-container__status-dot {
      width: 5px;
      height: 5px;
      border-radius: 50px;
      background: #999999;

      &_red {
        background: #D75F5F;
      }
      &_green {
        background: #77D32F;
      }
      &_yellow {
        background: #D3CD2F;
      }
    }
  }
}
</style>
