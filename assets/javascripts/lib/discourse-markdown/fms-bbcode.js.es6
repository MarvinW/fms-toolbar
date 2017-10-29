import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => opts.features["fms-bbcode"] = true);

function replaceFontColor (text) {
  while (text !== (text = text.replace(/\[color=([^\]]+)\]((?:(?!\[color=[^\]]+\]|\[\/color\])[\S\s])*)\[\/color\]/ig, function (match, p1, p2) {
    return `<font color='${p1}'>${p2}</font>`;
  })));
  return text;
}

function replaceFontSize (text) {
  while (text !== (text = text.replace(/\[size=([^\]]+)\]((?:(?!\[size=[^\]]+\]|\[\/size\])[\S\s])*)\[\/size\]/ig, function (match, p1, p2) {
    return `<font size='${p1}'>${p2}</font>`;
  })));
  return text;
}

function replaceFontFace (text) {
  while (text !== (text = text.replace(/\[font=([^\]]+)\]((?:(?!\[font=[^\]]+\]|\[\/font\])[\S\s])*)\[\/font\]/ig, function (match, p1, p2) {
    return `<font face='${p1}'>${p2}</font>`;
  })));
  return text;
}

function wrap(tag, attr, callback) {
  return function(startToken, finishToken, tagInfo) {
    startToken.tag = finishToken.tag = tag;
    startToken.content = finishToken.content = '';

    startToken.type = 'bbcode_open';
    finishToken.type = 'bbcode_close';

    startToken.nesting = 1;
    finishToken.nesting = -1;

    startToken.attrs = [[attr, callback ? callback(tagInfo) : tagInfo.attrs._default]];
  };
}

function setupMarkdownIt(md) {
  const ruler = md.inline.bbcode.ruler;

  ruler.push('size', {
    tag: 'size',
    wrap: wrap('font', 'size')
  });

  ruler.push('font', {
    tag: 'font',
    wrap: wrap('font', 'face')
  });

  ruler.push('color', {
    tag: 'color',
    wrap: wrap('font', 'color')
  });

  ruler.push('bgcolor', {
    tag: 'bgcolor',

    wrap: wrap('span', 'style', tagInfo => 'background-color:' + tagInfo.attrs._default.trim())
  });

  ruler.push('t', {
    tag: 't',
    wrap: wrap('div', 'class', ()=>'titrenews')
  });

  ruler.push('small',{
    tag: 'small',
    wrap: wrap('span', 'style', ()=>'font-size:x-small')
  });

  ruler.push('floatl', {
    tag: 'floatl',
    wrap: wrap('div', 'class', ()=>'floatl')
  });

  ruler.push('floatr', {
    tag: 'floatr',
    wrap: wrap('div', 'class', ()=>'floatr')
  });

  ruler.push('left', {
    tag: 'left',
    wrap: wrap('div', 'style', ()=>'text-align:left')
  });

  ruler.push('center', {
    tag: 'center',
    wrap: wrap('div', 'style', ()=>'text-align:center')
  });

  ruler.push('right', {
    tag: 'right',
    wrap: wrap('div', 'style', ()=>'text-align:right')
  });

  ruler.push('justify', {
    tag: 'justify',
    wrap: wrap('div', 'style', ()=>'text-align:justify')
  });

  md.block.bbcode.ruler.push('coltaba', {
    tag: 'coltaba',
    wrap: 'div.coltaba'
  });

  md.block.bbcode.ruler.push('coltabb', {
    tag: 'coltabb',
    wrap: 'div.coltabb'
  });

  md.block.bbcode.ruler.push('coltabc', {
    tag: 'coltabc',
    wrap: 'div.coltabc'
  });

  md.block.bbcode.ruler.push('coltabd', {
    tag: 'coltabd',
    wrap: 'div.coltabd'
  });

  md.block.bbcode.ruler.push('coltabe', {
    tag: 'coltabe',
    wrap: 'div.coltabe'
  });

  md.block.bbcode.ruler.push('coltabf', {
    tag: 'coltabf',
    wrap: 'div.coltabf'
  });

  md.block.bbcode.ruler.push('coltabg', {
    tag: 'coltabg',
    wrap: 'div.coltabg'
  });

  md.block.bbcode.ruler.push('coltabh', {
    tag: 'coltabh',
    wrap: 'div.coltabh'
  });

  md.block.bbcode.ruler.push('coltabi', {
    tag: 'coltabi',
    wrap: 'div.coltabi'
  });

  md.block.bbcode.ruler.push('coltabj', {
    tag: 'coltabj',
    wrap: 'div.coltabj'
  });

  md.block.bbcode.ruler.push('coltabk', {
    tag: 'coltabk',
    wrap: 'div.coltabk'
  });

  md.block.bbcode.ruler.push('coltabl', {
    tag: 'coltabl',
    wrap: 'div.coltabl'
  });

  md.block.bbcode.ruler.push('coltabm', {
    tag: 'coltabm',
    wrap: 'div.coltabm'
  });

  md.block.bbcode.ruler.push('coltabn', {
    tag: 'coltabn',
    wrap: 'div.coltabn'
  });

  md.block.bbcode.ruler.push('coltabo', {
    tag: 'coltabo',
    wrap: 'div.coltabo'
  });

}

export function setup(helper) {

  helper.whiteList([
    'div.floatl',
    'div.floatr',
    'div.titrenews',
    'div.coltab1',
    'div.coltaba',
    'div.coltabb',
    'div.coltabc',
    'div.coltabd',
    'div.coltabe',
    'div.coltabf',
    'div.coltabg',
    'div.coltabh',
    'div.coltabi',
    'div.coltabj',
    'div.coltabk',
    'div.coltabl',
    'div.coltabm',
    'div.coltabn',
    'div.coltabo',
    'font[color=*]',
    'font[size=*]',
    'font[face=*]'
  ]);



  helper.whiteList({
    custom(tag, name, value) {
      if (tag === 'span' && name === 'style') {
        return /^font-size:.*|background-color:#?[a-zA-Z0-9]+$/.exec(value);
      }

      if (tag === 'div' && name === 'style') {
        return /^text-align:(center|left|right)$/.exec(value);
      }
    }
  });

  if (helper.markdownIt) {
    helper.registerPlugin(setupMarkdownIt);
    return;
  }

  const builders = requirejs('pretty-text/engines/discourse-markdown/bbcode').builders;
  const { register, replaceBBCode, rawBBCode, replaceBBCodeParamsRaw } = builders(helper);

  replaceBBCode("small", contents => ['span', {'style': 'font-size:x-small'}].concat(contents));
  replaceBBCode("floatl", contents => ['div', {'class': 'floatl'}].concat(contents));
  replaceBBCode("floatr", contents => ['div', {'class': 'floatr'}].concat(contents));
  replaceBBCode("t", contents => ['div', {'class': 'titrenews'}].concat(contents));
  replaceBBCode("coltaba", contents => ['div', {'class': 'coltaba'}].concat(contents));
  replaceBBCode("coltabb", contents => ['div', {'class': 'coltabb'}].concat(contents));
  replaceBBCode("coltabc", contents => ['div', {'class': 'coltabc'}].concat(contents));
  replaceBBCode("coltabd", contents => ['div', {'class': 'coltabd'}].concat(contents));
  replaceBBCode("coltabe", contents => ['div', {'class': 'coltabe'}].concat(contents));
  replaceBBCode("coltabf", contents => ['div', {'class': 'coltabf'}].concat(contents));
  replaceBBCode("coltabg", contents => ['div', {'class': 'coltabg'}].concat(contents));
  replaceBBCode("coltabh", contents => ['div', {'class': 'coltabh'}].concat(contents));
  replaceBBCode("coltabi", contents => ['div', {'class': 'coltabi'}].concat(contents));
  replaceBBCode("coltabj", contents => ['div', {'class': 'coltabj'}].concat(contents));
  replaceBBCode("coltabk", contents => ['div', {'class': 'coltabk'}].concat(contents));
  replaceBBCode("coltabl", contents => ['div', {'class': 'coltabl'}].concat(contents));
  replaceBBCode("coltabm", contents => ['div', {'class': 'coltabm'}].concat(contents));
  replaceBBCode("coltabn", contents => ['div', {'class': 'coltabn'}].concat(contents));
  replaceBBCode("coltabo", contents => ['div', {'class': 'coltabo'}].concat(contents));

  ["left", "center", "right", "justify"].forEach(direction => {
    replaceBBCode(direction, contents => ['div', {'style': "text-align:" + direction}].concat(contents));
  });

  helper.addPreProcessor(replaceFontColor);
  helper.addPreProcessor(replaceFontSize);
  helper.addPreProcessor(replaceFontFace);

}