const express =require('express');
const app = express();
const PORT =8080;
const contactRoutes=require('./routes/contacts');
const morgan=require('morgan');

app.use(morgan('dev'))
app.use('/api/contacts',contactRoutes)

/* app.get('/', function (req, res) {
    res.send('hellefefefo world')
  }) */

app.use((req,res,next)=>{
    const error=new Error('NotFound');
    error.status=404;
    next(error)
},

app.use((error,req,res,next)=>{
    res.status(error,status || 500)
    res.json({
        message:error.message
    })
})

)
app.listen(PORT, ()=>console.log('server running on port 8080'));