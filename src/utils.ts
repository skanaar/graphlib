export function has(obj: Record<string, unknown>, key: string): boolean {
  return obj ? obj.hasOwnProperty(key) : false;
}

export function isUndefined(item: unknown) {
  return undefined === item;
}

export function each<T>(obj: Record<string, T>, action: (item: T, key: string) => void) {
  for(var key of Object.keys(obj)) {
    action(obj[key], key);
  }
}

export function isEmpty(obj: Record<string, unknown>): boolean  {
  return 0 === Object.keys(obj).length;
}

export function union(a: string[], b: string[]): string[] {
  var output = [...a];
  for (var item of b) {
    if (output.indexOf(item) === -1) {
      output.push(item);
    }
  }
  return output;
}