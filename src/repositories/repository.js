export default class Repository {
    constructor(pool) {
        this.pool = pool;
    }

    async query(query, params = undefined) {
        const { rows } = params
          ? await this.pool.query(query, params)
          : await this.pool.query(query);
        
        return rows;
      }
}