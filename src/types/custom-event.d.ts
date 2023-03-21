declare namespace svelteHTML {
    interface HTMLAttributes<T> {
        "on:click_outside"?: CompositionEventHandler<T>;
        "on:long"?: CompositionEventHandler<T>;
    }
}