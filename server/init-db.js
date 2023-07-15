const articles = require('./data/articles.js')
const { Client } = require('pg')

const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: 'secretpassword',
 database: 'bdd'
})

client.connect()

async function run () {
  for (const article of articles) {
    await client.query({
      text: `INSERT INTO articles(name, description, image, price)
      VALUES ($1, $2, $3, $4)`,
      values: [article.name, article.description, article.image, article.price]
    })
  }
  console.log('importation terminée')
  client.end()
}

run()