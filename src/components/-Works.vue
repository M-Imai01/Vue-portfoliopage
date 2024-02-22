<template>
  <div class="bg-gray-100 p-4">
    <div class="flex justify-center">
      <div class="tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab"
          :class="{ 'active-tab': activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <div class="gallery flex flex-wrap justify-start">
      <div
        v-for="(image, index) in filteredImages"
        :key="index"
        class="gallery-item p-4 bg-white shadow-md"
        @click="openModal(image)"
      >
        <div class="image-content cursor-pointer">
          <img :src="image.url" alt="Image" class="w-full" />
          <p class="text-sm mt-2">{{ image.title }}</p>
        </div>
      </div>
    </div>

    <div
      v-if="modalVisible"
      class="modal fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80"
    >
      <div
        class="modal-content bg-white p-6 m-8 rounded-lg shadow-md flex relative"
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
        <div class="image-container">
          <img :src="selectedImage.url" alt="Image" class="modal-image w-64" />
        </div>
        <div class="modal-info ml-4">
          <h3 class="text-5xl font-bold py-4">{{ selectedImage.title }}</h3>
          <!-- <p>{{ selectedImage.description }}</p> -->
          <p
            class="border-t-2 border-black pt-6"
            v-html="selectedImage.description"
          ></p>
          <!-- v-html を使って改行を含むHTMLを表示 -->
          <div class="modal-buttons mt-4 space-x-4">
            <button
              v-if="selectedImage.githubLink"
              @click="openLink(selectedImage.githubLink)"
              class="button-gray"
            >
              Go to Github
            </button>
            <button
              v-if="selectedImage.siteLink"
              @click="openLink(selectedImage.siteLink)"
              class="button-colored"
            >
              Go to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "Design",
      tabs: ["Design", "Dev", "Other"],
      images: [
        // Design Tab
        {
          url: "src/images/Design01.png",
          tab: "Design",
          title: "病院のチラシ制作",
          description:
            "【概要】<br>制作時間: 約1時間 <br>・知人の診療所で「コロナ禍で事前連絡もなしにいきなり来院される方がいて困っているので、ポスターを作ってほしい」との依頼を受け作成しました。<br>【コンセプト・ポイント】<br>・ポスターのラフをいただき、簡単でいいからとにかく急ぎでとの要望を受け制作しました。<br>・とにかく患者さんに伝わりやすいように最低限の情報がわかるようシンプルにしました。<br>", // 改行を含むHTMLを使用
          githubLink: "https://github.com",
          siteLink: "https://www.yahoo.co.jp",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Design",
          title: "薬局のチラシ制作①",
          description:
            "【概要】<br>制作時間: 約3時間 <br>・イベントの告知をするためにお客様に配布するチラシの制作<br>【コンセプト・ポイント】<br>実施内容に合ったイラストや地図、店舗写真も掲載してほしいとの要望に合わせ制作しました。<br>・地図は illustrator のパスで作成しました。<br>・相手側の意向により、地図の下のボックスにはかなり長文が入り込みましたが、可能な限り可読性を確保するようにしました。",
          githubLink: "https://github.com",
          siteLink: "https://www.yahoo.co.jp",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Design",
          title: "薬局のチラシ制作②",
          description:
            "【概要】<br>制作時間: 約2.5時間 <br>・薬局チラシ制作①の1年後に同様のイベントを開催することになった際のチラシ作成です。<br>【コンセプト・ポイント】<br>・チラシの色味を1年前のものから変更し、前年度のものより落ち着いた印象にしました。<br>・地図の下のテキストに枠はいらないとのことだったので、文字自体に枠をつけて可能な限り可読性を持たせるようにしました。",
          githubLink: "https://github.com",
          siteLink: "https://www.yahoo.co.jp",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Design",
          title: "ロゴの制作",
          description:
            "【概要】<br>制作時間: 約1.5時間 <br>・職業訓練校で企業のロゴ制作課題があり、父親が勤める実在する会社のロゴを制作してみました。<br>【コンセプト・ポイント】<br>・グリーン＝緑、熱海＝暖かそうな土地で赤とシンプルにイメージできる配色にしました。",
          githubLink: "https://github.com",
          siteLink: "https://www.yahoo.co.jp",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Design",
          title: "パンフレット・名刺の制作",
          description:
            "【概要】<br>制作時間: 約2.5時間 <br>・ロゴ制作で作成したロゴを使用し、会社の名刺・パンフレットのデザインを作りました。<br>【コンセプト・ポイント】<br>・名刺・ロゴ共に、会社向けのオフィシャルな様相になるよう仕上げました。",
          githubLink: "https://github.com",
          siteLink: "https://www.yahoo.co.jp",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Design",
          title: "LPの制作",
          description:
            "【概要】<br>制作時間: 約1.5時間 <br>・会社パンフレットの内容を元に、LPのデザインサンプルを考えました。<br>【コンセプト・ポイント】<br>・背景は白だと無機質な印象を受けたので、クリーム色して暖かみを出しました。<br>・ヘッダー直下の空の写真は、会社から実際に見える風景写真を使用しました。",
          githubLink: "https://github.com",
          siteLink: "https://www.yahoo.co.jp",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Design",
          title: "Tシャツ制作課題　タイトル：I♥Design",
          description:
            "【概要】<br>制作時間: 約3時間 <br>・職業訓練校時代にTシャツのデザイン制作課題があり、Webデザインを学び始めてから感じ始めていた、デザインする事の楽しさを表現しようと思い制作しました。<br>【コンセプト・ポイント】<br>・左右ともに共通して、カラフルな色合いにして楽しい雰囲気を出そうと思いました。<br>・左のデザインは色合いはレトロな色合いにし、誌面などの非デジタルイラスト感を表現しました。<br>・右のデザインはドットが欠ける効果をつけて、デジタルデータ感（Web上でのデザイン）の雰囲気を出しました。",
          githubLink: "https://github.com",
          siteLink: "https://www.yahoo.co.jp",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Design",
          title: "サイトトップページのプロトタイプ作成",
          description:
            "【概要】<br>制作時間: 約4時間 <br>・以前勤めていた会社の業務内で作成しました。<br>・顧客先のサイト作成をWeb制作会社に依頼する際のプロトタイプデザインをAdobe XDで作成しました。<br>【コンセプト・ポイント】<br>・社内には大まかなプロトタイプデザインのテンプレートが用意されていたので、それに添いながらお客様の要望されるポイントをデザインに落とし込んでいきました。",
          siteLink: "https://www.city.minamiashigara.kanagawa.dbsr.jp/",
        },
        // Add more images to Design tab
        // ... (Add 3 more images)

        // Dev Tab
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Dev",
          title: "職業訓練校　架空の企業のサイト制作",
          description:
            "【概要】<br>制作時間: 約21時間 <br>・職業訓練校の卒業課題で３人１組になり、３日間の間に架空の企業のWebサイトを作るという制作を行いました。<br>・１人はデザイン、もう１人はディレクターを担当し、私はコーディングを担当しました。<br>【コンセプト・ポイント】<br>・各画像の配置や、右上の矢印画像を押すとメニューが開く機能の実装に苦労した記憶があります。<br>・拙い作りでレスポンシブ化も実装できていませんが、思い出が多く残っているページなので、Herokuでデプロイし制作物の１つとして掲載しております。<br>",
          githubLink: "https://github.com/M-Imai01/okui_samplePage",
          siteLink: "https://okui-app.herokuapp.com/",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Dev",
          title: "Python/flaskを使用したWebアプリ",
          description:
            "【概要】<br>制作時間: 約1.5時間 <br>・Pythonのマイクロフレームワークである「Flask」を使用して、簡単なWebアプリケーションを作成し、動作を確認しました。<br>【コンセプト・ポイント】<br>・作成した所感としては、Flaskではローカルサーバーの起動やデータベースの作成が比較的簡単に実装でき、初学者がアプリケーション開発の実感を掴むのに有用であると感じました。<br>・現状では、データベースにデータを登録する機能のみを作成したため、今後このアプリを修正する場合は、登録したデータの削除や編集機能を実装する必要があると考えております。",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Dev",
          title: "このポートフォリオページ",
          description:
            "【概要】<br>制作時間: 約20時間 <br>・今ご覧いただいているこのポートフォリオページは、React上でBootstrapを扱えるライブラリ「React- Bootstrap」を使用し作成しています。<br>・モダンな技術のReactを使って何か作成してみたいなと考えていた時に、自分のポートフォリオページを作るのに試してみようかと思い立ち、制作に至りました。<br>【コンセプト・ポイント】<br>・制作物をカテゴリーごとにタブで切り替えて表示させつつ、Modalウィンドウを同時に実装する点が非常に難航しました。最終的にはCSSのみでModalを実装しました。<br>・全体的なレスポンシブ化は概ね上手くいったかと思いますが、制作物の画像が重く、表示に難点があることが今後の課題となります。",
          githubLink: "https://github.com/M-Imai01/okui_samplePage",
          siteLink: "https://okui-app.herokuapp.com/",
        },
        // Add more images to Dev tab
        // ... (Add 3 more images)

        // Other Tab
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Other",
          title: "前職での動画制作①",
          description:
            "【概要】<br>制作時間: 約12時間 <br>以前勤務していた手芸キットメーカー会社で、自社商品の作り方動画を作成することになり、動画の企画・撮影・編集を行いました。<br>【コンセプト・ポイント】<br>・絵コンテ作成、スマホを使った撮影、Adobe Premiere Proを使った編集など実務では初めての経験づくしでしたが、概ね満足のいく出来となりました。<br>・課題点としては、撮影時のライティングが不足しており、全体的に画面が暗いという問題が残りました。",
          siteLink: "https://youtu.be/C70Ao0_EBgw",
        },
        {
          url: "https://placehold.jp/750x550.png",
          tab: "Other",
          title: "前職での動画制作②",
          description:
            "【概要】<br>制作時間: 約11時間 <br>こちらは2本目に作成した動画です。<br>【コンセプト・ポイント】<br>・1本目の動画の反省を活かし、ライティングを改善したため明るさは満足のいくものとなりました。",
          siteLink: "https://youtu.be/cabLTpnWU-E",
        },
        // Add more images to Other tab
        // ... (Add 3 more images)
      ],
      modalVisible: false,
      selectedImage: {},
      buttonsVisible: false,
    };
  },
  computed: {
    filteredImages() {
      return this.images.filter((image) => image.tab === this.activeTab);
    },
  },
  methods: {
    openModal(image) {
      this.selectedImage = image;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    openLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tab {
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 2px;
  background-color: #ccc;
  border: 1px solid #999;
  border-radius: 5px;
}

.active-tab {
  background-color: #34d399;
  color: white;
}

.gallery-item {
  width: calc(33.3333% - 10px);
  margin-right: 10px;
  margin-bottom: 20px;
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
}

.button-gray {
  background-color: #ccc;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
}

.button-colored {
  background-color: #0bd;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
}

.image-container {
  width: auto;
  height: auto;
  /* max-width: 80%; 画面幅の80%まで */
  /* max-height: 80vh; 画面の高さの80%まで */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
