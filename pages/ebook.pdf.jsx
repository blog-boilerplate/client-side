import fs from "fs";
import path from "path";

export async function getServerSideProps({ res }) {
  const filePath = path.join(process.cwd(), "ebook-10-lugares.pdf");
  const stat = fs.statSync(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Length", stat.size);
  res.setHeader("Content-Disposition", "attachment; filename=ebook-10-lugares.pdf");

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);

  return {
    props: {},
  };
}

export default function EbookDownload() {
  return null;
}
