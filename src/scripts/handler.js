import "fpsmeter";

class Handler {
  constructor() {
    this.content = document.querySelector(".content");
    this.countLinks = this.content.querySelectorAll(".selector > a");
    this.canvas = document.createElement("canvas");

    this.width = Math.min(this.content.clientWidth, 1000);
    this.height = this.content.clientHeight * 0.75;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.mouseReader = this.canvas;
    this.controls = { lockedX: false, lockedY: false };

    this.minX = -2000;
    this.maxX = 2000;
    this.minY = -2000;
    this.maxY = 2000;

    this.currentXRange = [-100, 100];
    this.currentYRange = [-100, 100];

    this.needsAnimation = true;
    this.initFpsmeter();
    this.initSettings();
    this.initControls();
  }

  addToDOM(Drawer, extraArgs) {
    this.drawer = new Drawer(
      {
        canvas: this.canvas,
        ...this.getState(),
      },
      extraArgs
    );

    // Set tick for fps meter, allows drawer to have no knowledge of handler
    this.drawer.tick = () => this.meter.tick();
    this.content.appendChild(this.canvas);
  }

  initFpsmeter() {
    this.meter = new window.FPSMeter(this.content, {
      graph: 1,
      heat: 1,
      theme: "light",
      history: 25,
      top: "-10px",
      left: `${this.width}px`,
      transform: "translateX(-100%)",
    });
  }

  initSettings() {
    const count = JSON.parse(localStorage.getItem("count"));
    this.count = count || { index: 0, value: 1000 };
    localStorage.setItem("count", JSON.stringify(this.count));

    this.countLinks.forEach((link, index) => {
      this.countLinks[this.count.index].classList.toggle("selected", true);

      link.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.countLinks[this.count.index].classList.toggle("selected", false);
        this.count = { index: index, value: parseInt(link.innerText) };
        this.countLinks[this.count.index].classList.toggle("selected", true);

        localStorage.setItem("count", JSON.stringify(this.count));

        this.sendDrawerState();
        this.forceDrawerRender();
      });
    });

    const controls = JSON.parse(localStorage.getItem("controls"));
    this.controls = controls || { lockedX: false, lockedY: false };
    localStorage.setItem("controls", JSON.stringify(this.controls));

    document.getElementById("lock-x").checked = this.controls.lockedX;
    document.getElementById("lock-y").checked = this.controls.lockedY;

    document.querySelector("#lock-x").addEventListener("change", (event) => {
      this.controls.lockedX = event.target.checked;
      localStorage.setItem("controls", JSON.stringify(this.controls));
      this.sendDrawerState();
    });

    document.querySelector("#lock-y").addEventListener("change", (event) => {
      this.controls.lockedY = event.target.checked;
      localStorage.setItem("controls", JSON.stringify(this.controls));
      this.sendDrawerState();
    });

    const dataset = JSON.parse(localStorage.getItem("dataset"));
    this.dataset = dataset || "squares";
    localStorage.setItem("dataset", JSON.stringify(this.dataset));
    document.getElementById("dataset").value = this.dataset;
    document.querySelector("#dataset").addEventListener("change", (event) => {
      this.dataset = event.target.value;
      localStorage.setItem("dataset", JSON.stringify(this.dataset));
      this.sendDrawerState();
      this.forceDrawerRender();
    });
  }

  initControls() {
    this.mouseReader.addEventListener(
      "wheel",
      (event) => {
        if (!this.controls.lockedX) {
          const previousX = [...this.currentXRange];
          this.currentXRange[0] -= event.wheelDelta / 50;
          this.currentXRange[1] += event.wheelDelta / 50;
          this.currentXRange[0] = Math.max(this.currentXRange[0], this.minX);
          this.currentXRange[1] = Math.min(this.currentXRange[1], this.maxX);

          if (this.currentXRange[1] < this.currentXRange[0]) {
            // Zoom in limit
            this.currentXRange = previousX;
          }
        }

        if (!this.controls.lockedY) {
          const previousY = [...this.currentYRange];
          this.currentYRange[0] -= event.wheelDelta / 50;
          this.currentYRange[1] += event.wheelDelta / 50;
          this.currentYRange[0] = Math.max(this.currentYRange[0], this.minY);
          this.currentYRange[1] = Math.min(this.currentYRange[1], this.maxY);

          if (this.currentYRange[1] < this.currentYRange[0]) {
            // Zoom in limit
            this.currentYRange = previousY;
          }
        }

        this.needsAnimation = true;
        this.updateSelectionWindowDisplay();
        this.sendDrawerState();

        return false;
      },
      false
    );

    this.isMoving = false;
    this.mouseReader.addEventListener(
      "mousedown",
      (event) => {
        this.isMoving = true;
      },
      false
    );

    this.mouseReader.addEventListener(
      "mousemove",
      (event) => {
        if (!this.isMoving) {
          return false;
        }

        if (!this.controls.lockedX) {
          const previousX = [...this.currentXRange];
          this.currentXRange[0] -= event.movementX;
          this.currentXRange[1] -= event.movementX;
          this.currentXRange[0] = Math.max(this.currentXRange[0], this.minX);
          this.currentXRange[1] = Math.min(this.currentXRange[1], this.maxX);

          if (this.currentXRange[1] < this.currentXRange[0]) {
            this.currentXRange = previousX;
          }
        }

        if (!this.controls.lockedY) {
          const previousY = [...this.currentYRange];
          this.currentYRange[0] -= event.movementY;
          this.currentYRange[1] -= event.movementY;
          this.currentYRange[0] = Math.max(this.currentYRange[0], this.minY);
          this.currentYRange[1] = Math.min(this.currentYRange[1], this.maxY);

          if (this.currentYRange[1] < this.currentYRange[0]) {
            this.currentYRange = previousY;
          }
        }

        this.needsAnimation = true;
        this.sendDrawerState();
        this.updateSelectionWindowDisplay();
      },
      false
    );

    this.mouseReader.addEventListener("mouseup", (event) => {
      this.isMoving = false;
    });
    this.mouseReader.addEventListener("mouseleave", (event) => {
      this.isMoving = false;
    });
  }

  updateSelectionWindowDisplay() {
    // This may slow down the rendering since it needs to call the DOM before animating, may need to remove for true benchmark
    document.querySelector(
      ".selection-window"
    ).textContent = `[${this.currentXRange[0].toFixed(
      2
    )}, ${this.currentXRange[1].toFixed(2)}] x [${this.currentYRange[0].toFixed(
      2
    )}, ${this.currentYRange[1].toFixed(2)}]`;
  }

  sendDrawerState() {
    this.drawer.receiveState({ ...this.getState() });
  }

  getState() {
    return {
      minX: this.minX,
      maxX: this.maxX,
      minY: this.minY,
      maxY: this.maxY,
      controls: this.controls,
      currentXRange: this.currentXRange,
      currentYRange: this.currentYRange,
      count: this.count,
      dataset: this.dataset,
    };
  }

  forceDrawerRender() {
    this.drawer.render();
  }
}

export default Handler;
