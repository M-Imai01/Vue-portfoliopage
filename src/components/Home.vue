<template>
  <section class="text-gray-600 body-font p-4">
    <div
      class="container px-5 mx-auto bg-white rounded-xl md:my-16 p-4 w-5/6 shadow"
    >
      <div class="flex flex-col md:flex-row items-center justify-evenly">
        <img
          src="../images/profileimage.jpg"
          class="object-covere w-40 rounded-full h-auto shrink"
        />
        <div class="sm:text-left mt-6 sm:mt-0 shrink" id="profile-text">
          <small class="text-[min(1.2vw,14px)]">Imai Mitsuaki</small>
          <h2 class="text-gray-900 text-[min(2vw,24px)] font-medium mb-2">
            今井 光明
          </h2>
          <p class="pb-4 text-[min(1.5vw,18px)]">
            家電量販店の販売員→手芸キットメーカーのECサイト運用担当→Webデザインの職業訓練を受講。<br />現在はメディアサイト運営会社でWEBデザイナー兼フロントエンドコーダー職として従事しています。
          </p>
          <p class="pb-4 text-[min(1.5vw,18px)]">
            Webアプリケーション作成の自己学習と並行して、<span
              class="text-orange-500 font-extrabold"
              >AWS SAA</span
            >の資格取得を目指し学習中です。
          </p>
        </div>
      </div>

      <div
        class="flex flex-col bg-neutral-100 border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] items-center"
      >
        <h2 class="py-4 text-[min(3.5vw,30px)] font-bold">保有資格</h2>
        <img
          class="h-auto rounded-t-xl w-40"
          src="../images/aws-certified-cloud-practitioner.png"
          alt="Image Description"
        />
        <div class="p-4 md:p-5">
          <h3
            class="text-[min(2vw,18px)] font-bold text-gray-800 dark:text-white text-center"
          >
            AWS Certified Cloud Practitioner
          </h3>
          <p
            class="mt-5 text-[min(1.2vw,12px)] text-gray-500 dark:text-gray-500"
          >
            取得日:2023/04/15
          </p>
        </div>
      </div>
    </div>
  </section>

  <div
    class="container px-5 py-14 mx-auto bg-white dark:bg-gray-800 mb-8 rounded-xl shadow my-16 p-4 w-5/6"
  >
    <div class="mb-16 text-center">
      <p
        class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl"
      >
        スキル
      </p>
    </div>
    <div class="flex flex-wrap my-12 dark:text-white">
      <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
        <div class="flex items-center mb-6">
          <img
            src="../images/htmlcss.png"
            alt="..."
            class="object-cover h-12 w-12"
          />
          <div class="ml-4 text-xl">HTML5/CSS3</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img
              src="../images/javascript.png"
              alt="..."
              class="object-cover h-12 w-12"
            />
          </div>
          <div class="ml-4 text-xl">Javascript</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div
        class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0"
      >
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img src="../images/Vue.svg" alt="..." class="h-12 w-12" />
          </div>
          <div class="ml-4 text-xl">Vue.js</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img src="../images/React.svg" alt="..." class="h-12 w-12" />
          </div>
          <div class="ml-4 text-xl">React</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img src="../images/nextjs.svg" alt="..." class="h-12 w-12" />
          </div>
          <div class="ml-4 text-xl">Next.js</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3">
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img
              src="../images/rails.svg"
              alt="..."
              class="h-12 w-12 object-scale-down"
            />
          </div>
          <div class="ml-4 text-xl">Ruby/Ruby on Rails</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div
        class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r"
      >
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img
              src="../images/github.svg"
              alt="..."
              class="h-12 w-12 object-scale-down"
            />
          </div>
          <div class="ml-4 text-xl">Git/Github</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img
              src="../images/supabase.svg"
              alt="..."
              class="h-12 w-12 object-scale-down"
            />
          </div>
          <div class="ml-4 text-xl">supabase</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div
        class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0"
      >
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img
              src="../images/heroku.svg"
              alt="..."
              class="h-12 w-12 object-scale-down"
            />
          </div>
          <div class="ml-4 text-xl">Heroku</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img
              src="../images/01-symbol_primary-blue-docker-logo.svg"
              alt="..."
              class="h-12 w-12 object-scale-down"
            />
          </div>
          <div class="ml-4 text-xl">Docker</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img
              src="../images/aws.svg"
              alt="..."
              class="h-12 w-12 object-scale-down"
            />
          </div>
          <div class="ml-4 text-xl">AWS</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3">
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img
              src="../images/photoshop.svg"
              alt="..."
              class="object-cover h-12 w-12 rounded-xl"
            />
          </div>
          <div class="ml-4 text-xl">Photoshop</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div
        class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r lg:border-b-0"
      >
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img
              src="../images/illustrator.svg"
              alt="..."
              class="object-cover h-12 w-12 rounded-xl"
            />
          </div>
          <div class="ml-4 text-xl">illustrator</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div
        class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0"
      >
        <div class="flex items-center mb-6">
          <div class="shrink-0">
            <img src="../images/Figma.svg" alt="..." class="h-12 w-12" />
          </div>
          <div class="ml-4 text-xl">XD/Figma</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
      <div class="w-full p-8 md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
        <div class="flex items-center mb-6">
          <img
            src="../images/PremierePro.svg"
            alt="..."
            class="object-cover h-12 w-12 rounded-xl"
          />
          <div class="ml-4 text-xl">Premiere Pro</div>
        </div>
        <div class="flex items-center gap-x-1">
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#profile-text {
  width: 50vw;
}
</style>
