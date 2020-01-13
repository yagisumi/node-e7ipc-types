export type Handler<Req, Res> = (event: {}, req: Req) => Promise<Res>

export interface Server<Req, Res> {
  handle(listener: Handler<Req, Res>): void
  handleOnce(listener: Handler<Req, Res>): void
  removeHandler(): void
}

export interface Client<Req, Res> {
  invoke(req: Req): Promise<Res>
}
