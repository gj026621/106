var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-conversions",
  "level": "1",
  "url": "sec-section-conversions.html",
  "type": "Section",
  "number": "1.1",
  "title": "Conversions",
  "body": " Conversions   Facteurs de conversion  Multiplier une quantité par 1 ne la modifie pas. Cette astuce permet de faire apparaître l'unité souhaitée lors d'une conversion.     Convertissez 12 gigamètres en micromètres. Utilisez la notation scientifique pour exprimer votre réponse.               Bla.      Combien y a-t-il de pieds dans verges? Utilisez la notation décimale pour exprimer votre réponse.          pieds    Bla.      Combien y a-t-il de micromètres dans milles? Utilisez la notation scientifique pour exprimer votre réponse. Arrondissez la mantisse à deux décimales.               Bla.    "
},
{
  "id": "ex-conversion-1",
  "level": "2",
  "url": "sec-section-conversions.html#ex-conversion-1",
  "type": "Exemple",
  "number": "1.1.1",
  "title": "",
  "body": "  Convertissez 12 gigamètres en micromètres. Utilisez la notation scientifique pour exprimer votre réponse.               Bla.   "
},
{
  "id": "ex-conversion-2",
  "level": "2",
  "url": "sec-section-conversions.html#ex-conversion-2",
  "type": "Exemple",
  "number": "1.1.2",
  "title": "",
  "body": "  Combien y a-t-il de pieds dans verges? Utilisez la notation décimale pour exprimer votre réponse.          pieds    Bla.   "
},
{
  "id": "ex-conversion-3",
  "level": "2",
  "url": "sec-section-conversions.html#ex-conversion-3",
  "type": "Exemple",
  "number": "1.1.3",
  "title": "",
  "body": "  Combien y a-t-il de micromètres dans milles? Utilisez la notation scientifique pour exprimer votre réponse. Arrondissez la mantisse à deux décimales.               Bla.   "
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
