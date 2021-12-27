export default function () {
  /**
   * Variable responsible for indicating the application mode.
   * It can be DEV or PROD mode.
   */
  const mode = process.env.MODE;

  /**
   * In DEV mode, the application does not support SSL,
   * while in production, the application must have this clause
   */
  const ssl =
    mode === 'PROD'
      ? {
          rejectUnauthorized: false,
        }
      : false;

  return ssl;
}
