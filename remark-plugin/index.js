const visitChildren = require('unist-util-visit-children')

module.exports = () => {
  return root => {
    visitChildren(node => {
      if (
        node.type === `paragraph` &&
        node.children.length > 0 &&
        node.children[0].value === `:taco:`
      ) {
        node.type = `jsx`
        node.value = `<Test/>`
      }
    })(root)
  }
}
