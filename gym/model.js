import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: 'yours',
  user: 'yours',
  password: 'yours',
  database: 'yours'
});
 try { 
  await db.connect();
  console.log('Connected to MYSQL bilalgym database');
 } catch(err){
  console.error('Database connection error:',err); 
}

export async function getUser(query = {}) {
  const queryElements = [];
  const values =[];
  if (query) {
    for (const key in query) {
      queryElements.push(`${key} = ?`);
      values.push(query[key]);
    }
  }   
  const queryString = `SELECT * FROM users WHERE ${queryElements.join(' AND ')}`;
  try {
    const [data] = await db.query(queryString, values);
    return data;
} catch (error) {
    console.error('Error executing query:', error);
    throw error;
}
}


export async function createUser(query = {}){
const queryElements = [];
  const values =[];
  if (query) {
    for (const key in query) {
      queryElements.push(`${key} = ?`);
      values.push(query[key]);
    }
  }   
  const queryString = `INSERT INTO users (username,password,email) VALUES(?,?,?)`;
  try {
    const [data] = await db.query(queryString, values);
    return data.insertId;
} catch (error) {
    console.error('Error executing query:', error);
    throw error;
}
}
export async function createMailer(query = {}){
  const queryElements = [];
    const values =[];
    if (query) {
      for (const key in query) {
        queryElements.push(`${key} = ?`);
        values.push(query[key]);
      }
    }  
    const queryString = `INSERT INTO mails (email) VALUES(?)`;
    try {
      const [data] = await db.query(queryString, values);
      return data.insertId;
  } catch (error) {
      console.error('Error executing query:', error);
      throw error;
  }
  }

export async function getLogo(){
  const query = `SELECT TO_BASE64(image) AS logo FROM home_images WHERE id = 6`;
  const [result] = await db.query(query);
  const logo = result[0].logo;
  return logo;
}

export async function getDeadHang(){
  const query = `SELECT TO_BASE64(image) AS deadhang FROM home_images WHERE id = 1`;
  const [result] = await db.query(query);
  const deadhang = result[0].deadhang;
 return deadhang;
}
export async function getBegginer(){
  const query = `SELECT TO_BASE64(image) AS beginner FROM home_images WHERE id = 3`;
  const [result] = await db.query(query);
  const beginner = result[0].beginner;
 return beginner;
}

export async function getIntermediate(){
  const query = `SELECT TO_BASE64(image) AS intermediate FROM home_images WHERE id = 4`;
  const [result] = await db.query(query);
  const intermediate = result[0].intermediate;
 return intermediate;
}

export async function getAdvanced(){
  const query = `SELECT TO_BASE64(image) AS advance FROM home_images WHERE id = 5`;
  const [result] = await db.query(query);
  const advanced = result[0].advanced;
 return advanced;
}


export async function getSocialIcons(){
  const query = `SELECT TO_BASE64(photos) AS sicon FROM icons WHERE id > 5 `;
  const [sicons] = await db.query(query);
 return sicons;
}
export async function getOrderIcon(){
  const query = `SELECT TO_BASE64(photos) AS sicon FROM icons WHERE id = 5 `;
  const [result] = await db.query(query);
  const sicon = result[0].sicon;
  return sicon;
}

export async function getProfilePic(){
  const query = `SELECT TO_BASE64(image) AS profile FROM home_images WHERE id = 2`;
  const [result] = await db.query(query);
  const profile = result[0].profile;
  return profile;
}
export async function getPrograms(){
  const query = `SELECT name, TO_BASE64(image) AS photo,info,price FROM programs`;
  const [data] = await db.query(query);
  return data ; 
}
