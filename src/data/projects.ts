import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: '极简暗色博客系统',
    description: '基于 Vue 3 + TypeScript + Tailwind CSS 构建的极简暗色风格博客系统',
    longDescription: '这是一个专注于内容阅读体验的博客系统，采用极简暗色设计，提供舒适的阅读环境。系统支持 markdown 文章编辑、分类管理、标签系统等功能，完全响应式设计，适配各种设备。',
    techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Vue Router'],
    highlights: [
      '使用 Composition API 实现组件逻辑',
      '强类型定义，确保代码质量',
      'Tailwind 实用类构建响应式布局',
      '暗色主题设计，保护视力',
      '支持 markdown 语法高亮'
    ],
    github: 'https://github.com/username/blog-system',
    demo: 'https://blog-demo.com'
  },
  {
    id: '2',
    title: '终端风格待办事项',
    description: '模拟终端界面的待办事项应用，支持任务管理和状态跟踪',
    longDescription: '这个待办事项应用采用终端风格设计，提供命令行式的用户体验。支持任务添加、编辑、删除、标记完成等功能，数据持久化存储，界面简洁直观，操作流畅。',
    techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
    highlights: [
      '终端风格界面设计',
      '实时任务状态更新',
      '数据本地持久化',
      '响应式布局',
      '轻量级实现，首屏加载快'
    ],
    github: 'https://github.com/username/terminal-todo',
    demo: 'https://todo-demo.com'
  },
  {
    id: '3',
    title: '技术栈可视化工具',
    description: '将技术栈以可视化方式展示的单页应用',
    longDescription: '这个工具可以帮助开发者可视化展示自己的技术栈，支持添加、删除、编辑技术项，设置熟练度等级，生成美观的技术图谱。界面采用暗色主题，布局清晰，交互流畅。',
    techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'D3.js'],
    highlights: [
      '技术栈可视化展示',
      '支持拖拽排序',
      '熟练度等级设置',
      '响应式设计',
      '数据导出功能'
    ],
    github: 'https://github.com/username/tech-stack-visualizer',
    demo: 'https://tech-stack-demo.com'
  },
  {
    id: '4',
    title: '暗色模式切换器',
    description: '演示如何实现系统级暗色模式切换的示例应用',
    longDescription: '这个应用展示了如何实现跟随系统偏好的暗色模式切换功能，同时提供手动切换选项。使用组合式 API 管理状态，Tailwind CSS 实现样式切换，代码结构清晰，注释详细。',
    techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Composables'],
    highlights: [
      '跟随系统暗色模式偏好',
      '手动模式切换',
      '状态持久化',
      '平滑过渡动画',
      '组合式 API 实现'
    ],
    github: 'https://github.com/username/dark-mode-switcher',
    demo: 'https://dark-mode-demo.com'
  }
];