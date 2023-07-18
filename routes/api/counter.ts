export class Counter {
  static value = 0;
}

export const handler = {
  GET() {
    const value = ++Counter.value;
    return new Response(value.toString());
  }
};
