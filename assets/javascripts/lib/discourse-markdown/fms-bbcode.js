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
  let ruler = md.inline.bbcode.ruler;

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
    tag: 'hover-image',
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

  ruler.push('image', {
    tag: 'image',
    wrap: 'div.image'
  });

  ruler = md.block.bbcode.ruler;

  ruler.push('image-hover', {
    tag: 'image-hover',
    wrap: 'div.image-hover'
  });

  ruler.push('playera', {
    tag: 'playera',
    wrap: 'img.playera'
  });

  ruler.push('playerb', {
    tag: 'playerb',
    wrap: 'img.playerb'
  });

  ruler.push('playerc', {
    tag: 'playerc',
    wrap: 'img.playerc'
  });

  ruler.push('playerd', {
    tag: 'playerd',
    wrap: 'img.playerd'
  });
  
  ruler.push('playere', {
    tag: 'playere',
    wrap: 'img.playere'
  });
  
  ruler.push('playerf', {
    tag: 'playerf',
    wrap: 'img.playerf'
  });
  
  ruler.push('playerg', {
    tag: 'playerg',
    wrap: 'img.playerg'
  });
  
  ruler.push('playerh', {
    tag: 'playerh',
    wrap: 'img.playerh'
  });
  
  ruler.push('playeri', {
    tag: 'playeri',
    wrap: 'img.playeri'
  });
  
  ruler.push('playerj', {
    tag: 'playerj',
    wrap: 'img.playerj'
  });
  
  ruler.push('playerk', {
    tag: 'playerk',
    wrap: 'img.playerk'
  });
  
  ruler.push('playerl', {
    tag: 'playerl',
    wrap: 'img.playerl'
  });
  
  ruler.push('playerm', {
    tag: 'playerm',
    wrap: 'img.playerm'
  });
  
  ruler.push('playern', {
    tag: 'playern',
    wrap: 'img.playern'
  });
  
  ruler.push('playero', {
    tag: 'playero',
    wrap: 'img.playero'
  });
  
  ruler.push('playerp', {
    tag: 'playerp',
    wrap: 'img.playerp'
  });
  
  ruler.push('playerq', {
    tag: 'playerq',
    wrap: 'img.playerq'
  });
  
  ruler.push('playerr', {
    tag: 'playerr',
    wrap: 'img.playerr'
  });
  
  ruler.push('players', {
    tag: 'players',
    wrap: 'img.players'
  });
  
  ruler.push('playert', {
      tag: 'playert',
      wrap: 'img.playert'
    });
  
  ruler.push('playeru', {
    tag: 'playeru',
    wrap: 'img.playeru'
  });
  
  ruler.push('playerv', {
    tag: 'playerv',
    wrap: 'img.playerv'
  });

  ruler.push('playerw', {
    tag: 'playerw',
    wrap: 'img.playerw'
  });
  
  ruler.push('playerx', {
    tag: 'playerx',
    wrap: 'img.playerx'
  });
  
  ruler.push('playery', {
    tag: 'playery',
    wrap: 'img.playery'
  });
  
  ruler.push('playerz', {
    tag: 'playerz',
    wrap: 'img.playerz'
  });
  
  ruler.push('playeraa', {
    tag: 'playeraa',
    wrap: 'img.playeraa'
  });
  
  ruler.push('playerab', {
    tag: 'playerab',
    wrap: 'img.playerab'
  });
  
  ruler.push('playerac', {
    tag: 'playerac',
    wrap: 'img.playerac'
  });
  
  ruler.push('playerad', {
    tag: 'playerad',
    wrap: 'img.playerad'
  });
  
  ruler.push('playerae', {
    tag: 'playerae',
    wrap: 'img.playerae'
  });
  
  ruler.push('playeraf', {
    tag: 'playeraf',
    wrap: 'img.playeraf'
  });
  
  ruler.push('playerag', {
    tag: 'playerag',
    wrap: 'img.playerag'
  });
  
  ruler.push('playerah', {
    tag: 'playerah',
    wrap: 'img.playerah'
  });

  ruler.push('infoa', {
    tag: 'infoa',
    wrap: 'div.infoa'
  });

  ruler.push('infob', {
    tag: 'infob',
    wrap: 'div.infob'
  });

  ruler.push('infoc', {
    tag: 'infoc',
    wrap: 'div.infoc'
  });

  ruler.push('infod', {
  tag: 'infod',
  wrap: 'div.infod'
});

  ruler.push('infoe', {
  tag: 'infoe',
  wrap: 'div.infoe'
});

  ruler.push('infof', {
  tag: 'infof',
  wrap: 'div.infof'
});

  ruler.push('infog', {
  tag: 'infog',
  wrap: 'div.infog'
});

  ruler.push('infoh', {
  tag: 'infoh',
  wrap: 'div.infoh'
});

  ruler.push('infoi', {
  tag: 'infoi',
  wrap: 'div.infoi'
});

  ruler.push('infoj', {
  tag: 'infoj',
  wrap: 'div.infoj'
});

  ruler.push('infok', {
  tag: 'infok',
  wrap: 'div.infok'
});

  ruler.push('infol', {
  tag: 'infol',
  wrap: 'div.infol'
});

  ruler.push('infom', {
  tag: 'infom',
  wrap: 'div.infom'
});

  ruler.push('infon', {
  tag: 'infon',
  wrap: 'div.infon'
});

  ruler.push('infoo', {
  tag: 'infoo',
  wrap: 'div.infoo'
});

  ruler.push('infop', {
  tag: 'infop',
  wrap: 'div.infop'
});

  ruler.push('infoq', {
  tag: 'infoq',
  wrap: 'div.infoq'
});

  ruler.push('infor', {
  tag: 'infor',
  wrap: 'div.infor'
});

  ruler.push('infos', {
  tag: 'infos',
  wrap: 'div.infos'
});

  ruler.push('infot', {
    tag: 'infot',
    wrap: 'div.infot'
  });

  ruler.push('infou', {
  tag: 'infou',
  wrap: 'div.infou'
});

  ruler.push('infov', {
  tag: 'infov',
  wrap: 'div.infov'
});

  ruler.push('infow', {
  tag: 'infow',
  wrap: 'div.infow'
});

  ruler.push('infox', {
  tag: 'infox',
  wrap: 'div.infox'
});

  ruler.push('infoy', {
  tag: 'infoy',
  wrap: 'div.infoy'
});

  ruler.push('infoz', {
  tag: 'infoz',
  wrap: 'div.infoz'
});

  ruler.push('infoaa', {
  tag: 'infoaa',
  wrap: 'div.infoaa'
});

  ruler.push('infoab', {
  tag: 'infoab',
  wrap: 'div.infoab'
});

  ruler.push('infoac', {
  tag: 'infoac',
  wrap: 'div.infoac'
});

  ruler.push('infoad', {
  tag: 'infoad',
  wrap: 'div.infoad'
});

  ruler.push('infoae', {
  tag: 'infoae',
  wrap: 'div.infoae'
});

  ruler.push('infoaf', {
  tag: 'infoaf',
  wrap: 'div.infoaf'
});

  ruler.push('infoag', {
  tag: 'infoag',
  wrap: 'div.infoag'
});

  ruler.push('infoah', {
  tag: 'infoah',
  wrap: 'div.infoah'
});

  ruler.push('coltaba', {
    tag: 'coltaba',
    wrap: 'div.coltaba'
  });

  ruler.push('coltabb', {
    tag: 'coltabb',
    wrap: 'div.coltabb'
  });

  ruler.push('coltabc', {
    tag: 'coltabc',
    wrap: 'div.coltabc'
  });

  ruler.push('coltabd', {
    tag: 'coltabd',
    wrap: 'div.coltabd'
  });

  ruler.push('coltabe', {
    tag: 'coltabe',
    wrap: 'div.coltabe'
  });

  ruler.push('coltabf', {
    tag: 'coltabf',
    wrap: 'div.coltabf'
  });

  ruler.push('coltabg', {
    tag: 'coltabg',
    wrap: 'div.coltabg'
  });

  ruler.push('coltabh', {
    tag: 'coltabh',
    wrap: 'div.coltabh'
  });

  ruler.push('coltabi', {
    tag: 'coltabi',
    wrap: 'div.coltabi'
  });

  ruler.push('coltabj', {
    tag: 'coltabj',
    wrap: 'div.coltabj'
  });

  ruler.push('coltabk', {
    tag: 'coltabk',
    wrap: 'div.coltabk'
  });

  ruler.push('coltabl', {
    tag: 'coltabl',
    wrap: 'div.coltabl'
  });

  ruler.push('coltabm', {
    tag: 'coltabm',
    wrap: 'div.coltabm'
  });

  ruler.push('coltabn', {
    tag: 'coltabn',
    wrap: 'div.coltabn'
  });

  ruler.push('coltabo', {
    tag: 'coltabo',
    wrap: 'div.coltabo'
  });

  ruler.push('coltabp', {
    tag: 'coltabp',
    wrap: 'div.coltabp'
  });

  ruler.push('coltabq', {
    tag: 'coltabq',
    wrap: 'div.coltabq'
  });

  ruler.push('coltabr', {
    tag: 'coltabr',
    wrap: 'div.coltabr'
  });

  ruler.push('coltabt', {
    tag: 'coltabt',
    wrap: 'div.coltabt'
  });

  ruler.push('coltabs', {
    tag: 'coltabs',
    wrap: 'div.coltabs'
  });

  ruler.push('coltabu', {
    tag: 'coltabu',
    wrap: 'div.coltabu'
  });

  ruler.push('coltabv', {
    tag: 'coltabv',
    wrap: 'div.coltabv'
  });

  ruler.push('coltabw', {
    tag: 'coltabw',
    wrap: 'div.coltabw'
  });

  ruler.push('coltabx', {
    tag: 'coltabx',
    wrap: 'div.coltabx'
  });

  ruler.push('coltaby', {
    tag: 'coltaby',
    wrap: 'div.coltaby'
  });

  ruler.push('coltabz', {
    tag: 'coltabz',
    wrap: 'div.coltabz'
  });

  ruler.push('coltabface', {
    tag: 'coltabface',
    wrap: 'div.coltabface'
  });

  ruler.push('coltablogo', {
    tag: 'coltablogo',
    wrap: 'div.coltablogo'
  });
  
  ruler.push('tabstadereims', {
    tag: 'tabstadereims',
    wrap: 'div.tabstadereims'
  });
  
  ruler.push('tabmonaco', {
    tag: 'tabmonaco',
    wrap: 'div.tabmonaco'
  });
  
  ruler.push('tabparis', {
    tag: 'tabparis',
    wrap: 'div.tabparis'
  });
  
  ruler.push('tabnantes', {
    tag: 'tabnantes',
    wrap: 'div.tabnantes'
  });
  
  ruler.push('tabmontpellier', {
    tag: 'tabmontpellier',
    wrap: 'div.tabmontpellier'
  });
  
  ruler.push('tabbordeaux', {
    tag: 'tabbordeaux',
    wrap: 'div.tabbordeaux'
  });
  
  ruler.push('tabmetz', {
    tag: 'tabmetz',
    wrap: 'div.tabmetz'
  });
  
  ruler.push('tabsainte', {
    tag: 'tabsainte',
    wrap: 'div.tabsainte'
  });
  
  ruler.push('tabmarseille', {
    tag: 'tabmarseille',
    wrap: 'div.tabmarseille'
  });
  
  ruler.push('tablosc', {
    tag: 'tablosc',
    wrap: 'div.tablosc'
  });
  
  ruler.push('tabrennes', {
    tag: 'tabrennes',
    wrap: 'div.tabrennes'
  });
  
  ruler.push('tabangers', {
    tag: 'tabangers',
    wrap: 'div.tabangers'
  });

  ruler.push('tabtoulouse', {
    tag: 'tabtoulouse',
    wrap: 'div.tabtoulouse'
  });
  
  ruler.push('tabligue', {
    tag: 'tabligue',
    wrap: 'div.tabligue'
  });
  
  ruler.push('tabcobresal', {
    tag: 'tabcobresal',
    wrap: 'div.tabcobresal'
  });
  
  ruler.push('tableauaa', {
    tag: 'tableauaa',
    wrap: 'div.tableauaa'
  });
  
  ruler.push('tableauab', {
    tag: 'tableauab',
    wrap: 'div.tableauab'
  });
  
  ruler.push('tableauac', {
    tag: 'tableauac',
    wrap: 'div.tableauac'
  });
  
  ruler.push('tableauad', {
    tag: 'tableauad',
    wrap: 'div.tableauad'
  });
  
  ruler.push('tableauae', {
    tag: 'tableauae',
    wrap: 'div.tableauae'
  });

  ruler.push('electricpanther', {
    tag: 'electricpanther',
    wrap: 'div.electricpanther'
  });
  
  ruler.push('tableauaf', {
    tag: 'tableauaf',
    wrap: 'div.tableauaf'
  });
  
  ruler.push('tableauag', {
    tag: 'tableauag',
    wrap: 'div.tableauag'
  });
  
  ruler.push('tableauah', {
    tag: 'tableauah',
    wrap: 'div.tableauah'
  });
  
  ruler.push('tableauai', {
    tag: 'tableauai',
    wrap: 'div.tableauai'
  });
  
  ruler.push('tableauaj', {
    tag: 'tableauaj',
    wrap: 'div.tableauaj'
  });
  
  ruler.push('tableauak', {
    tag: 'tableauak',
    wrap: 'div.tableauak'
  });
  
  ruler.push('bronze', {
    tag: 'bronze',
    wrap: 'div.bronze'
  });

  ruler.push('bronze_progress', {
    tag: 'bronze_progress',
    wrap: 'div.bronze_progress'
  });

  ruler.push('bronze_striped', {
    tag: 'bronze_striped',
    wrap: 'div.bronze_striped'
  });

  ruler.push('bronze_bar', {
    tag: 'bronze_bar',
    wrap: 'div.bronze_bar'
  });

  ruler.push('silver', {
      tag: 'silver',
      wrap: 'div.silver'
    });
  
  ruler.push('silver_progress', {
      tag: 'silver_progress',
      wrap: 'div.silver_progress'
    });
  
  ruler.push('silver_striped', {
      tag: 'silver_striped',
      wrap: 'div.silver_striped'
    });
  
  ruler.push('silver_bar', {
      tag: 'silver_bar',
      wrap: 'div.silver_bar'
    });

  ruler.push('gold', {
          tag: 'gold',
          wrap: 'div.gold'
        });
      
  ruler.push('gold_progress', {
          tag: 'gold_progress',
          wrap: 'div.gold_progress'
        });
      
  ruler.push('gold_striped', {
          tag: 'gold_striped',
          wrap: 'div.gold_striped'
        });
      
  ruler.push('gold_bar', {
          tag: 'gold_bar',
          wrap: 'div.gold_bar'
        });

  ruler.push('diamond', {
          tag: 'diamond',
          wrap: 'div.diamond'
        });
      
  ruler.push('diamond_progress', {
          tag: 'diamond_progress',
          wrap: 'div.diamond_progress'
        });
      
  ruler.push('diamond_striped', {
          tag: 'diamond_striped',
          wrap: 'div.diamond_striped'
        });
      
  ruler.push('diamond_bar', {
          tag: 'diamond_bar',
          wrap: 'div.diamond_bar'
        });

  ruler.push('fmslife', {
          tag: 'fmslife',
          wrap: 'div.fmslife'
        });
      
  ruler.push('fmslife_progress', {
          tag: 'fmslife_progress',
          wrap: 'div.fmslife_progress'
        });
      
  ruler.push('fmslife_striped', {
          tag: 'fmslife_striped',
          wrap: 'div.fmslife_striped'
        });
      
  ruler.push('fsmlife_bar', {
          tag: 'fsmlife_bar',
          wrap: 'div.fsmlife_bar'
        });
  
  ruler.push('download_tab', {
          tag: 'download_tab',
          wrap: 'div.download_tab'
        });
  
  ruler.push('download_button', {
          tag: 'download_button',
          wrap: 'div.download_button'
        });
  
   ruler.push('tableaual', {
    tag: 'tableaual',
    wrap: 'div.tableaual'
  });
 
   ruler.push('tableauam', {
    tag: 'tableauam',
    wrap: 'div.tableauam'
  });
  
   ruler.push('tableauan', {
    tag: 'tableauan',
    wrap: 'div.tableauakn'
  });
  
   ruler.push('tableauap', {
    tag: 'tableauap',
    wrap: 'div.tableauap'
  });
  
   ruler.push('tableauaq', {
    tag: 'tableauaq',
    wrap: 'div.tableauaq'
  });

  ruler.push('rounded', {
    tag: 'rounded',
    wrap: 'div.rounded'
  });
  
   ruler.push('colmacouille', {
    tag: 'colmacouille',
    wrap: 'div.colmacouille'
  });
  
  ruler.push('tabsaopaulo', {
    tag: 'tabsaopaulo',
    wrap: 'div.tabsaopaulo'
  });
  
  ruler.push('colortaba', {
    tag: 'colortaba',
    wrap: 'div.colortaba'
  });
  
  ruler.push('colortabb', {
    tag: 'colortabb',
    wrap: 'div.colortabb'
  });
  
  ruler.push('colortabc', {
    tag: 'colortabc',
    wrap: 'div.colortabc'
  });
  
  ruler.push('colortabd', {
    tag: 'colortabd',
    wrap: 'div.colortabd'
  });
  
  ruler.push('colortabe', {
    tag: 'colortabe',
    wrap: 'div.colortabe'
  });
  
  ruler.push('colortabf', {
    tag: 'colortabf',
    wrap: 'div.colortabf'
  });
  
  ruler.push('colortabg', {
    tag: 'colortabg',
    wrap: 'div.colortabg'
  });
  
  ruler.push('colortabh', {
    tag: 'colortabh',
    wrap: 'div.colortabh'
  });
  
  ruler.push('colortabi', {
    tag: 'colortabi',
    wrap: 'div.colortabi'
  });
  
  ruler.push('colortabj', {
    tag: 'colortabj',
    wrap: 'div.colortabj'
  });
  
  ruler.push('colortabk', {
    tag: 'colortabk',
    wrap: 'div.colortabk'
  });
  
  ruler.push('colortabl', {
    tag: 'colortabl',
    wrap: 'div.colortabl'
  });
  
  ruler.push('colortabm', {
    tag: 'colortabm',
    wrap: 'div.colortabm'
  });
  
  ruler.push('colortabn', {
    tag: 'colortabn',
    wrap: 'div.colortabn'
  });
  
  ruler.push('colortabo', {
    tag: 'colortabo',
    wrap: 'div.colortabo'
  });
  
  ruler.push('colortabp', {
    tag: 'colortabp',
    wrap: 'div.colortabp'
  });
  
  ruler.push('colortabq', {
    tag: 'colortabq',
    wrap: 'div.colortabq'
  });
  
  ruler.push('colortabr', {
    tag: 'colortabr',
    wrap: 'div.colortabr'
  });
  
  ruler.push('colortabs', {
    tag: 'colortabs',
    wrap: 'div.colortabs'
  });
  
  ruler.push('colortabt', {
    tag: 'colortabt',
    wrap: 'div.colortabt'
  });
  
  ruler.push('colortabu', {
    tag: 'colortabu',
    wrap: 'div.colortabu'
  });
  
  ruler.push('colortabv', {
    tag: 'colortabv',
    wrap: 'div.colortabv'
  });
  
  ruler.push('colortabw', {
    tag: 'colortabw',
    wrap: 'div.colortabw'
  });
  
  ruler.push('colortabx', {
    tag: 'colortabx',
    wrap: 'div.colortabx'
  });
  
  ruler.push('colortaby', {
    tag: 'colortaby',
    wrap: 'div.colortaby'
  });
  
  ruler.push('tabfm21', {
    tag: 'tabfm21',
    wrap: 'div.tabfm21'
  });
  
  ruler.push('bundesliga', {
    tag: 'bundesliga',
    wrap: 'div.bundesliga'
  });

  ruler.push('ligue1uber', {
    tag: 'ligue1uber',
    wrap: 'div.ligue1uber'
  });

  ruler.push('ligasantander', {
    tag: 'ligasantander',
    wrap: 'div.ligasantander'
  });

  ruler.push('serieaitalia', {
    tag: 'serieaitalia',
    wrap: 'div.serieaitalia'
  });

  ruler.push('premierleague', {
    tag: 'premierleague',
    wrap: 'div.premierleague'
  });

  ruler.push('championsleague', {
    tag: 'championsleague',
    wrap: 'div.championsleague'
  });

  ruler.push('europaleague', {
    tag: 'europaleague',
    wrap: 'div.europaleague'
  });

  ruler.push('conferenceleague', {
    tag: 'conferenceleague',
    wrap: 'div.conferenceleague'
  });

  ruler.push('ligaprofesional', {
    tag: 'ligaprofesional',
    wrap: 'div.ligaprofesional'
  });

  ruler.push('classement', {
    tag: 'classement',
    wrap: 'div.classement'
  });

  ruler.push('news', {
    tag: 'news',
    wrap: 'div.news'
  });

  ruler.push('groupe', {
    tag: 'groupe',
    wrap: 'div.groupe'
  });
  
  ruler.push('saisona', {
    tag: 'saisona',
    wrap: 'div.saisona'
  });
  
  ruler.push('saisonb', {
    tag: 'saisonb',
    wrap: 'div.saisonb'
  });
  
  ruler.push('saisonc', {
    tag: 'saisonc',
    wrap: 'div.saisonc'
  });
  
  ruler.push('saisond', {
    tag: 'saisond',
    wrap: 'div.saisond'
  });  
  
  ruler.push('saisone', {
    tag: 'saisone',
    wrap: 'div.saisone'
  });
  
  ruler.push('goias', {
    tag: 'goias',
    wrap: 'div.goias'
  });
  
  ruler.push('uruguay', {
    tag: 'uruguay',
    wrap: 'div.uruguay'
  });
  
  ruler.push('malakai', {
    tag: 'malakai',
    wrap: 'div.malakai'
  });
  
  ruler.push('aparecidense', {
    tag: 'aparecidense',
    wrap: 'div.aparecidense'
  });
  
  ruler.push('montevideo', {
    tag: 'montevideo',
    wrap: 'div.montevideo'
  });
  
  ruler.push('goiasgardien', {
    tag: 'goiasgardien',
    wrap: 'div.goiasgardien'
  });

  ruler.push('grootrecopa', {
    tag: 'grootrecopa',
    wrap: 'div.grootrecopa'
  });

  ruler.push('grootliberta', {
    tag: 'grootliberta',
    wrap: 'div.grootliberta'
  });

  ruler.push('grootsudamericana', {
    tag: 'grootsudamericana',
    wrap: 'div.grootsudamericana'
  });

  ruler.push('electricblue', {
    tag: 'electricblue',
    wrap: 'div.electricblue'
  });

  ruler.push('electricred', {
    tag: 'electricred',
    wrap: 'div.electricred'
  });

  ruler.push('electricyellow', {
    tag: 'electricyellow',
    wrap: 'div.electricyellow'
  });

  ruler.push('electricmenu', {
      tag: 'electricmenu',
      wrap: 'div.electricmenu'
    });

  ruler.push('electricgrey', {
    tag: 'electricgrey',
    wrap: 'div.electricgrey'
  });

  ruler.push('electricgreen', {
    tag: 'electricgreen',
    wrap: 'div.electricgreen'
  });

  ruler.push('electricorange', {
    tag: 'electricorange',
    wrap: 'div.electricorange'
  });

  ruler.push('electricviolet', {
    tag: 'electricviolet',
    wrap: 'div.electricviolet'
  });

  ruler.push('electricfluog', {
      tag: 'electricfluog',
      wrap: 'div.electricfluog'
    });

  ruler.push('electriccyan', {
    tag: 'electriccyan',
    wrap: 'div.electriccyan'
  });

  ruler.push('electricpink', {
    tag: 'electricpink',
    wrap: 'div.electricpink'
  });

  ruler.push('electricgold', {
    tag: 'electricgold',
    wrap: 'div.electricgold'
  });

  ruler.push('electricdarkblue', {
    tag: 'electricdarkblue',
    wrap: 'div.electricdarkblue'
  });
  
  ruler.push('opensans', {
    tag: 'opensans',
    wrap: 'div.opensans'
  });

  ruler.push('goal', {
    tag: 'goal',
    wrap: 'div.goal'
  });

  ruler.push('goala', {
    tag: 'goala',
    wrap: 'div.goala'
  });

  ruler.push('goalb', {
    tag: 'goalb',
    wrap: 'div.goalb'
  });

  ruler.push('central_defender', {
    tag: 'central_defender',
    wrap: 'div.central_defender'
  });

  ruler.push('central_defendera', {
    tag: 'central_defendera',
    wrap: 'div.central_defendera'
  });

  ruler.push('central_defenderb', {
    tag: 'central_defenderb',
    wrap: 'div.central_defenderb'
  });

  ruler.push('central_defenderc', {
    tag: 'central_defenderc',
    wrap: 'div.central_defenderc'
  });

  ruler.push('central_defenderd', {
    tag: 'central_defenderd',
    wrap: 'div.central_defenderd'
  });

  ruler.push('central_defendere', {
    tag: 'central_defendere',
    wrap: 'div.central_defendere'
  });

  ruler.push('lateral_defender', {
    tag: 'lateral_defender',
    wrap: 'div.lateral_defender'
  });

  ruler.push('lateral_defendera', {
    tag: 'lateral_defendera',
    wrap: 'div.lateral_defendera'
  });

  ruler.push('lateral_defenderb', {
    tag: 'lateral_defenderb',
    wrap: 'div.lateral_defenderb'
  });

  ruler.push('lateral_defenderc', {
    tag: 'lateral_defenderc',
    wrap: 'div.lateral_defenderc'
  });

  ruler.push('lateral_defenderd', {
    tag: 'lateral_defenderd',
    wrap: 'div.lateral_defenderd'
  });

  ruler.push('lateral_defendere', {
    tag: 'lateral_defendere',
    wrap: 'div.lateral_defendere'
  });

  ruler.push('central_midfielder', {
    tag: 'central_midfielder',
    wrap: 'div.central_midfielder'
  });

  ruler.push('central_midfieldera', {
    tag: 'central_midfieldera',
    wrap: 'div.central_midfieldera'
  });

  ruler.push('central_midfielderb', {
    tag: 'central_midfielderb',
    wrap: 'div.central_midfielderb'
  });

  ruler.push('central_midfielderc', {
    tag: 'central_midfielderc',
    wrap: 'div.central_midfielderc'
  });

  ruler.push('central_midfielderd', {
    tag: 'central_midfielderd',
    wrap: 'div.central_midfielderd'
  });

  ruler.push('central_midfieldere', {
    tag: 'central_midfieldere',
    wrap: 'div.central_midfieldere'
  });

  ruler.push('lateral_midfielder', {
    tag: 'lateral_midfielder',
    wrap: 'div.lateral_midfielder'
  });

  ruler.push('lateral_midfieldera', {
    tag: 'lateral_midfieldera',
    wrap: 'div.lateral_midfieldera'
  });

  ruler.push('lateral_midfielderb', {
    tag: 'lateral_midfielderb',
    wrap: 'div.lateral_midfielderb'
  });

  ruler.push('lateral_midfielderc', {
    tag: 'lateral_midfielderc',
    wrap: 'div.lateral_midfielderc'
  });

  ruler.push('lateral_midfielderd', {
    tag: 'lateral_midfielderd',
    wrap: 'div.lateral_midfielderd'
  });

  ruler.push('lateral_midfieldere', {
    tag: 'lateral_midfieldere',
    wrap: 'div.lateral_midfieldere'
  });

  ruler.push('striker', {
    tag: 'striker',
    wrap: 'div.striker'
  });

  ruler.push('strikera', {
    tag: 'strikera',
    wrap: 'div.strikera'
  });

  ruler.push('strikerb', {
    tag: 'strikerb',
    wrap: 'div.strikerb'
  });

  ruler.push('strikerc', {
    tag: 'strikerc',
    wrap: 'div.strikerc'
  });

  ruler.push('strikerd', {
    tag: 'strikerd',
    wrap: 'div.strikerd'
  });

  ruler.push('strikere', {
    tag: 'strikere',
    wrap: 'div.strikere'
  });

/* bbcode Menu hover */

  ruler.push('menu_orange', {
    tag: 'menu_orange',
    wrap: 'div.menu_orange'
  });

  ruler.push('menu_bleu', {
    tag: 'menu_bleu',
    wrap: 'div.menu_bleu'
  });

  ruler.push('menu_jaune', {
    tag: 'menu_jaune',
    wrap: 'div.menu_jaune'
  });

  ruler.push('menu_violet', {
    tag: 'menu_violet',
    wrap: 'div.menu_violet'
  });

  ruler.push('menu_vert', {
    tag: 'menu_vert',
    wrap: 'div.menu_vert'
  });

  ruler.push('menu_rouge', {
    tag: 'menu_rouge',
    wrap: 'div.menu_rouge'
  });

  ruler.push('menu_cyan', {
    tag: 'menu_cyan',
    wrap: 'div.menu_cyan'
  });

  ruler.push('menu_rose', {
    tag: 'menu_rose',
    wrap: 'div.menu_rose'
  });

  ruler.push('menu_parme', {
    tag: 'menu_parme',
    wrap: 'div.menu_parme'
  });

  ruler.push('menu_gris', {
    tag: 'menu_gris',
    wrap: 'div.menu_gris'
  });

  ruler.push('menu_vertfluo', {
    tag: 'menu_vertfluo',
    wrap: 'div.menu_vertfluo'
  });

  ruler.push('menu_rosepastel', {
    tag: 'menu_rosepastel',
    wrap: 'div.menu_rosepastel'
  });

  ruler.push('menu_champions', {
    tag: 'menu_champions',
    wrap: 'div.menu_champions'
  });

  ruler.push('menu_conference', {
    tag: 'menu_conference',
    wrap: 'div.menu_conference'
  });

  ruler.push('menu_salmon', {
    tag: 'menu_salmon',
    wrap: 'div.menu_salmon'
  });

  ruler.push('menu_sapin', {
    tag: 'menu_sapin',
    wrap: 'div.menu_sapin'
  });

  ruler.push('menu_liberta', {
    tag: 'menu_liberta',
    wrap: 'div.menu_liberta'
  });

  ruler.push('menu_orangepastel', {
    tag: 'menu_orangepastel',
    wrap: 'div.menu_orangepastel'
  });
  
  ruler.push('menu_jaunepastel', {
    tag: 'menu_jaunepastel',
    wrap: 'div.menu_jaunepastel'
  });

  ruler.push('menu_jaunefluo', {
    tag: 'menu_jaunefluo',
    wrap: 'div.menu_jaunefluo'
  });

  ruler.push('menu_or', {
    tag: 'menu_or',
    wrap: 'div.menu_or'
  });

  ruler.push('menu_orpastel', {
    tag: 'menu_orpastel',
    wrap: 'div.menu_orpastel'
  });

  ruler.push('menu_bordeaux', {
    tag: 'menu_bordeaux',
    wrap: 'div.menu_bordeaux'
  });

  ruler.push('menu_burgundy', {
    tag: 'menu_burgundy',
    wrap: 'div.menu_burgundy'
  });

  ruler.push('menu_rosefluo', {
    tag: 'menu_rosefluo',
    wrap: 'div.menu_rosefluo'
  });

  ruler.push('menu_marron', {
    tag: 'menu_marron',
    wrap: 'div.menu_marron'
  });

  ruler.push('menu_terracotta', {
    tag: 'menu_terracotta',
    wrap: 'div.menu_terracotta'
  });
  
  ruler.push('menu_noir', {
    tag: 'menu_noir',
    wrap: 'div.menu_noir'
  });
  
  ruler.push('menu_blanc', {
    tag: 'menu_blanc',
    wrap: 'div.menu_blanc'
  });

  ruler.push('jelly_orange', {
    tag: 'jelly_orange',
    wrap: 'div.jelly_orange'
  });

  ruler.push('jelly_orangepastel', {
    tag: 'jelly_orangepastel',
    wrap: 'div.jelly_orangepastel'
  });

  ruler.push('jelly_bleu', {
    tag: 'jelly_bleu',
    wrap: 'div.jelly_bleu'
  });

  ruler.push('jelly_cyan', {
    tag: 'jelly_cyan',
    wrap: 'div.jelly_cyan'
  });

  ruler.push('jelly_liberta', {
    tag: 'jelly_liberta',
    wrap: 'div.jelly_liberta'
  });

  ruler.push('jelly_jaunepastel', {
    tag: 'jelly_jaunepastel',
    wrap: 'div.jelly_jaunepastel'
  });

  ruler.push('jelly_jaune', {
    tag: 'jelly_jaune',
    wrap: 'div.jelly_jaune'
  });

  ruler.push('jelly_jaunefluo', {
    tag: 'jelly_jaunefluo',
    wrap: 'div.jelly_jaunefluo'
  });
  
  ruler.push('jelly_or', {
    tag: 'jelly_or',
    wrap: 'div.jelly_or'
  });
  
  ruler.push('jelly_orpastel', {
    tag: 'jelly_orpastel',
    wrap: 'div.jelly_orpastel'
  });

  ruler.push('jelly_violet', {
    tag: 'jelly_violet',
    wrap: 'div.jelly_violet'
  });

  ruler.push('jelly_parme', {
    tag: 'jelly_parme',
    wrap: 'div.jelly_parme'
  });

  ruler.push('jelly_vert', {
    tag: 'jelly_vert',
    wrap: 'div.jelly_vert'
  });

  ruler.push('menu_liberta', {
    tag: 'menu_liberta',
    wrap: 'div.menu_liberta'
  });

  ruler.push('jelly_vertfluo', {
    tag: 'jelly_vertfluo',
    wrap: 'div.jelly_vertfluo'
  });

  ruler.push('jelly_sapin', {
    tag: 'jelly_sapin',
    wrap: 'div.jelly_sapin'
  });

  ruler.push('jelly_rouge', {
    tag: 'jelly_rouge',
    wrap: 'div.jelly_rouge'
  });

  ruler.push('jelly_bordeaux', {
    tag: 'jelly_bordeaux',
    wrap: 'div.jelly_bordeaux'
  });
  
  ruler.push('jelly_burgundy', {
    tag: 'jelly_burgundy',
    wrap: 'div.jelly_burgundy'
  });
  
  ruler.push('jelly_rose', {
    tag: 'jelly_rose',
    wrap: 'div.jelly_rose'
  });

  ruler.push('jelly_rosepastel', {
    tag: 'jelly_rosepastel',
    wrap: 'div.jelly_rosepastel'
  });

  ruler.push('jelly_salmon', {
    tag: 'jelly_salmon',
    wrap: 'div.jelly_salmon'
  });

  ruler.push('jelly_rosefluo', {
    tag: 'jelly_rosefluo',
    wrap: 'div.jelly_rosefluo'
  });

  ruler.push('jelly_gris', {
    tag: 'jelly_gris',
    wrap: 'div.jelly_gris'
  });

  ruler.push('jelly_marron', {
    tag: 'jelly_marron',
    wrap: 'div.jelly_marron'
  });

  ruler.push('jelly_terracotta', {
    tag: 'jelly_terracotta',
    wrap: 'div.jelly_terracotta'
  });

  ruler.push('jelly_noir', {
    tag: 'jelly_noir',
    wrap: 'div.jelly_noir'
  });

  ruler.push('jelly_blanc', {
    tag: 'jelly_blanc',
    wrap: 'div.jelly_blanc'
  });
  ruler.push('jelly_champions', {
    tag: 'jelly_champions',
    wrap: 'div.jelly_champions'
  });

  ruler.push('jelly_conference', {
    tag: 'jelly_conference',
    wrap: 'div.jelly_conference'
  });

  ruler.push('jelly_europa', {
    tag: 'jelly_europa',
    wrap: 'div.jelly_europa'
  });

}

export function setup(helper) {

  helper.allowList([
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
    'div.rounded',
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
    'div.fmslife',
    'div.fmslife_progress',
    'div.fmslife_striped',
    'div.fmslife_bar',
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
    'div.infoah',
    'div.menu_orange',
    'div.menu_orange',
    'div.menu_bleu',
    'div.menu_jaune',
    'div.menu_violet',
    'div.menu_vert',
    'div.menu_rouge',
    'div.menu_cyan',
    'div.menu_rose',
    'div.menu_parme',
    'div.menu_gris',
    'div.menu_vertfluo',
    'div.menu_rosepastel',
    'div.menu_champions',
    'div.menu_conference',
    'div.menu_salmon',
    'div.menu_sapin',
    'div.menu_liberta',
    'div.menu_orangepastel',
    'div.menu_jaunepastel',
    'div.menu_jaunefluo',
    'div.menu_or',
    'div.menu_orpastel',
    'div.menu_bordeaux',
    'div.menu_burgundy',
    'div.menu_rosefluo',
    'div.menu_marron',
    'div.menu_terracotta',
    'div.menu_noir',
    'div.menu_blanc',
    'div.jelly_orange',
    'div.jelly_orangepastel',
    'div.jelly_bleu',
    'div.jelly_cyan', 
    'div.jelly_liberta', 
    'div.jelly_jaune',
    'div.jelly_jaunepastel',
    'div.jelly_jaunefluo',
    'div.jelly_or',
    'div.jelly_orpastel',
    'div.jelly_violet',
    'div.jelly_parme',
    'div.jelly_vert',
    'div.jelly_vertfluo',
    'div.jelly_sapin',
    'div.jelly_rouge',
    'div.jelly_bordeaux',
    'div.jelly_burgundy',
    'div.jelly_rose',
    'div.jelly_rosepastel',
    'div.jelly_salmon',
    'div.jelly_rosefluo',
    'div.jelly_gris',
    'div.jelly_marron',
    'div.jelly_terracotta',
    'div.jelly_noir',
    'div.jelly_blanc',
    'div.jelly_champions',
    'div.jelly_conference',
    'div.jelly_europa'
  ]);



  helper.allowList({
    custom(tag, name, value) {
      if (tag === 'span' && name === 'style') {
        return /^font-size:.*|background-color:#?[a-zA-Z0-9]+$/.exec(value);
      }

      if (tag === 'div' && name === 'style') {
        return /^text-align:(center|left|right|justify)$/.exec(value);
      }
    }
  });

  helper.registerOptions((opts) => {
    opts.features["fms-bbcode"] = true;
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
  replaceBBCode("rounded", contents => ['div', {'class': 'rounded'}].concat(contents));
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
  replaceBBCode("fmslife", contents => ['div', {'class': 'fmslife'}].concat(contents));
  replaceBBCode("fmslife_progress", contents => ['div', {'class': 'fmslife_progress'}].concat(contents));
  replaceBBCode("fmslife_striped", contents => ['div', {'class': 'fmslife_striped'}].concat(contents));
  replaceBBCode("fmslife_bar", contents => ['div', {'class': 'fmslife_bar'}].concat(contents));
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
  replaceBBCode("menu_orange", contents => ['div', {'class': 'menu_orange'}].concat(contents));
  replaceBBCode("menu_orange", contents => ['div', {'class': 'menu_orange'}].concat(contents));
  replaceBBCode("menu_bleu", contents => ['div', {'class': 'menu_bleu'}].concat(contents));
  replaceBBCode("menu_jaune", contents => ['div', {'class': 'menu_jaune'}].concat(contents));
  replaceBBCode("menu_violet", contents => ['div', {'class': 'menu_violet'}].concat(contents));
  replaceBBCode("menu_vert", contents => ['div', {'class': 'menu_vert'}].concat(contents));
  replaceBBCode("menu_rouge", contents => ['div', {'class': 'menu_rouge'}].concat(contents));
  replaceBBCode("menu_cyan", contents => ['div', {'class': 'menu_cyan'}].concat(contents));
  replaceBBCode("menu_rose", contents => ['div', {'class': 'menu_rose'}].concat(contents));
  replaceBBCode("menu_parme", contents => ['div', {'class': 'menu_parme'}].concat(contents));
  replaceBBCode("menu_gris", contents => ['div', {'class': 'menu_gris'}].concat(contents));
  replaceBBCode("menu_vertfluo", contents => ['div', {'class': 'menu_vertfluo'}].concat(contents));
  replaceBBCode("menu_rosepastel", contents => ['div', {'class': 'menu_rosepastel'}].concat(contents));
  replaceBBCode("menu_champions", contents => ['div', {'class': 'menu_champions'}].concat(contents));
  replaceBBCode("menu_conference", contents => ['div', {'class': 'menu_conference'}].concat(contents));
  replaceBBCode("menu_salmon", contents => ['div', {'class': 'menu_salmon'}].concat(contents));
  replaceBBCode("menu_sapin", contents => ['div', {'class': 'menu_sapin'}].concat(contents));
  replaceBBCode("menu_liberta", contents => ['div', {'class': 'menu_liberta'}].concat(contents));
  replaceBBCode("menu_orangepastel", contents => ['div', {'class': 'menu_orangepastel'}].concat(contents));
  replaceBBCode("menu_jaunepastel", contents => ['div', {'class': 'menu_jaunepastel'}].concat(contents));
  replaceBBCode("menu_jaunefluo", contents => ['div', {'class': 'menu_jaunefluo'}].concat(contents));
  replaceBBCode("menu_or", contents => ['div', {'class': 'menu_or'}].concat(contents));
  replaceBBCode("menu_orpastel", contents => ['div', {'class': 'menu_orpastel'}].concat(contents));
  replaceBBCode("menu_bordeaux", contents => ['div', {'class': 'menu_bordeaux'}].concat(contents));
  replaceBBCode("menu_burgundy", contents => ['div', {'class': 'menu_burgundy'}].concat(contents));
  replaceBBCode("menu_rosefluo", contents => ['div', {'class': 'menu_rosefluo'}].concat(contents));
  replaceBBCode("menu_marron", contents => ['div', {'class': 'menu_marron'}].concat(contents));
  replaceBBCode("menu_terracotta", contents => ['div', {'class': 'menu_terracotta'}].concat(contents));
  replaceBBCode("menu_noir", contents => ['div', {'class': 'menu_noir'}].concat(contents));
  replaceBBCode("menu_blanc", contents => ['div', {'class': 'menu_blanc'}].concat(contents));
  replaceBBCode("jelly_orange", contents => ['div', {'class': 'jelly_orange'}].concat(contents));
  replaceBBCode("jelly_orangepastel", contents => ['div', {'class': 'jelly_orangepastel'}].concat(contents));
  replaceBBCode("jelly_bleu", contents => ['div', {'class': 'jelly_bleu'}].concat(contents));
  replaceBBCode("jelly_cyan", contents => ['div', {'class': 'jelly_cyan'}].concat(contents));
  replaceBBCode("jelly_liberta", contents => ['div', {'class': 'jelly_liberta'}].concat(contents));
  replaceBBCode("jelly_jaune", contents => ['div', {'class': 'jelly_jaune'}].concat(contents));
  replaceBBCode("jelly_jaunepastel", contents => ['div', {'class': 'jelly_jaunepastel'}].concat(contents));
  replaceBBCode("jelly_jaunefluo", contents => ['div', {'class': 'jelly_jaunefluo'}].concat(contents));
  replaceBBCode("jelly_or", contents => ['div', {'class': 'jelly_or'}].concat(contents));
  replaceBBCode("jelly_orpastel", contents => ['div', {'class': 'jelly_orpastel'}].concat(contents));
  replaceBBCode("jelly_violet", contents => ['div', {'class': 'jelly_violet'}].concat(contents));
  replaceBBCode("jelly_parme", contents => ['div', {'class': 'jelly_parme'}].concat(contents));
  replaceBBCode("jelly_vert", contents => ['div', {'class': 'jelly_vert'}].concat(contents));
  replaceBBCode("jelly_vertfluo", contents => ['div', {'class': 'jelly_vertfluo'}].concat(contents));
  replaceBBCode("jelly_sapin", contents => ['div', {'class': 'jelly_sapin'}].concat(contents));
  replaceBBCode("jelly_rouge", contents => ['div', {'class': 'jelly_rouge'}].concat(contents));
  replaceBBCode("jelly_bordeaux", contents => ['div', {'class': 'jelly_bordeaux'}].concat(contents));
  replaceBBCode("jelly_burgundy", contents => ['div', {'class': 'jelly_burgundy'}].concat(contents));
  replaceBBCode("jelly_rose", contents => ['div', {'class': 'jelly_rose'}].concat(contents));
  replaceBBCode("jelly_rosepastel", contents => ['div', {'class': 'jelly_rosepastel'}].concat(contents));
  replaceBBCode("jelly_salmon", contents => ['div', {'class': 'jelly_salmon'}].concat(contents));
  replaceBBCode("jelly_rosefluo", contents => ['div', {'class': 'jelly_rosefluo'}].concat(contents));
  replaceBBCode("jelly_gris", contents => ['div', {'class': 'jelly_gris'}].concat(contents));
  replaceBBCode("jelly_marron", contents => ['div', {'class': 'jelly_marron'}].concat(contents));
  replaceBBCode("jelly_terracotta", contents => ['div', {'class': 'jelly_terracotta'}].concat(contents));
  replaceBBCode("jelly_noir", contents => ['div', {'class': 'jelly_noir'}].concat(contents));
  replaceBBCode("jelly_blanc", contents => ['div', {'class': 'jelly_blanc'}].concat(contents));
  replaceBBCode("jelly_champions", contents => ['div', {'class': 'jelly_champions'}].concat(contents));
  replaceBBCode("jelly_conference", contents => ['div', {'class': 'jelly_conference'}].concat(contents));
  replaceBBCode("jelly_europa", contents => ['div', {'class': 'jelly_europa'}].concat(contents));

  ["left", "center", "right", "justify"].forEach(direction => {
    replaceBBCode(direction, contents => ['div', {'style': "text-align:" + direction}].concat(contents));
  });

  helper.addPreProcessor(replaceFontColor);
  helper.addPreProcessor(replaceFontSize);
  helper.addPreProcessor(replaceFontFace);

}
