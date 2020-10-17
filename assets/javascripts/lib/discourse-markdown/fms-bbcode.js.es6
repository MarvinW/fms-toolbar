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

  md.block.bbcode.ruler.push('coltabp', {
    tag: 'coltabp',
    wrap: 'div.coltabp'
  });

  md.block.bbcode.ruler.push('coltabq', {
    tag: 'coltabq',
    wrap: 'div.coltabq'
  });

  md.block.bbcode.ruler.push('coltabr', {
    tag: 'coltabr',
    wrap: 'div.coltabr'
  });

  md.block.bbcode.ruler.push('coltabt', {
    tag: 'coltabt',
    wrap: 'div.coltabt'
  });

  md.block.bbcode.ruler.push('coltabs', {
    tag: 'coltabs',
    wrap: 'div.coltabs'
  });

  md.block.bbcode.ruler.push('coltabu', {
    tag: 'coltabu',
    wrap: 'div.coltabu'
  });

  md.block.bbcode.ruler.push('coltabv', {
    tag: 'coltabv',
    wrap: 'div.coltabv'
  });

  md.block.bbcode.ruler.push('coltabw', {
    tag: 'coltabw',
    wrap: 'div.coltabw'
  });

  md.block.bbcode.ruler.push('coltabx', {
    tag: 'coltabx',
    wrap: 'div.coltabx'
  });

  md.block.bbcode.ruler.push('coltaby', {
    tag: 'coltaby',
    wrap: 'div.coltaby'
  });

  md.block.bbcode.ruler.push('coltabz', {
    tag: 'coltabz',
    wrap: 'div.coltabz'
  });

  md.block.bbcode.ruler.push('coltabface', {
    tag: 'coltabface',
    wrap: 'div.coltabface'
  });

  md.block.bbcode.ruler.push('coltablogo', {
    tag: 'coltablogo',
    wrap: 'div.coltablogo'
  });
  
  md.block.bbcode.ruler.push('tabstadereims', {
    tag: 'tabstadereims',
    wrap: 'div.tabstadereims'
  });
  
  md.block.bbcode.ruler.push('tabmonaco', {
    tag: 'tabmonaco',
    wrap: 'div.tabmonaco'
  });
  
  md.block.bbcode.ruler.push('tabparis', {
    tag: 'tabparis',
    wrap: 'div.tabparis'
  });
  
  md.block.bbcode.ruler.push('tabnantes', {
    tag: 'tabnantes',
    wrap: 'div.tabnantes'
  });
  
  md.block.bbcode.ruler.push('tabmontpellier', {
    tag: 'tabmontpellier',
    wrap: 'div.tabmontpellier'
  });
  
  md.block.bbcode.ruler.push('tabbordeaux', {
    tag: 'tabbordeaux',
    wrap: 'div.tabbordeaux'
  });
  
  md.block.bbcode.ruler.push('tabmetz', {
    tag: 'tabmetz',
    wrap: 'div.tabmetz'
  });
  
  md.block.bbcode.ruler.push('tabsainte', {
    tag: 'tabsainte',
    wrap: 'div.tabsainte'
  });
  
  md.block.bbcode.ruler.push('tabmarseille', {
    tag: 'tabmarseille',
    wrap: 'div.tabmarseille'
  });
  
  md.block.bbcode.ruler.push('tablosc', {
    tag: 'tablosc',
    wrap: 'div.tablosc'
  });
  
  md.block.bbcode.ruler.push('tabrennes', {
    tag: 'tabrennes',
    wrap: 'div.tabrennes'
  });
  
  md.block.bbcode.ruler.push('tabangers', {
    tag: 'tabangers',
    wrap: 'div.tabangers'
  });

  md.block.bbcode.ruler.push('tabtoulouse', {
    tag: 'tabtoulouse',
    wrap: 'div.tabtoulouse'
  });
  
  md.block.bbcode.ruler.push('tabligue', {
    tag: 'tabligue',
    wrap: 'div.tabligue'
  });
  
  md.block.bbcode.ruler.push('tabcobresal', {
    tag: 'tabcobresal',
    wrap: 'div.tabcobresal'
  });
  
  md.block.bbcode.ruler.push('tableauaa', {
    tag: 'tableauaa',
    wrap: 'div.tableauaa'
  });
  
  md.block.bbcode.ruler.push('tableauab', {
    tag: 'tableauab',
    wrap: 'div.tableauab'
  });
  
  md.block.bbcode.ruler.push('tableauac', {
    tag: 'tableauac',
    wrap: 'div.tableauac'
  });
  
  md.block.bbcode.ruler.push('tableauad', {
    tag: 'tableauad',
    wrap: 'div.tableauad'
  });
  
  md.block.bbcode.ruler.push('tableauae', {
    tag: 'tableauae',
    wrap: 'div.tableauae'
  });
  
  md.block.bbcode.ruler.push('tableauaf', {
    tag: 'tableauaf',
    wrap: 'div.tableauaf'
  });
  
  md.block.bbcode.ruler.push('tableauag', {
    tag: 'tableauag',
    wrap: 'div.tableauag'
  });
  
  md.block.bbcode.ruler.push('tableauah', {
    tag: 'tableauah',
    wrap: 'div.tableauah'
  });
  
  md.block.bbcode.ruler.push('tableauai', {
    tag: 'tableauai',
    wrap: 'div.tableauai'
  });
  
  md.block.bbcode.ruler.push('tableauaj', {
    tag: 'tableauaj',
    wrap: 'div.tableauaj'
  });
  
  md.block.bbcode.ruler.push('tableauak', {
    tag: 'tableauak',
    wrap: 'div.tableauak'
  });
  
  md.block.bbcode.ruler.push('bronze', {
    tag: 'bronze',
    wrap: 'div.bronze'
  });

  md.block.bbcode.ruler.push('bronze_progress', {
    tag: 'bronze_progress',
    wrap: 'div.bronze_progress'
  });

md.block.bbcode.ruler.push('bronze_striped', {
    tag: 'bronze_striped',
    wrap: 'div.bronze_striped'
  });

md.block.bbcode.ruler.push('bronze_bar', {
    tag: 'bronze_bar',
    wrap: 'div.bronze_bar'
  });

md.block.bbcode.ruler.push('silver', {
      tag: 'silver',
      wrap: 'div.silver'
    });
  
md.block.bbcode.ruler.push('silver_progress', {
      tag: 'silver_progress',
      wrap: 'div.silver_progress'
    });
  
md.block.bbcode.ruler.push('silver_striped', {
      tag: 'silver_striped',
      wrap: 'div.silver_striped'
    });
  
md.block.bbcode.ruler.push('silver_bar', {
      tag: 'silver_bar',
      wrap: 'div.silver_bar'
    });

md.block.bbcode.ruler.push('gold', {
          tag: 'gold',
          wrap: 'div.gold'
        });
      
md.block.bbcode.ruler.push('gold_progress', {
          tag: 'gold_progress',
          wrap: 'div.gold_progress'
        });
      
md.block.bbcode.ruler.push('gold_striped', {
          tag: 'gold_striped',
          wrap: 'div.gold_striped'
        });
      
md.block.bbcode.ruler.push('gold_bar', {
          tag: 'gold_bar',
          wrap: 'div.gold_bar'
        });

md.block.bbcode.ruler.push('diamond', {
          tag: 'diamond',
          wrap: 'div.diamond'
        });
      
md.block.bbcode.ruler.push('diamond_progress', {
          tag: 'diamond_progress',
          wrap: 'div.diamond_progress'
        });
      
md.block.bbcode.ruler.push('diamond_striped', {
          tag: 'diamond_striped',
          wrap: 'div.diamond_striped'
        });
      
md.block.bbcode.ruler.push('diamond_bar', {
          tag: 'diamond_bar',
          wrap: 'div.diamond_bar'
        });
  
md.block.bbcode.ruler.push('download_tab', {
          tag: 'download_tab',
          wrap: 'div.download_tab'
        });
  
md.block.bbcode.ruler.push('download_button', {
          tag: 'download_button',
          wrap: 'div.download_button'
        });
  
 md.block.bbcode.ruler.push('tableaual', {
    tag: 'tableaual',
    wrap: 'div.tableaual'
  });
 
 md.block.bbcode.ruler.push('tableauam', {
    tag: 'tableauam',
    wrap: 'div.tableauam'
  });
  
 md.block.bbcode.ruler.push('tableauan', {
    tag: 'tableauan',
    wrap: 'div.tableauakn'
  });
  
 md.block.bbcode.ruler.push('tableauap', {
    tag: 'tableauap',
    wrap: 'div.tableauap'
  });
  
 md.block.bbcode.ruler.push('tableauaq', {
    tag: 'tableauaq',
    wrap: 'div.tableauaq'
  });
  
 md.block.bbcode.ruler.push('colmacouille', {
    tag: 'colmacouille',
    wrap: 'div.colmacouille'
  });
  
  md.block.bbcode.ruler.push('tabsaopaulo', {
    tag: 'tabsaopaulo',
    wrap: 'div.tabsaopaulo'
  });
  
  md.block.bbcode.ruler.push('colortaba', {
    tag: 'colortaba',
    wrap: 'div.colortaba'
  });
  
  md.block.bbcode.ruler.push('colortabb', {
    tag: 'colortabb',
    wrap: 'div.colortabb'
  });
  
  md.block.bbcode.ruler.push('colortabc', {
    tag: 'colortabc',
    wrap: 'div.colortabc'
  });
  
  md.block.bbcode.ruler.push('colortabd', {
    tag: 'colortabd',
    wrap: 'div.colortabd'
  });
  
  md.block.bbcode.ruler.push('colortabe', {
    tag: 'colortabe',
    wrap: 'div.colortabe'
  });
  
  md.block.bbcode.ruler.push('colortabf', {
    tag: 'colortabf',
    wrap: 'div.colortabf'
  });
  
  md.block.bbcode.ruler.push('colortabg', {
    tag: 'colortabg',
    wrap: 'div.colortabg'
  });
  
  md.block.bbcode.ruler.push('colortabh', {
    tag: 'colortabh',
    wrap: 'div.colortabh'
  });
  
  md.block.bbcode.ruler.push('colortabi', {
    tag: 'colortabi',
    wrap: 'div.colortabi'
  });
  
  md.block.bbcode.ruler.push('colortabj', {
    tag: 'colortabj',
    wrap: 'div.colortabj'
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
    'div.coltabp',
    'div.coltabq',
    'div.coltabr',
    'div.coltabs',
    'div.coltabt',
    'div.coltabu',
    'div.coltabv',
    'div.coltabw',
    'div.coltabx',
    'div.coltaby',
    'div.coltabz',
    'div.coltabface',
    'div.coltablogo',
    'div.tabstadereims',
    'div.tabmonaco',
    'div.tabnantes',
    'div.tabparis',
    'div.tabmontpellier',
    'div.tabmarseille',
    'div.tabmetz',
    'div.tabsainte',
    'div.tablosc',
    'div.tabangers',
    'div.tabbordeaux',
    'div.tabrennes',
    'div.tabtoulouse',
    'div.tabligue',
    'div.tabcobresal',
    'div.tableauaa',
    'div.tableauab',
    'div.tableauac',
    'div.tableauad',
    'div.tableauae',
    'div.tableauaf',
    'div.tableauag',
    'div.tableauah',
    'div.tableauai',
    'div.tableauaj',
    'div.tableauak',
    'div.tableaual',
    'div.tableauam',
    'div.tableauan',
    'div.tableauap',
    'div.tableauaq',
    'div.colortaba',
    'div.colortabb',
    'div.colortabc',
    'div.colortabd',
    'div.colortabe',
    'div.colortabf',
    'div.colortabg',
    'div.colortabh',
    'div.colortabi',
    'div.colortabj',
    'div.tabsaopaulo',
    'div.colmacouille',
    'div.bronze',
    'div.bronze_progress',
    'div.bronze_striped',
    'div.bronze_bar',
    'div.silver',
    'div.silver_progress',
    'div.silver_striped',
    'div.silver_bar',
    'div.gold',
    'div.gold_progress',
    'div.gold_striped',
    'div.gold_bar',
    'div.diamond',
    'div.diamond_progress',
    'div.diamond_striped',
    'div.diamond_bar',
    'div.download_tab',
    'div.download_button',
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
  replaceBBCode("coltabp", contents => ['div', {'class': 'coltabp'}].concat(contents));
  replaceBBCode("coltabq", contents => ['div', {'class': 'coltabq'}].concat(contents));
  replaceBBCode("coltabr", contents => ['div', {'class': 'coltabr'}].concat(contents));
  replaceBBCode("coltabs", contents => ['div', {'class': 'coltabs'}].concat(contents));
  replaceBBCode("coltabt", contents => ['div', {'class': 'coltabt'}].concat(contents));
  replaceBBCode("coltabu", contents => ['div', {'class': 'coltabu'}].concat(contents));
  replaceBBCode("coltabv", contents => ['div', {'class': 'coltabv'}].concat(contents));
  replaceBBCode("coltabw", contents => ['div', {'class': 'coltabw'}].concat(contents));
  replaceBBCode("coltabx", contents => ['div', {'class': 'coltabx'}].concat(contents));
  replaceBBCode("coltaby", contents => ['div', {'class': 'coltaby'}].concat(contents));
  replaceBBCode("coltabz", contents => ['div', {'class': 'coltabz'}].concat(contents));
  replaceBBCode("coltabface", contents => ['div', {'class': 'coltabface'}].concat(contents));
  replaceBBCode("coltablogo", contents => ['div', {'class': 'coltablogo'}].concat(contents));
  replaceBBCode("tabstadereims", contents => ['div', {'class': 'tabstadereims'}].concat(contents));
  replaceBBCode("tabmonaco", contents => ['div', {'class': 'tabmonaco'}].concat(contents));
  replaceBBCode("tabparis", contents => ['div', {'class': 'tabparis'}].concat(contents));
  replaceBBCode("tabnantes", contents => ['div', {'class': 'tabnantes'}].concat(contents));
  replaceBBCode("tabmontpellier", contents => ['div', {'class': 'tabmontpellier'}].concat(contents));
  replaceBBCode("tabmetz", contents => ['div', {'class': 'tabmetz'}].concat(contents));
  replaceBBCode("tabmarseille", contents => ['div', {'class': 'tabmarseille'}].concat(contents));
  replaceBBCode("tabsainte", contents => ['div', {'class': 'tabsainte'}].concat(contents));
  replaceBBCode("tablosc", contents => ['div', {'class': 'tablosc'}].concat(contents));
  replaceBBCode("tabrennes", contents => ['div', {'class': 'tabrennes'}].concat(contents));
  replaceBBCode("tabangers", contents => ['div', {'class': 'tabangers'}].concat(contents));
  replaceBBCode("tabtoulouse", contents => ['div', {'class': 'tabtoulouse'}].concat(contents));
  replaceBBCode("tabbordeaux", contents => ['div', {'class': 'tabbordeaux'}].concat(contents));
  replaceBBCode("tabligue", contents => ['div', {'class': 'tabligue'}].concat(contents));
  replaceBBCode("tabcobresal", contents => ['div', {'class': 'tabcobresal'}].concat(contents));
  replaceBBCode("tableauaa", contents => ['div', {'class': 'tableauaa'}].concat(contents));
  replaceBBCode("tableauab", contents => ['div', {'class': 'tableauab'}].concat(contents));
  replaceBBCode("tableauac", contents => ['div', {'class': 'tableauac'}].concat(contents));
  replaceBBCode("tableauad", contents => ['div', {'class': 'tableauad'}].concat(contents));
  replaceBBCode("tableauae", contents => ['div', {'class': 'tableauae'}].concat(contents));
  replaceBBCode("tableauaf", contents => ['div', {'class': 'tableauaf'}].concat(contents));
  replaceBBCode("tableauag", contents => ['div', {'class': 'tableauag'}].concat(contents));
  replaceBBCode("tableauah", contents => ['div', {'class': 'tableauah'}].concat(contents));
  replaceBBCode("tableauai", contents => ['div', {'class': 'tableauai'}].concat(contents));
  replaceBBCode("tableauaj", contents => ['div', {'class': 'tableauaj'}].concat(contents));
  replaceBBCode("tableauak", contents => ['div', {'class': 'tableauak'}].concat(contents));
  replaceBBCode("tableaual", contents => ['div', {'class': 'tableaual'}].concat(contents));
  replaceBBCode("tableauam", contents => ['div', {'class': 'tableauam'}].concat(contents));
  replaceBBCode("tableauan", contents => ['div', {'class': 'tableauan'}].concat(contents));
  replaceBBCode("tableauap", contents => ['div', {'class': 'tableauap'}].concat(contents));
  replaceBBCode("tableauaq", contents => ['div', {'class': 'tableauaq'}].concat(contents));
  replaceBBCode("colmacouille", contents => ['div', {'class': 'colmacouille'}].concat(contents));
  replaceBBCode("colortaba", contents => ['div', {'class': 'colortaba'}].concat(contents));
  replaceBBCode("colortabb", contents => ['div', {'class': 'colortabb'}].concat(contents));
  replaceBBCode("colortabc", contents => ['div', {'class': 'colortabc'}].concat(contents));
  replaceBBCode("colortabd", contents => ['div', {'class': 'colortabd'}].concat(contents));
  replaceBBCode("colortabe", contents => ['div', {'class': 'colortabe'}].concat(contents));
  replaceBBCode("colortabf", contents => ['div', {'class': 'colortabf'}].concat(contents));
  replaceBBCode("colortabg", contents => ['div', {'class': 'colortabg'}].concat(contents));
  replaceBBCode("colortabh", contents => ['div', {'class': 'colortabh'}].concat(contents));
  replaceBBCode("colortabi", contents => ['div', {'class': 'colortabi'}].concat(contents));
  replaceBBCode("colortabj", contents => ['div', {'class': 'colortabj'}].concat(contents));
  replaceBBCode("tabsaopaulo", contents => ['div', {'class': 'tabsaopaulo'}].concat(contents));
  replaceBBCode("bronze", contents => ['div', {'class': 'bronze'}].concat(contents));
  replaceBBCode("bronze_progress", contents => ['div', {'class': 'bronze_progress'}].concat(contents));
  replaceBBCode("bronze_striped", contents => ['div', {'class': 'bronze_striped'}].concat(contents));
  replaceBBCode("bronze_bar", contents => ['div', {'class': 'bronze_bar'}].concat(contents));
  replaceBBCode("silver", contents => ['div', {'class': 'silver'}].concat(contents));
  replaceBBCode("silver_progress", contents => ['div', {'class': 'silver_progress'}].concat(contents));
  replaceBBCode("silver_striped", contents => ['div', {'class': 'silver_striped'}].concat(contents));
  replaceBBCode("silver_bar", contents => ['div', {'class': 'silver_bar'}].concat(contents));
  replaceBBCode("gold", contents => ['div', {'class': 'gold'}].concat(contents));
  replaceBBCode("gold_progress", contents => ['div', {'class': 'gold_progress'}].concat(contents));
  replaceBBCode("gold_striped", contents => ['div', {'class': 'gold_striped'}].concat(contents));
  replaceBBCode("gold_bar", contents => ['div', {'class': 'goldgold_bar'}].concat(contents));
  replaceBBCode("diamond", contents => ['div', {'class': 'diamond'}].concat(contents));
  replaceBBCode("diamond_progress", contents => ['div', {'class': 'diamond_progress'}].concat(contents));
  replaceBBCode("diamond_striped", contents => ['div', {'class': 'diamond_striped'}].concat(contents));
  replaceBBCode("diamond_bar", contents => ['div', {'class': 'diamond_bar'}].concat(contents));
  replaceBBCode("download_tab", contents => ['div', {'class': 'download_tab'}].concat(contents));
  replaceBBCode("download_button", contents => ['div', {'class': 'download_button'}].concat(contents));

  ["left", "center", "right", "justify"].forEach(direction => {
    replaceBBCode(direction, contents => ['div', {'style': "text-align:" + direction}].concat(contents));
  });

  helper.addPreProcessor(replaceFontColor);
  helper.addPreProcessor(replaceFontSize);
  helper.addPreProcessor(replaceFontFace);

}
