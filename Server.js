const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Sowmiya@1',
  database: 'cart' 
}); 

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.listen(5000, () => {
    console.log(`Server running on http://localhost:${5000}`);

});
app.post('/placeorder', (req, res) => {
    const { items, totalAmount } = req.body;
  
    
    const orderSql = 'INSERT INTO orders (total_price) VALUES (?)';
    db.query(orderSql, [totalAmount], (err, orderResult) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, error: err });
      }
  
      const orderId = orderResult.insertId; 
      const orderItemsSql = 'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?';
  
      
      const orderItems = items.map(item => [orderId, item.product_id, item.quantity, item.price]);
  
     
      db.query(orderItemsSql, [orderItems], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ success: false, error: err });
        }
  
        res.json({ success: true, orderId });
      });
    });
  });