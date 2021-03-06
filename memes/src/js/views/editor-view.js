import 'jquery-ui/ui/widgets/draggable';
import ViewsHelper from '../helpers/views-helper';
import HelperCommon from '../helpers/helper-common';
import textConstants from '../helpers/text-constants';

class EditorView {
  constructor() {
    this.$mainBlock = $('#main');
    this.divTag = 'div';
    this.showingSideBars = {
      switch: true,
      showText: textConstants.ru.editPage.buttons.showSideBars || '',
      hideText: textConstants.ru.editPage.buttons.hideSideBars || '',
    };
    this.innerHtmlDarkMoustache = '<svg class="center-column_dark" id="center_dark_moustache" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"	width="80" height="80" viewBox="0 0 210 210" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,210v-210h210v210z" fill="none"></path><g><g id="surface1"><path d="M20.48731,155.08008c-4.30664,-12.09961 -1.16894,-19.85156 2.72754,-25.92187l5.35254,-8.36719l-8.79785,4.63476c-7.15723,3.77344 -12.98144,9.82324 -16.83691,14.62207c3.58887,-49.44433 37.59082,-79.67285 69.19336,-79.67285h3.19922c14.90918,0 27.04981,12.14063 27.04981,27.04981c0,1.0459 -0.12304,1.96875 -0.22559,2.8916c-0.10254,1.02539 -0.22558,2.05078 -0.24609,3.15821c-0.38964,1.62011 -0.7998,3.1582 -1.53808,4.63476c-10.97168,28.46484 -38.5752,35.19141 -55.06348,39.19043c-15.38086,4.06054 -21.98438,11.87402 -24.81445,17.78027z" fill="#333333"></path><path d="M75.32519,63c13.47364,0 24.42481,10.95117 24.42481,24.42481c0,0.84082 -0.08203,1.66113 -0.18457,2.60449c-0.10254,0.92285 -0.22559,1.94824 -0.2666,3.09668c-0.34864,1.41504 -0.69727,2.66602 -1.27149,3.81446l-0.12304,0.22559l-0.08203,0.24609c-10.37696,26.94726 -36.09375,33.20214 -53.13574,37.34473l-0.36914,0.08203c-11.85351,3.13769 -18.78516,8.51074 -22.8457,13.71973c-1.35352,-7.93652 1.06641,-13.47363 3.95801,-17.98535l10.72559,-16.73437l-17.59571,9.26953c-4.63476,2.44043 -8.73633,5.7832 -12.14062,9.14648c6.33692,-43.18945 37.03711,-69.25488 65.70703,-69.25488h3.19922M75.32519,57.75c-0.90234,0 -2.27636,0 -3.19922,0c-37.03711,0 -72.12598,37.11914 -72.12598,90.99316c0,0 8.40821,-14.35547 21,-21c-5.22949,8.18262 -8.38769,18.68262 0,35.00684c0,0 0.45117,-16.42676 24.65039,-22.82519c16.89844,-4.12207 45.65039,-10.95117 57.07324,-40.62598c0.90234,-1.8252 1.37402,-3.65039 1.8252,-5.47559c0,-2.29687 0.45117,-4.12207 0.45117,-6.39844c0,-16.42676 -13.24804,-29.67481 -29.67481,-29.67481z" fill="#000000"></path><path d="M44.31738,134.83887l0.36914,-0.08203c17.04199,-4.14258 42.75879,-10.39746 53.13574,-37.34473l0.08203,-0.24609l0.12304,-0.22559c0.57422,-1.14844 0.92285,-2.39941 1.27149,-3.81446c0.02051,-0.59473 0.08203,-1.06641 0.12304,-1.5791c-22.66113,28.91602 -71.20312,25.36816 -78.09375,55.78125c0.06152,0.41016 0.08203,0.79981 0.14356,1.23047c4.06054,-5.20898 10.99219,-10.58203 22.8457,-13.71973z" fill="#666666"></path><path d="M18.55957,123.1084l17.59571,-9.26953c0,0 3.21973,-6.91113 6.8291,-12.12012c-8.01856,0.49219 -34.125,15.27832 -36.54492,30.53613c3.38379,-3.36328 7.48535,-6.70605 12.12011,-9.14648z" fill="#666666"></path><path d="M189.51269,155.03906c-2.80957,-5.86523 -9.33105,-13.6582 -24.50683,-17.65723c-16.81641,-4.08106 -44.41992,-10.80762 -55.26856,-39.02637c-0.84082,-1.70215 -1.25098,-3.26074 -1.66113,-4.88086c-0.02051,-1.10742 -0.12305,-2.13281 -0.24609,-3.15821c-0.10254,-0.92285 -0.20508,-1.8457 -0.20508,-2.8916c0,-14.90918 12.14063,-27.04981 27.04981,-27.04981h3.17871c31.62304,0 65.60449,30.22852 69.19336,79.67285c-3.85547,-4.79883 -9.65918,-10.84863 -16.83691,-14.62207l-8.79785,-4.63476l5.37304,8.36719c3.87598,6.07031 7.03418,13.80176 2.72754,25.88086z" fill="#333333"></path><path d="M137.87402,63c28.66992,0 59.37012,26.06543 65.70703,69.25488c-3.4043,-3.36328 -7.50586,-6.70605 -12.14062,-9.14648l-17.59571,-9.26953l10.72559,16.73438c2.8916,4.51172 5.33203,10.04883 3.9375,17.98535c-4.06054,-5.20898 -11.01269,-10.60254 -22.92773,-13.74023l-0.26661,-0.08203c-17.04199,-4.12207 -42.77929,-10.39746 -53.13574,-37.34473l-0.08203,-0.22558l-0.12305,-0.22559c-0.57422,-1.16894 -0.92285,-2.39941 -1.27148,-3.83496c-0.04102,-1.12793 -0.16406,-2.15332 -0.26661,-3.07617c-0.10254,-0.94336 -0.18457,-1.76367 -0.18457,-2.60449c0,-13.47363 10.95117,-24.42481 24.42481,-24.42481h3.19922M137.87402,57.75c-0.92285,0 -2.29687,0 -3.19922,0c-16.42676,0 -29.67481,13.24805 -29.67481,29.67481c0,2.27637 0.45117,4.10156 0.45117,6.37793c0.47168,1.8457 0.92285,3.67089 1.82519,5.47558c11.42285,29.67481 40.17481,36.52442 57.07324,40.64649c24.19922,6.39844 24.65039,22.82519 24.65039,22.82519c8.38769,-16.32422 5.22949,-26.82422 0,-35.00684c12.5918,6.64453 21,21 21,21c0,-53.87402 -35.08887,-90.99316 -72.12598,-90.99316z" fill="#000000"></path><path d="M165.68262,134.83887l-0.36914,-0.08203c-17.04199,-4.14258 -42.75879,-10.39746 -53.13574,-37.34473l-0.08203,-0.24609l-0.12305,-0.22559c-0.57422,-1.14844 -0.92285,-2.39941 -1.27148,-3.81446c-0.02051,-0.59473 -0.08203,-1.06641 -0.12305,-1.5791c22.66113,28.91602 71.20313,25.36816 78.09375,55.78125c-0.06152,0.41016 -0.08203,0.79981 -0.14356,1.23047c-4.06054,-5.20898 -10.99219,-10.58203 -22.8457,-13.71973z" fill="#666666"></path><path d="M191.44043,123.1084l-17.59571,-9.26953c0,0 -3.21973,-6.91113 -6.8291,-12.12012c8.01856,0.49219 34.125,15.27832 36.54492,30.53613c-3.38379,-3.36328 -7.48536,-6.70605 -12.12012,-9.14648z" fill="#666666"></path></g></g></g></svg>';
    this.innerHtmlLightMoustache = '<svg class="center-column_light" id="center_light_moustache" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 210 210" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,210v-210h210v210z" fill="none"></path><g><g id="surface1"><path d="M20.48731,155.08008c-4.30664,-12.09961 -1.16894,-19.85156 2.72754,-25.92187l5.35254,-8.36719l-8.79785,4.63476c-7.15723,3.77344 -12.98144,9.82324 -16.83691,14.62207c3.58887,-49.44433 37.59082,-79.67285 69.19336,-79.67285h3.19922c14.90918,0 27.04981,12.14063 27.04981,27.04981c0,1.0459 -0.12304,1.96875 -0.22559,2.8916c-0.10254,1.02539 -0.22558,2.05078 -0.24609,3.15821c-0.38964,1.62011 -0.7998,3.1582 -1.53808,4.63476c-10.97168,28.46484 -38.5752,35.19141 -55.06348,39.19043c-15.38086,4.06054 -21.98438,11.87402 -24.81445,17.78027z" fill="#95a5a6"></path><path d="M75.32519,63c13.47364,0 24.42481,10.95117 24.42481,24.42481c0,0.84082 -0.08203,1.66113 -0.18457,2.60449c-0.10254,0.92285 -0.22559,1.94824 -0.2666,3.09668c-0.34864,1.41504 -0.69727,2.66602 -1.27149,3.81446l-0.12304,0.22559l-0.08203,0.24609c-10.37696,26.94726 -36.09375,33.20214 -53.13574,37.34473l-0.36914,0.08203c-11.85351,3.13769 -18.78516,8.51074 -22.8457,13.71973c-1.35352,-7.93652 1.06641,-13.47363 3.95801,-17.98535l10.72559,-16.73437l-17.59571,9.26953c-4.63476,2.44043 -8.73633,5.7832 -12.14062,9.14648c6.33692,-43.18945 37.03711,-69.25488 65.70703,-69.25488h3.19922M75.32519,57.75c-0.90234,0 -2.27636,0 -3.19922,0c-37.03711,0 -72.12598,37.11914 -72.12598,90.99316c0,0 8.40821,-14.35547 21,-21c-5.22949,8.18262 -8.38769,18.68262 0,35.00684c0,0 0.45117,-16.42676 24.65039,-22.82519c16.89844,-4.12207 45.65039,-10.95117 57.07324,-40.62598c0.90234,-1.8252 1.37402,-3.65039 1.8252,-5.47559c0,-2.29687 0.45117,-4.12207 0.45117,-6.39844c0,-16.42676 -13.24804,-29.67481 -29.67481,-29.67481z" fill="#cccccc"></path><path d="M44.31738,134.83887l0.36914,-0.08203c17.04199,-4.14258 42.75879,-10.39746 53.13574,-37.34473l0.08203,-0.24609l0.12304,-0.22559c0.57422,-1.14844 0.92285,-2.39941 1.27149,-3.81446c0.02051,-0.59473 0.08203,-1.06641 0.12304,-1.5791c-22.66113,28.91602 -71.20312,25.36816 -78.09375,55.78125c0.06152,0.41016 0.08203,0.79981 0.14356,1.23047c4.06054,-5.20898 10.99219,-10.58203 22.8457,-13.71973z" fill="#ecf0f1"></path><path d="M18.55957,123.1084l17.59571,-9.26953c0,0 3.21973,-6.91113 6.8291,-12.12012c-8.01856,0.49219 -34.125,15.27832 -36.54492,30.53613c3.38379,-3.36328 7.48535,-6.70605 12.12011,-9.14648z" fill="#ecf0f1"></path><path d="M189.51269,155.03906c-2.80957,-5.86523 -9.33105,-13.6582 -24.50683,-17.65723c-16.81641,-4.08106 -44.41992,-10.80762 -55.26856,-39.02637c-0.84082,-1.70215 -1.25098,-3.26074 -1.66113,-4.88086c-0.02051,-1.10742 -0.12305,-2.13281 -0.24609,-3.15821c-0.10254,-0.92285 -0.20508,-1.8457 -0.20508,-2.8916c0,-14.90918 12.14063,-27.04981 27.04981,-27.04981h3.17871c31.62304,0 65.60449,30.22852 69.19336,79.67285c-3.85547,-4.79883 -9.65918,-10.84863 -16.83691,-14.62207l-8.79785,-4.63476l5.37304,8.36719c3.87598,6.07031 7.03418,13.80176 2.72754,25.88086z" fill="#95a5a6"></path><path d="M137.87402,63c28.66992,0 59.37012,26.06543 65.70703,69.25488c-3.4043,-3.36328 -7.50586,-6.70605 -12.14062,-9.14648l-17.59571,-9.26953l10.72559,16.73438c2.8916,4.51172 5.33203,10.04883 3.9375,17.98535c-4.06054,-5.20898 -11.01269,-10.60254 -22.92773,-13.74023l-0.26661,-0.08203c-17.04199,-4.12207 -42.77929,-10.39746 -53.13574,-37.34473l-0.08203,-0.22558l-0.12305,-0.22559c-0.57422,-1.16894 -0.92285,-2.39941 -1.27148,-3.83496c-0.04102,-1.12793 -0.16406,-2.15332 -0.26661,-3.07617c-0.10254,-0.94336 -0.18457,-1.76367 -0.18457,-2.60449c0,-13.47363 10.95117,-24.42481 24.42481,-24.42481h3.19922M137.87402,57.75c-0.92285,0 -2.29687,0 -3.19922,0c-16.42676,0 -29.67481,13.24805 -29.67481,29.67481c0,2.27637 0.45117,4.10156 0.45117,6.37793c0.47168,1.8457 0.92285,3.67089 1.82519,5.47558c11.42285,29.67481 40.17481,36.52442 57.07324,40.64649c24.19922,6.39844 24.65039,22.82519 24.65039,22.82519c8.38769,-16.32422 5.22949,-26.82422 0,-35.00684c12.5918,6.64453 21,21 21,21c0,-53.87402 -35.08887,-90.99316 -72.12598,-90.99316z" fill="#cccccc"></path><path d="M165.68262,134.83887l-0.36914,-0.08203c-17.04199,-4.14258 -42.75879,-10.39746 -53.13574,-37.34473l-0.08203,-0.24609l-0.12305,-0.22559c-0.57422,-1.14844 -0.92285,-2.39941 -1.27148,-3.81446c-0.02051,-0.59473 -0.08203,-1.06641 -0.12305,-1.5791c22.66113,28.91602 71.20313,25.36816 78.09375,55.78125c-0.06152,0.41016 -0.08203,0.79981 -0.14356,1.23047c-4.06054,-5.20898 -10.99219,-10.58203 -22.8457,-13.71973z" fill="#ecf0f1"></path><path d="M191.44043,123.1084l-17.59571,-9.26953c0,0 -3.21973,-6.91113 -6.8291,-12.12012c8.01856,0.49219 34.125,15.27832 36.54492,30.53613c-3.38379,-3.36328 -7.48536,-6.70605 -12.12012,-9.14648z" fill="#ecf0f1"></path></g></g></g></svg>';
    this.innerHtmlDarkGlasses = '<svg class="center-column_dark" id="center_dark_glasses" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 192 192" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g id="Layer_1"><g><g fill="#ffffff"><g><g><circle cx="32" cy="94" transform="scale(1.5,1.5)" r="20"></circle></g></g></g><g fill="#ffffff"><g><g><circle cx="96" cy="94" transform="scale(1.5,1.5)" r="20"></circle></g></g></g><g fill="#adf9d2"><g><g><path d="M48,166.5c-2.55,0 -4.5,-1.95 -4.5,-4.5c0,-2.55 1.95,-4.5 4.5,-4.5c9.15,0 16.5,-7.35 16.5,-16.5c0,-2.55 1.95,-4.5 4.5,-4.5c2.55,0 4.5,1.95 4.5,4.5c0,14.1 -11.4,25.5 -25.5,25.5z"></path></g></g></g><g fill="#adf9d2"><g><g><path d="M144,166.5c-2.55,0 -4.5,-1.95 -4.5,-4.5c0,-2.55 1.95,-4.5 4.5,-4.5c9.15,0 16.5,-7.35 16.5,-16.5c0,-2.55 1.95,-4.5 4.5,-4.5c2.55,0 4.5,1.95 4.5,4.5c0,14.1 -11.4,25.5 -25.5,25.5z"></path></g></g></g><g fill="#333333"><g><g><path d="M27,100.5c-2.55,0 -4.5,-1.95 -4.5,-4.5v-30c0,-19.05 15.45,-34.5 34.5,-34.5c2.55,0 4.5,1.95 4.5,4.5c0,2.55 -1.95,4.5 -4.5,4.5c-14.1,0 -25.5,11.4 -25.5,25.5v30c0,2.55 -1.95,4.5 -4.5,4.5z"></path></g></g></g><g fill="#333333"><g><g><path d="M165,100.5c-2.55,0 -4.5,-1.95 -4.5,-4.5v-30c0,-14.1 -11.4,-25.5 -25.5,-25.5c-2.55,0 -4.5,-1.95 -4.5,-4.5c0,-2.55 1.95,-4.5 4.5,-4.5c19.05,0 34.5,15.45 34.5,34.5v30c0,2.55 -1.95,4.5 -4.5,4.5z"></path></g></g></g><path d="M144,106.5c-12.3,0 -23.1,6.45 -29.25,16.2c-4.05,-6.15 -10.95,-10.2 -18.75,-10.2c-7.8,0 -14.7,4.05 -18.75,10.2c-6.15,-9.75 -16.95,-16.2 -29.25,-16.2c-19.05,0 -34.5,15.45 -34.5,34.5c0,19.05 15.45,34.5 34.5,34.5c19.05,0 34.5,-15.45 34.5,-34.5v-6c0,-7.5 6,-13.5 13.5,-13.5c7.5,0 13.5,6 13.5,13.5v6c0,19.05 15.45,34.5 34.5,34.5c19.05,0 34.5,-15.45 34.5,-34.5c0,-19.05 -15.45,-34.5 -34.5,-34.5zM48,166.5c-14.1,0 -25.5,-11.4 -25.5,-25.5c0,-14.1 11.4,-25.5 25.5,-25.5c14.1,0 25.5,11.4 25.5,25.5c0,14.1 -11.4,25.5 -25.5,25.5zM144,166.5c-14.1,0 -25.5,-11.4 -25.5,-25.5c0,-14.1 11.4,-25.5 25.5,-25.5c14.1,0 25.5,11.4 25.5,25.5c0,14.1 -11.4,25.5 -25.5,25.5z" fill="#333333"></path></g></g></g></svg>';
    this.innerHtmlLightGlasses = '<svg class="center-column_light" id="center_light_glasses" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 192 192" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g id="Layer_1"><g><g fill="#666666"><g><g><circle cx="32" cy="94" transform="scale(1.5,1.5)" r="20"></circle></g></g></g><g fill="#666666"><g><g><circle cx="96" cy="94" transform="scale(1.5,1.5)" r="20"></circle></g></g></g><g fill="#2ecc71"><g><g><path d="M48,166.5c-2.55,0 -4.5,-1.95 -4.5,-4.5c0,-2.55 1.95,-4.5 4.5,-4.5c9.15,0 16.5,-7.35 16.5,-16.5c0,-2.55 1.95,-4.5 4.5,-4.5c2.55,0 4.5,1.95 4.5,4.5c0,14.1 -11.4,25.5 -25.5,25.5z"></path></g></g></g><g fill="#2ecc71"><g><g><path d="M144,166.5c-2.55,0 -4.5,-1.95 -4.5,-4.5c0,-2.55 1.95,-4.5 4.5,-4.5c9.15,0 16.5,-7.35 16.5,-16.5c0,-2.55 1.95,-4.5 4.5,-4.5c2.55,0 4.5,1.95 4.5,4.5c0,14.1 -11.4,25.5 -25.5,25.5z"></path></g></g></g><g fill="#cccccc"><g><g><path d="M27,100.5c-2.55,0 -4.5,-1.95 -4.5,-4.5v-30c0,-19.05 15.45,-34.5 34.5,-34.5c2.55,0 4.5,1.95 4.5,4.5c0,2.55 -1.95,4.5 -4.5,4.5c-14.1,0 -25.5,11.4 -25.5,25.5v30c0,2.55 -1.95,4.5 -4.5,4.5z"></path></g></g></g><g fill="#cccccc"><g><g><path d="M165,100.5c-2.55,0 -4.5,-1.95 -4.5,-4.5v-30c0,-14.1 -11.4,-25.5 -25.5,-25.5c-2.55,0 -4.5,-1.95 -4.5,-4.5c0,-2.55 1.95,-4.5 4.5,-4.5c19.05,0 34.5,15.45 34.5,34.5v30c0,2.55 -1.95,4.5 -4.5,4.5z"></path></g></g></g><path d="M144,106.5c-12.3,0 -23.1,6.45 -29.25,16.2c-4.05,-6.15 -10.95,-10.2 -18.75,-10.2c-7.8,0 -14.7,4.05 -18.75,10.2c-6.15,-9.75 -16.95,-16.2 -29.25,-16.2c-19.05,0 -34.5,15.45 -34.5,34.5c0,19.05 15.45,34.5 34.5,34.5c19.05,0 34.5,-15.45 34.5,-34.5v-6c0,-7.5 6,-13.5 13.5,-13.5c7.5,0 13.5,6 13.5,13.5v6c0,19.05 15.45,34.5 34.5,34.5c19.05,0 34.5,-15.45 34.5,-34.5c0,-19.05 -15.45,-34.5 -34.5,-34.5zM48,166.5c-14.1,0 -25.5,-11.4 -25.5,-25.5c0,-14.1 11.4,-25.5 25.5,-25.5c14.1,0 25.5,11.4 25.5,25.5c0,14.1 -11.4,25.5 -25.5,25.5zM144,166.5c-14.1,0 -25.5,-11.4 -25.5,-25.5c0,-14.1 11.4,-25.5 25.5,-25.5c14.1,0 25.5,11.4 25.5,25.5c0,14.1 -11.4,25.5 -25.5,25.5z" fill="#cccccc"></path></g></g></g></svg>';
    this.innerHtmlDarkHat = '<svg class="center-column_dark" id="center_dark_hat" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 192 192" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#000000"><path d="M90.14941,33c-1.95,0 -3.75059,1.34941 -4.35059,3.14941l-33.14941,106.35059h11.85059c2.55,0 4.5,1.95 4.5,4.5c0,2.55 -1.95,4.5 -4.5,4.5h-14.70117h-2.69824c-1.95,0 -3.75059,1.34941 -4.35059,3.14942l-7.95117,25.5c-0.15,0.45 -0.14941,0.90059 -0.14941,1.35058h-15.14941c-2.55,0 -4.5,1.95 -4.5,4.5c0,2.55 1.95,4.5 4.5,4.5h153c2.55,0 4.5,-1.95 4.5,-4.5c0,-2.55 -1.95,-4.5 -4.5,-4.5h-15.14942c0,-0.45 0.00059,-0.90059 -0.14942,-1.35058l-7.80176,-25.5c-0.6,-1.95 -2.25059,-3.14942 -4.35058,-3.14942h-2.54883h-13.5c-2.55,0 -4.5,-1.95 -4.5,-4.5c0,-2.55 1.95,-4.5 4.5,-4.5h10.79883l-32.39942,-106.35059c-0.6,-1.95 -2.25059,-3.14941 -4.35059,-3.14941zM121.0459,41.64258c-0.97031,-0.14062 -1.98399,0.73242 -1.64649,1.85742l9.75,32.39941c0.45,1.2 1.50059,2.10059 2.85059,2.10059h11.10059c3.9,0 5.99824,-4.5 3.44824,-7.5l-24.59766,-28.35059c-0.2625,-0.3 -0.58183,-0.45996 -0.90527,-0.50684zM81,133.5h30c2.55,0 4.5,1.95 4.5,4.5v39c0,2.55 -1.95,4.5 -4.5,4.5h-30c-2.55,0 -4.5,-1.95 -4.5,-4.5v-39c0,-2.55 1.95,-4.5 4.5,-4.5zM87,142.5c-0.9,0 -1.5,0.6 -1.5,1.5v27c0,0.9 0.6,1.5 1.5,1.5h18c0.9,0 1.5,-0.6 1.5,-1.5v-27c0,-0.9 -0.6,-1.5 -1.5,-1.5z"></path></g></g></svg>';
    this.innerHtmlLightHat = '<svg class="center-column_light" id="center_light_hat" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 192 192" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#cccccc"><path d="M90.14941,33c-1.95,0 -3.75059,1.34941 -4.35059,3.14941l-33.14941,106.35059h11.85059c2.55,0 4.5,1.95 4.5,4.5c0,2.55 -1.95,4.5 -4.5,4.5h-14.70117h-2.69824c-1.95,0 -3.75059,1.34941 -4.35059,3.14942l-7.95117,25.5c-0.15,0.45 -0.14941,0.90059 -0.14941,1.35058h-15.14941c-2.55,0 -4.5,1.95 -4.5,4.5c0,2.55 1.95,4.5 4.5,4.5h153c2.55,0 4.5,-1.95 4.5,-4.5c0,-2.55 -1.95,-4.5 -4.5,-4.5h-15.14942c0,-0.45 0.00059,-0.90059 -0.14942,-1.35058l-7.80176,-25.5c-0.6,-1.95 -2.25059,-3.14942 -4.35058,-3.14942h-2.54883h-13.5c-2.55,0 -4.5,-1.95 -4.5,-4.5c0,-2.55 1.95,-4.5 4.5,-4.5h10.79883l-32.39942,-106.35059c-0.6,-1.95 -2.25059,-3.14941 -4.35059,-3.14941zM121.0459,41.64258c-0.97031,-0.14062 -1.98399,0.73242 -1.64649,1.85742l9.75,32.39941c0.45,1.2 1.50059,2.10059 2.85059,2.10059h11.10059c3.9,0 5.99824,-4.5 3.44824,-7.5l-24.59766,-28.35059c-0.2625,-0.3 -0.58183,-0.45996 -0.90527,-0.50684zM81,133.5h30c2.55,0 4.5,1.95 4.5,4.5v39c0,2.55 -1.95,4.5 -4.5,4.5h-30c-2.55,0 -4.5,-1.95 -4.5,-4.5v-39c0,-2.55 1.95,-4.5 4.5,-4.5zM87,142.5c-0.9,0 -1.5,0.6 -1.5,1.5v27c0,0.9 0.6,1.5 1.5,1.5h18c0.9,0 1.5,-0.6 1.5,-1.5v-27c0,-0.9 -0.6,-1.5 -1.5,-1.5z"></path></g></g></svg>';
  }

  renderEditorPage() {
    const $main = this.$mainBlock;
    const $editorPage = ViewsHelper.createContainer('div', 'editor-block', 'edit_page').appendTo($main);

    this.addHeader();

    this.createEditorLeftColumn($editorPage);
    this.createEditorCenterColumn($editorPage);
    this.createEditorRightColumn($editorPage);
  }

  addHeader() {
    const $header = $('#header');
    const headerText = textConstants.ru.editPage.headers.page || '';
    const headerButtonToFriendsText = textConstants.ru.commonButtons.toFriendsList || '';
    const headerButtonSideBarsText = this.showingSideBars.hideText;
    ViewsHelper.appendTextElement('h1', null, 'header_title', headerText, $header);
    const $navigation = ViewsHelper.createContainer('nav', 'navigation').appendTo($header);


    ViewsHelper.appendButton('navigation_button', 'to_friend_list', headerButtonToFriendsText, $navigation);
    ViewsHelper.appendButton('navigation_button', 'hide_side_bars', headerButtonSideBarsText, $navigation);
  }

  createEditorLeftColumn(parent) {
    const headerLeftColumn = textConstants.ru.editPage.headers.leftColumn || '';
    const headerTopTextField = textConstants.ru.editPage.headers.topTextEditor || '';
    const headerLowerTextField = textConstants.ru.editPage.headers.lowerTextEditor || '';
    const { divTag } = this;
    const $leftColumn = ViewsHelper.createContainer(divTag, 'side-column', 'editor_left_column').appendTo(parent);

    ViewsHelper.appendTextElement('h2', 'side-column_title', null, headerLeftColumn, $leftColumn);
    this.createEditAreaText($leftColumn, headerTopTextField, 'user_text_top_field', 'side_text_top', 'top-text-color', 'center_text_top');
    this.createEditAreaText($leftColumn, headerLowerTextField, 'user_text_bottom_field', 'side_text_bottom', 'bottom-text-color', 'center_text_bottom');
  }

  createEditAreaText(parent, title, textatreaId, spanId, nameInput, centerElemId) {
    const { divTag } = this;
    const spanTag = 'span';
    const darkColorText = textConstants.ru.editPage.captions.darkColor || '';
    const lightColorText = textConstants.ru.editPage.captions.lightColor || '';
    const $editorText = ViewsHelper.createContainer(divTag, 'texting-field').appendTo(parent);

    ViewsHelper.appendTextElement('h3', 'texting-field_title', null, title, $editorText);

    $('<textarea>', {
      class: 'texting-field_value',
      id: textatreaId,
      maxlength: '30',
      name: 'top-string',
      cols: '30',
      rows: '4',
    }).appendTo($editorText);

    const $editorTextSize = ViewsHelper.createContainer(divTag, 'texting-field-size').appendTo($editorText);
    const $editorTextColor = ViewsHelper.createContainer(divTag, 'choice-color').appendTo($editorText);
    const $editorTextColorDark = ViewsHelper.createContainer('label', 'choice-color-option').appendTo($editorTextColor);
    const $editorTextColorLight = ViewsHelper.createContainer('label', 'choice-color-option').appendTo($editorTextColor);
    const $buttonChangesSizeSub = ViewsHelper.appendButton('main_button', null, ' < ', $editorTextSize);
    ViewsHelper.setDataAttributes($buttonChangesSizeSub, changeTextSize, spanId, centerElemId, -1);
    ViewsHelper.appendTextElement(spanTag, 'editor_text-size', spanId, '40', $editorTextSize);
    const $buttonChangesSizeAdd = ViewsHelper.appendButton('main_button', null, ' > ', $editorTextSize);
    ViewsHelper.setDataAttributes($buttonChangesSizeAdd, changeTextSize, spanId, centerElemId, 1);
    ViewsHelper.appendTextElement(spanTag, null, null, darkColorText, $editorTextColorDark);
    const $inputChangesColorToDark = ViewsHelper.appendInput(nameInput, 'radio', false, $editorTextColorDark);
    ViewsHelper.setDataAttributes($inputChangesColorToDark, changeTextColor, centerElemId, 1);
    ViewsHelper.appendTextElement(spanTag, null, null, lightColorText, $editorTextColorLight);
    const $inputChangesColorToLight = ViewsHelper.appendInput(nameInput, 'radio', true, $editorTextColorLight);
    ViewsHelper.setDataAttributes($inputChangesColorToLight, changeTextColor, centerElemId, 0);
  }

  createEditorCenterColumn(parent) {
    const { divTag } = this;
    const size = '80';
    const createButtonText = textConstants.ru.editPage.buttons.createMeme || '';
    const downloadButtonText = textConstants.ru.editPage.buttons.downloadMeme || '';
    const darkClassName = 'center-column_dark';
    const lightClassName = 'center-column_light';
    const $centerColumn = ViewsHelper.createContainer(divTag, 'center-column', 'editor_center_column').appendTo(parent);
    const $canvasImage = ViewsHelper.createContainer(divTag, 'center-column-container', 'canvas_image').appendTo($centerColumn);
    const $containerImages = ViewsHelper.createContainer(divTag, 'center-column-container-images').appendTo($canvasImage);

    const $moustacheBlock = ViewsHelper.createContainer(divTag, 'center-column-visual-effect', 'center_moustache').appendTo($containerImages);
    const $glassesBlock = ViewsHelper.createContainer(divTag, 'center-column-visual-effect', 'center_glasses').appendTo($containerImages);
    const $hatBlock = ViewsHelper.createContainer(divTag, 'center-column-visual-effect', 'center_hat').appendTo($containerImages);

    $moustacheBlock.draggable();
    $glassesBlock.draggable();
    $hatBlock.draggable();

    ViewsHelper.addSvgImage(this.innerHtmlDarkMoustache, this.innerHtmlLightMoustache, $moustacheBlock);
    ViewsHelper.addSvgImage(this.innerHtmlDarkGlasses, this.innerHtmlLightGlasses, $glassesBlock);
    ViewsHelper.addSvgImage(this.innerHtmlDarkHat, this.innerHtmlLightHat, $hatBlock);

    ViewsHelper.appendButton('main_button center-column_button', 'create_meme', createButtonText, $centerColumn);

    $('<a>', {
      class: 'main_button center-column_button',
      id: 'download_meme',
      href: '#',
      text: downloadButtonText,
    }).appendTo($centerColumn);

    ViewsHelper.appendTextElement('p', 'center-column_users-text-top', 'center_text_top', null, $canvasImage);

    $('<img>', {
      class: 'center-column-container_image',
      id: 'editing_photo',
      src: '',
      alt: 'Photo',
    }).appendTo($canvasImage);

    ViewsHelper.appendTextElement('p', 'center-column_users-text-bottom', 'center_text_bottom', null, $canvasImage);
  }

  createEditorRightColumn(parent) {
    const divTag = 'div';
    const size = '20';
    const headerRightColumnText = textConstants.ru.editPage.headers.rightColumn || '';
    const moustacheFieldText = textConstants.ru.editPage.headers.moustacheField || '';
    const glassesFieldText = textConstants.ru.editPage.headers.glassesField || '';
    const hatFieldText = textConstants.ru.editPage.headers.hatField || '';
    const className = 'image-field-example_view';
    const $rightColumn = ViewsHelper.createContainer(divTag, 'side-column', 'editor_right_column').appendTo(parent);

    ViewsHelper.appendTextElement('h2', 'side-column_title', null, headerRightColumnText, $rightColumn);

    this.createEditAreaImage(moustacheFieldText, this.innerHtmlDarkMoustache, 'center_moustache', 'switch_for_moustache', 'moustache-color', 'image_moustache_size', 'center_dark_moustache', 'center_light_moustache', $rightColumn);
    this.createEditAreaImage(glassesFieldText, this.innerHtmlDarkGlasses, 'center_glasses', 'switch_for_glasses', 'glasses-color', 'image_glasses_size', 'center_dark_glasses', 'center_light_glasses', $rightColumn);
    this.createEditAreaImage(hatFieldText, this.innerHtmlDarkHat, 'center_hat', 'switch_for_hat', 'hat-color', 'image_hat_size', 'center_dark_hat', 'center_light_hat', $rightColumn);
  }

  createEditAreaImage(title, example, centerId, switchId, radioNames, sizeTextId, centerDarkImageId, centerLightImageId, parent) {
    const labelTag = 'label';
    const divTag = 'div';
    const darkColorText = textConstants.ru.editPage.captions.darkColor || '';
    const lightColorText = textConstants.ru.editPage.captions.lightColor || '';
    const $imageEditor = ViewsHelper.createContainer(divTag, 'image-field').appendTo(parent);

    ViewsHelper.appendTextElement('h3', 'image-field_title', null, title, $imageEditor);

    const $imageExample = ViewsHelper.createContainer(labelTag, 'image-field-example').appendTo($imageEditor);
    const $editorImageColor = ViewsHelper.createContainer(divTag, 'choice-color').appendTo($imageEditor);
    const $editorImageColorDark = ViewsHelper.createContainer(labelTag, 'choice-color-option').appendTo($editorImageColor);
    const $editorImageColorLight = ViewsHelper.createContainer(labelTag, 'choice-color-option').appendTo($editorImageColor);
    const $editorImageSize = ViewsHelper.createContainer(divTag, 'image-field-size').appendTo($imageEditor);

    ViewsHelper.addSvgImage(example, '', $imageExample);
    const $inputShowImage = ViewsHelper.appendInput(null, 'checkbox', false, $imageExample, switchId);
    ViewsHelper.setDataAttributes($inputShowImage, showDivWithVisualEffect, centerId, switchId, 13);

    ViewsHelper.appendTextElement('span', null, null, darkColorText, $editorImageColorDark);
    const $inputSetDarkColor = ViewsHelper.appendInput(radioNames, 'radio', true, $editorImageColorDark);
    ViewsHelper.setDataAttributes($inputSetDarkColor, changeImageColor, centerDarkImageId, centerLightImageId, 1);

    ViewsHelper.appendTextElement('span', null, null, lightColorText, $editorImageColorLight);
    const $inputSetLightColor = ViewsHelper.appendInput(radioNames, 'radio', false, $editorImageColorLight);
    ViewsHelper.setDataAttributes($inputSetLightColor, changeImageColor, centerDarkImageId, centerLightImageId, 0);

    const $buttonChangeImageSizeSub = ViewsHelper.appendButton('main_button', null, '-10', $editorImageSize);
    ViewsHelper.setDataAttributes($buttonChangeImageSizeSub, changeImageSize, centerDarkImageId, centerLightImageId, sizeTextId, -1);

    ViewsHelper.appendTextElement('span', 'editor_text-size', sizeTextId, '80', $editorImageSize);
    const $buttonChangeImageSizeAdd = ViewsHelper.appendButton('main_button', null, '+10', $editorImageSize);
    ViewsHelper.setDataAttributes($buttonChangeImageSizeAdd, changeImageSize, centerDarkImageId, centerLightImageId, sizeTextId, 1);
  }

  addSrcToPhoto(url) {
    $('#editing_photo').attr('src', url);
  }

  insertText(text, $elem) {
    $elem.text(text);
  }

  ruleSideBars() {
    const $leftColumnId = $('#editor_left_column');
    const $centerColumnId = $('#editor_center_column');
    const $rightColumnId = $('#editor_right_column');
    const $buttonHideId = $('#hide_side_bars');
    const wideCenter = '100%';
    const narrowCenter = '40%';
    const obj = this.showingSideBars;
    let widthCenter = '';
    let showingText = '';
    obj.switch = !obj.switch;
    widthCenter = obj.switch ? narrowCenter : wideCenter;
    showingText = obj.switch ? obj.hideText : obj.showText;

    slideElems([$rightColumnId, $leftColumnId], obj.switch);
    $centerColumnId.css('width', widthCenter);
    $buttonHideId.text(showingText);
  }
}

function slideElems(elemArr, showSideBars) {
  const positionColumns = showSideBars ? '0' : false;
  const signTransformRight = '';
  const signTransformLeft = '-';
  elemArr.forEach((elem, index) => {
    const sign = index === 0 ? signTransformRight : signTransformLeft;
    const widthElem = positionColumns || elem.width();

    elem.css('transform', `translateX(${sign}${+widthElem}px)`);
  });
}

function changeTextSize(sideBarId, resultId, number) {
  const currentSizePixels = $(`#${resultId}`).css('font-size');
  const currentSizeNumber = parseInt(currentSizePixels, 10);
  const valueOfChange = 2 * number;
  let newSizeNumber = 20;

  newSizeNumber = currentSizeNumber + valueOfChange;

  if (!HelperCommon.isCorrectNumber(newSizeNumber, 100, 20)) {
    return;
  }
  $(`#${resultId}`).css('font-size', `${newSizeNumber}px`);
  $(`#${sideBarId}`).text(`${newSizeNumber}`);
}

function changeTextColor(resultId, isDarkTheme) {
  const darkColor = '#333';
  const lightColor = '#fff';

  const textColor = isDarkTheme ? darkColor : lightColor;

  $(`#${resultId}`).css('color', `${textColor}`);
}

function changeImageSize(darkImageId, lightImageId, imageSizeId, number) {
  const arrIdsImages = [darkImageId, lightImageId];
  const currentWidth = $(`#${darkImageId}`).width();
  const valueOfChange = 10 * number;
  const newWidth = currentWidth + valueOfChange || 10;


  if (!HelperCommon.isCorrectNumber(newWidth, 300, 0)) {
    return;
  }

  $(`#${imageSizeId}`).text(`${newWidth}`);

  arrIdsImages.forEach((id) => {
    $(`#${id}`).css('width', `${newWidth}px`);
    $(`#${id}`).css('height', `${newWidth}px`);
  });
}

function changeImageColor(darkImageId, lighImagetId, isDarkTheme) {
  const visibleDisplay = 'block';
  const invisibleDisplay = 'none';
  let darkValueDisplay = invisibleDisplay;
  let lightValueDisplay = visibleDisplay;

  if (isDarkTheme) {
    darkValueDisplay = visibleDisplay;
    lightValueDisplay = invisibleDisplay;
  }

  $(`#${darkImageId}`).css('display', `${darkValueDisplay}`);
  $(`#${lighImagetId}`).css('display', `${lightValueDisplay}`);
}

function showDivWithVisualEffect(elemId, switchId) {
  const displayText = 'block';
  const hideText = 'none';
  const textDisplayValue = $(`#${switchId}`).prop('checked') ? displayText : hideText;

  $(`#${elemId}`).css('display', textDisplayValue);
}

export default EditorView;
