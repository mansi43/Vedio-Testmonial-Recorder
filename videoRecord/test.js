const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
  keyFile: "video-testimonial-tool-429519-8805dfcd35e5.json",
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

async function listFiles() {
  const driveService = google.drive({ version: "v3", auth });
  const res = await driveService.files.list({
    q: "'1ghkLmVC934fwHA64C8zbCG_JngJ_RUTI' in parents",
    fields: "files(id, name)",
  });
  console.log("Files in folder:", res.data.files);
}

listFiles().catch(console.error);
