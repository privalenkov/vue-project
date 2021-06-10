<template>
  <div class="activityTableContainer">
    <h2>Последняя активность</h2>
    <div class="mb-5">
      <div
      class="table-activity"
      v-for="(activity, key) in lastActivitys"
      :key="activity.id"
      custom
      >
        <div class="date-title">
        {{ date(activity.date) }}</div>
        <div
        class="grid-container"
        v-for="operations in lastActivitys[key].activitys"
        :key="operations.id"
        custom
        >
          <div class="grid-item d-flex">
            <div :class="{'operation-status': true,
            'd-flex': true,
            'operation-green': operations.operation === 'Пополнение',
            'operation-red': operations.operation === 'Списание',
            'operation-yellow': operations.operation === 'P2P'
            }">
              <img v-if="operations.operation === 'Пополнение'"
              class="operation-status-icon" width="20" height="20"
              src="/img/app-icons/menu-items/operation-status/repl-icon.svg">
              <img v-else-if="operations.operation === 'Списание'"
              class="operation-status-icon" width="20" height="20"
              src="/img/app-icons/menu-items/operation-status/write-icon.svg">
              <img v-else-if="operations.operation === 'P2P'"
              class="operation-status-icon" width="20" height="20"
              src="/img/app-icons/menu-items/operation-status/process-icon.svg">
            </div>
            <span>{{ operations.operation }}</span>
          </div>
          <div class="grid-item d-flex"><span>{{ operations.name }}</span></div>
          <div class="grid-item d-flex justify-content-center">
            <span>
              {{ operations.number }}
              <img class="user-select-none"
              src="/img/app-icons/activity-table-arrow-icon.svg" width="16" height="16">
              {{ operations.numberto }}</span>
          </div>
          <div class="grid-item d-flex justify-content-center">
            <span>{{ operations.time }}</span>
          </div>
          <div class="grid-item d-flex justify-content-center">
            <span>{{ operations.total }} ₸</span>
          </div>
          <div class="grid-item d-flex">
          <div :class="{'status-dot': true,
          'dot-green': operations.status === 'Выполнен',
          'dot-red': operations.status === 'Отмена',
          'dot-yellow': operations.status === 'В обработке'}"></div>
          <span>{{ operations.status }}</span>
          </div>
        </div>
      </div>
      <div class="title-activity"
      v-if="lastActivitys.length === 0">За последнее время операций не было обнаружено</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.activityTableContainer {
  margin-top: calc(-2.5rem - 2vw);
}
h2 {
  font-weight: 700;
}
.table-activity {
  display: grid;
  grid-gap: 15px;
  margin-top: 20px;
}
.grid-container, .date-title, .title-activity {
  font-family: Inter;
  font-style: normal;
  line-height: 24px;
  font-weight: 500;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr;
  grid-gap: 10px;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  color: #000;
}
.date-title {
  font-size: 14px;
  color: #B8B8B8;
}
.grid-container:hover {
  background: #e9e9e9;
}
.grid-item {
  align-items: center;
  grid-column-gap: 10px;
}
.title-activity {
  font-size: 18px;
  color: #ebebeb;
}
.status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background: #999999;
}
.dot-green {
  background: #77D32F;
}
.dot-red {
  background: #D75F5F;
}
.dot-yellow {
  background: #D3CD2F;
}
.operation-status {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: rgba(153, 153, 153, 0.1);
  justify-content: center;
  align-items: center;
  &.operation-green {
  background: rgba(0, 156, 140, 0.1);
  }
  &.operation-yellow {
    background: rgba(253, 177, 2, 0.1);
  }
  &.operation-red {
    background: rgba(172, 9, 47, 0.1);
  }
}
.grid-container img {
  user-select: none;
  -webkit-user-drag: none;
}
</style>

<script>
// const lastActivitys = [];
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
  name: 'ActivityTableContainer',
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
