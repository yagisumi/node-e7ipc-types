# @yagisumi/e7ipc-types

ipc interfaces

[![NPM version][npm-image]][npm-url]

## Installation

```
npm i @yagisumi/e7ipc-types
```

## Definition

```ts
export type Handler<Req, Res> = (event: {}, req: Req) => Promise<Res>

export interface Server<Req, Res> {
  handle(listener: Handler<Req, Res>): void
  handleOnce(listener: Handler<Req, Res>): void
  removeHandler(): void
}

export interface Client<Req, Res> {
  invoke(req: Req): Promise<Res>
}
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/@yagisumi/e7ipc-types.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@yagisumi/e7ipc-types
