const languageSelect = document.getElementById('language-select')

const translations = {
  en: {
    language: 'Click here to change language →',
    //
    linkCenter: 'Link Center',
    scal: 'Welcome to the Central Authentication System of Elite Community Links.',
    //
    copyright: 'Copyright © 2023 Elite Community'
  },
  it: {
    language: 'Clicca qui per cambiare lingua →',
    //
    linkCenter: 'Link Center',
    scal: 'Benvenuto nel Sistema Centrale di Autenticazione dei Link di Elite Community.',
    //
    copyright: 'Copyright © 2023 Elite Community'
  }
}

function updateContent(language) {
  const translation = translations[language]

  document.getElementById('language').textContent = translation.language

  document.getElementById('linkCenter').textContent = translation.linkCenter
  document.getElementById('scal').textContent = translation.scal

  document.getElementById('copyright').textContent = translation.copyright
}

function handleLanguageChange() {
  const selectedLanguage = languageSelect.value
  updateContent(selectedLanguage)
}

languageSelect.addEventListener('change', handleLanguageChange)

updateContent('it')