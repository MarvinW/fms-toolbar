import { withPluginApi } from 'discourse/lib/plugin-api';
import { onToolbarCreate } from 'discourse/components/d-editor';

function initializePlugin(api)
{
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.fmstlb_ui_enabled) {
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "underline_ui_button",
          group: "fontStyles",
          icon: "underline",
          perform: e => e.applySurround('[u]', '[/u]', 'underline_ui_default_text')
        });
      });

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "addimg_ui_button",
          group: "extras",
          icon: "far-image",
          perform: e => e.applySurround('[img]', '[/img]', 'addimg_ui_default_text')
        });
      });

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "titlenews_ui_button",
          group: "extras",
          icon: "far-newspaper",
          perform: e => e.applySurround('[t]', '[/t]<hr>', 'titlenews_ui_default_text')
        });
      });

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "floatl_ui_button",
          group: "extras",
          icon: "indent",
          perform: e => e.applySurround('[floatl]', '[/floatl]', 'floatl_ui_default_text')
        });
      });

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "center_ui_button",
          group: "extras",
          icon: "align-center",
          perform: e => e.applySurround('[center]', '[/center]', 'center_ui_default_text')
        });
      });

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "right_ui_button",
          group: "extras",
          icon: "align-right",
          perform: e => e.applySurround('[right]', '[/right]', 'right_ui_default_text')
        });
      });

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "justify_ui_button",
          group: "extras",
          icon: "align-justify",
          perform: e => e.applySurround('[justify]', '[/justify]', 'justify_ui_default_text')
        });
      });
    
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "color_ui_button",
          group: "extras",
          icon: "paint-brush",
          perform: e => e.applySurround('[color=#]', '[/color]', 'color_ui_default_text')
        });
      });

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "police_ui_button",
          group: "extras",
          icon: "font",
          perform: e => e.applySurround('[font=]', '[/font]', 'police_ui_default_text')
        });
      });

    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "retourligne_ui_button",
          group: "extras",
          icon: "level-down-alt",
          perform: e => e.addText('<br>', 'retourligne_ui_default_text')
        });
      });
  }
}

export default
{
  name: 'fmstlb-ui',
  initialize(container)
  {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi(container) });
  }
};
