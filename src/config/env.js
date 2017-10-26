module.exports = {
  port: process.env.PORT || 3001, // ถ้าไม่ระบุใน env ให้ใช้ port 3000 แทน
  debug: process.env.NODE_ENV === 'development',
  secretKey: process.env.SECRET_KEY
}
