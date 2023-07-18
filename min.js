const sidebar = document.getElementById('sidebar');
const open = document.getElementById('open');
const close = document.getElementById('close');
const settings = document.getElementById('settings');
const setting_icon = document.getElementById('setting-icon');
// navs array
const navs = [document.getElementById('navs1'), document.getElementById('navs2'), document.getElementById('navs3'), document.getElementById('navs4'), document.getElementById('navs5'), document.getElementById('navs6')];
// icons array
const icons = [document.getElementById('icons1'), document.getElementById('icons2'), document.getElementById('icons3'), document.getElementById('icons4'), document.getElementById('icons5'), document.getElementById('icons6')];
// sections array
const sections = [document.getElementById('section1'), document.getElementById('section2'), document.getElementById('section3')];

const checkbox = document.getElementById('toggle-btn');
const dark = document.getElementById('check-btn');

function Open() {
  sidebar.style.width = '180px';
  open.style.opacity = '0';
  close.style.opacity = '1';
  close.style.top = '20px';
  close.style.transition = '.5s all ease-in-out';
  checkbox.style.left = '40px';
  settings.style.opacity = '1';
  var nav
  navs.forEach(nav => {
    nav.style.left = '80px';
    nav.style.transition = '.5s all ease-in-out';
    nav.style.display = 'inline';
  });
}
function Close() {
  sidebar.style.width = '80px';
  close.style.opacity = '0';
  open.style.opacity = '1';
  open.style.transition = '.5s all ease-in-out';
  close.style.top = '0px';
  checkbox.style.left = '-40px';
  settings.style.opacity = '0';
  var nav
  navs.forEach(nav => {
    nav.style.left = '-180px';
    nav.style.transition = '.5s all ease-in-out';
    nav.style.display = 'none';
  });
}

function DarkMode() {
  if (dark.checked == true) {
    sidebar.style.background = '#101727';
    open.style.background = '#F0F4F3';
    close.style.color = '#F0F4F3';
    settings.style.color = '#F0F4F3';
    settings.style.background = 'transparent';
    setting_icon.style.color = '#F0F4F3';

    var nav;
    navs.forEach(nav => {
      nav.style.color = "#F0F4F3"
      nav.style.background = "transparent";


    });

    var icon;
    icons.forEach(icon => {
      icon.style.color = '#F0F4F3';
      icon.style.background = "transparent";
    });

    var section;
    sections.forEach(section => {
      section.style.color = '#F0F4F3';
    });

  }

  if (dark.checked == false) {
    sidebar.style.background = '#FFFFFF';
    open.style.color = '#53565B';
    close.style.color = '#53565B';
    settings.style.color = '#53565B';
    setting_icon.style.color = '#53565B';

    var nav
    navs.forEach(nav => {
      nav.style.color = "#53565B";
      nav.style.background = "";
    });

    var icon;
    icons.forEach(icon => {
      icon.style.color = '#53565B';
      icon.style.background = "";
    });

    var section;
    sections.forEach(section => {
      section.style.color = '#53565B';
    });

  }

}