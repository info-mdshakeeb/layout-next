interface CatchAsyncOptions<T> {
  onError?: (error: unknown) => Promise<void> | void;
  onSuccess?: (result: T) => Promise<void> | void;
  onFinally?: () => void;
  rethrow?: boolean;
  defaultValue?: T;
}

export const catchAsync = async <T>(
  asyncFn: () => Promise<T>,
  options?: CatchAsyncOptions<T>
): Promise<T | undefined> => {
  const {
    onError,
    onSuccess,
    onFinally,
    rethrow = false,
    defaultValue,
  } = options || {};

  try {
    const result = await asyncFn();
    await onSuccess?.(result);
    return result;
  } catch (error) {
    await onError?.(error);
    if (rethrow) throw error;
    return defaultValue;
  } finally {
    onFinally?.();
  }
};