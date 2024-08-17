var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-conversions",
  "level": "1",
  "url": "sec-section-conversions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Conversions",
  "body": " Conversions  Bla.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
