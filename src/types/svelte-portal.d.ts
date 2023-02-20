// svelte-portal.d.ts

declare module 'svelte-portal' {
  export interface PortalProps {
    transition?: string;
    onMount?: () => void;
    onDestroy?: () => void;
  }

  export function portal(node: Element, props: PortalProps | string): {
    update(props: PortalProps): void;
    destroy(): void;
  };
}
