const express = require('express');
const path = require('path');
const cors = require('cors');

const server = express();

server.use(cors());

server.use('/electricity',
    express.static(
        path.resolve(__dirname,'electricity')
    ));

const PORT = 4000;

server.listen(PORT,()=>{
  console.log(`charts server is listening at port ${PORT}`);
});
