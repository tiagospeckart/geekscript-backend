import config from './configs/config';
import app from './infra/api/API'

app.listen(config.app.port, () => {
  console.info(`Server listening on Port: ${config.app.port}`);
});

