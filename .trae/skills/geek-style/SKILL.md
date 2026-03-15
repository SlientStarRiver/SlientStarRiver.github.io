---
name: "geek-portfolio-style-enforcer"
description: "Enforces minimalist geek dark style规范 for website. Invoke when creating/modifying components, layouts, Tailwind styles, interactions, or animations."
---

# Geek Portfolio Style Enforcer

## 核心规范

### 主题与颜色
- 所有页面必须以暗色主题为主
  - 背景：#0f0f0f ~ #1a1a1a
  - 文字：#e0e0e0 ~ #ffffff
  - 高亮：青/绿/紫代码色

### 技术栈使用
- 优先使用 Tailwind 实用类
- 手写组件
- Element Plus 只允许使用 ElTag 和 ElButton

### 禁止项
- 任何渐变背景
- 粒子效果
- 3D 效果
- 彩虹色
- 卡通插图
- 过度动画
- 复杂阴影

### 交互效果
- hover 效果幅度极小
  - 最多 brightness-110 或 scale-101
  - 不超过 5% 变化

### 允许的轻量效果
- Vue <Transition> 的 opacity/fade
- 纯文字终端打字机效果（必须自写 setInterval，不引入库）

### 字体
- 所有文字优先等宽字体
  - 如 'JetBrains Mono', 'Fira Code', monospace

### 规则参考
- 任何新交互/动画必须先参考 docs/rules-and-constraints.md
- 如果冲突则禁止

### 代码规范
- 输出代码时，优先类型安全（defineProps<...>()）
- 注释用中文简洁专业