<!-- Label.vue -->

<template>
  <span
    :class="`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${getColorClass(
      label.text
    )}`"
  >
    {{ label.text }}
  </span>
</template>

<script>
export default {
  props: {
    label: Object,
  },
  methods: {
    getColorClass(text) {
      const colorMap = {
        HTML: "bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500",
        CSS: "bg-sky-100 text-sky-800 dark:bg-sky-800/30 dark:text-sky-500",
        "Tailwind CSS":
          "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/30 dark:text-cyan-500",
        JavaScript:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500",
        jQuery:
          "bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500",
        "Node.js":
          "bg-lime-100 text-lime-800 dark:bg-lime-800/30 dark:text-lime-500",
        "Vue.js":
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-500",
        React:
          "bg-cyan-100 text-cyan-800 dark:bg-cyan-800/30 dark:text-cyan-500",
        "Next.js":
          "bg-stone-950 text-white dark:bg-stone-800/30 dark:text-white",
        Python:
          "bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-500",
        Flask:
          "bg-stone-100 text-stone-800 dark:bg-stone-800/30 dark:text-stone-500",
        Photoshop:
          "bg-sky-100 text-sky-800 dark:bg-sky-800/30 dark:text-sky-500",
        illustrator:
          "bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-500",
        "Adobe XD":
          "bg-pink-100 text-pink-800 dark:bg-pink-800/30 dark:text-pink-500",
        "Premiere Pro":
          "bg-violet-100 text-violet-800 dark:bg-violet-800/30 dark:text-violet-500",
      };

      return colorMap[text] || "";
    },
  },
};
</script>

<style scoped>
/* Add any specific styles for the label component if needed */
</style>
