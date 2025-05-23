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

  ruler.push('hover-card',{
    tag: 'hover-card',
    wrap: wrap('span', 'class', ()=>'hover-card')
  });

  ruler.push('hover-text',{
    tag: 'hover-text',
    wrap: wrap('a', 'class', ()=>'hover-text')
  });

  ruler.push('hover-image',{
    tag: 'hover-card',
    wrap: wrap('span', 'class', ()=>'hover-image')
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

  md.block.bbcode.ruler.push('image', {
    tag: 'image',
    wrap: 'div.image'
  });

  md.block.bbcode.ruler.push('image-hover', {
    tag: 'image-hover',
    wrap: 'div.image-hover'
  });

  md.block.bbcode.ruler.push('playera', {
    tag: 'playera',
    wrap: 'img.playera'
  });

  md.block.bbcode.ruler.push('playerb', {
    tag: 'playerb',
    wrap: 'img.playerb'
  });

  md.block.bbcode.ruler.push('playerc', {
    tag: 'playerc',
    wrap: 'img.playerc'
  });

  md.block.bbcode.ruler.push('playerd', {
    tag: 'playerd',
    wrap: 'img.playerd'
  });
  
  md.block.bbcode.ruler.push('playere', {
    tag: 'playere',
    wrap: 'img.playere'
  });
  
  md.block.bbcode.ruler.push('playerf', {
    tag: 'playerf',
    wrap: 'img.playerf'
  });
  
  md.block.bbcode.ruler.push('playerg', {
    tag: 'playerg',
    wrap: 'img.playerg'
  });
  
  md.block.bbcode.ruler.push('playerh', {
    tag: 'playerh',
    wrap: 'img.playerh'
  });
  
  md.block.bbcode.ruler.push('playeri', {
    tag: 'playeri',
    wrap: 'img.playeri'
  });
  
  md.block.bbcode.ruler.push('playerj', {
    tag: 'playerj',
    wrap: 'img.playerj'
  });
  
  md.block.bbcode.ruler.push('playerk', {
    tag: 'playerk',
    wrap: 'img.playerk'
  });
  
  md.block.bbcode.ruler.push('playerl', {
    tag: 'playerl',
    wrap: 'img.playerl'
  });
  
  md.block.bbcode.ruler.push('playerm', {
    tag: 'playerm',
    wrap: 'img.playerm'
  });
  
  md.block.bbcode.ruler.push('playern', {
    tag: 'playern',
    wrap: 'img.playern'
  });
  
  md.block.bbcode.ruler.push('playero', {
    tag: 'playero',
    wrap: 'img.playero'
  });
  
  md.block.bbcode.ruler.push('playerp', {
    tag: 'playerp',
    wrap: 'img.playerp'
  });
  
  md.block.bbcode.ruler.push('playerq', {
    tag: 'playerq',
    wrap: 'img.playerq'
  });
  
  md.block.bbcode.ruler.push('playerr', {
    tag: 'playerr',
    wrap: 'img.playerr'
  });
  
  md.block.bbcode.ruler.push('players', {
    tag: 'players',
    wrap: 'img.players'
  });
  
  md.block.bbcode.ruler.push('playert', {
      tag: 'playert',
      wrap: 'img.playert'
    });
  
  md.block.bbcode.ruler.push('playeru', {
    tag: 'playeru',
    wrap: 'img.playeru'
  });
  
  md.block.bbcode.ruler.push('playerv', {
    tag: 'playerv',
    wrap: 'img.playerv'
  });

  md.block.bbcode.ruler.push('playerw', {
    tag: 'playerw',
    wrap: 'img.playerw'
  });
  
  md.block.bbcode.ruler.push('playerx', {
    tag: 'playerx',
    wrap: 'img.playerx'
  });
  
  md.block.bbcode.ruler.push('playery', {
    tag: 'playery',
    wrap: 'img.playery'
  });
  
  md.block.bbcode.ruler.push('playerz', {
    tag: 'playerz',
    wrap: 'img.playerz'
  });
  
  md.block.bbcode.ruler.push('playeraa', {
    tag: 'playeraa',
    wrap: 'img.playeraa'
  });
  
  md.block.bbcode.ruler.push('playerab', {
    tag: 'playerab',
    wrap: 'img.playerab'
  });
  
  md.block.bbcode.ruler.push('playerac', {
    tag: 'playerac',
    wrap: 'img.playerac'
  });
  
  md.block.bbcode.ruler.push('playerad', {
    tag: 'playerad',
    wrap: 'img.playerad'
  });
  
  md.block.bbcode.ruler.push('playerae', {
    tag: 'playerae',
    wrap: 'img.playerae'
  });
  
  md.block.bbcode.ruler.push('playeraf', {
    tag: 'playeraf',
    wrap: 'img.playeraf'
  });
  
  md.block.bbcode.ruler.push('playerag', {
    tag: 'playerag',
    wrap: 'img.playerag'
  });
  
  md.block.bbcode.ruler.push('playerah', {
    tag: 'playerah',
    wrap: 'img.playerah'
  });

  md.block.bbcode.ruler.push('infoa', {
    tag: 'infoa',
    wrap: 'div.infoa'
  });

  md.block.bbcode.ruler.push('infob', {
    tag: 'infob',
    wrap: 'div.infob'
  });

  md.block.bbcode.ruler.push('infoc', {
    tag: 'infoc',
    wrap: 'div.infoc'
  });

md.block.bbcode.ruler.push('infod', {
  tag: 'infod',
  wrap: 'div.infod'
});

md.block.bbcode.ruler.push('infoe', {
  tag: 'infoe',
  wrap: 'div.infoe'
});

md.block.bbcode.ruler.push('infof', {
  tag: 'infof',
  wrap: 'div.infof'
});

md.block.bbcode.ruler.push('infog', {
  tag: 'infog',
  wrap: 'div.infog'
});

md.block.bbcode.ruler.push('infoh', {
  tag: 'infoh',
  wrap: 'div.infoh'
});

md.block.bbcode.ruler.push('infoi', {
  tag: 'infoi',
  wrap: 'div.infoi'
});

md.block.bbcode.ruler.push('infoj', {
  tag: 'infoj',
  wrap: 'div.infoj'
});

md.block.bbcode.ruler.push('infok', {
  tag: 'infok',
  wrap: 'div.infok'
});

md.block.bbcode.ruler.push('infol', {
  tag: 'infol',
  wrap: 'div.infol'
});

md.block.bbcode.ruler.push('infom', {
  tag: 'infom',
  wrap: 'div.infom'
});

md.block.bbcode.ruler.push('infon', {
  tag: 'infon',
  wrap: 'div.infon'
});

md.block.bbcode.ruler.push('infoo', {
  tag: 'infoo',
  wrap: 'div.infoo'
});

md.block.bbcode.ruler.push('infop', {
  tag: 'infop',
  wrap: 'div.infop'
});

md.block.bbcode.ruler.push('infoq', {
  tag: 'infoq',
  wrap: 'div.infoq'
});

md.block.bbcode.ruler.push('infor', {
  tag: 'infor',
  wrap: 'div.infor'
});

md.block.bbcode.ruler.push('infos', {
  tag: 'infos',
  wrap: 'div.infos'
});

md.block.bbcode.ruler.push('infot', {
    tag: 'infot',
    wrap: 'div.infot'
  });

md.block.bbcode.ruler.push('infou', {
  tag: 'infou',
  wrap: 'div.infou'
});

md.block.bbcode.ruler.push('infov', {
  tag: 'infov',
  wrap: 'div.infov'
});

md.block.bbcode.ruler.push('infow', {
  tag: 'infow',
  wrap: 'div.infow'
});

md.block.bbcode.ruler.push('infox', {
  tag: 'infox',
  wrap: 'div.infox'
});

md.block.bbcode.ruler.push('infoy', {
  tag: 'infoy',
  wrap: 'div.infoy'
});

md.block.bbcode.ruler.push('infoz', {
  tag: 'infoz',
  wrap: 'div.infoz'
});

md.block.bbcode.ruler.push('infoaa', {
  tag: 'infoaa',
  wrap: 'div.infoaa'
});

md.block.bbcode.ruler.push('infoab', {
  tag: 'infoab',
  wrap: 'div.infoab'
});

md.block.bbcode.ruler.push('infoac', {
  tag: 'infoac',
  wrap: 'div.infoac'
});

md.block.bbcode.ruler.push('infoad', {
  tag: 'infoad',
  wrap: 'div.infoad'
});

md.block.bbcode.ruler.push('infoae', {
  tag: 'infoae',
  wrap: 'div.infoae'
});

md.block.bbcode.ruler.push('infoaf', {
  tag: 'infoaf',
  wrap: 'div.infoaf'
});

md.block.bbcode.ruler.push('infoag', {
  tag: 'infoag',
  wrap: 'div.infoag'
});

md.block.bbcode.ruler.push('infoah', {
  tag: 'infoah',
  wrap: 'div.infoah'
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

md.block.bbcode.ruler.push('electricpanther', {
    tag: 'electricpanther',
    wrap: 'div.electricpanther'
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
  
  md.block.bbcode.ruler.push('colortabk', {
    tag: 'colortabk',
    wrap: 'div.colortabk'
  });
  
  md.block.bbcode.ruler.push('colortabl', {
    tag: 'colortabl',
    wrap: 'div.colortabl'
  });
  
  md.block.bbcode.ruler.push('colortabm', {
    tag: 'colortabm',
    wrap: 'div.colortabm'
  });
  
  md.block.bbcode.ruler.push('colortabn', {
    tag: 'colortabn',
    wrap: 'div.colortabn'
  });
  
  md.block.bbcode.ruler.push('colortabo', {
    tag: 'colortabo',
    wrap: 'div.colortabo'
  });
  
  md.block.bbcode.ruler.push('colortabp', {
    tag: 'colortabp',
    wrap: 'div.colortabp'
  });
  
  md.block.bbcode.ruler.push('colortabq', {
    tag: 'colortabq',
    wrap: 'div.colortabq'
  });
  
  md.block.bbcode.ruler.push('colortabr', {
    tag: 'colortabr',
    wrap: 'div.colortabr'
  });
  
  md.block.bbcode.ruler.push('colortabs', {
    tag: 'colortabs',
    wrap: 'div.colortabs'
  });
  
  md.block.bbcode.ruler.push('colortabt', {
    tag: 'colortabt',
    wrap: 'div.colortabt'
  });
  
  md.block.bbcode.ruler.push('colortabu', {
    tag: 'colortabu',
    wrap: 'div.colortabu'
  });
  
  md.block.bbcode.ruler.push('colortabv', {
    tag: 'colortabv',
    wrap: 'div.colortabv'
  });
  
  md.block.bbcode.ruler.push('colortabw', {
    tag: 'colortabw',
    wrap: 'div.colortabw'
  });
  
  md.block.bbcode.ruler.push('colortabx', {
    tag: 'colortabx',
    wrap: 'div.colortabx'
  });
  
  md.block.bbcode.ruler.push('colortaby', {
    tag: 'colortaby',
    wrap: 'div.colortaby'
  });
  
  
  md.block.bbcode.ruler.push('tabfm21', {
    tag: 'tabfm21',
    wrap: 'div.tabfm21'
  });
  
  md.block.bbcode.ruler.push('bundesliga', {
    tag: 'bundesliga',
    wrap: 'div.bundesliga'
  });

md.block.bbcode.ruler.push('ligue1uber', {
    tag: 'ligue1uber',
    wrap: 'div.ligue1uber'
  });

md.block.bbcode.ruler.push('ligasantander', {
    tag: 'ligasantander',
    wrap: 'div.ligasantander'
  });

md.block.bbcode.ruler.push('serieaitalia', {
    tag: 'serieaitalia',
    wrap: 'div.serieaitalia'
  });

md.block.bbcode.ruler.push('premierleague', {
    tag: 'premierleague',
    wrap: 'div.premierleague'
  });

md.block.bbcode.ruler.push('championsleague', {
    tag: 'championsleague',
    wrap: 'div.championsleague'
  });

md.block.bbcode.ruler.push('europaleague', {
    tag: 'europaleague',
    wrap: 'div.europaleague'
  });

md.block.bbcode.ruler.push('conferenceleague', {
    tag: 'conferenceleague',
    wrap: 'div.conferenceleague'
  });

md.block.bbcode.ruler.push('ligaprofesional', {
    tag: 'ligaprofesional',
    wrap: 'div.ligaprofesional'
  });

md.block.bbcode.ruler.push('classement', {
    tag: 'classement',
    wrap: 'div.classement'
  });

md.block.bbcode.ruler.push('news', {
    tag: 'news',
    wrap: 'div.news'
  });

md.block.bbcode.ruler.push('groupe', {
    tag: 'groupe',
    wrap: 'div.groupe'
  });
  
md.block.bbcode.ruler.push('saisona', {
    tag: 'saisona',
    wrap: 'div.saisona'
  });
  
md.block.bbcode.ruler.push('saisonb', {
    tag: 'saisonb',
    wrap: 'div.saisonb'
  });
  
md.block.bbcode.ruler.push('saisonc', {
    tag: 'saisonc',
    wrap: 'div.saisonc'
  });
  
md.block.bbcode.ruler.push('saisond', {
    tag: 'saisond',
    wrap: 'div.saisond'
  });  
  
md.block.bbcode.ruler.push('saisone', {
    tag: 'saisone',
    wrap: 'div.saisone'
  });
  
  md.block.bbcode.ruler.push('goias', {
    tag: 'goias',
    wrap: 'div.goias'
  });
  
  md.block.bbcode.ruler.push('uruguay', {
    tag: 'uruguay',
    wrap: 'div.uruguay'
  });
  
md.block.bbcode.ruler.push('malakai', {
    tag: 'malakai',
    wrap: 'div.malakai'
  });
  
  md.block.bbcode.ruler.push('aparecidense', {
    tag: 'aparecidense',
    wrap: 'div.aparecidense'
  });
  
  md.block.bbcode.ruler.push('montevideo', {
    tag: 'montevideo',
    wrap: 'div.montevideo'
  });
  
  md.block.bbcode.ruler.push('goiasgardien', {
    tag: 'goiasgardien',
    wrap: 'div.goiasgardien'
  });

  md.block.bbcode.ruler.push('grootrecopa', {
    tag: 'grootrecopa',
    wrap: 'div.grootrecopa'
  });

  md.block.bbcode.ruler.push('grootliberta', {
    tag: 'grootliberta',
    wrap: 'div.grootliberta'
  });

  md.block.bbcode.ruler.push('grootsudamericana', {
    tag: 'grootsudamericana',
    wrap: 'div.grootsudamericana'
  });

  md.block.bbcode.ruler.push('electricblue', {
    tag: 'electricblue',
    wrap: 'div.electricblue'
  });

  md.block.bbcode.ruler.push('electricred', {
    tag: 'electricred',
    wrap: 'div.electricred'
  });

  md.block.bbcode.ruler.push('electricyellow', {
    tag: 'electricyellow',
    wrap: 'div.electricyellow'
  });

  md.block.bbcode.ruler.push('electricmenu', {
      tag: 'electricmenu',
      wrap: 'div.electricmenu'
    });

md.block.bbcode.ruler.push('electricgrey', {
    tag: 'electricgrey',
    wrap: 'div.electricgrey'
  });

  md.block.bbcode.ruler.push('electricgreen', {
    tag: 'electricgreen',
    wrap: 'div.electricgreen'
  });

  md.block.bbcode.ruler.push('electricorange', {
    tag: 'electricorange',
    wrap: 'div.electricorange'
  });

  md.block.bbcode.ruler.push('electricviolet', {
    tag: 'electricviolet',
    wrap: 'div.electricviolet'
  });

  md.block.bbcode.ruler.push('electricfluog', {
      tag: 'electricfluog',
      wrap: 'div.electricfluog'
    });

  md.block.bbcode.ruler.push('electriccyan', {
    tag: 'electriccyan',
    wrap: 'div.electriccyan'
  });

  md.block.bbcode.ruler.push('electricpink', {
    tag: 'electricpink',
    wrap: 'div.electricpink'
  });

  md.block.bbcode.ruler.push('electricgold', {
    tag: 'electricgold',
    wrap: 'div.electricgold'
  });

md.block.bbcode.ruler.push('electricdarkblue', {
    tag: 'electricdarkblue',
    wrap: 'div.electricdarkblue'
  });
  
md.block.bbcode.ruler.push('opensans', {
    tag: 'opensans',
    wrap: 'div.opensans'
  });

md.block.bbcode.ruler.push('goal', {
    tag: 'goal',
    wrap: 'div.goal'
  });

md.block.bbcode.ruler.push('goala', {
    tag: 'goala',
    wrap: 'div.goala'
  });

md.block.bbcode.ruler.push('goalb', {
    tag: 'goalb',
    wrap: 'div.goalb'
  });


md.block.bbcode.ruler.push('central_defender', {
    tag: 'central_defender',
    wrap: 'div.central_defender'
  });

md.block.bbcode.ruler.push('central_defendera', {
    tag: 'central_defendera',
    wrap: 'div.central_defendera'
  });

md.block.bbcode.ruler.push('central_defenderb', {
    tag: 'central_defenderb',
    wrap: 'div.central_defenderb'
  });

md.block.bbcode.ruler.push('central_defenderc', {
    tag: 'central_defenderc',
    wrap: 'div.central_defenderc'
  });

md.block.bbcode.ruler.push('central_defenderd', {
    tag: 'central_defenderd',
    wrap: 'div.central_defenderd'
  });

md.block.bbcode.ruler.push('central_defendere', {
    tag: 'central_defendere',
    wrap: 'div.central_defendere'
  });

md.block.bbcode.ruler.push('lateral_defender', {
    tag: 'lateral_defender',
    wrap: 'div.lateral_defender'
  });

md.block.bbcode.ruler.push('lateral_defendera', {
    tag: 'lateral_defendera',
    wrap: 'div.lateral_defendera'
  });

md.block.bbcode.ruler.push('lateral_defenderb', {
    tag: 'lateral_defenderb',
    wrap: 'div.lateral_defenderb'
  });

md.block.bbcode.ruler.push('lateral_defenderc', {
    tag: 'lateral_defenderc',
    wrap: 'div.lateral_defenderc'
  });

md.block.bbcode.ruler.push('lateral_defenderd', {
    tag: 'lateral_defenderd',
    wrap: 'div.lateral_defenderd'
  });

md.block.bbcode.ruler.push('lateral_defendere', {
    tag: 'lateral_defendere',
    wrap: 'div.lateral_defendere'
  });


md.block.bbcode.ruler.push('central_midfielder', {
    tag: 'central_midfielder',
    wrap: 'div.central_midfielder'
  });

md.block.bbcode.ruler.push('central_midfieldera', {
    tag: 'central_midfieldera',
    wrap: 'div.central_midfieldera'
  });

md.block.bbcode.ruler.push('central_midfielderb', {
    tag: 'central_midfielderb',
    wrap: 'div.central_midfielderb'
  });

md.block.bbcode.ruler.push('central_midfielderc', {
    tag: 'central_midfielderc',
    wrap: 'div.central_midfielderc'
  });

md.block.bbcode.ruler.push('central_midfielderd', {
    tag: 'central_midfielderd',
    wrap: 'div.central_midfielderd'
  });

md.block.bbcode.ruler.push('central_midfieldere', {
    tag: 'central_midfieldere',
    wrap: 'div.central_midfieldere'
  });

md.block.bbcode.ruler.push('lateral_midfielder', {
    tag: 'lateral_midfielder',
    wrap: 'div.lateral_midfielder'
  });

md.block.bbcode.ruler.push('lateral_midfieldera', {
    tag: 'lateral_midfieldera',
    wrap: 'div.lateral_midfieldera'
  });

md.block.bbcode.ruler.push('lateral_midfielderb', {
    tag: 'lateral_midfielderb',
    wrap: 'div.lateral_midfielderb'
  });

md.block.bbcode.ruler.push('lateral_midfielderc', {
    tag: 'lateral_midfielderc',
    wrap: 'div.lateral_midfielderc'
  });

md.block.bbcode.ruler.push('lateral_midfielderd', {
    tag: 'lateral_midfielderd',
    wrap: 'div.lateral_midfielderd'
  });

md.block.bbcode.ruler.push('lateral_midfieldere', {
    tag: 'lateral_midfieldere',
    wrap: 'div.lateral_midfieldere'
  });

md.block.bbcode.ruler.push('striker', {
    tag: 'striker',
    wrap: 'div.striker'
  });

md.block.bbcode.ruler.push('strikera', {
    tag: 'strikera',
    wrap: 'div.strikera'
  });

md.block.bbcode.ruler.push('strikerb', {
    tag: 'strikerb',
    wrap: 'div.strikerb'
  });

md.block.bbcode.ruler.push('strikerc', {
    tag: 'strikerc',
    wrap: 'div.strikerc'
  });

md.block.bbcode.ruler.push('strikerd', {
    tag: 'strikerd',
    wrap: 'div.strikerd'
  });

md.block.bbcode.ruler.push('strikere', {
    tag: 'strikere',
    wrap: 'div.strikere'
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
    'div.colortabk',
    'div.colortabl',
    'div.colortabm',
    'div.colortabn',
    'div.colortabo',
    'div.colortabp',
    'div.colortabq',
    'div.colortabr',
    'div.colortabs',
    'div.colortabt',
    'div.colortabu',
    'div.colortabv',
    'div.colortabw',
    'div.colortabx',
    'div.colortaby',
    'div.bundesliga',
    'div.ligue1uber',
    'div.ligasantander',
    'div.serieaitalia',
    'div.premierleague',
    'div.championsleague',
    'div.europaleague',
    'div.conferenceleague',
    'div.ligaprofesional',
    'div.classement',
    'div.electricpanther',
    'div.grootrecopa',
    'div.grootliberta',
    'div.grootsudamericana',
    'div.news',
    'div.groupe',
    'div.saisona',
    'div.saisonb',
    'div.saisonc',
    'div.saisond',
    'div.saisone',
    'div.tabfm21',
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
    'div.malakai',
    'div.goias',
    'div.uruguay',
    'div.montevideo',
    'div.goiasgardien',
    'div.aparecidense',
    'div.electricblue',
    'div.electricred',
    'div.electricgreen',
    'div.electricyellow',
    'div.electricorange',
    'div.electricviolet',
    'div.electricfluog',
    'div.electricpink',
    'div.electriccyan',
    'div.electricgrey',
    'div.electricgold',
    'div.electricdarkblue',
    'div.electricmenu',
    'div.goal',
    'div.goala',
    'div.goalb',
    'div.central_defender',
    'div.central_defendera',
    'div.central_defenderb',
    'div.central_defenderc',
    'div.central_defenderd',
    'div.central_defendere',
    'div.lateral_defender',
    'div.lateral_defendera',
    'div.lateral_defenderb',
    'div.lateral_defenderc',
    'div.lateral_defenderd',
    'div.lateral_defendere',
    'div.central_midfielder',
    'div.central_midfieldera',
    'div.central_midfielderb',
    'div.central_midfielderc',
    'div.central_midfielderd',
    'div.central_midfieldere',
    'div.lateral_midfielder',
    'div.lateral_midfieldera',
    'div.lateral_midfielderb',
    'div.lateral_midfielderc',
    'div.lateral_midfielderd',
    'div.lateral_midfieldere',
    'div.striker',
    'div.strikera',
    'div.strikerb',
    'div.strikerc',
    'div.strikerd',
    'div.strikere',
    'div.image',
    'div.image-hover',
    'div.opensans',
    'font[color=*]',
    'font[size=*]',
    'font[face=*]',
    'span.hover-card',
    'span.hover-image',
    'a.hover-text',
    'img.playera',
    'img.playerb',
    'img.playerc',
    'img.playerd',
    'img.playere',
    'img.playerf',
    'img.playerg',
    'img.playerh',
    'img.playeri',
    'img.playerj',
    'img.playerk',
    'img.playerl',
    'img.playerm',
    'img.playern',
    'img.playero',
    'img.playerp',
    'img.playerq',
    'img.playerr',
    'img.players',
    'img.playert',
    'img.playeru',
    'img.playerv',
    'img.playerw',
    'img.playerx',
    'img.playery',
    'img.playerz',
    'img.playeraa',
    'img.playerab',
    'img.playerac',
    'img.playerad',
    'img.playerae',
    'img.playeraf',
    'img.playerag',
    'img.playerah',
    'div.infoa',
    'div.infob',
    'div.infoc',
    'div.infod',
    'div.infoe',
    'div.infof',
    'div.infog',
    'div.infoh',
    'div.infoi',
    'div.infoj',
    'div.infok',
    'div.infol',
    'div.infom',
    'div.infon',
    'div.infoo',
    'div.infop',
    'div.infoq',
    'div.infor',
    'div.infos',
    'div.infot',
    'div.infou',
    'div.infov',
    'div.infow',
    'div.infox',
    'div.infoy',
    'div.infoz',
    'div.infoaa',
    'div.infoab',
    'div.infoac',
    'div.infoad',
    'div.infoae',
    'div.infoaf',
    'div.infoag',
    'div.infoah'
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
  replaceBBCode("hover-card", contents => ['span', {'class': 'hover-card'}].concat(contents));
  replaceBBCode("hover-image", contents => ['span', {'class': 'hover-image'}].concat(contents));
  replaceBBCode("hover-text", contents => ['a', {'class': 'hover-text'}].concat(contents));
  replaceBBCode("playera", contents => ['img', {'class': 'playera'}].concat(contents));
  replaceBBCode("playerb", contents => ['img', {'class': 'playerb'}].concat(contents));
  replaceBBCode("playerc", contents => ['img', {'class': 'playerc'}].concat(contents));
  replaceBBCode("playerd", contents => ['img', {'class': 'playerd'}].concat(contents));
  replaceBBCode("playere", contents => ['img', {'class': 'playere'}].concat(contents));
  replaceBBCode("playerf", contents => ['img', {'class': 'playerf'}].concat(contents));
  replaceBBCode("playerg", contents => ['img', {'class': 'playerg'}].concat(contents));
  replaceBBCode("playerh", contents => ['img', {'class': 'playerh'}].concat(contents));
  replaceBBCode("playeri", contents => ['img', {'class': 'playeri'}].concat(contents));
  replaceBBCode("playerj", contents => ['img', {'class': 'playerj'}].concat(contents));
  replaceBBCode("playerk", contents => ['img', {'class': 'playerk'}].concat(contents));
  replaceBBCode("playerl", contents => ['img', {'class': 'playerl'}].concat(contents));
  replaceBBCode("playerm", contents => ['img', {'class': 'playerm'}].concat(contents));
  replaceBBCode("playern", contents => ['img', {'class': 'playern'}].concat(contents));
  replaceBBCode("playero", contents => ['img', {'class': 'playero'}].concat(contents));
  replaceBBCode("playerp", contents => ['img', {'class': 'playerp'}].concat(contents));
  replaceBBCode("playerq", contents => ['img', {'class': 'playerq'}].concat(contents));
  replaceBBCode("playerr", contents => ['img', {'class': 'playerr'}].concat(contents));
  replaceBBCode("players", contents => ['img', {'class': 'players'}].concat(contents));
  replaceBBCode("playert", contents => ['img', {'class': 'playert'}].concat(contents));
  replaceBBCode("playeru", contents => ['img', {'class': 'playeru'}].concat(contents));
  replaceBBCode("playerv", contents => ['img', {'class': 'playerv'}].concat(contents));
  replaceBBCode("playerw", contents => ['img', {'class': 'playerv'}].concat(contents));
  replaceBBCode("playerx", contents => ['img', {'class': 'playerx'}].concat(contents));
  replaceBBCode("playery", contents => ['img', {'class': 'playery'}].concat(contents));
  replaceBBCode("playerz", contents => ['img', {'class': 'playerz'}].concat(contents));
  replaceBBCode("playeraa", contents => ['img', {'class': 'playeraa'}].concat(contents));
  replaceBBCode("playerab", contents => ['img', {'class': 'playerab'}].concat(contents));
  replaceBBCode("playerac", contents => ['img', {'class': 'playerac'}].concat(contents));
  replaceBBCode("playerad", contents => ['img', {'class': 'playerad'}].concat(contents));
  replaceBBCode("playerae", contents => ['img', {'class': 'playerae'}].concat(contents));
  replaceBBCode("playeraf", contents => ['img', {'class': 'playeraf'}].concat(contents));
  replaceBBCode("playerag", contents => ['img', {'class': 'playerag'}].concat(contents));
  replaceBBCode("playerah", contents => ['img', {'class': 'playerah'}].concat(contents));
  replaceBBCode("infoa", contents => ['div', {'class': 'infoa'}].concat(contents));
  replaceBBCode("infob", contents => ['div', {'class': 'infob'}].concat(contents));
  replaceBBCode("infoc", contents => ['div', {'class': 'infoc'}].concat(contents));
  replaceBBCode("infod", contents => ['div', {'class': 'infod'}].concat(contents));
  replaceBBCode("infoe", contents => ['div', {'class': 'infoe'}].concat(contents));
  replaceBBCode("infof", contents => ['div', {'class': 'infof'}].concat(contents));
  replaceBBCode("infog", contents => ['div', {'class': 'infog'}].concat(contents));
  replaceBBCode("infoh", contents => ['div', {'class': 'infoh'}].concat(contents));
  replaceBBCode("infoi", contents => ['div', {'class': 'infoi'}].concat(contents));
  replaceBBCode("infoj", contents => ['div', {'class': 'infoj'}].concat(contents));
  replaceBBCode("infok", contents => ['div', {'class': 'infok'}].concat(contents));
  replaceBBCode("infol", contents => ['div', {'class': 'infol'}].concat(contents));
  replaceBBCode("infom", contents => ['div', {'class': 'infom'}].concat(contents));
  replaceBBCode("infon", contents => ['div', {'class': 'infon'}].concat(contents));
  replaceBBCode("infoo", contents => ['div', {'class': 'infoo'}].concat(contents));
  replaceBBCode("infop", contents => ['div', {'class': 'infop'}].concat(contents));
  replaceBBCode("infoq", contents => ['div', {'class': 'infoq'}].concat(contents));
  replaceBBCode("infor", contents => ['div', {'class': 'infor'}].concat(contents));
  replaceBBCode("infos", contents => ['div', {'class': 'infos'}].concat(contents));
  replaceBBCode("infot", contents => ['div', {'class': 'infot'}].concat(contents));
  replaceBBCode("infou", contents => ['div', {'class': 'infou'}].concat(contents));
  replaceBBCode("infov", contents => ['div', {'class': 'infov'}].concat(contents));
  replaceBBCode("infow", contents => ['div', {'class': 'infow'}].concat(contents));
  replaceBBCode("infox", contents => ['div', {'class': 'infox'}].concat(contents));
  replaceBBCode("infoy", contents => ['div', {'class': 'infoy'}].concat(contents));
  replaceBBCode("infoz", contents => ['div', {'class': 'infoz'}].concat(contents));
  replaceBBCode("infoaa", contents => ['div', {'class': 'infoaa'}].concat(contents));
  replaceBBCode("infoab", contents => ['div', {'class': 'infoab'}].concat(contents));
  replaceBBCode("infoac", contents => ['div', {'class': 'infoac'}].concat(contents));
  replaceBBCode("infoad", contents => ['div', {'class': 'infoad'}].concat(contents));
  replaceBBCode("infoae", contents => ['div', {'class': 'infoae'}].concat(contents));
  replaceBBCode("infoaf", contents => ['div', {'class': 'infoaf'}].concat(contents));
  replaceBBCode("infoag", contents => ['div', {'class': 'infoag'}].concat(contents));
  replaceBBCode("infoah", contents => ['img', {'class': 'infoah'}].concat(contents));
  replaceBBCode("floatl", contents => ['div', {'class': 'floatl'}].concat(contents));
  replaceBBCode("floatr", contents => ['div', {'class': 'floatr'}].concat(contents));
  replaceBBCode("t", contents => ['div', {'class': 'titrenews'}].concat(contents));
  replaceBBCode("image", contents => ['div', {'class': 'image'}].concat(contents));
  replaceBBCode("image-hover", contents => ['div', {'class': 'image-hover'}].concat(contents));
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
  replaceBBCode("electricpanther", contents => ['div', {'class': 'electricpanther'}].concat(contents));
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
  replaceBBCode("colortabk", contents => ['div', {'class': 'colortabk'}].concat(contents));
  replaceBBCode("colortabl", contents => ['div', {'class': 'colortabl'}].concat(contents));
  replaceBBCode("colortabm", contents => ['div', {'class': 'colortabm'}].concat(contents));
  replaceBBCode("colortabn", contents => ['div', {'class': 'colortabn'}].concat(contents));
  replaceBBCode("colortabo", contents => ['div', {'class': 'colortabo'}].concat(contents));
  replaceBBCode("colortabp", contents => ['div', {'class': 'colortabp'}].concat(contents));
  replaceBBCode("colortabq", contents => ['div', {'class': 'colortabq'}].concat(contents));
  replaceBBCode("colortabr", contents => ['div', {'class': 'colortabr'}].concat(contents));
  replaceBBCode("colortabs", contents => ['div', {'class': 'colortabs'}].concat(contents));
  replaceBBCode("colortabt", contents => ['div', {'class': 'colortabt'}].concat(contents));
  replaceBBCode("colortabu", contents => ['div', {'class': 'colortabu'}].concat(contents));
  replaceBBCode("colortabv", contents => ['div', {'class': 'colortabv'}].concat(contents));
  replaceBBCode("colortabw", contents => ['div', {'class': 'colortabw'}].concat(contents));
  replaceBBCode("colortabx", contents => ['div', {'class': 'colortabx'}].concat(contents));
  replaceBBCode("colortaby", contents => ['div', {'class': 'colortaby'}].concat(contents));
  replaceBBCode("bundesliga", contents => ['div', {'class': 'bundesliga'}].concat(contents));
  replaceBBCode("ligue1uber", contents => ['div', {'class': 'ligue1uber'}].concat(contents));
  replaceBBCode("ligasantander", contents => ['div', {'class': 'ligasantander'}].concat(contents));
  replaceBBCode("serieaitalia", contents => ['div', {'class': 'serieaitalia'}].concat(contents));
  replaceBBCode("premierleague", contents => ['div', {'class': 'premierleague'}].concat(contents));
  replaceBBCode("championsleague", contents => ['div', {'class': 'championsleague'}].concat(contents));
  replaceBBCode("europaleague", contents => ['div', {'class': 'europaleague'}].concat(contents));
  replaceBBCode("conferenceleague", contents => ['div', {'class': 'conferenceleague'}].concat(contents));
  replaceBBCode("ligaprofesional", contents => ['div', {'class': 'ligaprofesional'}].concat(contents));
  replaceBBCode("classement", contents => ['div', {'class': 'classement'}].concat(contents));
  replaceBBCode("news", contents => ['div', {'class': 'news'}].concat(contents));
  replaceBBCode("groupe", contents => ['div', {'class': 'groupe'}].concat(contents));
  replaceBBCode("saisona", contents => ['div', {'class': 'saisona'}].concat(contents));
  replaceBBCode("saisonb", contents => ['div', {'class': 'saisonb'}].concat(contents));
  replaceBBCode("saisonc", contents => ['div', {'class': 'saisonc'}].concat(contents));
  replaceBBCode("saisond", contents => ['div', {'class': 'saisond'}].concat(contents));
  replaceBBCode("saisone", contents => ['div', {'class': 'saisone'}].concat(contents));
  replaceBBCode("goias", contents => ['div', {'class': 'goias'}].concat(contents));
  replaceBBCode("aparecidense", contents => ['div', {'class': 'aparecidense'}].concat(contents));
  replaceBBCode("montevideo", contents => ['div', {'class': 'montevideo'}].concat(contents));
  replaceBBCode("goiasgardien", contents => ['div', {'class': 'goiasgardien'}].concat(contents));
  replaceBBCode("uruguay", contents => ['div', {'class': 'uruguay'}].concat(contents));
  replaceBBCode("malakai", contents => ['div', {'class': 'malakai'}].concat(contents));
  replaceBBCode("opensans", contents => ['div', {'class': 'opensans'}].concat(contents));
  replaceBBCode("tabfm21", contents => ['div', {'class': 'tabfm21'}].concat(contents));
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
  replaceBBCode("grootrecopa", contents => ['div', {'class': 'grootrecopa'}].concat(contents));
  replaceBBCode("grootliberta", contents => ['div', {'class': 'grootliberta'}].concat(contents));
  replaceBBCode("electricblue", contents => ['div', {'class': 'electricblue'}].concat(contents));
  replaceBBCode("electricred", contents => ['div', {'class': 'electricred'}].concat(contents));
  replaceBBCode("electricgreen", contents => ['div', {'class': 'electricgreen'}].concat(contents));
  replaceBBCode("electricyellow", contents => ['div', {'class': 'electricyellow'}].concat(contents));
  replaceBBCode("electricorange", contents => ['div', {'class': 'electricorange'}].concat(contents));
  replaceBBCode("electricviolet", contents => ['div', {'class': 'electricviolet'}].concat(contents));
  replaceBBCode("electricfluog", contents => ['div', {'class': 'electricfluog'}].concat(contents));
  replaceBBCode("electricpink", contents => ['div', {'class': 'electricpink'}].concat(contents));
  replaceBBCode("electriccyan", contents => ['div', {'class': 'electriccyan'}].concat(contents));
  replaceBBCode("electricgrey", contents => ['div', {'class': 'electricgrey'}].concat(contents));
  replaceBBCode("electricmenu", contents => ['div', {'class': 'electricmenu'}].concat(contents));
  replaceBBCode("electricgold", contents => ['div', {'class': 'electricgold'}].concat(contents));
  replaceBBCode("electricdarkblue", contents => ['div', {'class': 'electricdarkblue'}].concat(contents));
  replaceBBCode("goal", contents => ['div', {'class': 'goal'}].concat(contents));
  replaceBBCode("goala", contents => ['div', {'class': 'goala'}].concat(contents));
  replaceBBCode("goalb", contents => ['div', {'class': 'goalb'}].concat(contents));
  replaceBBCode("central_defender", contents => ['div', {'class': 'central_defender'}].concat(contents));
  replaceBBCode("central_defendera", contents => ['div', {'class': 'central_defendera'}].concat(contents));
  replaceBBCode("central_defenderb", contents => ['div', {'class': 'central_defenderb'}].concat(contents));
  replaceBBCode("central_defenderc", contents => ['div', {'class': 'central_defenderc'}].concat(contents));
  replaceBBCode("central_defenderd", contents => ['div', {'class': 'central_defenderd'}].concat(contents));
  replaceBBCode("central_defendere", contents => ['div', {'class': 'central_defendere'}].concat(contents));
  replaceBBCode("lateral_defender", contents => ['div', {'class': 'lateral_defender'}].concat(contents));
  replaceBBCode("lateral_defendera", contents => ['div', {'class': 'lateral_defendera'}].concat(contents));
  replaceBBCode("lateral_defenderb", contents => ['div', {'class': 'lateral_defenderb'}].concat(contents));
  replaceBBCode("lateral_defenderc", contents => ['div', {'class': 'lateral_defenderc'}].concat(contents));
  replaceBBCode("lateral_defenderd", contents => ['div', {'class': 'lateral_defenderd'}].concat(contents));
  replaceBBCode("lateral_defendere", contents => ['div', {'class': 'lateral_defendere'}].concat(contents));
  replaceBBCode("central_midfielder", contents => ['div', {'class': 'central_midfielder'}].concat(contents));
  replaceBBCode("central_midfieldera", contents => ['div', {'class': 'central_midfieldera'}].concat(contents));
  replaceBBCode("central_midfielderb", contents => ['div', {'class': 'central_midfielderb'}].concat(contents));
  replaceBBCode("central_midfielderc", contents => ['div', {'class': 'central_midfielderc'}].concat(contents));
  replaceBBCode("central_midfielderd", contents => ['div', {'class': 'central_midfielderd'}].concat(contents));
  replaceBBCode("central_midfieldere", contents => ['div', {'class': 'central_midfieldere'}].concat(contents));
  replaceBBCode("lateral_midfielder", contents => ['div', {'class': 'lateral_midfielder'}].concat(contents));
  replaceBBCode("lateral_midfieldera", contents => ['div', {'class': 'lateral_midfieldera'}].concat(contents));
  replaceBBCode("lateral_midfielderb", contents => ['div', {'class': 'lateral_midfielderb'}].concat(contents));
  replaceBBCode("lateral_midfielderc", contents => ['div', {'class': 'lateral_midfielderc'}].concat(contents));
  replaceBBCode("lateral_midfielderd", contents => ['div', {'class': 'lateral_midfielderd'}].concat(contents));
  replaceBBCode("lateral_midfieldere", contents => ['div', {'class': 'lateral_midfieldere'}].concat(contents));
  replaceBBCode("striker", contents => ['div', {'class': 'striker'}].concat(contents));
  replaceBBCode("strikera", contents => ['div', {'class': 'strikera'}].concat(contents));
  replaceBBCode("strikerb", contents => ['div', {'class': 'strikerb'}].concat(contents));
  replaceBBCode("strikerc", contents => ['div', {'class': 'strikerc'}].concat(contents));
  replaceBBCode("strikerd", contents => ['div', {'class': 'strikerd'}].concat(contents));
  replaceBBCode("strikere", contents => ['div', {'class': 'strikere'}].concat(contents));
  replaceBBCode("grootsudamericana", contents => ['div', {'class': 'grootsudamericana'}].concat(contents));

  ["left", "center", "right", "justify"].forEach(direction => {
    replaceBBCode(direction, contents => ['div', {'style': "text-align:" + direction}].concat(contents));
  });

  helper.addPreProcessor(replaceFontColor);
  helper.addPreProcessor(replaceFontSize);
  helper.addPreProcessor(replaceFontFace);

}
