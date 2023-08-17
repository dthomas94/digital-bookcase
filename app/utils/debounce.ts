export function debounce(
  func: { (name: any): void; apply?: any },
  wait: number,
  immediate: boolean = false
) {
  let timeout: any;

  return (...args) => {
    const context = this;

    let later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
