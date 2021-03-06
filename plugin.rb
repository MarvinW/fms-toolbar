# name: fms-toolbar
# about: Ajout de boutons sur l'éditeur
# version: 1.1
# authors: Steven - iunctis.fr x Groot - fmslife.fr
# url: https://github.com/MarvinW/fms-toolbar

enabled_site_setting :fmstlb_ui_enabled

register_asset 'stylesheets/fmstlb.scss'

register_svg_icon "fa-underline" if respond_to?(:register_svg_icon)
register_svg_icon "fa-indent" if respond_to?(:register_svg_icon)
register_svg_icon "fa-align-center" if respond_to?(:register_svg_icon)
register_svg_icon "fa-align-right" if respond_to?(:register_svg_icon)
register_svg_icon "fa-align-justify" if respond_to?(:register_svg_icon)
register_svg_icon "fa-font" if respond_to?(:register_svg_icon)
