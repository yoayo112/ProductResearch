// Create GPU data
const gpuData = [
    { model: "RTX 5090", vram: 32, tensor: 680, cuda: 21760, fps: 157.6, heat: 90, price: 3500, genSpeed: 105, power: 450 },
    { model: "RTX 5080", vram: 16, tensor: 336, cuda: 10752, fps: 133.9, heat: 74, price: 1500, genSpeed: 90, power: 360 },
    { model: "RTX 5070 Ti", vram: 16, tensor: 280, cuda: 8960, fps: 124.7, heat: 70, price: 1000, genSpeed: 80, power: 300 },
    { model: "RTX 4090", vram: 24, tensor: 512, cuda: 16384, fps: 149.6, heat: 79, price: 2600, genSpeed: 75.13, power: 450 },
    { model: "RTX 4080 Super", vram: 16, tensor: 320, cuda: 10240, fps: 129.9, heat: 80, price: 1600, genSpeed: 56.48, power: 320 },
    { model: "RTX 4080", vram: 16, tensor: 304, cuda: 9728, fps: 105.0, heat: 72, price: 1250, genSpeed: 46.85, power: 320 },
    { model: "RTX 4070 Ti", vram: 12, tensor: 240, cuda: 7680, fps: 110.9, heat: 71, price: 1000, genSpeed: 36.58, power: 285 },
    { model: "RTX 4070", vram: 12, tensor: 184, cuda: 5888, fps: 92.1, heat: 84, price: 650, genSpeed: 30.23, power: 200 },
    { model: "RTX 3090 Ti", vram: 24, tensor: 336, cuda: 10752, fps: 94.9, heat: 95, price: 1000, genSpeed: 40.28, power: 450 },
    { model: "RTX 3090", vram: 24, tensor: 328, cuda: 10496, fps: 90.1, heat: 90, price: 900, genSpeed: 37.47, power: 350 },
    { model: "RTX 3080 Ti", vram: 12, tensor: 320, cuda: 10240, fps: 86.5, heat: 75, price: 700, genSpeed: 34.85, power: 350 },
    { model: "RTX 3080", vram: 10, tensor: 272, cuda: 8704, fps: 79.1, heat: 83, price: 400, genSpeed: 27.43, power: 320 },
    { model: "RTX 3070 Ti", vram: 8, tensor: 192, cuda: 6144, fps: 70.3, heat: 85, price: 300, genSpeed: 23.84, power: 285 }
];

// Default weights for scoring (adjustable)
const weights = { vram: 6, tensor: 2, cuda: 2, fps: 1, heat: 1, genSpeed: 4, power: 1, price: 15 };

// Function to compute scores
function computeScores() {
    let maxValues = {};
    let minValues = {};
    
    Object.keys(weights).forEach(key => {
        maxValues[key] = Math.max(...gpuData.map(gpu => gpu[key]));
        minValues[key] = Math.min(...gpuData.map(gpu => gpu[key]));
    });

    gpuData.forEach(gpu => {
        gpu.totalScore = Object.keys(weights).reduce((total, key) => {
            let score = (gpu[key] / maxValues[key]) * weights[key];
            if (key === "price" || key === "heat" || key === "power") {
                score = (maxValues[key] - gpu[key]) / (maxValues[key] - minValues[key]) * weights[key];
            }
            return total + score;
        }, 0);
    });

    gpuData.sort((a, b) => b.totalScore - a.totalScore);
}

// Function to render table dynamically
function renderTable() {
    document.body.innerHTML = ""; // Clear previous contents

    let container = document.createElement("div");
    container.innerHTML = "<h2>GPU Score Comparison</h2>";
    document.body.appendChild(container);

    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.textAlign = "center";
    table.style.margin = "20px 0";

    // Create headers
    let headers = ["GPU Model", "Total Score", "VRAM", "Tensor Cores", "CUDA Cores", "FPS", "Heat", "AI Gen Speed", "Power Draw", "Price"];
    let headerRow = document.createElement("tr");
    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid black";
        th.style.padding = "10px";
        th.style.background = "#26283b";
        th.style.color = "white";
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Populate rows dynamically
    gpuData.forEach(gpu => {
        let row = document.createElement("tr");

        Object.values(gpu).forEach(value => {
            let td = document.createElement("td");
            td.textContent = value;
            td.style.border = "1px solid black";
            td.style.padding = "10px";
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    container.appendChild(table);
}

// Compute scores and render table on load
window.onload = function() {
    computeScores();
    renderTable();
};