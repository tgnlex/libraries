import type {WorkersModule} from './interface';

const workers: WorkersModule = {
  pool: [],
  create(filename: string) {
    let worker;
    if (typeof(worker) == "undefined") {
      worker = new Worker(`${filename}`);
      this.pool.push(worker);
      return worker;
    }
  },
  start(worker: Worker, cb: any, event: Event) {
    worker.onmessage = cb(event);
  },
  kill(worker: any) {
    worker.terminate();
    worker = undefined;
  },
  killAll() {
    this.pool.map((worker) => {
      if (worker) { this.kill(worker) };
      return;
    });
  },
  log(worker: Worker) {
    return console.info(worker);
  },
  logAll() {
    return console.info(this.pool);
  }
}
export default workers;