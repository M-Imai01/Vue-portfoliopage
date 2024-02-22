<template>
  <div class="bg-gray-100 p-4 px-32">
    <!-- タブのコード -->
    <div class="flex justify-center py-6 w-10vw">
      <nav class="flex bg-gray-300 rounded-lg transition p-1 dark:bg-gray-700">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'hs-tab-active:bg-blue-600 hs-tab-active:text-white hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-4 text-center basis-0 grow inline-flex justify-center items-center gap-x-2 bg-transparent font-medium rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-[min(1.7vw,16px)]',
            {
              '!bg-blue-600 text-white': activeTab === tab,
              'hover:bg-blue-400 hover:text-white': activeTab !== tab,
            },
          ]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </nav>
    </div>

    <!-- 画像ギャラリーのコード -->
    <div
      class="gallery grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 text-center justify-center"
    >
      <div
        v-for="(image, index) in filteredImages"
        :key="index"
        class="gallery-item p-4 bg-white shadow-md w-full sm:px-2 rounded-xl cursor-pointer hover:shadow-xl"
        @click="openModal(image)"
      >
        <div class="image-content">
          <img :src="image.url" alt="Image" class="w-full bg-slate-100" />
          <!-- ラベルUIパーツの表示 -->
          <div class="mt-2 flex flex-wrap gap-2 pt-4">
            <span
              v-for="(label, labelIndex) in image.labels"
              :key="labelIndex"
              :class="`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-${label.color}-100 text-${label.color}-800 dark:bg-${label.color}-800/30 dark:text-${label.color}-500`"
            >
              {{ label.text }}
            </span>
          </div>
          <p class="text-xl font-extrabold mt-2">
            {{ image.title }}
          </p>
        </div>
      </div>
    </div>

    <!-- モーダルウィンドウのコード -->
    <!-- md: sm: → flex low-reverse -->
    <div
      v-if="modalVisible"
      @click="closeModalOverlay"
      class="modal-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50 overflow-scroll"
    >
      <div
        class="modal-content bg-white p-6 m-8 rounded-lg shadow-md flex relative w-full sm:w-2/3 md:w-3/4 lg:w-4/5"
        @click.stop
      >
        <button class="close-button absolute top-2 right-2" @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>

        <div class="flex flex-row max-w-full overflow-y-scroll" id="modal-flex">
          <!-- 画像 -->
          <div
            class="image-container bg-slate-100 flex justify-center object-contain"
            id="img-flex"
          >
            <img
              :src="selectedImage.url"
              alt="Image"
              class="object-contain h-auto w-full max-w-5xl items-center"
              id="modal-img"
            />
          </div>

          <!-- 概要大枠 -->
          <div class="modal-info ml-4">
            <h3
              class="text-[min(2vw,18px)] font-bold py-4 border-b-2 border-black"
              id="modal-title"
            >
              {{ selectedImage.title }}
            </h3>
            <!-- ラベルUIパーツの表示 -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="(label, labelIndex) in selectedImage.labels"
                :key="labelIndex"
                :class="`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[min(1.5vw,12px)] font-medium bg-${label.color}-100 text-${label.color}-800 dark:bg-${label.color}-800/30 dark:text-${label.color}-500`"
              >
                {{ label.text }}
              </span>
            </div>

            <!-- 説明文・ボタンここから -->
            <div class="max-w-full">
              <p
                class="pt-4 lg:text-[min(1vw,16px)] md:text-[min(1.8vw,14px)] break-all"
                v-html="selectedImage.description"
              ></p>
              <div class="modal-buttons mt-4 space-x-4 text-center">
                <button
                  v-if="selectedImage.githubLink"
                  @click="openLink(selectedImage.githubLink)"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-[min(1.2vw,14px)] font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
                >
                  Go to Github
                </button>
                <button
                  v-if="selectedImage.siteLink"
                  @click="openLink(selectedImage.siteLink)"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-[min(1.2vw,14px)] font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Go to Website
                </button>
              </div>
            </div>
            <!-- 説明文・ボタンここまで -->
          </div>
          <!-- 概要大枠ここまで -->
        </div>
      </div>
    </div>
    <!-- モーダル終了 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "Dev",
      tabs: ["Dev", "Design", "Other"],
      images: [
        // Dev Tab
        {
          url: "src/images/Develop05.gif",
          tab: "Dev",
          title: "Next.js マイクロブログアプリ",
          description:
            "【概要】<br>Udemyの講座でNext.js13を使用したマイクロブログを作成しました。<br>簡易APIを作成し、記事データはSupabaseで永続化しています。",
          githubLink: "https://github.com/M-Imai01/next.js-tailwindcss-blog",
          labels: [
            { text: "Next.js", color: "black" },
            { text: "TypeScript", color: "blue" },
            { text: "Tailwind CSS", color: "cyan" },
            { text: "Supabase", color: "emerald" },
            { text: "学習", color: "neutral" },
          ],
        },
        {
          url: "src/images/Develop03.webp",
          tab: "Dev",
          title: "Node.js/Express リアルタイムチャットアプリ",
          description:
            "【概要】<br>Node.jsとExpressを使ってリアルタイムにチャットが反映されるアプリを作りました。<br>同じページを開いたウィンドウを横に2つ並べると疑似的なチャットアプリになります。<br>POSTした内容はDBには保存していないのでページをリロードすると消えます。",
          githubLink: "https://github.com/M-Imai01/Node.js-realtime-chatapp",
          siteLink:
            "https://nodejs-realtime-chatapp-abb55e1f7d26.herokuapp.com/",
          labels: [
            { text: "Node.js", color: "lime" },
            { text: "Express", color: "neutral" },
            { text: "学習", color: "neutral" },
          ],
        },
        {
          url: "src/images/Develop02.webp",
          tab: "Dev",
          title: "Python/flask 商品情報登録サンプルアプリ",
          description:
            "【概要】制作時間:約1.5時間<br>・Pythonのマイクロフレームワークである「Flask」を使用して、簡単なWebアプリケーションを作成し、動作を確認しました。<br>【コンセプト・ポイント】<br>・作成した所感としては、Flaskではローカルサーバーの起動やデータベースの作成が比較的簡単に実装でき、初学者がアプリケーション開発の実感を掴むのに有用であると感じました。<br>・現状では、データベースにデータを登録する機能のみを作成したため、今後このアプリを修正する場合は、登録したデータの削除や編集機能を実装する必要があると考えております。",
          githubLink: "https://github.com/M-Imai01/Flask_App",
          labels: [
            { text: "Python", color: "yellow" },
            { text: "Flask", color: "stone" },
          ],
        },
        {
          url: "src/images/Develop01.webp",
          tab: "Dev",
          title: "HTML/CSS/jQuery 架空の企業のサイト制作",
          description:
            "【概要】制作時間:約21時間<br>・職業訓練校の卒業課題で３人１組になり、３日間の間に架空の企業のWebサイトを作るという制作を行いました。<br>・１人はデザイン、もう１人はディレクターを担当し、私はコーディングを担当しました。<br>【コンセプト・ポイント】<br>・各画像の配置や、右上の矢印画像を押すとメニューが開く機能の実装に苦労した記憶があります。<br>・拙い作りでレスポンシブ化も実装できていませんが、思い出が多く残っているページなので制作物の１つとして掲載しております。",
          siteLink: "public/index.html",
          labels: [
            { text: "HTML", color: "red" },
            { text: "CSS", color: "sky" },
            { text: "jQuery", color: "blue" },
          ],
        },
        {
          url: "src/images/Develop04.webp",
          tab: "Dev",
          title: "ポートフォリオページ",
          description:
            "【概要】このページです。<br>Vue.js、Tailwind CSS、Preline UIを使用し作成しました。",
          githubLink: "https://github.com",
          siteLink: "https://www.yahoo.co.jp",
          labels: [
            { text: "Vue.js", color: "emerald" },
            { text: "Tailwind CSS", color: "cyan" },
          ],
        },
        // Design Tab
        {
          url: "src/images/Design08.webp",
          tab: "Design",
          title: "サイトトップページのプロトタイプ作成",
          description:
            "【概要】<br>制作時間:約4時間<br>・以前勤めていた会社の業務内で作成しました。<br>・顧客先のサイト作成をWeb制作会社に依頼する際のプロトタイプデザインをAdobe XDで作成しました。<br>【コンセプト・ポイント】<br>・社内にはある程度のテンプレートが用意されていたので、それに添いながらお客様の要望されるポイントをデザインに落とし込んでいきました。",
          siteLink: "https://www.city.minamiashigara.kanagawa.dbsr.jp/",
          labels: [{ text: "Adobe XD", color: "pink" }],
        },
        {
          url: "src/images/Design09.webp",
          tab: "Design",
          title: "薬局のチラシ制作 2023年度",
          description:
            "【概要】<br>制作時間:約2.5時間<br>・薬局チラシ制作①の1年後に同様のイベントを開催することになった際のチラシ作成です。<br>【コンセプト・ポイント】<br>・チラシの色味を1年前のものから変更し、前年度のものより落ち着いた印象にしました。<br>・地図の下のテキストに枠はいらないとのことだったので、文字自体に枠をつけて可能な限り可読性を持たせるようにしました。",
          labels: [{ text: "illustrator", color: "orange" }],
        },
        {
          url: "src/images/Design03.webp",
          tab: "Design",
          title: "薬局のチラシ制作 2022年度",
          description:
            "【概要】<br>制作時間:約2.5時間<br>・薬局チラシ制作①の1年後に同様のイベントを開催することになった際のチラシ作成です。<br>【コンセプト・ポイント】<br>・チラシの色味を1年前のものから変更し、前年度のものより落ち着いた印象にしました。<br>・地図の下のテキストに枠はいらないとのことだったので、文字自体に枠をつけて可能な限り可読性を持たせるようにしました。",
          labels: [{ text: "illustrator", color: "orange" }],
        },
        {
          url: "src/images/Design02.webp",
          tab: "Design",
          title: "薬局のチラシ制作 2021年度",
          description:
            "【概要】<br>制作時間:約3時間<br>・イベントの告知をするためにお客様に配布するチラシの制作<br>【コンセプト・ポイント】<br>実施内容に合ったイラストや地図、店舗写真も掲載してほしいとの要望に合わせ制作しました。<br>・地図は illustrator のパスで作成しました。<br>・相手側の意向により、地図の下のボックスにはかなり長文が入り込みましたが、可能な限り可読性を確保するようにしました。",
          labels: [{ text: "illustrator", color: "orange" }],
        },
        {
          url: "src/images/Design01.webp",
          tab: "Design",
          title: "病院のチラシ制作",
          description:
            "【概要】<br>texttexttexttexttexttexttexttexttexttexttexttexttext<br><br>texttexttexttexttexttexttexttexttexttexttexttexttext<br><br>texttexttexttexttexttexttexttexttexttexttexttexttext<br>  ",
          githubLink: "https://github.com",
          siteLink: "https://www.yahoo.co.jp",
        },
        {
          url: "src/images/Design04.webp",
          tab: "Design",
          title: "職業訓練/ロゴの制作①",
          description:
            "【概要】<br>制作時間:約1.5時間<br>・職業訓練校で企業のロゴ制作課題があり、父親が勤める実在する会社のロゴを制作してみました。<br>【コンセプト・ポイント】<br>・グリーン＝緑、熱海＝暖かそうな土地で赤とシンプルにイメージできる配色にしました。",
          labels: [{ text: "illustrator", color: "orange" }],
        },
        {
          url: "src/images/Design05.webp",
          tab: "Design",
          title: "職業訓練/ロゴの制作②",
          description:
            "【概要】<br>制作時間:約2.5時間<br>・ロゴ制作①で作成したロゴを使用し、会社の名刺・パンフレットのデザインを作りました。<br>【コンセプト・ポイント】<br>・名刺・ロゴ共に、会社向けのオフィシャルな様相になるよう仕上げました。",
          labels: [{ text: "illustrator", color: "orange" }],
        },
        {
          url: "src/images/Design06.webp",
          tab: "Design",
          title: "職業訓練/ロゴの制作③",
          description:
            "【概要】<br>制作時間:約1.5時間<br>・会社パンフレットの内容を元に、LPの案を考えました。<br>【コンセプト・ポイント】<br>・背景は白だと無機質な印象を受けたので、クリーム色して暖かみを出しました。<br>・ヘッダー直下の空の写真は、会社から実際に見える風景写真を使用しました。",
          labels: [{ text: "Photoshop", color: "sky" }],
        },
        {
          url: "src/images/Design07.webp",
          tab: "Design",
          title: "職業訓練/Tシャツ制作課題",
          description:
            "【概要】<br>制作時間:約3時間<br>・職業訓練校時代にTシャツのデザイン制作課題があり、Webデザインを学び始めてから感じ始めていた、デザインする事の楽しさを表現しようと思い制作しました。<br>【コンセプト・ポイント】<br>・左右ともに共通して、カラフルな色合いにして楽しい雰囲気を出そうと思いました。<br>・左のデザインは色合いはレトロな色合いにし、誌面などの非デジタルイラスト感を表現しました。<br>・右のデザインはドットが欠ける効果をつけて、デジタルデータ感（Web上でのデザイン）の雰囲気を出しました。",
          labels: [{ text: "illustrator", color: "orange" }],
        },
        // Other Tab
        {
          url: "src/images/Other01.webp",
          tab: "Other",
          title: "前職での動画制作①",
          description:
            "【概要】<br>制作時間:約12時間<br>以前勤務していた手芸キットメーカー会社で、自社商品の作り方動画を作成することになり、動画の企画・撮影・編集を行いました。<br>【コンセプト・ポイント】<br>・絵コンテ作成、スマホを使った撮影、Adobe Premiere Proを使った編集など実務では初めての経験づくしでしたが、概ね満足のいく出来となりました。<br>・課題点としては、撮影時のライティングが不足しており、全体的に画面が暗いという問題が残りました。",
          siteLink:
            "https://www.youtube.com/watch?v=C70Ao0_EBgw&feature=youtu.be",
          labels: [{ text: "Premiere Pro", color: "violet" }],
        },
        {
          url: "src/images/Other02.webp",
          tab: "Other",
          title: "前職での動画制作②",
          description:
            "【概要】<br>制作時間:約11時間<br>こちらは2本目に作成した動画です。<br>【コンセプト・ポイント】<br>・1本目の動画の反省を活かし、ライティングを改善したため明るさは満足のいくものとなりました。",
          siteLink:
            "https://www.youtube.com/watch?v=cabLTpnWU-E&feature=youtu.be",
          labels: [{ text: "Premiere Pro", color: "violet" }],
        },
      ],
      modalVisible: false,
      selectedImage: null,
    };
  },
  methods: {
    openModal(image) {
      this.selectedImage = image;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    closeModalOverlay() {
      if (event.target.classList.contains("modal-overlay")) {
        this.closeModal();
      }
    },
    openLink(link) {
      window.open(link, "_blank");
    },
  },
  computed: {
    filteredImages() {
      return this.images.filter((image) => image.tab === this.activeTab);
    },
  },
};
</script>

<style scoped>
#modal-img {
  max-height: 450px;
}

#modal-flex {
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
}

#modal-title {
  @media screen and (max-width: 950px) {
    text-align: center;
  }
}

.modal-content {
  max-height: 90%;
}

/* #img-flex {
  min-width: 400px;
} */
</style>
