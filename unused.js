const htmlEventHandlers = new Set(['onabort', 'onanimationcancel', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onblur', 'onerror', 'onfocus', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncuechange', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onformdata', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadend', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onwheel', 'onpause', 'onplay', 'onplaying', 'onpointerdown', 'onpointermove', 'onpointerup', 'onpointercancel', 'onpointerover', 'onpointerout', 'onpointerenter', 'onpointerleave', 'onpointerlockchange', 'onpointerlockerror', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectstart', 'onselectionchange', 'onshow', 'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'onvolumechange', 'ontouchcancel', 'ontouchend', 'ontouchmove', 'ontouchstart', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart', 'onwaiting', ])
const fixedAttributes = new Set(['accept', 'accept-charset', 'accesskey', 'action', 'align', 'allow', 'alt', 'async', 'autocapitalize', 'autocomplete', 'autofocus', 'autoplay', 'background', 'bgcolor', 'border', 'buffered', 'capture', 'challenge', 'charset', 'checked', 'cite', 'class', 'code', 'codebase', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'crossorigin', 'csp', 'data', 'datetime', 'decoding', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'enctype', 'enterkeyhint', 'for', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'icon', 'id', 'importance', 'integrity', 'intrinsicsize', 'inputmode', 'ismap', 'itemprop', 'keytype', 'kind', 'label', 'lang', 'language', 'loading', 'list', 'loop', 'low', 'manifest', 'max', 'maxlength', 'minlength', 'media', 'method', 'min', 'multiple', 'muted', 'name', 'novalidate', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'poster', 'preload', 'radiogroup', 'readonly', 'referrerpolicy', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'selected', 'shape', 'size', 'sizes', 'slot', 'span', 'spellcheck', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'style', 'summary', 'tabindex', 'target', 'title', 'translate', 'type', 'usemap', 'value', 'width', 'wrap', ...htmlEventHandlers]) 
const isAnHtmlAttribute = (string) => {
    if (fixedAttributes.has(string)) {
        return true
    } else if (string.startsWith('data-')) {
        return true
    }
    return false
}

const cssHmtlOverlap = new Set(['width', 'height', 'background', 'border', 'color'])
const splitHtmlCssAttributes = (object)=> {
    const htmlAttributes = {}
    const cssAttributes = {}
    for (const [key, value] of Object.entries(object)) {
        if (cssHmtlOverlap.has(key)) {
            htmlAttributes[key] = value
            cssAttributes[key] = value
        } else if (isAnHtmlAttribute(key)) {
            htmlAttributes[key] = value
        } else {
            cssAttributes[key] = value
        }
    }
    return htmlAttributes, cssAttributes
}

// 
// Code for a future feature of inherititing custom components from more than just HTMLElement
// 
var makeCustom = (constructor, extend) => {
    // use the constructor name as the name of the element
    let name = constructor.name.toLowerCase()+"-"
    // if its inherititing from something other than HTMLElement
    let parent = Object.getPrototypeOf(constructor).name
    window.customElements.define(name, constructor, {extends:(extend || htmlElementMap[parent])})
}
let missingHtmlElementClasses = {
    // inhert from HTML Element
    HTMLAbbrElement      : class HTMLAbbrElement     extends HTMLElement {constructor(){super()}},
    HTMLAcronymElement   : class HTMLAcronymElement  extends HTMLElement {constructor(){super()}},
    HTMLAddressElement   : class HTMLAddressElement  extends HTMLElement {constructor(){super()}},
    HTMLBElement         : class HTMLBElement        extends HTMLElement {constructor(){super()}},
    HTMLBdoElement       : class HTMLBdoElement      extends HTMLElement {constructor(){super()}},
    HTMLBigElement       : class HTMLBigElement      extends HTMLElement {constructor(){super()}},
    HTMLCenterElement    : class HTMLCenterElement   extends HTMLElement {constructor(){super()}},
    HTMLCiteElement      : class HTMLCiteElement     extends HTMLElement {constructor(){super()}},
    HTMLCodeElement      : class HTMLCodeElement     extends HTMLElement {constructor(){super()}},
    HTMLDdElement        : class HTMLDdElement       extends HTMLElement {constructor(){super()}},
    HTMLDfnElement       : class HTMLDfnElement      extends HTMLElement {constructor(){super()}},
    HTMLDtElement        : class HTMLDtElement       extends HTMLElement {constructor(){super()}},
    HTMLEmElement        : class HTMLEmElement       extends HTMLElement {constructor(){super()}},
    HTMLIElement         : class HTMLIElement        extends HTMLElement {constructor(){super()}},
    HTMLKbdElement       : class HTMLKbdElement      extends HTMLElement {constructor(){super()}},
    HTMLNoframesElement  : class HTMLNoframesElement extends HTMLElement {constructor(){super()}},
    HTMLNoscriptElement  : class HTMLNoscriptElement extends HTMLElement {constructor(){super()}},
    HTMLSElement         : class HTMLSElement        extends HTMLElement {constructor(){super()}},
    HTMLSampElement      : class HTMLSampElement     extends HTMLElement {constructor(){super()}},
    HTMLSmallElement     : class HTMLSmallElement    extends HTMLElement {constructor(){super()}},
    HTMLStrikeElement    : class HTMLStrikeElement   extends HTMLElement {constructor(){super()}},
    HTMLStrongElement    : class HTMLStrongElement   extends HTMLElement {constructor(){super()}},
    HTMLSubElement       : class HTMLSubElement      extends HTMLElement {constructor(){super()}},
    HTMLSupElement       : class HTMLSupElement      extends HTMLElement {constructor(){super()}},
    HTMLTtElement        : class HTMLTtElement       extends HTMLElement {constructor(){super()}},
    HTMLUElement         : class HTMLUElement        extends HTMLElement {constructor(){super()}},
    HTMLVarElement       : class HTMLVarElement      extends HTMLElement {constructor(){super()}},
    // heading 
    HTMLHeading1Element   : class HTMLHeading1Element  extends HTMLHeadingElement {constructor(){super()}},
    HTMLHeading2Element   : class HTMLHeading2Element  extends HTMLHeadingElement {constructor(){super()}},
    HTMLHeading3Element   : class HTMLHeading3Element  extends HTMLHeadingElement {constructor(){super()}},
    HTMLHeading4Element   : class HTMLHeading4Element  extends HTMLHeadingElement {constructor(){super()}},
    HTMLHeading5Element   : class HTMLHeading5Element  extends HTMLHeadingElement {constructor(){super()}},
    HTMLHeading6Element   : class HTMLHeading6Element  extends HTMLHeadingElement {constructor(){super()}},
    // inhert from HTMLTableColElement
    HTMLTableColGroupElement  : class HTMLTableColGroupElement extends HTMLTableColElement {constructor(){super()}},
}
Object.assign(window,missingHtmlElementClasses)
let htmlElementMap = {
    // tags that have no HTML_Element: article, aside, bdi, figcaption, figure, footer, header, mark, nav, rp, rt, ruby, section, summary, svg, track, wbr
    HTMLAnchorElement       : "a",
    HTMLAbbrElement         : "abbr",
    HTMLAcronymElement      : "acronym",
    HTMLAddressElement      : "address",
    HTMLAppletElement       : "applet",
    HTMLAreaElement         : "area",
    HTMLAudioElement        : "audio",
    HTMLBElement            : "b",
    HTMLBaseElement         : "base",
    HTMLBaseFontElement     : "basefont",
    HTMLBdoElement          : "bdo",
    HTMLBigElement          : "big",
    HTMLQuoteElement        : "blockquote",
    HTMLBodyElement         : "body",
    HTMLBRElement           : "br",
    HTMLButtonElement       : "button",
    HTMLCanvasElement       : "canvas",
    HTMLTableCaptionElement : "caption",
    HTMLCenterElement       : "center",
    HTMLCiteElement         : "cite",
    HTMLCodeElement         : "code",
    HTMLTableColElement     : "col",
    HTMLTableColGroupElement: "colgroup",
    HTMLDataElement         : "data",
    HTMLDataListElement     : "datalist",
    HTMLDdElement           : "dd",
    HTMLModElement          : "del",
    HTMLDetailsElement      : "details",
    HTMLDfnElement          : "dfn",
    HTMLDialogElement       : "dialog",
    HTMLDirectoryElement    : "dir",
    HTMLDivElement          : "div",
    HTMLDListElement        : "dl",
    HTMLDtElement           : "dt",
    HTMLEmElement           : "em",
    HTMLEmbedElement        : "embed",
    HTMLFieldSetElement     : "fieldset",
    HTMLFontElement         : "font",
    HTMLFormElement         : "form",
    HTMLFrameElement        : "frame",
    HTMLFrameSetElement     : "frameset",
    HTMLHeading1Element     : "h1",
    HTMLHeading2Element     : "h2",
    HTMLHeading3Element     : "h3",
    HTMLHeading4Element     : "h4",
    HTMLHeading5Element     : "h5",
    HTMLHeading6Element     : "h6",
    HTMLHeadElement         : "head",
    HTMLHRElement           : "hr",
    HTMLHtmlElement         : "html",
    HTMLIElement            : "i",
    HTMLIFrameElement       : "iframe",
    HTMLImageElement        : "img",
    HTMLInputElement        : "input",
    HTMLModElement          : "ins",
    HTMLIsIndexElement      : "isindex",
    HTMLKbdElement          : "kbd",
    HTMLLabelElement        : "label",
    HTMLLegendElement       : "legend",
    HTMLLIElement           : "li",
    HTMLLinkElement         : "link",
    HTMLMainElement         : "main",
    HTMLMapElement          : "map",
    HTMLMenuElement         : "menu",
    HTMLMetaElement         : "meta",
    HTMLMeterElement        : "meter",
    HTMLNoframesElement     : "noframes",
    HTMLNoscriptElement     : "noscript",
    HTMLObjectElement       : "object",
    HTMLOListElement        : "ol",
    HTMLOptGroupElement     : "optgroup",
    HTMLOptionElement       : "option",
    HTMLOutputElement       : "output",
    HTMLParagraphElement    : "p",
    HTMLPictureElement      : "picture",
    HTMLParamElement        : "param",
    HTMLPreElement          : "pre",
    HTMLProgressElement     : "progress",
    HTMLQuoteElement        : "q",
    HTMLSElement            : "s",
    HTMLSampElement         : "samp",
    HTMLScriptElement       : "script",
    HTMLSelectElement       : "select",
    HTMLSmallElement        : "small",
    HTMLSlotElement         : "slot",
    HTMLSourceElement       : "source",
    HTMLSpanElement         : "span",
    HTMLStrikeElement       : "strike",
    HTMLStrongElement       : "strong",
    HTMLStyleElement        : "style",
    HTMLSubElement          : "sub",
    HTMLSupElement          : "sup",
    HTMLTableElement        : "table",
    HTMLTableSectionElement : "tbody",
    HTMLTableCellElement    : "td",
    HTMLTemplateElement     : "template",
    HTMLTextAreaElement     : "textarea",
    HTMLTableSectionElement : "tfoot",
    HTMLTableCellElement    : "th",
    HTMLTableSectionElement : "thead",
    HTMLTimeElement         : "time",
    HTMLTitleElement        : "title",
    HTMLTableRowElement     : "tr",
    HTMLTtElement           : "tt",
    HTMLUElement            : "u",
    HTMLUListElement        : "ul",
    HTMLVarElement          : "var",
    HTMLVideoElement        : "video",
}
