import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Custom hook for confirm dialog
 * @param initialState string | null
 * @returns A stateful value, and a function to update it.
 * @example const [open, setOpen] = useDialogState<"approve" | "reject">()
 */
export default function useDialogState<T extends string | boolean>(
  initialState: T | null = null
) {
  const [open, _setOpen] = useState<T | null>(initialState);

  const setOpen = (str: T | null) =>
    _setOpen((prev) => (prev === str ? null : str));

  return [open, setOpen] as const;
}

type CloseOptions = {
  immediate?: boolean;
};

type UseDialogStateWithRowOptions = {
  clearDelayMs?: number;
};

/**
 * Dialog state helper for flows that also track a selected row/item.
 */
export function useDialogStateWithRow<TDialog extends string | boolean, TRow>(
  initialState: TDialog | null = null,
  options: UseDialogStateWithRowOptions = {}
) {
  const { clearDelayMs = 500 } = options;
  const [open, setOpen] = useDialogState<TDialog>(initialState);
  const [currentRow, setCurrentRow] = useState<TRow | null>(null);
  const clearTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCurrentRow = useCallback(
    ({ immediate = false }: CloseOptions = {}) => {
      if (clearTimeoutRef.current) {
        clearTimeout(clearTimeoutRef.current);
        clearTimeoutRef.current = null;
      }

      if (immediate || clearDelayMs <= 0) {
        setCurrentRow(null);
        return;
      }

      clearTimeoutRef.current = setTimeout(() => {
        setCurrentRow(null);
        clearTimeoutRef.current = null;
      }, clearDelayMs);
    },
    [clearDelayMs]
  );

  const closeDialog = useCallback(
    (closeOptions?: CloseOptions) => {
      setOpen(null);
      clearCurrentRow(closeOptions);
    },
    [clearCurrentRow, setOpen]
  );

  useEffect(() => {
    return () => {
      if (clearTimeoutRef.current) {
        clearTimeout(clearTimeoutRef.current);
      }
    };
  }, []);

  return {
    open,
    setOpen,
    currentRow,
    setCurrentRow,
    clearCurrentRow,
    closeDialog,
  } as const;
}
