export default class EventRepositore {
  constructor(pool) {
    this.pool = pool;
  }

  async list() {
    const query = `SELECT event_id, title, location, description, start_at,
        end_at, creted_at, updated_at, user_id FROM EVENT_TABLE;`;

    const { rows } = await this.pool.query(query);

    const result = rows

    return result;
   }
}
