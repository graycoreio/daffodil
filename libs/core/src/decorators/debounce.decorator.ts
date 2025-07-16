export const debounce = (delay: number = 5000): MethodDecorator => (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {
  const originalMethod = descriptor.value;
  let timeoutId: any = null;

  descriptor.value = function(...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    timeoutId = setTimeout(() => {
      originalMethod.apply(this, args);
      timeoutId = null;
    }, delay);
  };

  return descriptor;
};
