/** 404 Error */
export class MethodUnauthorizedError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'Method not allowed';
    this.status = 405;
  }
}

/** Parameter Error */
export class LackParamsError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'Lack of Required Params';
    this.status = 400;
  }
}
