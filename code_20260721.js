// 点击按钮切换标题文字
const btn = document.getElementById('changeTextBtn');
const title = document.querySelector('.hero-text h1');
const textList = [
    "你好，我是开发者",
    "欢迎来到我的GitHub主页",
    "持续学习，不断进步",
    "热爱开源与前端"
];
let index = 0;

btn.addEventListener('click', () => {
    index = (index + 1) % textList.length;
    title.innerText = textList[index];
});
