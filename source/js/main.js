//----- Библиотеки js -----//
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

//----- Основной js -----//
import {swiper} from "./modules/swiper";
import {inputmask} from "./modules/mask-tel";
import {validation} from "./modules/validation";
import {vendors} from "./modules/vendors";
import {header} from "./modules/header";
import {slid} from "./modules/slid";



//swiper();
inputmask();
validation();
vendors();
header();
slid();

