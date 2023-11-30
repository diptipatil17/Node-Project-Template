const express = require('express');
const app = express();
const { ServerConfig,Logger } = require('./config');

const apiRoutes = require('./routes');

app.use('/api', apiRoutes);
// const { ServerConfig } =require('./config');
app.listen(ServerConfig.PORT ,()=>{
    console.log(`Successfully started the server on the PORT: ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server");
});