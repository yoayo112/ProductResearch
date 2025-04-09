```dataviewjs
// Create GPU data
const gpuData = [
    { model: "RTX 5090", vram: "32 GB", tensor: 680, cuda: 21760, fps: 157.6, heat: "90°C", genSpeed: "95-105", power: "450W" },
    { model: "RTX 5080", vram: "16 GB", tensor: 336, cuda: 10752, fps: 133.9, heat: "74°C", genSpeed: "85-90", power: "360W" },
    { model: "RTX 5070 Ti", vram: "16 GB", tensor: 280, cuda: 8960, fps: 124.7, heat: "70°C", genSpeed: "75-80", power: "300W" },
    { model: "RTX 4090", vram: "24 GB", tensor: 512, cuda: 16384, fps: 149.6, heat: "79°C", genSpeed: "75.13", power: "450W" },
    { model: "RTX 4080 Super", vram: "16 GB", tensor: 320, cuda: 10240, fps: 129.9, heat: "80°C", genSpeed: "56.48", power: "320W" },
    { model: "RTX 4080", vram: "16 GB", tensor: 304, cuda: 9728, fps: 105.0, heat: "72°C", genSpeed: "46.85", power: "320W" },
    { model: "RTX 4070 Ti", vram: "12 GB", tensor: 240, cuda: 7680, fps: 110.9, heat: "71°C", genSpeed: "36.58", power: "285W" },
    { model: "RTX 4070", vram: "12 GB", tensor: 184, cuda: 5888, fps: 92.1, heat: "84°C", genSpeed: "30.23", power: "200W" },
    { model: "RTX 3090 Ti", vram: "24 GB", tensor: 336, cuda: 10752, fps: 94.9, heat: "95°C", genSpeed: "40.28", power: "450W" },
    { model: "RTX 3090", vram: "24 GB", tensor: 328, cuda: 10496, fps: 90.1, heat: "90°C", genSpeed: "37.47", power: "350W" },
    { model: "RTX 3080 Ti", vram: "12 GB", tensor: 320, cuda: 10240, fps: 86.5, heat: "75°C", genSpeed: "34.85", power: "350W" },
    { model: "RTX 3080", vram: "10 GB", tensor: 272, cuda: 8704, fps: 79.1, heat: "83°C", genSpeed: "27.43", power: "320W" },
    { model: "RTX 3070 Ti", vram: "8 GB", tensor: 192, cuda: 6144, fps: 70.3, heat: "85°C", genSpeed: "23.84", power: "285W" }
];

// Sorting Logic
let sortOrder = 1;
let currentSortColumn = null;

// Function to Sort Table
function sortTable(column) {
    if (currentSortColumn === column) {
        sortOrder *= -1; // Toggle sorting order
    } else {
        currentSortColumn = column;
        sortOrder = 1; // Reset to ascending if new column clicked
    }

    gpuData.sort((a, b) => {
        let valA = a[column];
        let valB = b[column];

        if (!isNaN(parseFloat(valA)) && !isNaN(parseFloat(valB))) {
            valA = parseFloat(valA);
            valB = parseFloat(valB);
        }

        return (valA > valB ? 1 : -1) * sortOrder;
    });

    renderTable();
}

// Function to Render Table (Deletes previous version)
function renderTable() {
    dv.container.innerHTML = ""; // Clear previous table before rendering a new one

    // Create buttons dynamically
    let buttonContainer = document.createElement("div");

    let columns = ["model", "vram", "tensor", "cuda", "fps", "heat", "genSpeed", "power"];
    let columnLabels = ["Model", "VRAM", "Tensor Cores", "CUDA", "FPS", "Heat","AI img/min", "Power"];

    columns.forEach((column, index) => {
        let button = document.createElement("button");
        button.textContent = `${columnLabels[index]} 🔼/🔽`;
        button.style.margin = "30px";
        button.onclick = () => sortTable(column);
        buttonContainer.appendChild(button);
    });

    dv.container.appendChild(buttonContainer);

    // Generate table dynamically
    dv.table(
        ["GPU Model", "VRAM", "Tensor Cores", "CUDA Cores", "1080p Ultra FPS", "Heat Range", "Generative Speed (Images/min)", "Power Draw (Watts)"],
        gpuData.map(gpu => [
            gpu.model,
            gpu.vram,
            gpu.tensor,
            gpu.cuda,
            gpu.fps,
            gpu.heat,
            gpu.genSpeed,
            gpu.power
        ])
    );
}

// Initial render
renderTable();
```

<hr>
<hr>

```dataviewjs
// Create GPU data
const gpuData = [
    { model: "RTX 5090", vram: 32, tensor: 680, cuda: 21760, fps: 157.6, heat: 90, price: 3500, genSpeed: 105, power: 450 },
    { model: "RTX 5080", vram: 16, tensor: 336, cuda: 10752, fps: 133.9, heat: 74, price: 1500,genSpeed: 90, power: 360 },
    { model: "RTX 5070 Ti", vram: 16, tensor: 280, cuda: 8960, fps: 124.7, heat: 70, price: 1000,genSpeed: 80, power: 300 },
    { model: "RTX 4090", vram: 24, tensor: 512, cuda: 16384, fps: 149.6, heat: 79, price: 2600,genSpeed: 75.13, power: 450 },
    { model: "RTX 4080 Super", vram: 16, tensor: 320, cuda: 10240, fps: 129.9, heat: 80, price: 1600,genSpeed: 56.48, power: 320 },
    { model: "RTX 4080", vram: 16, tensor: 304, cuda: 9728, fps: 105.0, heat: 72, price: 1250,genSpeed: 46.85, power: 320 },
    { model: "RTX 4070 Ti", vram: 12, tensor: 240, cuda: 7680, fps: 110.9, heat: 71, price: 1000, genSpeed: 36.58, power: 285 },
    { model: "RTX 4070", vram: 12, tensor: 184, cuda: 5888, fps: 92.1, heat: 84, price: 650,genSpeed: 30.23, power: 200 },
    { model: "RTX 3090 Ti", vram: 24, tensor: 336, cuda: 10752, fps: 94.9, heat: 95, price: 1000,genSpeed: 40.28, power: 450 },
    { model: "RTX 3090", vram: 24, tensor: 328, cuda: 10496, fps: 90.1, heat: 90, price: 900,genSpeed: 37.47, power: 350 },
    { model: "RTX 3080 Ti", vram: 12, tensor: 320, cuda: 10240, fps: 86.5, heat: 75, price: 700,genSpeed: 34.85, power: 350 },
    { model: "RTX 3080", vram: 10, tensor: 272, cuda: 8704, fps: 79.1, heat: 83, price: 400,genSpeed: 27.43, power: 320 },
    { model: "RTX 3070 Ti", vram: 8, tensor: 192, cuda: 6144, fps: 70.3, heat: 85, price: 300,genSpeed: 23.84, power: 285 }
];

// Default weights (adjustable)
const weights = { vram: 6, tensor: 2, cuda: 2, fps: 1, heat: 1, genSpeed: 4, power: 1, price: 15 };

let typingTimer;
const typingInterval = 500;

// Function to compute scores
function computeScores() {
    let maxValues = {};
    let minValues = {};
    
    Object.keys(weights).forEach(key => {
        if (key == "price" || key == "heat" || key == "power") {
            maxValues[key] = Math.max(...gpuData.map(gpu => gpu[key]));
            minValues[key] = Math.min(...gpuData.map(gpu => gpu[key]));
        }else{
	        maxValues[key] = Math.max(...gpuData.map(gpu => gpu[key]));
        }
    });

    gpuData.forEach(gpu => {
        gpu.scores = {};
        gpu.totalScore = Object.keys(weights).reduce((total, key) => {
            if (key == "price" || key == "heat" || key == "power") {
                let relativeScore = (maxValues[key] - gpu[[key]])/((maxValues[key]-minValues[key])/weights[key]);
                gpu.scores[key] = relativeScore.toFixed(2);
                if(key=="price"){
	                gpu.finalScore = total + relativeScore;
	                return total;
                }else{return total + relativeScore;}
            }else{
	            let relativeScore = (gpu[key] / maxValues[key]) * weights[key];
                gpu.scores[key] = relativeScore.toFixed(2);
                return total + relativeScore;
            }
            return total;
        }, 0);
    });

    gpuData.sort((a, b) => b.totalScore - a.totalScore);
}

function updateWeight(key, value) {
    weights[key] = parseFloat(value);
    computeScores();
    renderTable();

    // Refocus and select the text box
    setTimeout(() => {
        let weightInput = document.querySelector(`input[data-weight='${key}']`);
        if (weightInput) {
            weightInput.focus();
        }
    }, 100);
}

// Function to apply color gradient
function getGradientColor(value, min, max) {
    let ratio = (value - min) / (max - min);
    let green = Math.floor(170 * ratio);
    let orange = Math.floor(170 * (1 - ratio));
    return `background-color: rgb(${orange}, ${green}, 30);`;
}

// Function to render table and inputs
function renderTable() {
    dv.container.innerHTML = "";

    // Create weight inputs
    let inputContainer = document.createElement("div");
    Object.keys(weights).forEach(key => {
        let label = document.createElement("label");
        label.textContent = `${key}: `;

        let input = document.createElement("input");
        input.setAttribute("data-weight", key);
        input.type = "number";
        input.min = "0";
        input.step = "0.1";
        input.value = weights[key];
        input.style.width = "50px";  
        input.style.margin = "10px";
        input.oninput = (e) => updateWeight(key, e.target.value);

        label.appendChild(input);
        inputContainer.appendChild(label);
    });

	let firstContainer = document.createElement("div");
	firstContainer.innerHTML = "<h2>Weighted Scores</h2>";
	dv.container.appendChild(firstContainer);

    dv.container.appendChild(inputContainer);

	let minScore = Math.min(...gpuData.map(gpu => gpu.totalScore));
    let maxScore = Math.max(...gpuData.map(gpu => gpu.totalScore));
    
    // **Original weighted score table (excluding price)**
    dv.table(
        ["GPU Model", "Total Score", "VRAM", "Tensor Cores", "CUDA Cores", "FPS", "Heat", "AI Gen Speed", "Power Draw"],
        gpuData.map(gpu => [
            gpu.model,
            `<span style='${getGradientColor(gpu.totalScore, minScore, maxScore)}'>${gpu.totalScore.toFixed(2)}</span>`,
            gpu.scores.vram,
            gpu.scores.tensor,
            gpu.scores.cuda,
            gpu.scores.fps,
            gpu.scores.heat,
            gpu.scores.genSpeed,
            gpu.scores.power
        ])
    );
    // **Editable price table**
	let priceContainer = document.createElement("div");
	priceContainer.innerHTML = "<h2>Dynamic Prices</h2>";
	dv.container.appendChild(priceContainer);

	let priceTableDiv = document.createElement("div");
	priceTableDiv.style.width = "100%";
	priceTableDiv.style.margin = "auto";
	
    let priceTable = document.createElement("table");
	priceTable.style.borderCollapse = "collapse";

	gpuData.forEach(gpu => {
	    let row = document.createElement("tr");
	    row.style.margin = "10px";

	    let modelCell = document.createElement("td");
	    modelCell.textContent = gpu.model;
	    modelCell.style.padding = "20px";

	    let priceCell = document.createElement("td");
	    let priceInput = document.createElement("input");
	    priceInput.setAttribute("data-model", gpu.model);
	    priceInput.type = "number";
	    priceInput.value = gpu.price;
	    priceInput.style.width = "80px";
	    priceInput.style.padding = "10px";
	    priceInput.style.margin = "auto";
	    priceInput.oninput = (e) => {
	    clearTimeout(typingTimer);
		    if (priceInput.value) {
		        typingTimer = setTimeout(updatePrice, typingInterval, gpu.model, e.target.value);
		    }
	    };

		minScore = Math.min(...gpuData.map(gpu => gpu.scores.price));
	    maxScore = Math.max(...gpuData.map(gpu => gpu.scores.price));
		let priceScore = document.createElement("td");
		priceScore.setAttribute("style", `padding:20px; margin-left:20px; ${getGradientColor(gpu.scores.price, minScore, maxScore)}`);
		priceScore.innerHTML = gpu.scores.price;

	    priceCell.appendChild(priceInput);
	    row.appendChild(modelCell);
	    row.appendChild(priceCell);
	    row.appendChild(priceScore);
	    priceTable.appendChild(row);
	});
	priceTableDiv.appendChild(priceTable);
	dv.container.appendChild(priceTableDiv);


    // **Final weighted score table**
    let finalContainer = document.createElement("div");
    finalContainer.style.backgroundColor = "#26283b";
    finalContainer.style.padding = "5px";
    finalContainer.style.borderRadius = "10px";
    finalContainer.style.margin = "10px";
    dv.container.appendChild(finalContainer);

    finalContainer.innerHTML = "<h2>Final Weighted Scores</h2>";

    minScore = Math.min(...gpuData.map(gpu => gpu.finalScore));
    maxScore = Math.max(...gpuData.map(gpu => gpu.finalScore));

    dv.table(["GPU Model", "Final Score", "Price (USD)"],
        gpuData
	        .sort((a, b) => b.finalScore - a.finalScore)
	        .map(gpu => [
            gpu.model,
            `<span style='${getGradientColor(gpu.finalScore, minScore, maxScore)}'>${(gpu.finalScore).toFixed(2)}</span>`,
            `$${gpu.price.toLocaleString()}`
        ])
    );
}

function updatePrice(model, value) {
    let gpu = gpuData.find(g => g.model === model);
    if (gpu) {
        gpu.price = parseFloat(value) || gpu.price;
        computeScores();
        renderTable();

        // Refocus and select the text box for a seamless experience
        setTimeout(() => {
            let priceInput = document.querySelector(`input[data-model='${model}']`);
            if (priceInput) {
                priceInput.focus();
            }
        }, 100); 
    }
}

// Initial render
computeScores();
renderTable();
```