<script setup lang="ts">
// 联系页面
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-white mb-8">联系我</h1>
      
      <div class="bg-dark-200 rounded-md p-6 mb-8">
        <!-- 联系方式 -->
        <div class="mb-8">
          <div class="text-accent-cyan mb-4">$ contact_info</div>
          
          <div class="space-y-4">
            <div class="flex items-center">
              <span class="text-accent-green mr-3">✉️</span>
              <a href="mailto:2507739220@qq.com" class="text-gray-300 hover:text-accent-cyan transition-colors">
                2507739220@qq.com
              </a>
            </div>
            
            <div class="flex items-center">
              <span class="text-accent-green mr-3">🐱</span>
              <a href="https://github.com/SlientStarRiver" target="_blank" class="text-gray-300 hover:text-accent-cyan transition-colors">
                github.com/SlientStarRiver
              </a>
            </div>
          </div>
        </div>
        
        <!-- CTA -->
        <div>
          <div class="text-accent-purple mb-4">$ recruitment_status</div>
          <div class="bg-dark-100 rounded-md p-4 border border-gray-700">
            <p class="text-white font-bold mb-2">开放北京大厂前端实习/校招</p>
            <p class="text-gray-300 mb-4">
              我正在寻找北京地区的前端开发实习或校招机会，也可以考虑远程工作。
              我具备扎实的前端技术基础，热爱学习新技术，注重代码质量和用户体验。
            </p>
            <el-button type="primary" class="bg-accent-cyan hover:bg-accent-cyan/80 border-accent-cyan">
              立即联系
            </el-button>
          </div>
        </div>
      </div>
      
      <!-- 技术栈 -->
      <div>
        <div class="text-accent-cyan mb-4">$ skills</div>
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
/* 联系页面样式 */
</style>