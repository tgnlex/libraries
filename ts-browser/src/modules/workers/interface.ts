interface WorkersModule {
    pool: any[];
    create: (filename: string) => any;
    start: (worker: Worker, cb: any, event: Event) => any;
    kill: (worker: any) => void;
    log: (worker: any) => void;
    logAll: () => void;
    killAll: () => void;
  };

export type {WorkersModule};