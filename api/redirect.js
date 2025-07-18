export default function handler(req, res) {
  const redirects = {
    WyWifK: "https://accustomednettlecurt.com/mt2nt4884y?key=273268dcfdf49797bba43a19a366447a",
    abc123: "https://google.com"
  };

  const { path } = req.query;
  const code = Array.isArray(path) ? path[0] : path;

  const destination = redirects[code];

  if (destination) {
    res.writeHead(302, { Location: destination });
    res.end();
  } else {
    res.status(404).send("Link not found");
  }
}
