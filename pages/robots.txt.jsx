import fs from "fs";
import path from "path";

export function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  res.end(fs.readFileSync(path.join(process.cwd(), "robots.txt"), "utf8"));
  return { props: {} };
}
