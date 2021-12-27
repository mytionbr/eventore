import app from './app.js';
import config from './config/config.js';

pool
  .connect(config.dbDetails)
  .then(()=>{
    console.log('Connected database')

    app.listen(config.PORT, ()=>{
      console.log('Server is running')
    })
  })
  .catch((err)=>{
    console.log(`Error: ${err.message}`)
  })

app.listen(config.port, () => {
  console.log(`Server is running at ${config.port}`);
});
