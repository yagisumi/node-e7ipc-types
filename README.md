# @yagisumi/e7ipc-types

ipc interfaces

## Installation

```
npm i @yagisumi/e7ipc-types
```

## Usage

```
import { Handler, Responder, Transmitter } from '@yagisumi/e-ipc-types'
```

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

