// controllers/facebookController.js
const fetch = require("node-fetch");

const PAGE_ID = "Saraswati.Hindi.Jagat"; // You may need numeric ID or app-scoped ID
const ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

exports.getFacebookReviews = async (req, res) => {
  try {
    const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/ratings?access_token=${ACCESS_TOKEN}`;
    const response = await fetch(url);
    const json = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: json.error.message });
    }

    res.json({ reviews: json.data });
  } catch (error) {
    console.error("Facebook Reviews Error:", error.message);
    res.status(500).json({ error: "Failed to fetch Facebook reviews" });
  }
};
