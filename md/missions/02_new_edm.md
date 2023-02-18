# 動態週報

![動態週報第一區塊截圖](02_new_edm.png)

## 時程

執行任務的日期：2022 年 1104, 1110, 1111, 1117, 1118, 1124

## 負責項目

前端、切版，整頁，電腦版、手機版。

## 可否公開

此任務的來源為公司，可以公開原始檔案。

> :Buttons
> > :Button label=設計稿, url=https://tzuhanchen.github.io/arete-internship/missions/02_new_edm_result/preview
>
> > :Button label=我的任務成果, url=https://tzuhanchen.github.io/arete-internship/missions/02_new_edm_result/

## 心得

只有電腦版設計稿的情況下，要做出手機版網頁，可採用這幾個原則：

* 水平排列的區塊改成垂直排列
* 水平滿版或水平置中
* 隱藏不必在手機版顯示的區塊

製作電子郵件有諸多限制，用卡牌遊戲來比喻就會如下所示：

設定 CSS 樣式

| 禁用卡牌 | `<link rel="stylesheet" href="style.css">` |
| :- | :- |
| 下位替代 | `<style></style>` |

分割區塊

| 禁用卡牌 | `<div>` |
| :- | :- |
| 下位替代 | `<table>` |

調整物件位置

| 禁用卡牌 | `position: absolute` |
| :- | :- |
| 下位替代 | `margin: n/-n` |

一維與二維排版

| 禁用卡牌 | `display: flex/grid` |
| :- | :- |
| 下位替代 | `float: left` |

> :ToCPrevNext