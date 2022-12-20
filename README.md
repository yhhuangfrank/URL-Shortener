# URL-Shortener project

A simple tool for shortening a URL 

![Previrew](https://github.com/yhhuangfrank/URL-Shortener/blob/main/public/image/preview-image.png)


## Features

- Get a shorter URL link that feedbacked on page
- Connect to original web page by shortened URL
- Copy to clipboard by simply clicking the "copy" button 
- 

### Installation

1. 開啟終端機，將專案 clone 至本機電腦

```
git clone https://github.com/yhhuangfrank/URL-Shortener.git
```

2. 初始化

```
cd URL-Shortener // 進入專案資料夾
npm install // 將所需的npm module安裝
```
3. 可使用 `npm run seed` 新增種子資料

4. 使用 `npm run start` 執行若出現下方訊息代表順利執行

```
Server is listening to http://localhost:3000/home
```
5. 網址列輸入 http://localhost:3000/home 開始使用

### Built with

- [Node.js @18.12.1](https://nodejs.org/zh-tw/download/) -Environment
- [Express @4.18.2](https://www.npmjs.com/package/express) - Web framework
- [Express-handlebars @6.0.6](https://www.npmjs.com/package/express-handlebars) - Template engine
- [Bootstrap 5.2](https://getbootstrap.com/)
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose @6.8.0](https://www.npmjs.com/package/mongoose) - ODM
