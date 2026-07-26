"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * False during SSR and the hydration pass, true on the client afterward.
 * Uses useSyncExternalStore so server and client snapshots stay consistent
 * without a mount effect.
 */
export function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
