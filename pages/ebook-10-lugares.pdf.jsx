import fs from 'fs'
import path from 'path'

export function getServerSideProps({ res }) {
  const filePath = path.join(process.cwd(), 'ebook-10-lugares.pdf');
  const fileContents = fs.readFileSync(filePath, 'binary');

  res.setHeader('Content-Type', 'application/pdf')
  res.statusCode = 200
  res.end(fileContents, 'binary')
  
  return { props: {} }
}

export default function Robots() {
  return null
}