# Water Tank Problem Visualizer

This project is a front-end visualization of the classic “Trapping Rain Water” problem.
Users can input an array of block heights, and the app will calculate and visually display how much water can be trapped between the blocks using Vanilla JavaScript, HTML, CSS, and SVG graphics.

---

## Features

* Visualizes bar heights and trapped water in real time
* Shows total units of trapped water
* Implements an efficient two-pointer algorithm
* Clean graph with grid lines, X & Y axes, and labels
* Instant updates when user submits new input

---

## Problem Statement

Given `n` non-negative integers representing the heights of the blocks.
Find out how much water it is able to trap after raining.

**Example:** 
Input: [0,4,0,0,0,6,0,6,4,0]
Output: 18 units

---

## Tech Stack

* **HTML5** – structure of the app  
* **CSS3** – styling and grid lines
* **JavaScript (ES6)** – algorithm + DOM manipulation
* **SVG** – scalable, precise graphics rendering

---

## Algorithm
* Uses a **two-pointer approach** with `leftMax` and `rightMax` to calculate trapped water in **O(n)** time.

---

## How to Run Locally

git clone https://github.com/pavan-kumar-v-pkv/Planso-Assignment.git
1. Clone the repo
```bash
git clone https://github.com/pavan-kumar-v-pkv/Planso-Assignment.git
cd Planso-Assignment/1-WaterTank-Planso
```

2. Open the app
	- Open `index.html` in your browser (double-click or drag into browser window).

3. Enter your input
	- Example: `0,4,0,0,0,6,0,6,4,0`
	- Click **Solve** to see the trapped water visualization.