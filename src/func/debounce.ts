export default function debounce<T extends (...args: any[]) => void>(
  func: T,
  time: number = 3000
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
      console.log("done");
    }, time);
  };
}
