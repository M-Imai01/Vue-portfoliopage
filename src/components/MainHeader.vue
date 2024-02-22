<!-- <template>
  <header
    class="flex justify-around items-center bg-green-400 text-white h-24 sticky top-0 z-50"
    id="header"
  >
    <div class="flex items-center justify-center">
      <img class="w-56" src="../images/PORTFOLIO.png" />
    </div>

    <nav>
      <ul class="flex">
        <li>
          <router-link
            :to="{ path: '/' }"
            class="md:text-[2vmax] hover:text-green-600"
            >HOME</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'Works' }"
            class="px-4 md:text-[2vmax] hover:text-green-600"
            >Works</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'Contact' }"
            class="md:text-[2vmax] hover:text-green-600"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "ヘッダー",
    };
  },
};
</script>

<style scoped></style> -->

<template>
  <header
    class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-emerald-500 text-sm py-3 sm:py-0 sticky top-0 z-40"
  >
    <nav
      class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <router-link :to="{ path: '/' }" aria-current="page">
          <img class="w-56" src="../images/PORTFOLIO.png" alt="Brand" />
        </router-link>
        <div class="sm:hidden">
          <button
            type="button"
            class="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              class="hs-collapse-open:hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="hs-collapse-open:block hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7"
        >
          <router-link
            :to="{ path: '/' }"
            class="text-2xl font-medium text-white sm:py-6 hover:text-white/[.8]"
            aria-current="page"
            >HOME</router-link
          >
          <router-link
            :to="{ name: 'Works' }"
            class="text-2xl font-medium text-white sm:py-6 hover:text-white/[.8] lg:px-4"
            href="#"
            >Works</router-link
          >
          <router-link
            :to="{ name: 'Contact' }"
            class="text-2xl font-medium text-white sm:py-6 hover:text-white/[.8]"
            href="#"
            >Contact</router-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "ヘッダー",
    };
  },
};
</script>

<style scoped></style>
