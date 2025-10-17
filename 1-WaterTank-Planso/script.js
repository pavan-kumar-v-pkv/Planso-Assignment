function calculateTrappedWater(heights) {
    const n = heights.length;
    let total = 0;

    // To store the maximum heights on both sides
    let leftMax = 0, rightMax = 0;
    let left = 0, right = n - 1;

    // Array to store water levels for visualization
    let waterLevels = new Array(n).fill(0);

    while(left <= right) {
        // If the left height is smaller or equal
        if(heights[left] <= heights[right]) {
            // If water can be stored
            if(leftMax > heights[left]) {
                let water = leftMax - heights[left];
                total += water;
                waterLevels[left] = water;
            }
            else{
                // Update left max
                leftMax = heights[left];
            }
            left = left + 1;
        }
        else {
            // Else if the right height is smaller
            if(rightMax > heights[right]){
                let water = rightMax - heights[right];
                total += water;
                waterLevels[right] = water;
            }
            else{
                // Update right max
                rightMax = heights[right];
            }
            right = right - 1;
        }
    }

    return { totalWater: total, waterLevels };
}

function solveAndVisualize(){
    const input = document.querySelector('#heights-input').value.trim();
    const heights = input.split(',').map(Number);
    const { totalWater, waterLevels } = calculateTrappedWater(heights);

    document.querySelector('#output-water').innerHTML = `Total Water Stored: ${totalWater} units`;
    visualize(heights, waterLevels);
}

function visualize(heights, waterLevels){
    const svg = document.querySelector('#visualization');
    svg.innerHTML = ''; 

    const maxHeight = Math.max(...heights, ...waterLevels);
    const barWidth = 60;
    const scale = 50;
    const yBase = 450;
    const xOffset = 50;

    for (let level = 0; level <= maxHeight; level++) {
        const y = yBase - level * scale;

        // Horizontal grid line
        const gridLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        gridLine.setAttribute("x1", xOffset);
        gridLine.setAttribute("x2", xOffset + heights.length * barWidth);
        gridLine.setAttribute("y1", y);
        gridLine.setAttribute("y2", y);
        gridLine.classList.add("grid-line");
        svg.appendChild(gridLine);

        // Y-axis number labels
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", xOffset - 10);
        label.setAttribute("y", y + 5);
        label.setAttribute("text-anchor", "end");
        label.setAttribute("class", "y-label");
        label.textContent = level;
        svg.appendChild(label);
    }

    // X-axis
    const xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxis.setAttribute("x1", xOffset);
    xAxis.setAttribute("x2", xOffset + heights.length * barWidth);
    xAxis.setAttribute("y1", yBase);
    xAxis.setAttribute("y2", yBase);
    xAxis.classList.add("axis");
    svg.appendChild(xAxis);

    // Y-axis
    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.setAttribute('x1', xOffset);
    yAxis.setAttribute('x2', xOffset);
    yAxis.setAttribute('y1', yBase);
    yAxis.setAttribute('y2', yBase - maxHeight * scale - 20);
    yAxis.classList.add("axis");
    svg.appendChild(yAxis);

    for(let i=0;i<heights.length;i++){
        const x = xOffset + i * barWidth;
        const h = heights[i] * scale;
        const w = waterLevels[i] * scale;

        // Tank blocks
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", yBase - h);
        rect.setAttribute("width", barWidth - 5);
        rect.setAttribute("height", h);
        rect.classList.add("bar");
        svg.appendChild(rect);

        // Water if any
        if(waterLevels[i] > 0){
            const waterRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            waterRect.setAttribute("x", x);
            waterRect.setAttribute("y", yBase - h - w);
            waterRect.setAttribute("width", barWidth - 5);
            waterRect.setAttribute("height", w);
            waterRect.classList.add("water");
            svg.appendChild(waterRect);
        }

        // X-axis labels
        const xLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        xLabel.setAttribute("x", x + (barWidth - 5) / 2);
        xLabel.setAttribute("y", yBase + 20);
        xLabel.setAttribute("text-anchor", "middle");
        xLabel.setAttribute("class", "x-label");
        xLabel.textContent = i;
        svg.appendChild(xLabel);
    }
}