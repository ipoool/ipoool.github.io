const { Helmet } = require("react-helmet")
const { renderToString } = require("react-dom/server")
const inline = require("glamor-inline")

exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
    const bodyHTML = renderToString(bodyComponent)
    const inlinedHTML = inline(bodyHTML)
  
    replaceBodyHTMLString(inlinedHTML)
  }