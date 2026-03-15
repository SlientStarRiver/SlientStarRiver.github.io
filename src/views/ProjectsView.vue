<script setup lang="ts">
import { ref } from 'vue';
import { projects } from '../data/projects';

// 展开的项目ID
const expandedProjectId = ref<string | null>(null);

// 切换项目展开状态
function toggleProject(id: string) {
  if (expandedProjectId.value === id) {
    expandedProjectId.value = null;
  } else {
    expandedProjectId.value = id;
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-white mb-8">项目作品集</h1>
      
      <div class="grid grid-cols-1 gap-6">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-dark-200 rounded-md overflow-hidden"
        >
          <!-- 项目卡片头部 -->
          <div 
            class="p-6 cursor-pointer hover:bg-dark-100 transition-colors"
            @click="toggleProject(project.id)"
          >
            <div class="flex justify-between items-start">
              <h2 class="text-xl font-bold text-white mb-2">{{ project.title }}</h2>
              <span class="text-accent-cyan">
                {{ expandedProjectId === project.id ? '▼' : '▶' }}
              </span>
            </div>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>
            
            <!-- 技术栈标签 -->
            <div class="flex flex-wrap gap-2">
              <el-tag 
                v-for="tech in project.techStack" 
                :key="tech"
                size="small"
                class="bg-dark-100 text-gray-300 border border-gray-700"
              >
                {{ tech }}
              </el-tag>
            </div>
          </div>
          
          <!-- 展开的详情 -->
          <transition name="fade">
            <div 
              v-if="expandedProjectId === project.id"
              class="px-6 pb-6 border-t border-gray-700"
            >
              <!-- 详细描述 -->
              <div v-if="project.longDescription" class="mb-4">
                <div class="text-accent-green mb-2">$ description</div>
                <p class="text-gray-300">{{ project.longDescription }}</p>
              </div>
              
              <!-- 项目亮点 -->
              <div class="mb-4">
                <div class="text-accent-purple mb-2">$ highlights</div>
                <ul class="list-disc list-inside text-gray-300 space-y-1">
                  <li v-for="(highlight, index) in project.highlights" :key="index">
                    {{ highlight }}
                  </li>
                </ul>
              </div>
              
              <!-- 项目链接 -->
              <div class="flex flex-wrap gap-4">
                <a 
                  :href="project.github" 
                  target="_blank"
                  class="text-accent-cyan hover:underline flex items-center"
                >
                  <span class="mr-1">GitHub</span>
                  <span>↗</span>
                </a>
                <a 
                  :href="project.demo" 
                  target="_blank"
                  class="text-accent-cyan hover:underline flex items-center"
                >
                  <span class="mr-1">Demo</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>