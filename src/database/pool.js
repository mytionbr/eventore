import pg from 'pg';
const { Pool } = pg;

class PoolClass {
  
  constructor(){
    this._pool = null
  }
  
  connect(option) {
    this._pool = new Pool(option);
    return this._pool.query('SELECT 1+1 ;');
  }

  query(sql, values) {
    return this._pool.query(sql, values);
  }

  close() {
    return this._pool.end();
  }
}

export default new PoolClass();
