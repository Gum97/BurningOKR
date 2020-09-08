// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var beschreibungtext= 'Die BROCKHAUS AG verwendet Cookies, um Ihnen ein möglichst optimales und auf Ihre Bedürfnisse zugeschnittenes Webseiten-​Erlebnis zu bieten. Dazu zählen Cookies, die für den reibungslosen Betrieb der Seite und deren Sicherheit notwendig sind sowie solche, die zu anonymen Statistikzwecken genutzt werden. Sie können selbst entscheiden, welche der Kategorien Sie erlauben möchten.';
if(window.innerWidth <= 625) {
    beschreibungtext = '';// 'Die BROCKHAUS AG verwendet Cookies, um Ihnen ein möglichst optimales Webseiten-​Erlebnis zu bieten.';
}

var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    privacyPolicy: '/demo/privacy-policy',
    default: false,
    mustConsent: true,
    acceptAll: true,
    lang: 'de',
    hideDeclineAll: false,
    translations: {
        de: {
            acceptAll: 'Einverstanden',
            consentModal: {
                description: beschreibungtext
            },
            authentication: {
                description: 'Authentifizierung für automatische Anmeldung'
            },
        }
    },

    apps: [
        {
            name: 'authentication',
            title: 'Authentifizierung',
            purposes: ['security'],
            default: true,
            required: true
        }
    ],
};
