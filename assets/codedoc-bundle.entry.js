import { getRenderer } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/transport/renderer.js';
import { initJssCs } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/transport/setup-jss.js';initJssCs();
import { installTheme } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/footnote/gather-footnotes.js';gatherFootnotes();
import { TabSelector } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/tabs/selector.js';
import { CollapseControl } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/collapse/collapse-control.js';
import { ToCPrevNext } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/prevnext/index.js';
import { ToCToggle } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/components/darkmode/index.js';
import { ConfigTransport } from 'C:/4_project/07_實習紀錄/arete-internship/.codedoc/node_modules/@codedoc/core/dist/es5/transport/config.js';

const components = {
  '5bUDwQJYmHpPly9H3cGYjQ==': TabSelector,
  'AS5Oj9lhs+V6Nfni7HG+ig==': CollapseControl,
  '5ZjAyZSs5gB6mpkmBb892Q==': ToCPrevNext,
  'T4h3fvKmW8F+SStWYT5Svw==': ToCToggle,
  'GtHbmKLQ1OfrCUDiHbY2sA==': DarkModeSwitch,
  'oDcavtYzmZkEsdZm/kbXTg==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
