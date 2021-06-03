import "fpsmeter";

class Engine {
  constructor() {
    this.content = document.querySelector(".content");
    this.countLinks = this.content.querySelectorAll(".selector > a");

    this.canvas = document.createElement("canvas");

    this.width = Math.min(this.content.clientWidth, 1000);
    this.height = this.content.clientHeight * 0.75;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.count = 0;

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

        this.render();
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
      console.log(this.controls);
    });

    document.querySelector("#lock-y").addEventListener("change", (event) => {
      this.controls.lockedY = event.target.checked;
      localStorage.setItem("controls", JSON.stringify(this.controls));
      console.log(this.controls);
    });
  }

  initControls() {
    this.canvas.addEventListener(
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
        return false;
      },
      false
    );

    let isMoving = false;
    this.canvas.addEventListener(
      "mousedown",
      (event) => {
        isMoving = true;
      },
      false
    );

    this.canvas.addEventListener(
      "mousemove",
      (event) => {
        if (!isMoving) {
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
        this.updateSelectionWindowDisplay();
      },
      false
    );

    this.canvas.addEventListener("mouseup", (event) => {
      isMoving = false;
    });
    this.canvas.addEventListener("mouseleave", (event) => {
      isMoving = false;
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

  render() {}
}

export default Engine;
