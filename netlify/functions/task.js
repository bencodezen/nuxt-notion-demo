const { Client } = require('@notionhq/client')

exports.handler = async (event) => {
  const { pageId } = JSON.parse(event.body)

  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  })

  const pageBlockChildren = await notion.blocks.children.list({
    block_id: pageId,
  })

  return {
    statusCode: 200,
    body: JSON.stringify(pageBlockChildren),
  }
}
