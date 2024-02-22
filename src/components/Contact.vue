<template>
  <div class="container-box">
    <h1 class="text-center text-2xl m-4">お問い合わせ</h1>
    <form ref="form" @submit.prevent="sendEmail" class="pt-5 mx-auto">
      <div class="row mx-auto w-3/5">
        <div class="col-8 form-group mx-auto">
          <input
            type="text"
            class="form-control w-1/2"
            placeholder="お名前/会社名"
            v-model="name"
          />
        </div>
        <div class="col-8 form-group pt-3 mx-auto">
          <input
            type="text"
            class="form-control w-1/2"
            placeholder="メールアドレス"
            v-model="email"
          />
        </div>
        <div class="col-8 form-group pt-3 mx-auto">
          <input
            type="text"
            class="form-control w-1/2"
            placeholder="件名"
            v-model="subject"
          />
        </div>
        <div class="col-8 form-group pt-3 mx-auto">
          <textarea
            class="form-control"
            cols="30"
            rows="8"
            placeholder="内容"
            v-model="message"
          ></textarea>
        </div>
        <div class="col-8 pt-3 mx-auto">
          <input
            type="submit"
            value="Send"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-primary="teal-500"
            data-rounded="rounded-2xl"
            data-primary-reset="{}"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import emailjs from 'emailjs-com';
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      const params = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      emailjs
        .send(
          "service_qknof5u",
          "template_kx5c3bb",
          params,
          "hDwFp1OefzmNvq2pV"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert("送信しました！");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("送信に失敗しました...メールアドレスをご確認ください");
          }
        );

      // フォームをリセットする場合
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

form {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
}

textarea {
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  max-height: 100px;
  min-height: 100px;
  padding: 7px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(220, 220, 220);
}

input[type="submit"] {
  font-size: 17px;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.1s;
}

input[type="submit"]:hover {
  font-size: 17px;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.1s;
}

input[type="submit"]:active {
  position: relative;
  top: 2px;
}

.container-box {
  padding: 1rem;
}
</style>
