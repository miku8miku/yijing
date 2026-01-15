# 大衍筮法 · 周易占卜

一个基于大衍筮法的周易占卜工具，使用 Vue 3 + TypeScript 开发，支持本地部署和在线访问。

![网站预览](pics/2026-01-15_20-25-08.png)

#阿里云ESA Pages #阿里云云工开物

本项目是**阿里云 ESA (Edge Security Acceleration) 边缘计算创新大赛**的创意参赛作品。

借助 **阿里云 ESA** 强大的边缘计算能力，我们将这个富交互的静态网站分发到全球节点，确保用户在世界任何角落都能体验到闪电般的加载速度。


## 功能特性

- 🎯 **完整的大衍筮法流程**：分二、挂一、揲四三个步骤，六爻演算
- 📊 **动态显示**：根据动爻数量智能调整显示内容
- 🎨 **响应式设计**：完美适配 PC 端和移动设备
- 📖 **完整的卦象库**：64卦详细解释和爻辞
- ⚡ **实时反馈**：进度条、步骤指示、卦象演变过程
- 🔧 **现代化开发**：Vue 3 组合式 API + TypeScript

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 开发模式
```bash
npm run dev
```
自动打开 http://localhost:3000

### 3. 生产构建
```bash
npm run build
npm run preview
```

## 占卜流程

1. **诚心问事** - 输入要占问的事项（可选）
2. **六爻演算** - 依次演算六条爻
   - 分二：将49根蓍草分成两堆
   - 挂一：从右堆取出一根
   - 揲四：左右两堆各以四根为一组数之
3. **卦象成形** - 显示本卦、变卦及详细解释

## 解读规则

| 动爻数 | 解读方法 |
|------|--------|
| 0 | 直接参考本卦卦辞 |
| 1-2 | 参考动爻爻辞，参考变卦卦辞 |
| 3 | 本卦卦辞与变卦卦辞综合参考 |
| 4-6 | 参考变卦及其静爻爻辞 |

## 技术栈

- **框架**：Vue 3
- **语言**：TypeScript
- **构建工具**：Vite
- **样式**：CSS3（Grid + Flex 布局）

## 文件结构

```
src/
├── components/              # 可复用组件
│   ├── Header.vue          # 头部（太极图+标题）
│   ├── StepIndicator.vue   # 八步进度指示器
│   ├── ProgressBar.vue     # 进度条
│   ├── QuestionInput.vue   # 提问输入框
│   ├── YarrowDisplay.vue   # 蓍草分堆显示
│   ├── YaoDisplay.vue      # 六爻显示区
│   └── ChangeInfo.vue      # 变化信息
├── views/
│   └── DivinationView.vue  # 主占卜页面
├── composables/
│   └── useDivination.ts    # 占卜业务逻辑 (Composable)
├── data/
│   └── hexagrams.ts        # 卦象数据 + 类型定义
├── styles/
│   └── global.css          # 全局样式
├── App.vue                 # 根组件
└── main.ts                 # 入口文件
```

## 浏览器支持

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## 声明
“本项目由阿里云ESA提供加速、计算和保护”
![Aliyun ESA Pages](pics/aliyunesapages.png)

