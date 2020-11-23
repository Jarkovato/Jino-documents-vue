<template>
  <div class="documents">
    <div class="container">
      <div class="documents__title">Подтверждение аккаунта</div>
      <div class="documents__text">
        Для подтверждения вашего аккаунта вам нужно заполнить все поля,
        подтвердить почтовый ящик и телефон, а также загрузить сканы ваших
        документов.
      </div>
      <form action="" class="documents__form form">
        <div class="form__file">
          <img
            class="form__img"
            :src="srcUpload.src"
            alt="srcUpload.alt"
            @click="focusInput();"
          />
          <input
            class="form__file-input"
            id="fileInput"
            name="file"
            type="file"
            required
            accept=".png, .jpg, .jpeg"
            @change="onFileChange"
          />
          <label class="form__file-label underline" for="fileInput" id="inputBtn">
            Загрузить скан страницы с фотографией
          </label>
          <span
            class="form__file-action false-text"
            v-if="!result && file != ''"
          >Отклонено
          </span>
          <span class="form__file-options">Размер файла не более 5мб</span>
        </div>
        <div 
          class="form__file-result" 
          v-if="result && file != ''"
        >
          <img class="form__img"
            :src="result == 'success' ? srcSuccess.src : srcWait.src"
            alt="result == 'success'? srcSuccess.alt : srcWait.alt  "
          />
          <label class="form__file-label">
            {{computedLabelTitle}}</label>
          <span 
            :class="result == 'success'
              ? 'form__file-action success-text'
              : 'form__file-action'"
          >
          {{computedActionTitle}}
          </span>
          <span class="form__file-options">{{ file.name }} {{ file.size }}kb</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcUpload: {
        src: require("../../public/img/upload.svg"),
        alt: "Загрузить файл",
      },
      srcWait: {
        src: require("../../public/img/wait.svg"),
        alt: "Проверка файла",
      },
      srcSuccess: {
        src: require("../../public/img/ok.svg"),
        alt: "Успешно загружено",
      },
      file: "",
      randomNum: "",
      result: true,
    };
  },
  computed: {
    computedActionTitle() {
      if (this.result === "success") return "Проверено";
      else return "Идет проверка";
    },
    computedLabelTitle() {
      if (this.result == "success") return "Страница с пропиской"; 
      else return "Файл загружен";
    }
  },
  methods: {
    onFileChange(event) {
      const input = document.getElementById('fileInput');
      this.result = true;

      const files = event.target.files;
      if (!files.length) return;
      this.file = files[0];
      if (this.file.size > 5000000) this.result = false;

      this.randomInteger();  

      setTimeout(() => {
        this.randomNum % 2 === 0
          ? (this.result = "success")
          : (this.result = false, input.value = '');
      }, 2000);
    },
    //создает рандомное число
    randomInteger() {
      let min = 1;
      let max = 10;
      let rand = min + Math.random() * (max + 1 - min);
      return (this.randomNum = Math.floor(rand));
    },
    //переводит фокус на инпут
    focusInput() {
      const btn = document.getElementById('inputBtn');
      btn.click();
    }
  },
};
</script>

<style lang="scss">
.form,
.documents__title,
.documents__text {
  width: 50%;
  margin: 0px auto;
}
.documents__title {
  margin-top: 90px;
  font-size: 20px;
}
.documents__text {
  margin-top: 20px;
  color: #9c9c9c;
}
.form {
  margin-top: 30px;
  &__file {
    position: relative;
  }
  &__file-input {
    position: absolute;
    transform: translateX(-1000%);
  }
  &__file-label {
    font-size: 18px;
    display: inline-block;
    width: 70%;
    padding-left: 40px;
    padding-top: 5px;
  }
  &__file-options {
    display: inline-block;
    padding-left: 90px;
    padding-top: 15px;
  }
  &__file-action {
    text-align: right;
    position: absolute;
    right: 0px;
    font-size: 18px;
    color: #9c9c9c;
  }
  &__img {
    width: 50px;
    height: 50px;
    float: left;
  }
  &__file .form__img {
    cursor: pointer;
  }
  &__file-result {
    margin-top: 30px;
    position: relative;
  }
}
.underline {
  text-decoration: underline;
  cursor: pointer;
}
.false-text {
  color: red;
}
.success-text {
  color: green;
}

@media (max-width: 819px) {
.container {
  min-width: 320px !important;
  width: 100vw;
}
.form__file-options {
  text-align: center;
}
.form,
.documents__title,
.documents__text {
  width: 80%;
}
}
@media (max-width: 555px) {
  .form__file-action {
    left: 0px;
    top: 60px;
    right: initial;
  }
}
</style>
