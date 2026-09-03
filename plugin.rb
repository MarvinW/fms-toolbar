# name: fms-toolbar
# about: Ajout de boutons sur l'éditeur
# version: 1.1
# authors: Steven - iunctis.fr x Groot - fmslife.fr
# url: https://github.com/MarvinW/fms-toolbar

enabled_site_setting :fmstlb_ui_enabled

register_asset 'stylesheets/fmstlb.scss'

register_svg_icon "underline" if respond_to?(:register_svg_icon)
register_svg_icon "indent" if respond_to?(:register_svg_icon)
register_svg_icon "align-center" if respond_to?(:register_svg_icon)
register_svg_icon "align-right" if respond_to?(:register_svg_icon)
register_svg_icon "align-justify" if respond_to?(:register_svg_icon)
register_svg_icon "font" if respond_to?(:register_svg_icon)
register_svg_icon "paintbrush" if respond_to?(:register_svg_icon)
register_svg_icon "arrow-turn-down" if respond_to?(:register_svg_icon)
register_svg_icon "far-newspaper" if respond_to?(:register_svg_icon)
