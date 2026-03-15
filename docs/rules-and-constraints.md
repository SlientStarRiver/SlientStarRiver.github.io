# 风格底线与约束

## 风格底线
- **极简、专业、终端/geek 感**
- **暗色主题**为主：背景 #0f0f0f ~ #1a1a1a，文字 #e0e0e0 ~ #ffffff，高亮用青/绿/紫代码色
- **等宽字体**：优先使用 'JetBrains Mono', 'Fira Code', monospace
- **Tailwind 优先**：优先使用 Tailwind 实用类，手写组件
- **Element Plus 限制**：仅使用 ElTag 和 ElButton

## 禁止项
- **任何渐变背景**
- **粒子效果**
- **3D 效果**
- **彩虹色**
- **卡通插图**
- **过度动画**
- **复杂阴影**
- **亮色主题主导**
- **过多 hover 效果**

## 允许的轻量效果
- **Vue <Transition>** 的 opacity/fade
- **纯文字终端打字机效果**（必须自写 setInterval，不引入库）
- **hover 效果**：幅度极小（最多 brightness-110 或 scale-101，不超过 5% 变化）

## 命名规范
- **组件命名**：PascalCase（如 TechTag.vue, ProjectCard.vue）
- **文件命名**：kebab-case（如 use-dark-mode.ts）
- **变量命名**：camelCase
- **常量命名**：UPPER_SNAKE_CASE
- **类型命名**：PascalCase

## 代码规范
- **TypeScript**：全覆盖强类型，优先使用 defineProps<...>()
- **注释**：中文简洁专业
- **缩进**：2 空格
- **分号**：使用分号
- **引号**：单引号

## 规则参考流程
1. 任何新交互/动画必须先参考本文件
2. 如果与本文件冲突则禁止使用
3. 保持代码风格一致，遵循项目规范