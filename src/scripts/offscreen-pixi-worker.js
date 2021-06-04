import { scale } from "./utilities";
import OffscreenWorker from "./offscreen-worker";

class OffscreenPixiWorker extends OffscreenWorker {
  constructor(data) {
    super(data);
  }

  animate() {}

  render() {}
}

self.onmessage = OffscreenPixiWorker.onmessager(self);
