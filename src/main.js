import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
createApp(App).mount("#app");
// import * as brain from 'brain.js';
 
// // 定义评语列表
// const reviews = [
//     "非常差，完全不符合要求",
//     "很差，几乎无法接受",
//     "无法满足使用需求，无法使用",
//     "错误很多，基本无发用",
//     "不太满意，有很多问题",
//     "不满意，需要改进",
//     "一般，可以接受但有待提升",
//     "不错，表现良好",
//     "完美，无可挑剔",
//     "极致，令人难忘"
// ];
 
// // 将评语转换为one-hot编码的函数
// function encodeReview(review) {
//     const encoded = new Array(reviews.length).fill(0);
//     const index = reviews.indexOf(review);
//     if (index !== -1) {
//         encoded[index] = 1;
//     }
//     return encoded;
// }
 
// // 将one-hot编码转换回评语的函数
// function decodeReview(encodedReview) {
//     const index = encodedReview.indexOf(1);
//     return index !== -1 ? reviews[index] : "未知评语";
// }
 
// // 准备训练数据
// // 这里我们假设评分是离散的，与评语列表的索引相对应（0-4）
// // 在实际应用中，你可能需要将连续评分映射到离散的类别上
// const trainingData = [
//     { input: [0], output: encodeReview(reviews[0]) },
//     { input: [1], output: encodeReview(reviews[1]) },
//     { input: [2], output: encodeReview(reviews[2]) },
//     { input: [3], output: encodeReview(reviews[3]) },
//     { input: [4], output: encodeReview(reviews[4]) },
//     { input: [5], output: encodeReview(reviews[5]) },
//     { input: [6], output: encodeReview(reviews[6]) },
//     { input: [7], output: encodeReview(reviews[7]) },
//     { input: [8], output: encodeReview(reviews[8]) },
//     { input: [9], output: encodeReview(reviews[9]) },
//     // 注意：这里没有包括0.5, 1.5, 2.5, 3.5等评分，因为我们的评语是离散的
//     // 如果需要处理这些评分，你可能需要插值或使用其他方法
// ];
 
// // 为了演示如何处理连续评分到离散评语的映射，我们可以添加一些额外的数据点
// // 这些数据点将评分范围划分为更细的区间，并将它们映射到最近的评语上
// // 这只是一个简化的示例，实际应用中可能需要更复杂的逻辑
// const extendedTrainingData = [];
// for (let i = 0; i < 10; i += 1) { // 假设评分范围是0-10
//     const roundedScore = Math.round(i); // 将评分四舍五入到最近的偶数（为了映射到0-4的索引）
//     const correspondingReview = reviews[Math.min(roundedScore, reviews.length - 1)];
//     extendedTrainingData.push({ input: [i], output: encodeReview(correspondingReview) });
// }
 
// console.log(extendedTrainingData)
// // 创建神经网络实例并训练
// const net = new brain.NeuralNetwork();
// net.train(extendedTrainingData, {
//     iterations: 3000, // 迭代次数，可能需要根据实际情况调整
//     errorThresh: 0.01, // 误差阈值，可能需要根据实际情况调整
//     log: true, // 是否打印训练日志
//     logPeriod: 1000 // 每多少迭代打印一次日志
// });
 
// // 运行预测并解码输出
// function getReviewFromScore(score) {
//     // 由于我们的神经网络输入和输出都是数值数组，我们直接将评分作为输入
//     // 并获取输出的one-hot编码，然后解码回评语
//     const encodedOutput = net.run([score]);
//     // 找到输出向量中最大值对应的索引
//     const maxIndex = encodedOutput.indexOf(Math.max(...encodedOutput));
//     // 由于我们的训练数据是基于离散的评语索引，我们可以直接使用这个索引来获取评语
//     // 但请注意，这种方法在评分与评语不是一一对应时可能不准确
//     // 在实际应用中，你可能需要实现更复杂的逻辑来处理这种情况
//     return reviews[maxIndex]; // 这里假设maxIndex始终在有效范围内
//     // 更安全的做法是添加一些错误检查，比如：
//     // return maxIndex !== -1 && maxIndex < reviews.length ? reviews[maxIndex] : "未知评语";
// }
 
// // 示例使用
// console.log(getReviewFromScore(7));
// 监听 visibilitychange 事件
const checkUpdate = async () => {
    let res = await fetch("https://yolandavideo.oss-cn-shenzhen.aliyuncs.com/versionData.json", {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((r) => r.json());
    if (!localStorage.getItem("demo_version")) {
      localStorage.setItem("demo_version", res.version);
    } else {
      console.log(localStorage.getItem("demo_version"), res.version);
      if (res.version.toString() !== localStorage.getItem("demo_version")) {
        localStorage.setItem("demo_version", res.version);
        alert("版本有更新");
        // window.location.reload(true);
      }
    }
  };

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      console.log('页面不可见');
    } else {
        checkUpdate()
    }
  });
