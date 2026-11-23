# Valeria Sports Wears — The Football Edit

A responsive football catalogue built with HTML, CSS and JavaScript. No dependencies or build step are required; serve the `dist/` folder.

## Catalogue coverage

- 384 home/away shirt references: all participating clubs in the Premier League, La Liga, Serie A, Bundesliga and Ligue 1 for both 2025/26 and 2026/27.
- 382 sourced kit photos, plus two clearly labelled photo-pending entries: FC Lorient 2025/26 Away and Le Havre AC 2025/26 Away.
- 20 curated boots: fifteen modern models and five classic designs or reissues, including ten F50 variants. This is not an exhaustive history of every boot ever manufactured.
- Nine real essentials with product photos: two football socks, two tracksuits, three bags, a football and goalkeeper gloves. All five original illustrated products were replaced.
- 413 unique product entries in total.

## Browsing features

League, club, season, kit variant, boot brand, model family and modern/classic filters; accent-insensitive search; sorting; 24-item pagination; locally saved favourites; responsive mobile filters; USD/CNY selection; requested sizes; a locally saved enquiry bag with quantities, removal and downloadable enquiry text.

## Product accuracy and sales status

The expanded catalogue is a reference catalogue. Manufacturer/retailer/gallery links are included in product details. League membership is matched to the season-specific Football Kit Archive galleries. Kit imagery comes from the Footy Headlines season overviews and their credited image sources. Images marked as leaks by the source gallery carry a visible design-reference note in product details. Source imagery does not verify stock or seller authorization. Club entries are shirts, not complete shirt-and-shorts sets.

Selling prices, stock, condition, sizes, payments, tax, delivery, orders and merchant notifications are not connected or confirmed. Items show “Price on enquiry.” Downloading an enquiry neither sends a message nor places an order. Requested sizes express customer interest, not availability. The currency selector is ready for prices but is not a live exchange-rate service.

The classic boot collection includes both older models and modern reissues/remasters, labelled accordingly in names or descriptions. In particular, the Total90 listing is a reissue and the Hypervenom listing is the RGN remaster.

## Validation

Checked 413 unique IDs and all 384 club/season/home-away combinations; decoded all referenced bitmap assets with Pillow; checked JavaScript syntax; tested combined league/season/variant/club filters, brand and classic boot filters, pagination, favourites and requested sizes in the enquiry bag.

## Source overviews

- https://www.footyheadlines.com/25-26-kit-overview/
- https://www.footyheadlines.com/26-27-kit-overview/
- Season-specific league galleries at https://www.footballkitarchive.com/
- Individual boot source links are stored alongside each product.

## Yamal F50 and real essentials update

Added Lamine Yamal Heartbreaker (2026, JR4441), Unity Purple (2025, JS0560), and the archived limited-edition LY304 Pink (2024), plus F50 Hyperfast Elite, Elite Laceless Ice Cold Precision, Pro, Messi Elite Prestig10 and Club. The existing League and classic adizero bring the F50 family to ten entries.

The homepage and navigation now feature Yamal’s signature collection, with dedicated real-product collection cards for socks, training wear and bags. Search includes player and boot-family metadata. “Bags” has a separate category.

Replacements: Nike Classic II socks; Nike Dri-FIT Academy tracksuit; Nike Brasilia 9.5 medium duffel; adidas UCL League 25/26 ball; Nike Vapor Grip3 gloves. Added adidas Adisock 23 socks, Tiro 25 Essentials tracksuit, Tiro League medium duffel and Tiro League backpack.

Checked browser results for three Yamal products, ten F50 products, twenty total boots, two socks, two tracksuits and three bags. Matching bitmap files were decoded and inspected before publication. Product reference links do not establish Valeria’s stock or selling authorization. The LY304 is an archive/reference listing; availability is not claimed.


November catalogue expansion: 41 new photo-backed references: green Pulse Mint laced and laceless F50s; club training tops and tracksuits across all five major leagues; footballs and socks. Product links appear in details. All prices remain on enquiry. Training and socks support league and club filters.

Market pricing update: 449 numeric retail/reference/estimate prices and 5 quote-only entries. Per-product kind, source, review date and original currency retained in dist/pricing.json. USD prices convert approximately at 6.674 CNY per USD; the UI identifies estimates, archived/launch benchmarks and resale asking prices. No confirmed seller offers or checkout were introduced.

Search setup: canonical URL, descriptive title/description, organization metadata, robots.txt, one-page sitemap and Search Console verification tag. Prepared from published commit 01e6bc0; unpublished Google login changes are excluded.
