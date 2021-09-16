const { Client } = require('@notionhq/client')

exports.handler = async () => {
  const notion = new Client({
    auth: process.env.NOTION_API_TOKEN,
  })

  const databaseId = '102af63e1f5d4fc88ec313b67a394cfe'

  const myPage = await notion.databases.query({
    database_id: databaseId,
  })

  return {
    statusCode: 200,
    body: JSON.stringify(myPage),
  }
}
