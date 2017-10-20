# Template Express + Sequelize + JWTs #

## Rest API structure ##
ใช้ [Express](http://expressjs.com/) โดยมีโครงสร้าง ดังนี้
```
app/
  models/
    index.js
    task.js
    user.js
  routes/
    users/
      index.js
    index.js
  services/
    users/
      index.js
    index.js
```

### models ###
สำหรับสร้าง models ของ [Sequelize](http://docs.sequelizejs.com/) 

- index.js ใช้สำหรับ สร้าง connection และโหลด models ทั้งหมดมาเก็บไว้ `db: {}`
- task.js, user.js คือ ไฟล์ models ของ Sequelize ดูวิธีการสร้าง[ที่นี่](http://docs.sequelizejs.com/manual/tutorial/models-definition.html)

### routes ###
เอาไว้สำหรับสร้าง route ใหม่ โดยให้สร้างโฟลเดอร์ใหม่ เช่น users และต้องมีไฟล์ index.js ซึ่งชื่อโฟลเดอร์จะเป็นชื่อของ route และไฟล์ index.js ให้สร้างตาม `express.Router()`

ตัวอย่าง http://localhost:3001/users/1

### services ###
เป็นไฟล์รวม services ของแต่ละ routes แต่จะมี index.js ไว้รวมทุก services

## Server ##
จะให้ start server เมื่อ มีการเชื่อมต่อฐานข้อมูลสำเร็จแล้ว

## Authen ##
ขั้นตอนการตรวจสอบ authen อยู่ที่ไฟล์ ./middlewares/auth.js โดยใช้ [JWTs](https://jwt.io/)

ถ้าต้องการให้ตรวจสอบทุก route ใช้ `app.use(require('./middlewares/auth'))` ที่ไฟล์ ./index.js ได้เลย

