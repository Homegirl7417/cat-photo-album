const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomSearch }) {
    const $wrapper = document.createElement('section');
    $target.appendChild($wrapper);

    const $searchInput = document.createElement('input');
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = '고양이를 검색해보세요.|';

    $searchInput.className = 'SearchInput';
    $wrapper.appendChild($searchInput);

    $searchInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    const $RandomButton = document.createElement('button');
    this.$RandomButton = $RandomButton;
    this.$RandomButton.className = 'RamdomButton';
    this.$RandomButton.textContent = '랜덤 고양이';

    $RandomButton.addEventListener('click', (e) => {
      onRandomSearch();
    });

    $wrapper.appendChild($RandomButton);
    console.log('SearchInput created.', this);
  }
  render() {}
}
