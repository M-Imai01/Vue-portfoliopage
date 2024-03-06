<!-- ImageLoader.vue -->
<template>
  <div>
    <img
      :src="imageUrl"
      alt="Supabase Image"
      class="object-contain h-auto w-full max-w-5xl items-center"
      id="modal-img"
    />
    <!-- 他のコンテンツはそのまま残しておく -->
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { createClient } from "@supabase/supabase-js";

export default {
  props: {
    image: Object, // 親コンポーネントから画像データを渡す
  },
  setup(props) {
    const imageUrl = ref("");

    const fetchImage = async () => {
      if (props.image) {
        const supabase = createClient(
          "https://stjrdkcflnnbqkbuqtdf.supabase.co",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0anJka2NmbG5uYnFrYnVxdGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1ODg1MzEsImV4cCI6MjAyNDE2NDUzMX0.bN_nKuMo7ABu3lwo5aFc1fm1ovublQx7-bOPaCda9iY"
        );
        const { data, error } = await supabase.storage
          .from("Portfolio-Image")
          .getPublicUrl(props.image.url);

        if (error) {
          console.error("Error fetching image:", error.message);
        } else {
          imageUrl.value = data;
        }
      }
    };

    // image プロパティの変更を監視し、変更があれば fetchImage メソッドを呼び出す
    watch(() => props.image, fetchImage);

    // コンポーネントがマウントされたときにも画像を読み込む
    onMounted(fetchImage);

    return {
      imageUrl,
    };
  },
};
</script>
