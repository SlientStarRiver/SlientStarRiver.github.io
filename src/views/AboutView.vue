<script setup lang="ts">
// 关于页面
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-3xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-6">关于我</h1>
        <div class="bg-dark-200 rounded-md p-6">
          <!-- 自我介绍 -->
          <div class="mb-6">
            <div class="text-accent-cyan mb-2">$ about_me</div>
            <p class="text-gray-300 leading-relaxed">
              我是一名专注于前端开发的工程师，拥有扎实的 Vue 3、TypeScript 和 Tailwind CSS 技能。
              我热爱构建简洁、高效、用户体验良好的 web 应用，注重代码质量和可维护性。
              我相信技术的价值在于解决实际问题，因此我总是以用户需求为中心，不断优化产品体验。
              我乐于学习新技术，保持对前端领域的敏感度，同时注重团队协作和知识分享。
            </p>
          </div>

          <!-- 教育背景 -->
          <div class="mb-6">
            <div class="text-accent-green mb-2">$ education</div>
            <div class="text-gray-300">
              <div class="mb-2">• 大数据科学与技术专业，本科</div>
              <div>• 获得蓝桥杯web开发省三等奖</div>
            </div>
          </div>

          <!-- 技术理念 -->
          <div>
            <div class="text-accent-purple mb-2">$ tech_philosophy</div>
            <div class="text-gray-300">
              <div class="mb-2">• 代码质量：注重可读性、可维护性和性能</div>
              <div class="mb-2">• 用户体验：简洁直观，响应迅速</div>
              <div class="mb-2">• 技术选型：根据项目需求选择合适的技术栈</div>
              <div class="mb-2">• 持续学习：关注前端领域的最新发展</div>
              <div>• 团队协作：清晰沟通，共享知识</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 技能栈 -->
      <div>
        <div class="text-accent-cyan mb-4">$ tech_stack</div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div class="bg-dark-200 px-3 py-2 rounded-md text-center">Vue 3</div>
          <div class="bg-dark-200 px-3 py-2 rounded-md text-center">TypeScript</div>
          <div class="bg-dark-200 px-3 py-2 rounded-md text-center">Tailwind CSS</div>
          <div class="bg-dark-200 px-3 py-2 rounded-md text-center">Vue Router</div>
          <div class="bg-dark-200 px-3 py-2 rounded-md text-center">Pinia</div>
          <div class="bg-dark-200 px-3 py-2 rounded-md text-center">Vite</div>
          <div class="bg-dark-200 px-3 py-2 rounded-md text-center">Element Plus</div>
          <div class="bg-dark-200 px-3 py-2 rounded-md text-center">Git</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 关于页面样式 */
</style>