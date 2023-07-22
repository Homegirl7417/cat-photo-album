class DarkModeToggle {
  isDarkMode = null;

  constructor({ $target }) {
    const $wrapper = document.createElement('section');
    const $DarkModeToggle = document.createElement('input');
    this.$DarkModeToggle = $DarkModeToggle;
    this.$DarkModeToggle.type = 'checkbox';

    $DarkModeToggle.className = 'SearchInput';
    $wrapper.appendChild($DarkModeToggle);
    $target.appendChild($wrapper);

    $DarkModeToggle.addEventListener('change', (e) => {
      this.setColorMode(e.target.checked);
    });
    this.initColocMode();
  }

  initColocMode() {
    // isDarkMode state, checkbox 상태를 초기화, html attribute 초기화
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.$DarkModeToggle.checked = this.isDarkMode;
    this.setColorMode(this.isDarkMode);
  }

  setColorMode(isDarkMode) {
    document.documentElement.setAttribute('color-mode', isDarkMode ? 'dark' : 'light');
  }
  render() {}
}
