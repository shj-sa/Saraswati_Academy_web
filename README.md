# 📁 Project File Guide

constant File: address 
### Client > src > constants

how to add images in the file 
### import img from "../assets/images/<filename.png/jpg/webp.. etc>"
or
### "https://image.com/xyz"

This guide explains the purpose of each file, what constants or data they contain, and how non-coders can safely update them.

## ✅ whyUs.js

**Purpose:** Shows the "Why Choose Us" points on the website (with images and text) that scroll or appear on the page.

**How to update:** Add or edit a point inside this list:

```js
{ text: "Your point here", image: img1 }
```

**Example:** Change "Possibly India's first Hindi Startup!" to "India's first Hindi language startup!"

**Tip:** Use the same image variables (img1, img2, etc.) or add new ones at the top if you want more pictures.

## ✅ Testimonials.js

**Purpose:** Displays user reviews (testimonials) with names, professions, photos, and review texts.

**How to update:** Add a new testimonial like this:

```js
{
  name: "New Name",
  profession: "Student",
  imageSrc: "path/to/image",
  review: `Their review text here.`,
}
```

Make sure each entry ends with a comma!

## ✅ socialLinks.json

**Purpose:** Shows social media links (like Instagram, Facebook) in the website footer.

**How to update:** Replace the URLs in this format:

```json
"instagram": "https://newlink.com"
```

## ✅ Resources.json

**Purpose:** Controls the "Resources" page with categories, downloadable materials, images, and links.

**How to update:** To change titles, descriptions, or links, just edit the text inside quotes.

To add a new resource:

```json
{
  "id": "new-id",
  "title": "New Resource Title",
  "description": "Details here",
  "image": "image-link",
  "downloadCount": 0,
  "level": "Beginner/Intermediate/Advanced",
  "link": "share link of drive make sure to make it public"
}
```

## ✅ Navigation_Bar.json

**Purpose:** Controls the website's navigation bar (menu at the top).

**How to update:**
- To remove a tab, set `"present": false`
- To edit the tab name, change the `"title"`

**Example:**
```json
"Home": {
  "title": "Homepage",
  "present": true
}
```

## ✅ MediaCoverage.json

**Purpose:** Displays media articles and achievements in markdown format.

**How to update:** Change article text, titles, dates, sources, and links. To add a new article, copy an existing block and adjust the content.

Content inside content uses markdown (**bold**, *italic*, etc.)

```json
{
    "mediaCoverage": [
      {
        "id": 1,
        "title": "Featured in Tech Today",
        "date": "2025-02-15",
        "source": "Tech Today Magazine",
        "image": "/api/placeholder/400/240",
        "content": "**Our institute** along with language mastery\n\n[Read full article](https://example.com/article1)",
        "link": "https://example.com/article1"
      }],
  "achievements": [
      {
        "id": 1,
        "title": "Education Excellence Award 2025",
        "date": "2025-01-20",
        "organization": "Language Education Council",
        "image": "/api/placeholder/400/240",
        "content": "**Awarded for:**\n\n- Excellence learners of all ages."
      }]
}
```

to add new add like the above format consider the proper use of comma

## ✅ Keysellingpoints.js

**Purpose:** Lists the key selling points of your program (like features or benefits).

**How to update:** Add or edit points in this array:

```js
"New Selling Point"
```

## ✅ KeyImage.js

**Purpose:** Sets the default top image of the page.

**How to update:** Replace the image file in:

```js
const image = "../assets/images/image.webp";
```

## ✅ FAQ.js

**Purpose:** Manages the list of frequently asked questions and answers.

**How to update:** Add a new FAQ:

```js
{
  question: "Your question?",
  answer: "Your answer."
}
```

For line breaks inside answers, use `\n`

**Example:**
```js
answer: "Yes,\n we can reschedule the classes"
```

## ✅ CourseDetails.json, HindiMemoryGame.json, HindiPronunciation.json, HindiWordScramble.json

**Purpose:** Store content or data related to specific features (like courses or games).

**How to update:** Look for sections like:

```json
"title": "Course Title",
"description": "Course Description"
```

and edit the text.

## ✅ contactUs.json

**Purpose:** Contains contact form details or pre-filled values.

**How to update:** Edit values like email, phone, or form labels.

## ⚠️ Notes for All Files

- Always keep commas between items
- Use quotation marks around text
- Don't remove `{ }`, `[ ]`, or `,` unless you know the structure
