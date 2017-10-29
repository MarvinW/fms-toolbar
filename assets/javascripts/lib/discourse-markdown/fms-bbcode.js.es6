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

  md.block.bbcode.ruler.push('colortab1', {
    tag: 'colortab1',
    wrap: 'div.groot'
  });

  md.block.bbcode.ruler.push('colortab2', {
    tag: 'colortab2',
    wrap: 'div.groot'
  });

  md.block.bbcode.ruler.push('colortab3', {
    tag: 'colortab3',
    wrap: 'div.groot'
  });

  md.block.bbcode.ruler.push('colortab4', {
    tag: 'colortab4',
    wrap: 'div.groot'
  });

  md.block.bbcode.ruler.push('colortab5', {
    tag: 'colortab5',
    wrap: 'div.groot'
  });

}

export function setup(helper) {

  helper.whiteList([
    'div.floatl',
    'div.floatr',
    'div.titrenews',
    'div.colortab1',
    'div.colortab2',
    'div.colortab3',
    'div.colortab4',
    'div.colortab5',
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
  replaceBBCode("colortab1", contents => ['div', {'class': 'colortab1'}].concat(contents));
  replaceBBCode("colortab2", contents => ['div', {'class': 'colortab2'}].concat(contents));
  replaceBBCode("colortab3", contents => ['div', {'class': 'colortab3'}].concat(contents));
  replaceBBCode("colortab4", contents => ['div', {'class': 'colortab4'}].concat(contents));
  replaceBBCode("colortab5", contents => ['div', {'class': 'colortab5'}].concat(contents));

  ["left", "center", "right", "justify"].forEach(direction => {
    replaceBBCode(direction, contents => ['div', {'style': "text-align:" + direction}].concat(contents));
  });

  helper.addPreProcessor(replaceFontColor);
  helper.addPreProcessor(replaceFontSize);
  helper.addPreProcessor(replaceFontFace);

}