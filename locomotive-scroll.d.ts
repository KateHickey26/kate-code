// src/types/locomotive-scroll.d.ts
declare module "locomotive-scroll" {
    export default class LocomotiveScroll {
      constructor(options: {
        el: HTMLElement;
        smooth: boolean;
        getDirection?: boolean;
        multiplier?: number;
        smartphone?: { smooth: boolean };
        tablet?: { smooth: boolean };
      });
      on(event: string, callback: (args: any) => void): void;
      destroy(): void;
      update(): void;
    }
  }