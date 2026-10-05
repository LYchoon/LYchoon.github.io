const navigation = document.querySelector('.language-nav');
const currentLanguage = navigation.querySelector('[aria-current="page"]');
const otherLanguages = [...navigation.children].filter(link => link !== currentLanguage);

for (let i = otherLanguages.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [otherLanguages[i], otherLanguages[j]] = [otherLanguages[j], otherLanguages[i]];
}

navigation.replaceChildren(currentLanguage, ...otherLanguages);
