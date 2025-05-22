import path from "path";
import fs from "fs";
export function checkVersion(version) {
  return {
    name: "vite-plugin-check-version",
    buildStart() {
      const now = new Date().getTime();
      const version = {
        version: now,
      };
      const versionPath = path.join(__dirname, "../public/versionData.json");
      console.log(versionPath)
      fs.writeFileSync(versionPath, JSON.stringify(version), "utf8", async (err) => {

        if (err) {
          console.log("写入失败");
        } else {
            fs.writeFileSync(versionFilePath, JSON.stringify({ version }));

            // 上传到阿里云 OSS
            const client = new OSS(ossConfig);
            const fileName = 'version.json';

            try {
              const result = await client.put(fileName, versionFilePath);
              console.log('File uploaded to CDN:', result.url);
            } catch (error) {
              console.error('Failed to upload file:', error);
            }
        }
      });
    },
  };
}
