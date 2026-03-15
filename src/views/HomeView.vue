<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 打字机效果
const text = '前端开发工程师 | Vue 3 + TypeScript + Tailwind CSS';
const typedText = ref('');
let index = 0;
let timer: number | null = null;

onMounted(() => {
  startTyping();
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});

function startTyping() {
  timer = window.setInterval(() => {
    if (index < text.length) {
      typedText.value += text.charAt(index);
      index++;
    } else {
      if (timer) {
        clearInterval(timer);
      }
    }
  }, 100);
}

// 导航方法
function navigateTo(path: string) {
  router.push(path);
}
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-3xl mx-auto">
      <!-- 终端风格标题 -->
      <div class="mb-8">
        <div class="flex items-center mb-2">
          <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="bg-dark-200 rounded-md p-4">
          <div class="text-accent-cyan mb-2">$ whoami</div>
          <div class="text-white text-2xl font-bold mb-4">唐永屹</div>
          <div class="text-accent-green mb-2">$ echo "专业技能"</div>
          <div class="text-gray-300 mb-4">前端开发工程师 | Vue 3 + TypeScript + Tailwind CSS</div>
          <div class="text-accent-purple mb-2">$ introduction</div>
          <div class="text-gray-300">
            <span>{{ typedText }}</span>
            <span class="animate-pulse">|</span>
          </div>
        </div>
      </div>

      <!-- 快速导航 -->
      <div class="mt-12">
        <div class="text-accent-cyan mb-4">$ navigation</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            @click="navigateTo('/projects')" 
            class="bg-dark-200 hover:bg-dark-100 transition-colors px-4 py-3 rounded-md text-left flex items-center"
          >
            <span class="text-accent-green mr-2">>></span>
            查看项目作品集
          </button>
          <button 
            @click="navigateTo('/about')" 
            class="bg-dark-200 hover:bg-dark-100 transition-colors px-4 py-3 rounded-md text-left flex items-center"
          >
            <span class="text-accent-green mr-2">>></span>
            了解个人背景
          </button>
          <button 
            @click="navigateTo('/contact')" 
            class="bg-dark-200 hover:bg-dark-100 transition-colors px-4 py-3 rounded-md text-left flex items-center"
          >
            <span class="text-accent-green mr-2">>></span>
            联系我
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 终端风格样式 */
</style>