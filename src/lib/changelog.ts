import fs from "fs"
import path from "path"
import matter from "gray-matter"

const changelogsDirectory = path.join(process.cwd(), "src/components/changelog/content")

export function getSortedChangelogsData() {
  const fileNames = fs.readdirSync(changelogsDirectory)
  const allChangelogsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.mdx$/, "")
    const fullPath = path.join(changelogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as {
        date: string
        title: string
        version: string
        tags: string[]
      }),
      content: matterResult.content,
    }
  })

  return allChangelogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}