# Bouncing Ball Project

This project is a simple bouncing ball animation created using [p5.js](https://p5js.org/) and initialized using the `p5.vscode` extension. The ball bounces around the canvas, counting the number of times it hits the edges and corners. It also keeps a tally of normal hits and corner hits separately.

![Bouncing Ball Screenshot](./screenshot.png)

## Features

- Ball bounces off the edges of the canvas.
- Tracks the number of edge hits.
- Tracks the number of corner hits (when ball hits two edges simultaneously).
- Displays the hit counts on the canvas.

## Getting Started

To get started with this project, follow these steps:

1. Make sure you have [Visual Studio Code](https://code.visualstudio.com/) and the [p5.vscode extension](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode) installed.
2. Clone this repository or download the code.
3. Open the folder in Visual Studio Code.
4. Modify the `sketch.js` file for logic changes and `index.html` for any HTML changes.

### Code Files

- `index.html`: Defines the structure of the web page and includes the bundled JavaScript code.
- `sketch.js`: Contains the logic for the bouncing ball, edge detection, and corner hit logic.

### Running the Project Locally

1. Open the project in VSCode.
2. Use the p5.vscode extension to start the local server.
3. The animation should start running, and you'll see the hit count for edges and corners displayed on the canvas.

## Screenshot

![Bouncing Ball Animation](./screenshot.png)

## Webpack Setup

To bundle this project using Webpack so that only `index.html` and `bundle.js` are needed for the final version, follow these steps:

### 1. Install Webpack

In your project directory, run:

```bash
npm init -y
```
```bash
npm install --save-dev webpack webpack-cli
```
### 2. Setup Webpack Configuration

Create a webpack.config.js file in the root directory:

```javascript
const path = require('path');

module.exports = {
  entry: './sketch.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
```
