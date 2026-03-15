# 项目需求

## 项目目标
创建一个用于投递北京互联网大厂前端实习/校招的个人作品集网站，采用 Vue3 + TS + Tailwind 极简暗色 geek 风格。

## 技术要求
- **Vue 3** + <script setup> + Composition API + TypeScript（全覆盖强类型）
- **Vite** 作为构建工具
- **Tailwind CSS** (darkMode: 'class'，优先实用类)
- **Element Plus**（仅使用 ElTag、ElButton，其余全部 Tailwind 手写）
- **Vue Router** (history 模式)
- **Pinia**（仅用于主题等简单状态，可选）
- **暗色主题**为主（跟随系统 prefers-color-scheme）

## 页面需求

### 1. HomeView
- 姓名 + 身份 + 终端打字机自我介绍 + 快速导航
- 风格：终端/geek 感，暗色背景，等宽字体
- 功能：打字机效果（自写 setInterval），快速导航到其他页面

### 2. ProjectsView（核心）
- 响应式卡片列表，支持展开 longDescription + highlights
- 技术标签用 ElTag 或 Tailwind badge
- 功能：卡片点击展开详情，响应式布局

### 3. AboutView
- 150-300字自我介绍 + 教育 + 技术理念
- 风格：专业、简洁，暗色主题
- 内容：个人背景、技能、技术栈、职业目标

### 4. ContactView
- 邮箱 + GitHub + 强 CTA（开放北京大厂前端实习/校招，北京/远程可）
- 风格：直接、专业，暗色主题
- 功能：联系方式展示，明确的招聘意向

## 非功能需求
- **响应式**：PC 优先，Tailwind 断点
- **基础 SEO**：meta title/description
- **性能**：首屏 <2s
- **可访问性**：对比度、键盘导航

## 优先级
1. **核心功能**：路由配置、页面结构、项目展示
2. **风格规范**：暗色主题、极简设计、终端感
3. **交互效果**：轻量动画、打字机效果
4. **优化**：响应式、SEO、性能