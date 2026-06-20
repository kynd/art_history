# Research & Writing Workflow

This document defines the rules and steps for writing, researching, fact-checking, and managing content on the Art History website.

---

- **Public Pages**: Published pages visible in both Development and Production. Located outside `src/content/docs/research-and-discussions/` (e.g. `src/content/docs/*.md`).
- **Research & Discussion Pages**: Research drafts, source notes, and internal discussions. Located in `src/content/docs/research-and-discussions/`.
  - **Visibility**: These pages are built in both development and production.
  - **Styling**: They use a condensed layout: sans-serif only, smaller font size, and tighter margins to optimize information density.

---

## 2. Command Execution Patterns

### Command A: "Make a research page on [Topic]"
1. Perform web search and research.
2. Create a markdown page under `src/content/docs/research-and-discussions/`.
3. Add frontmatter with a short `slug` (e.g. `slug: research-roman-art`) and a bilingually structured title.
4. Create a dedicated `# Research Questions / 研究課題` section at the top of the page, starting with a brief introductory paragraph followed by the questions broken down into concise bullet points.
5. Record all sources with clickable URLs at the bottom of the page in a `# Sources / 情報源` section.
6. **Follow-ups**: When asked follow-up questions, reply by directly updating this research page's contents.

### Command B: "Make a public page [Topic]"
1. Create a page outside of the `research-and-discussions` folder (e.g., `src/content/docs/first-page/child.md`).
2. Implement bilingually styled headings, body text, and layout.
3. Gather references and links to the sources at the bottom of the page in a `# References / 参考文献` section.

### Command C: "Check consistency of [Page]"
1. Read the specified page.
2. Search and check other pages in the workspace (using `grep_search` or reading files).
3. Compare timeline facts, definitions, names, spelling, and tone consistency.
4. Document inconsistencies using inline **Editor's Notes** (see section 3 below).

### Command D: "Do fact check [Page]"
1. Read the specified page.
2. Search relevant web resources using `search_web` to verify facts, dates, names, and attributions.
3. If errors or unverified statements are found, report them and place inline **Editor's Notes** on the page.

---

## 3. Disclaimers & Fair Use Rules

- **AI-Authored Disclaimer**:
  - All content pages must have a disclaimer stating that the page is written by AI with a human editor, containing a link back to the homepage to learn about the process.
  - This disclaimer is automatically appended to the bottom of all non-homepage articles via the global layout.
- **Fair Use Images**:
  - When researching and creating pages, they can include images from other pages within the range of fair use.
  - Directly embed the images and add captions to clearly annotate the source of each image.

---

## 4. Feedback & Correction: Editor's Notes

When you find inconsistencies, mistakes, or have suggestions for page edits, insert comments inline directly on the page using the following HTML format:

```html
<aside class="editor-note">
  <span class="aside-icon">✍️</span>
  <div class="aside-body">
    <strong>Editor's Note:</strong> Suggestion, mistake description, or consistency issue.
  </div>
</aside>
```

These elements will be highlighted in orange and yellow to stand out clearly from general content, facilitating discussion and resolution.

---

## 5. Editorial Rules: Quotes, Bold Text, and Headings

To maintain visual clarity, premium design, and a narrative tone, follow these guidelines:

- **Bold Text (`**`):**
  - Only bold the **first** introduction of key historical concepts, categories, or documents (e.g. **techne**, **fine arts**).
  - Never repeat bolding of a term on the same page.
  - Limit bolding to 1-2 words/phrases per section.
  - For Japanese text, place bold markers inside brackets: `「**工芸**」` instead of `**「工芸」**`.
- **Quotation Marks (`"..."` / `「...」`):**
  - Use quotation marks strictly for literal direct quotes.
  - Avoid using quotes to emphasize words or express irony (e.g. do not write "genius" or "art" in quotes repeatedly).
  - Use double quotes (`"..."`) for English text, and corner brackets (`「...」`) for Japanese text. Do not mix them.
- **Heading Style (The Gombrich Rule):**
  - **No Academic Labels or Colons:** Avoid dry, textbook-like, or overly academic headings. Do not use structural labels (e.g., "Introduction:", "Conclusion:", "Section 2:"), colons to attach subtitles, or parallel dry translations.
  - **No Numbering:** Never include section/chapter numbers (e.g., "1.", "Chapter A", "Part I").
  - **Narrative, Evocative & Concrete:** Choose headings that are warm, curiosity-inducing, and humble, using concrete metaphors or storytelling phrases (e.g., use "History as a Conversation" instead of "Introduction", "Measuring the bottomless well" instead of "Explaining Scale", "When art was simply a skill" instead of "Techne and Ars").
  - **Dialogue & Questions:** Frame headings as conversational questions or cues where appropriate (e.g., "Who decides what is art?" or "There is no such thing as Art?").

---

## 6. Self-Review Pass

After writing or editing any page, perform a self-review pass before concluding work. Verify the following:

- **Natural Flow & Narrative Tone:** Read the text to ensure a warm, storytelling, yet intellectually respectful tone. Check that translations flow naturally and avoid rigid passive framing.
- **Accuracy & Consistency:** Confirm historical details, names, dates, and formatting conventions are accurate and consistent across the workspace.
- **Bilingual Relationship:** Ensure the English and Japanese versions align naturally, conveying the same contextual meaning without awkward literal or word-for-word translation.
- **Editorial Compliance:** Check that bolding is restricted to key concepts once, quotation marks are reserved strictly for direct quotes (with CJK bracket enclosing rules satisfied), and headings strictly follow the narrative Gombrich Rule.


