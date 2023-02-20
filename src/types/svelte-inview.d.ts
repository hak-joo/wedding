// svelte-inview.d.ts

declare module 'svelte-inview' {
    export interface InViewProps {
        unobserveOnEnter?: boolean;
        threshold?: number | number[];
        triggerOnce?: boolean;
        root?: Element;
    }

    export function inview(node: Element, options?: InViewProps): {
        update(options?: InViewProps): void;
        destroy(): void;
        on(event: 'enter' | 'exit', callback: () => void): void;
    };
}
