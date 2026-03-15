# 技术架构

## 技术栈
- Vue 3 + <script setup> + Composition API + TypeScript
- Vite
- Tailwind CSS (darkMode: 'class')
- Element Plus（仅使用 ElTag、ElButton）
- Vue Router (history 模式)
- Pinia（可选，用于主题等简单状态）

## 目录结构
```
src/
├── assets/            # 静态资源
├── components/        # 组件
│   ├── common/        # 通用组件（TechTag.vue, ProjectCard.vue 等）
│   ├── layout/        # 布局组件（Header.vue, Footer.vue, TerminalIntro.vue）
│   └── project/       # 项目相关组件
├── composables/       # 组合式函数
│   └── useDarkMode.ts # 暗色模式管理
├── data/              # 数据
│   └── projects.ts    # 项目数据（硬编码 3-4 个练手项目）
├── types/             # 类型定义
│   └── project.ts     # Project 接口
├── views/             # 页面
│   ├── HomeView.vue   # 首页
│   ├── AboutView.vue  # 关于页
│   ├── ProjectsView.vue # 项目页（核心）
│   └── ContactView.vue # 联系页
├── router/index.ts    # 路由配置
├── App.vue            # 根组件
└── main.ts            # 入口文件
```

## 路由配置
- `/` → HomeView (终端风格自我介绍)
- `/about` → AboutView
- `/projects` → ProjectsView (响应式卡片 + 点击展开详情)
- `/contact` → ContactView (邮箱 + GitHub + CTA)
- 404 → 重定向到 `/`

## 核心模型
### Project 接口
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  highlights: string[];
  github: string;
  demo: string;
  image?: string;
}
```