import { openDatabase, enablePromise } from 'react-native-sqlite-storage'

enablePromise(true)
const DATABASE_NAME = 'music.db'

export async function getDbConnection() {
  const db = await openDatabase({ name: DATABASE_NAME, version: 'default' })
  return db
}

export async function createTable(db) {
  const query = 'CREATE TABLE IF NOT EXISTS song_table (id INTEGER PRIMARY KEY AUTOINCREMENT, url VARCHAR(250), title VARCHAR(250), artist VARCHAR(250), duration INTEGER, album VARCHAR(250), image VARCHAR(250), song_id VARCHAR(250))'
  return db.executeSql(query)
}

export async function initDatabase() {
  const db = await getDbConnection()
  await createTable(db)
  console.log('DB Iniciada')
  db.close()
}

export async function insertSong(db, url, title, artist, duration, album, image, song_id) {
  const insertQuery = `INSERT INTO song_table (url, title, artist, duration, album, image, song_id) VALUES ('${url}', '${title}', '${artist}', ${duration}, '${album}', '${image}', '${song_id}');`
  return db.executeSql(insertQuery)
}

export async function getSong(db) {
  const song = []
  const results = await db.executeSql('SELECT * FROM song_table')
  results.forEach(function (resultSet) {
    for (let index = 0; index < resultSet.rows.length; index++) {
      song.push(resultSet.rows.item(index))
    }
  });
  lastSong = song.slice(-1)
  tableSongId = lastSong[0].id
  console.log({tableSongId})
  if (song.length > 3) {
    const deleteQuery = `DELETE FROM song_table WHERE 'id' NOT IN (${tableSongId});`
    db.executeSql(deleteQuery)
  }
  db.close()
  return lastSong
}
