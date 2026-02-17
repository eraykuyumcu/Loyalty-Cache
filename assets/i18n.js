(function () {
  const SUPPORTED = [
    "en", "de", "es", "fr", "it", "nl", "tr", "ar",
    "ja", "af", "zh-Hans", "hi", "pt-BR", "ru", "id", "ko"
  ];

  const RTL = new Set(["ar"]);

  const NAMES = {
    "en": "English",
    "de": "Deutsch",
    "es": "Español",
    "fr": "Français",
    "it": "Italiano",
    "nl": "Nederlands",
    "tr": "Türkçe",
    "ar": "العربية",
    "ja": "日本語",
    "af": "Afrikaans",
    "zh-Hans": "简体中文",
    "hi": "हिन्दी",
    "pt-BR": "Português (Brasil)",
    "ru": "Русский",
    "id": "Bahasa Indonesia",
    "ko": "한국어"
  };

  const STRINGS = {
    "en": {
      "common.language": "Language",
      "nav.home": "Home",
      "nav.support": "Support",
      "nav.privacy": "Privacy Policy",
      "nav.terms": "Terms",
      "legal.noticeBody": "The original English documentation is the legally valid version. Translations are provided for convenience only. We do not accept responsibility for translation inaccuracies.",
      "legal.noticeLink": "Open the original English version",

      "index.metaTitle": "Loyalty Cache",
      "index.title": "Loyalty Cache",
      "index.tagline": "All your loyalty cards, one wallet.",
      "index.summary1": "Loyalty Cache lets you scan and store loyalty cards on your iPhone.",
      "index.summary2": "Cards stay on your device by default. Optional iCloud backup syncs across your Apple devices.",
      "index.links": "Links",
      "index.copyright": "© 2026 Loyalty Cache",

      "privacy.metaTitle": "Loyalty Cache Privacy Policy",
      "privacy.title": "Loyalty Cache Privacy Policy",
      "privacy.updated": "Last updated: February 9, 2026",
      "privacy.intro": "Loyalty Cache is designed to be privacy-first.",
      "privacy.storageH": "Data storage",
      "privacy.storage1": "Your card data is stored locally on your device by default.",
      "privacy.storage2": "If you enable iCloud Backup, data syncs to your private iCloud account so it is available across your Apple devices.",
      "privacy.collectH": "Data we collect",
      "privacy.collect1": "Loyalty Cache does not use third-party ads and does not sell your data.",
      "privacy.collect2": "Loyalty Cache does not require account creation inside the app.",
      "privacy.cameraH": "Camera access",
      "privacy.camera1": "The camera is used only to scan barcodes when you choose to scan a card.",
      "privacy.thirdH": "Third-party services",
      "privacy.third1": "When iCloud Backup is enabled, Apple iCloud services process your data according to Apple’s terms and policies.",
      "privacy.childrenH": "Children’s privacy",
      "privacy.children1": "Loyalty Cache is not directed to children under 13.",
      "privacy.changesH": "Changes to this policy",
      "privacy.changes1": "We may update this policy from time to time. The latest version is always posted on this page.",
      "privacy.contactH": "Contact",
      "privacy.contactPrefix": "For privacy questions, contact",

      "terms.metaTitle": "Loyalty Cache Terms of Use",
      "terms.title": "Loyalty Cache Terms of Use",
      "terms.updated": "Last updated: February 9, 2026",
      "terms.agreementH": "Agreement",
      "terms.agreement1": "By using Loyalty Cache, you agree to these Terms of Use.",
      "terms.licenseH": "License",
      "terms.license1": "We grant you a limited, non-exclusive, non-transferable license to use Loyalty Cache for personal use on Apple devices you own or control.",
      "terms.useH": "Use of the app",
      "terms.use1": "You are responsible for the card information you store in the app.",
      "terms.use2": "You agree not to misuse the app or attempt to interfere with its operation.",
      "terms.availabilityH": "Availability",
      "terms.availability1": "We may update, improve, or discontinue features at any time.",
      "terms.disclaimerH": "Disclaimers",
      "terms.disclaimer1": "The app is provided \"as is\" and \"as available\" without warranties to the extent permitted by law.",
      "terms.liabilityH": "Limitation of liability",
      "terms.liability1": "To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the app.",
      "terms.eulaH": "Apple Standard EULA",
      "terms.eula1": "These terms are in addition to Apple’s Standard Licensed Application End User License Agreement (EULA):",
      "terms.contactH": "Contact",
      "terms.contactPrefix": "For questions, contact",

      "support.metaTitle": "Loyalty Cache Support",
      "support.title": "Loyalty Cache Support",
      "support.updated": "Last updated: February 17, 2026",
      "support.help1": "Need help? Email us at",
      "support.help2": "Typical response time: 1–2 business days.",
      "support.commonH": "Common questions",
      "support.q1": "How do I add a card?",
      "support.a1": "Open the Scan tab, scan your barcode (or enter manually), add the store name, and save.",
      "support.q2": "Can I use the app without internet?",
      "support.a2": "Yes. Loyalty Cache works offline.",
      "support.q3": "Is there a limit to how many cards I can save?",
      "support.a3": "No. There are no card limits.",
      "support.q4": "Does the app show ads?",
      "support.a4": "No. Loyalty Cache has no ads.",
      "support.q5": "How do I enable or disable iCloud backup?",
      "support.a5": "Open Settings in the app and toggle iCloud Backup.",
      "support.q6": "Are scanned QR code URL links verified by Loyalty Cache?",
      "support.a6": "No. QR code URL links are third-party links. You are responsible for opening them, and Loyalty Cache accepts no responsibility for their content, safety, or availability.",
      "support.q7": "Where can I find my saved QR URL links?",
      "support.a7": "Open the Cards tab in the app, switch to URLs, and tap a saved link to open it in your browser.",
      "support.legalH": "Legal"
    },

    "de": {
      "common.language": "Sprache", "nav.home": "Start", "nav.support": "Support", "nav.privacy": "Datenschutz", "nav.terms": "Nutzungsbedingungen",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Alle deine Kundenkarten in einer Wallet.",
      "index.summary1": "Mit Loyalty Cache kannst du Kundenkarten auf dem iPhone scannen und speichern.",
      "index.summary2": "Karten bleiben standardmäßig auf deinem Gerät. Optionales iCloud-Backup synchronisiert über deine Apple-Geräte.",
      "index.links": "Links", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Loyalty Cache Datenschutzerklärung", "privacy.title": "Loyalty Cache Datenschutzerklärung", "privacy.updated": "Zuletzt aktualisiert: 9. Februar 2026",
      "privacy.intro": "Loyalty Cache ist auf Datenschutz ausgelegt.", "privacy.storageH": "Datenspeicherung",
      "privacy.storage1": "Deine Kartendaten werden standardmäßig lokal auf deinem Gerät gespeichert.",
      "privacy.storage2": "Wenn du iCloud-Backup aktivierst, werden Daten in deinem privaten iCloud-Account synchronisiert.",
      "privacy.collectH": "Welche Daten wir erfassen", "privacy.collect1": "Loyalty Cache nutzt keine Drittanbieter-Werbung und verkauft keine Daten.",
      "privacy.collect2": "Für Loyalty Cache ist keine Kontoerstellung in der App erforderlich.", "privacy.cameraH": "Kamerazugriff",
      "privacy.camera1": "Die Kamera wird nur zum Scannen von Barcodes verwendet, wenn du das Scannen startest.",
      "privacy.thirdH": "Dienste von Drittanbietern", "privacy.third1": "Bei aktiviertem iCloud-Backup verarbeitet Apple iCloud Daten gemäß Apples Bedingungen.",
      "privacy.childrenH": "Datenschutz für Kinder", "privacy.children1": "Loyalty Cache richtet sich nicht an Kinder unter 13 Jahren.",
      "privacy.changesH": "Änderungen dieser Richtlinie", "privacy.changes1": "Wir können diese Richtlinie gelegentlich aktualisieren. Die neueste Version steht immer auf dieser Seite.",
      "privacy.contactH": "Kontakt", "privacy.contactPrefix": "Bei Fragen zum Datenschutz kontaktiere",
      "terms.metaTitle": "Loyalty Cache Nutzungsbedingungen", "terms.title": "Loyalty Cache Nutzungsbedingungen", "terms.updated": "Zuletzt aktualisiert: 9. Februar 2026",
      "terms.agreementH": "Vereinbarung", "terms.agreement1": "Durch die Nutzung von Loyalty Cache stimmst du diesen Nutzungsbedingungen zu.",
      "terms.licenseH": "Lizenz", "terms.license1": "Wir gewähren dir eine beschränkte, nicht exklusive, nicht übertragbare Lizenz zur persönlichen Nutzung auf deinen Apple-Geräten.",
      "terms.useH": "Nutzung der App", "terms.use1": "Du bist für die in der App gespeicherten Karteninformationen verantwortlich.",
      "terms.use2": "Du darfst die App nicht missbräuchlich verwenden oder ihren Betrieb stören.", "terms.availabilityH": "Verfügbarkeit",
      "terms.availability1": "Wir können Funktionen jederzeit aktualisieren, verbessern oder einstellen.", "terms.disclaimerH": "Haftungsausschluss",
      "terms.disclaimer1": "Die App wird im gesetzlich zulässigen Umfang ohne Gewähr bereitgestellt.", "terms.liabilityH": "Haftungsbeschränkung",
      "terms.liability1": "Soweit gesetzlich zulässig, haften wir nicht für indirekte oder Folgeschäden aus der Nutzung der App.",
      "terms.eulaH": "Apple Standard EULA", "terms.eula1": "Diese Bedingungen gelten zusätzlich zur Apple Standard EULA:",
      "terms.contactH": "Kontakt", "terms.contactPrefix": "Bei Fragen kontaktiere",
      "support.metaTitle": "Loyalty Cache Support", "support.title": "Loyalty Cache Support", "support.updated": "Zuletzt aktualisiert: 17. Februar 2026",
      "support.help1": "Brauchst du Hilfe? Schreibe uns an", "support.help2": "Übliche Antwortzeit: 1–2 Werktage.", "support.commonH": "Häufige Fragen",
      "support.q1": "Wie füge ich eine Karte hinzu?", "support.a1": "Öffne den Scan-Tab, scanne den Barcode (oder gib ihn manuell ein), füge den Namen hinzu und speichere.",
      "support.q2": "Kann ich die App ohne Internet nutzen?", "support.a2": "Ja. Loyalty Cache funktioniert offline.",
      "support.q3": "Gibt es ein Limit für Karten?", "support.a3": "Nein. Es gibt kein Kartenlimit.",
      "support.q4": "Zeigt die App Werbung?", "support.a4": "Nein. Loyalty Cache enthält keine Werbung.",
      "support.q5": "Wie aktiviere/deaktiviere ich iCloud-Backup?", "support.a5": "Öffne Einstellungen in der App und schalte iCloud-Backup um.",
      "support.q6": "Werden gescannte QR-Code-URL-Links von Loyalty Cache geprüft?",
      "support.a6": "Nein. QR-Code-URL-Links sind Links von Drittanbietern. Du bist selbst dafür verantwortlich, sie zu öffnen, und Loyalty Cache übernimmt keine Verantwortung für deren Inhalte, Sicherheit oder Verfügbarkeit.",
      "support.q7": "Wo finde ich meine gespeicherten QR-URL-Links?",
      "support.a7": "Öffne in der App den Tab „Karten“, wechsle zu „URLs“ und tippe auf einen gespeicherten Link, um ihn im Browser zu öffnen.",
      "support.legalH": "Rechtliches"
    },

    "tr": {
      "common.language": "Dil", "nav.home": "Ana Sayfa", "nav.support": "Destek", "nav.privacy": "Gizlilik Politikası", "nav.terms": "Koşullar",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Tüm sadakat kartların tek cüzdanda.",
      "index.summary1": "Loyalty Cache ile iPhone'unda sadakat kartlarını tarayıp saklayabilirsin.",
      "index.summary2": "Kartlar varsayılan olarak cihazında kalır. İsteğe bağlı iCloud yedekleme Apple cihazların arasında senkronize eder.",
      "index.links": "Bağlantılar", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Loyalty Cache Gizlilik Politikası", "privacy.title": "Loyalty Cache Gizlilik Politikası", "privacy.updated": "Son güncelleme: 9 Şubat 2026",
      "privacy.intro": "Loyalty Cache gizlilik odaklı tasarlanmıştır.", "privacy.storageH": "Veri depolama",
      "privacy.storage1": "Kart verilerin varsayılan olarak cihazında yerel olarak saklanır.",
      "privacy.storage2": "iCloud Yedekleme'yi açarsan verilerin özel iCloud hesabına senkronize edilir.",
      "privacy.collectH": "Topladığımız veriler", "privacy.collect1": "Loyalty Cache üçüncü taraf reklam kullanmaz ve verilerini satmaz.",
      "privacy.collect2": "Uygulama içinde hesap oluşturma zorunluluğu yoktur.", "privacy.cameraH": "Kamera erişimi",
      "privacy.camera1": "Kamera yalnızca kart taramayı seçtiğinde barkod okumak için kullanılır.",
      "privacy.thirdH": "Üçüncü taraf hizmetler", "privacy.third1": "iCloud Yedekleme açıkken verilerin Apple iCloud koşullarına göre işlenir.",
      "privacy.childrenH": "Çocukların gizliliği", "privacy.children1": "Loyalty Cache 13 yaş altındaki çocuklara yönelik değildir.",
      "privacy.changesH": "Politika değişiklikleri", "privacy.changes1": "Bu politikayı zaman zaman güncelleyebiliriz. En güncel sürüm her zaman bu sayfadadır.",
      "privacy.contactH": "İletişim", "privacy.contactPrefix": "Gizlilik soruları için",
      "terms.metaTitle": "Loyalty Cache Kullanım Koşulları", "terms.title": "Loyalty Cache Kullanım Koşulları", "terms.updated": "Son güncelleme: 9 Şubat 2026",
      "terms.agreementH": "Kabul", "terms.agreement1": "Loyalty Cache'i kullanarak bu kullanım koşullarını kabul etmiş olursun.",
      "terms.licenseH": "Lisans", "terms.license1": "Sahip olduğun veya kontrol ettiğin Apple cihazlarında kişisel kullanım için sınırlı, devredilemez bir lisans veriyoruz.",
      "terms.useH": "Uygulamanın kullanımı", "terms.use1": "Uygulamada sakladığın kart bilgilerinden sen sorumlusun.",
      "terms.use2": "Uygulamayı kötüye kullanmamayı veya çalışmasını engellememeyi kabul edersin.", "terms.availabilityH": "Erişilebilirlik",
      "terms.availability1": "Özellikleri herhangi bir zamanda güncelleyebilir, geliştirebilir veya sonlandırabiliriz.", "terms.disclaimerH": "Feragatname",
      "terms.disclaimer1": "Uygulama, yasanın izin verdiği ölçüde \"olduğu gibi\" sunulur.", "terms.liabilityH": "Sorumluluk sınırlaması",
      "terms.liability1": "Yasanın izin verdiği en geniş kapsamda, uygulama kullanımından doğan dolaylı veya sonuçsal zararlardan sorumlu değiliz.",
      "terms.eulaH": "Apple Standard EULA", "terms.eula1": "Bu koşullar, Apple Standard EULA'ya ek olarak geçerlidir:",
      "terms.contactH": "İletişim", "terms.contactPrefix": "Sorular için",
      "support.metaTitle": "Loyalty Cache Destek", "support.title": "Loyalty Cache Destek", "support.updated": "Son güncelleme: 17 Şubat 2026",
      "support.help1": "Yardıma mı ihtiyacın var? Bize e-posta gönder", "support.help2": "Tipik dönüş süresi: 1–2 iş günü.", "support.commonH": "Sık sorulan sorular",
      "support.q1": "Kart nasıl eklenir?", "support.a1": "Tarama sekmesini aç, barkodu tara (veya elle gir), mağaza adını ekle ve kaydet.",
      "support.q2": "İnternetsiz kullanabilir miyim?", "support.a2": "Evet. Loyalty Cache çevrimdışı çalışır.",
      "support.q3": "Kart sayısı limiti var mı?", "support.a3": "Hayır. Kart limiti yok.",
      "support.q4": "Uygulamada reklam var mı?", "support.a4": "Hayır. Loyalty Cache reklam içermez.",
      "support.q5": "iCloud yedeklemeyi nasıl açar/kapatırım?", "support.a5": "Uygulamada Ayarlar'ı açıp iCloud Yedekleme anahtarını değiştir.",
      "support.q6": "Taranan QR kod URL bağlantıları Loyalty Cache tarafından doğrulanıyor mu?",
      "support.a6": "Hayır. QR kod URL bağlantıları üçüncü taraf bağlantılardır. Bunları açma sorumluluğu size aittir ve Loyalty Cache içerikleri, güvenliği veya erişilebilirliği için sorumluluk kabul etmez.",
      "support.q7": "Kaydettiğim QR URL bağlantılarını nerede bulabilirim?",
      "support.a7": "Uygulamada Kartlar sekmesini aç, URL'ler bölümüne geç ve tarayıcıda açmak için kayıtlı bir bağlantıya dokun.",
      "support.legalH": "Yasal"
    },

    "es": {
      "common.language": "Idioma", "nav.home": "Inicio", "nav.support": "Soporte", "nav.privacy": "Privacidad", "nav.terms": "Términos",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Todas tus tarjetas de fidelidad en una sola cartera.",
      "index.summary1": "Loyalty Cache te permite escanear y guardar tarjetas de fidelidad en tu iPhone.",
      "index.summary2": "Las tarjetas permanecen en tu dispositivo por defecto. La copia opcional en iCloud sincroniza en tus dispositivos Apple.",
      "index.links": "Enlaces", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Política de Privacidad de Loyalty Cache", "privacy.title": "Política de Privacidad de Loyalty Cache", "privacy.updated": "Última actualización: 9 de febrero de 2026",
      "privacy.intro": "Loyalty Cache está diseñada con enfoque en la privacidad.", "privacy.storageH": "Almacenamiento de datos",
      "privacy.storage1": "Los datos de tus tarjetas se guardan localmente en tu dispositivo por defecto.",
      "privacy.storage2": "Si activas la copia en iCloud, los datos se sincronizan con tu cuenta privada de iCloud.",
      "privacy.collectH": "Datos que recopilamos", "privacy.collect1": "Loyalty Cache no usa anuncios de terceros ni vende tus datos.",
      "privacy.collect2": "Loyalty Cache no requiere crear una cuenta dentro de la app.", "privacy.cameraH": "Acceso a la cámara",
      "privacy.camera1": "La cámara se usa solo para escanear códigos cuando eliges escanear una tarjeta.",
      "privacy.thirdH": "Servicios de terceros", "privacy.third1": "Con la copia en iCloud activada, Apple procesa datos según sus políticas.",
      "privacy.childrenH": "Privacidad de menores", "privacy.children1": "Loyalty Cache no está dirigida a menores de 13 años.",
      "privacy.changesH": "Cambios en esta política", "privacy.changes1": "Podemos actualizar esta política ocasionalmente. La última versión estará siempre en esta página.",
      "privacy.contactH": "Contacto", "privacy.contactPrefix": "Para consultas de privacidad, contacta a",
      "terms.metaTitle": "Términos de Uso de Loyalty Cache", "terms.title": "Términos de Uso de Loyalty Cache", "terms.updated": "Última actualización: 9 de febrero de 2026",
      "terms.agreementH": "Acuerdo", "terms.agreement1": "Al usar Loyalty Cache, aceptas estos Términos de Uso.",
      "terms.licenseH": "Licencia", "terms.license1": "Te otorgamos una licencia limitada, no exclusiva e intransferible para uso personal en tus dispositivos Apple.",
      "terms.useH": "Uso de la app", "terms.use1": "Eres responsable de la información de tarjetas que guardas en la app.",
      "terms.use2": "Aceptas no hacer un uso indebido ni interferir con el funcionamiento de la app.", "terms.availabilityH": "Disponibilidad",
      "terms.availability1": "Podemos actualizar, mejorar o discontinuar funciones en cualquier momento.", "terms.disclaimerH": "Descargos",
      "terms.disclaimer1": "La app se ofrece \"tal cual\" según lo permitido por la ley.", "terms.liabilityH": "Limitación de responsabilidad",
      "terms.liability1": "En la máxima medida legal, no somos responsables por daños indirectos o consecuentes derivados del uso de la app.",
      "terms.eulaH": "EULA estándar de Apple", "terms.eula1": "Estos términos se suman al EULA estándar de Apple:",
      "terms.contactH": "Contacto", "terms.contactPrefix": "Para consultas, contacta a",
      "support.metaTitle": "Soporte de Loyalty Cache", "support.title": "Soporte de Loyalty Cache", "support.updated": "Última actualización: 17 de febrero de 2026",
      "support.help1": "¿Necesitas ayuda? Escríbenos a", "support.help2": "Tiempo de respuesta habitual: 1–2 días hábiles.", "support.commonH": "Preguntas frecuentes",
      "support.q1": "¿Cómo agrego una tarjeta?", "support.a1": "Abre la pestaña Escanear, escanea el código (o ingrésalo manualmente), agrega el nombre de tienda y guarda.",
      "support.q2": "¿Puedo usar la app sin internet?", "support.a2": "Sí. Loyalty Cache funciona sin conexión.",
      "support.q3": "¿Hay límite de tarjetas?", "support.a3": "No. No hay límite de tarjetas.",
      "support.q4": "¿La app muestra anuncios?", "support.a4": "No. Loyalty Cache no tiene anuncios.",
      "support.q5": "¿Cómo activo o desactivo la copia en iCloud?", "support.a5": "Abre Ajustes en la app y cambia el interruptor de copia en iCloud.",
      "support.q6": "¿Loyalty Cache verifica los enlaces URL de códigos QR escaneados?",
      "support.a6": "No. Los enlaces URL de códigos QR son enlaces de terceros. Usted es responsable de abrirlos y Loyalty Cache no asume ninguna responsabilidad por su contenido, seguridad o disponibilidad.",
      "support.q7": "¿Dónde puedo encontrar mis enlaces URL guardados de QR?",
      "support.a7": "Abre la pestaña Tarjetas en la app, cambia a URLs y toca un enlace guardado para abrirlo en el navegador.",
      "support.legalH": "Legal"
    },

    "fr": {
      "common.language": "Langue", "nav.home": "Accueil", "nav.support": "Support", "nav.privacy": "Confidentialité", "nav.terms": "Conditions",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Toutes vos cartes de fidélité dans un seul wallet.",
      "index.summary1": "Loyalty Cache vous permet de scanner et stocker vos cartes de fidélité sur iPhone.",
      "index.summary2": "Les cartes restent sur votre appareil par défaut. La sauvegarde iCloud optionnelle synchronise vos appareils Apple.",
      "index.links": "Liens", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Politique de Confidentialité Loyalty Cache", "privacy.title": "Politique de Confidentialité Loyalty Cache", "privacy.updated": "Dernière mise à jour : 9 février 2026",
      "privacy.intro": "Loyalty Cache est conçu avec la confidentialité en priorité.", "privacy.storageH": "Stockage des données",
      "privacy.storage1": "Les données de vos cartes sont stockées localement sur votre appareil par défaut.",
      "privacy.storage2": "Si vous activez la sauvegarde iCloud, les données se synchronisent sur votre compte iCloud privé.",
      "privacy.collectH": "Données collectées", "privacy.collect1": "Loyalty Cache n'utilise pas de publicité tierce et ne vend pas vos données.",
      "privacy.collect2": "Loyalty Cache ne nécessite pas de création de compte dans l'app.", "privacy.cameraH": "Accès caméra",
      "privacy.camera1": "La caméra est utilisée uniquement pour scanner les codes-barres lorsque vous choisissez de scanner une carte.",
      "privacy.thirdH": "Services tiers", "privacy.third1": "Lorsque la sauvegarde iCloud est activée, Apple traite vos données selon ses politiques.",
      "privacy.childrenH": "Confidentialité des enfants", "privacy.children1": "Loyalty Cache n'est pas destiné aux enfants de moins de 13 ans.",
      "privacy.changesH": "Modifications de cette politique", "privacy.changes1": "Nous pouvons mettre à jour cette politique. La version la plus récente est toujours publiée ici.",
      "privacy.contactH": "Contact", "privacy.contactPrefix": "Pour toute question de confidentialité, contactez",
      "terms.metaTitle": "Conditions d'utilisation Loyalty Cache", "terms.title": "Conditions d'utilisation Loyalty Cache", "terms.updated": "Dernière mise à jour : 9 février 2026",
      "terms.agreementH": "Accord", "terms.agreement1": "En utilisant Loyalty Cache, vous acceptez ces Conditions d'utilisation.",
      "terms.licenseH": "Licence", "terms.license1": "Nous vous accordons une licence limitée, non exclusive et non transférable pour un usage personnel sur vos appareils Apple.",
      "terms.useH": "Utilisation de l'app", "terms.use1": "Vous êtes responsable des informations de carte que vous stockez dans l'app.",
      "terms.use2": "Vous acceptez de ne pas détourner l'app ni perturber son fonctionnement.", "terms.availabilityH": "Disponibilité",
      "terms.availability1": "Nous pouvons mettre à jour, améliorer ou interrompre des fonctionnalités à tout moment.", "terms.disclaimerH": "Avertissements",
      "terms.disclaimer1": "L'app est fournie \"en l'état\" dans les limites prévues par la loi.", "terms.liabilityH": "Limitation de responsabilité",
      "terms.liability1": "Dans la limite autorisée par la loi, nous ne sommes pas responsables des dommages indirects ou consécutifs liés à l'utilisation de l'app.",
      "terms.eulaH": "EULA standard Apple", "terms.eula1": "Ces conditions s'ajoutent au contrat EULA standard d'Apple :",
      "terms.contactH": "Contact", "terms.contactPrefix": "Pour toute question, contactez",
      "support.metaTitle": "Support Loyalty Cache", "support.title": "Support Loyalty Cache", "support.updated": "Dernière mise à jour : 17 février 2026",
      "support.help1": "Besoin d'aide ? Écrivez-nous à", "support.help2": "Délai de réponse habituel : 1 à 2 jours ouvrés.", "support.commonH": "Questions fréquentes",
      "support.q1": "Comment ajouter une carte ?", "support.a1": "Ouvrez l'onglet Scan, scannez le code (ou saisissez-le), ajoutez le nom du magasin, puis enregistrez.",
      "support.q2": "Puis-je utiliser l'app sans internet ?", "support.a2": "Oui. Loyalty Cache fonctionne hors ligne.",
      "support.q3": "Y a-t-il une limite de cartes ?", "support.a3": "Non. Il n'y a pas de limite.",
      "support.q4": "L'app affiche-t-elle des publicités ?", "support.a4": "Non. Loyalty Cache n'a pas de publicité.",
      "support.q5": "Comment activer ou désactiver la sauvegarde iCloud ?", "support.a5": "Ouvrez les Réglages de l'app et activez/désactivez la sauvegarde iCloud.",
      "support.q6": "Les liens URL des QR scannés sont-ils vérifiés par Loyalty Cache ?",
      "support.a6": "Non. Les liens URL des QR sont des liens tiers. Vous êtes responsable de leur ouverture, et Loyalty Cache décline toute responsabilité concernant leur contenu, leur sécurité ou leur disponibilité.",
      "support.q7": "Où puis-je trouver mes liens URL QR enregistrés ?",
      "support.a7": "Ouvrez l’onglet Cartes dans l’app, passez à URLs, puis touchez un lien enregistré pour l’ouvrir dans votre navigateur.",
      "support.legalH": "Légal"
    },

    "it": {
      "common.language": "Lingua", "nav.home": "Home", "nav.support": "Supporto", "nav.privacy": "Privacy", "nav.terms": "Termini",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Tutte le tue carte fedeltà in un unico wallet.",
      "index.summary1": "Loyalty Cache ti permette di scansionare e salvare carte fedeltà su iPhone.",
      "index.summary2": "Le carte restano sul dispositivo per impostazione predefinita. Il backup iCloud opzionale sincronizza tra dispositivi Apple.",
      "index.links": "Link", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Informativa Privacy Loyalty Cache", "privacy.title": "Informativa Privacy Loyalty Cache", "privacy.updated": "Ultimo aggiornamento: 9 febbraio 2026",
      "privacy.intro": "Loyalty Cache è progettata con priorità alla privacy.", "privacy.storageH": "Archiviazione dati",
      "privacy.storage1": "I dati delle carte sono salvati localmente sul tuo dispositivo per impostazione predefinita.",
      "privacy.storage2": "Se attivi il backup iCloud, i dati vengono sincronizzati sul tuo account iCloud privato.",
      "privacy.collectH": "Dati che raccogliamo", "privacy.collect1": "Loyalty Cache non usa pubblicità di terze parti e non vende i tuoi dati.",
      "privacy.collect2": "Loyalty Cache non richiede la creazione di un account nell'app.", "privacy.cameraH": "Accesso fotocamera",
      "privacy.camera1": "La fotocamera viene usata solo per scansionare codici quando scegli di scansionare una carta.",
      "privacy.thirdH": "Servizi di terze parti", "privacy.third1": "Con backup iCloud attivo, Apple elabora i dati secondo i propri termini.",
      "privacy.childrenH": "Privacy dei minori", "privacy.children1": "Loyalty Cache non è destinata a minori di 13 anni.",
      "privacy.changesH": "Modifiche alla policy", "privacy.changes1": "Possiamo aggiornare questa policy nel tempo. L'ultima versione è sempre pubblicata qui.",
      "privacy.contactH": "Contatti", "privacy.contactPrefix": "Per domande sulla privacy, contatta",
      "terms.metaTitle": "Termini di utilizzo Loyalty Cache", "terms.title": "Termini di utilizzo Loyalty Cache", "terms.updated": "Ultimo aggiornamento: 9 febbraio 2026",
      "terms.agreementH": "Accordo", "terms.agreement1": "Usando Loyalty Cache accetti questi Termini di utilizzo.",
      "terms.licenseH": "Licenza", "terms.license1": "Concediamo una licenza limitata, non esclusiva e non trasferibile per uso personale sui tuoi dispositivi Apple.",
      "terms.useH": "Uso dell'app", "terms.use1": "Sei responsabile delle informazioni delle carte che memorizzi nell'app.",
      "terms.use2": "Accetti di non abusare dell'app o interferire con il suo funzionamento.", "terms.availabilityH": "Disponibilità",
      "terms.availability1": "Possiamo aggiornare, migliorare o interrompere funzioni in qualsiasi momento.", "terms.disclaimerH": "Esclusioni",
      "terms.disclaimer1": "L'app è fornita \"così com'è\" nei limiti consentiti dalla legge.", "terms.liabilityH": "Limitazione di responsabilità",
      "terms.liability1": "Nei limiti massimi consentiti, non siamo responsabili per danni indiretti o consequenziali derivanti dall'uso dell'app.",
      "terms.eulaH": "EULA standard Apple", "terms.eula1": "Questi termini si aggiungono all'EULA standard di Apple:",
      "terms.contactH": "Contatti", "terms.contactPrefix": "Per domande, contatta",
      "support.metaTitle": "Supporto Loyalty Cache", "support.title": "Supporto Loyalty Cache", "support.updated": "Ultimo aggiornamento: 17 febbraio 2026",
      "support.help1": "Hai bisogno di aiuto? Scrivici a", "support.help2": "Tempo di risposta tipico: 1–2 giorni lavorativi.", "support.commonH": "Domande frequenti",
      "support.q1": "Come aggiungo una carta?", "support.a1": "Apri la scheda Scansione, scansiona il codice (o inseriscilo manualmente), aggiungi il nome del negozio e salva.",
      "support.q2": "Posso usare l'app senza internet?", "support.a2": "Sì. Loyalty Cache funziona offline.",
      "support.q3": "C'è un limite di carte?", "support.a3": "No. Non ci sono limiti.",
      "support.q4": "L'app mostra pubblicità?", "support.a4": "No. Loyalty Cache non mostra pubblicità.",
      "support.q5": "Come abilito/disabilito il backup iCloud?", "support.a5": "Apri Impostazioni nell'app e attiva/disattiva Backup iCloud.",
      "support.q6": "I link URL dei codici QR scansionati sono verificati da Loyalty Cache?",
      "support.a6": "No. I link URL dei codici QR sono link di terze parti. Sei responsabile dell'apertura di tali link e Loyalty Cache non si assume alcuna responsabilità per contenuti, sicurezza o disponibilità.",
      "support.q7": "Dove trovo i link URL QR salvati?",
      "support.a7": "Apri la scheda Carte nell’app, passa a URL e tocca un link salvato per aprirlo nel browser.",
      "support.legalH": "Legale"
    },

    "nl": {
      "common.language": "Taal", "nav.home": "Home", "nav.support": "Ondersteuning", "nav.privacy": "Privacybeleid", "nav.terms": "Voorwaarden",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Al je klantenkaarten in één wallet.",
      "index.summary1": "Met Loyalty Cache scan en bewaar je klantenkaarten op je iPhone.",
      "index.summary2": "Kaarten blijven standaard op je apparaat. Optionele iCloud-back-up synchroniseert tussen je Apple-apparaten.",
      "index.links": "Links", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Loyalty Cache Privacybeleid", "privacy.title": "Loyalty Cache Privacybeleid", "privacy.updated": "Laatst bijgewerkt: 9 februari 2026",
      "privacy.intro": "Loyalty Cache is ontworpen met privacy als uitgangspunt.", "privacy.storageH": "Gegevensopslag",
      "privacy.storage1": "Je kaartgegevens worden standaard lokaal op je apparaat opgeslagen.",
      "privacy.storage2": "Als je iCloud-back-up inschakelt, worden gegevens gesynchroniseerd met je privé iCloud-account.",
      "privacy.collectH": "Gegevens die we verzamelen", "privacy.collect1": "Loyalty Cache gebruikt geen advertenties van derden en verkoopt je gegevens niet.",
      "privacy.collect2": "Loyalty Cache vereist geen accountregistratie in de app.", "privacy.cameraH": "Cameratoegang",
      "privacy.camera1": "De camera wordt alleen gebruikt om barcodes te scannen wanneer je daarvoor kiest.",
      "privacy.thirdH": "Diensten van derden", "privacy.third1": "Bij ingeschakelde iCloud-back-up verwerkt Apple gegevens volgens Apple's beleid.",
      "privacy.childrenH": "Privacy van kinderen", "privacy.children1": "Loyalty Cache is niet gericht op kinderen jonger dan 13 jaar.",
      "privacy.changesH": "Wijzigingen in dit beleid", "privacy.changes1": "We kunnen dit beleid af en toe wijzigen. De nieuwste versie staat altijd op deze pagina.",
      "privacy.contactH": "Contact", "privacy.contactPrefix": "Voor privacyvragen, neem contact op met",
      "terms.metaTitle": "Loyalty Cache Gebruiksvoorwaarden", "terms.title": "Loyalty Cache Gebruiksvoorwaarden", "terms.updated": "Laatst bijgewerkt: 9 februari 2026",
      "terms.agreementH": "Overeenkomst", "terms.agreement1": "Door Loyalty Cache te gebruiken ga je akkoord met deze Gebruiksvoorwaarden.",
      "terms.licenseH": "Licentie", "terms.license1": "We verlenen een beperkte, niet-exclusieve en niet-overdraagbare licentie voor persoonlijk gebruik op je Apple-apparaten.",
      "terms.useH": "Gebruik van de app", "terms.use1": "Je bent verantwoordelijk voor de kaartinformatie die je in de app opslaat.",
      "terms.use2": "Je gaat ermee akkoord de app niet te misbruiken of de werking ervan te verstoren.", "terms.availabilityH": "Beschikbaarheid",
      "terms.availability1": "We kunnen functies op elk moment bijwerken, verbeteren of stopzetten.", "terms.disclaimerH": "Disclaimer",
      "terms.disclaimer1": "De app wordt geleverd \"zoals deze is\" voor zover wettelijk toegestaan.", "terms.liabilityH": "Beperking van aansprakelijkheid",
      "terms.liability1": "Voor zover wettelijk toegestaan zijn wij niet aansprakelijk voor indirecte of gevolgschade door gebruik van de app.",
      "terms.eulaH": "Apple standaard EULA", "terms.eula1": "Deze voorwaarden gelden naast Apple's standaard EULA:",
      "terms.contactH": "Contact", "terms.contactPrefix": "Voor vragen, neem contact op met",
      "support.metaTitle": "Loyalty Cache Ondersteuning", "support.title": "Loyalty Cache Ondersteuning", "support.updated": "Laatst bijgewerkt: 17 februari 2026",
      "support.help1": "Hulp nodig? Mail ons via", "support.help2": "Gebruikelijke reactietijd: 1–2 werkdagen.", "support.commonH": "Veelgestelde vragen",
      "support.q1": "Hoe voeg ik een kaart toe?", "support.a1": "Open het tabblad Scannen, scan je barcode (of voer handmatig in), voeg de winkelnaam toe en sla op.",
      "support.q2": "Kan ik de app zonder internet gebruiken?", "support.a2": "Ja. Loyalty Cache werkt offline.",
      "support.q3": "Is er een limiet op het aantal kaarten?", "support.a3": "Nee. Er is geen limiet.",
      "support.q4": "Toont de app advertenties?", "support.a4": "Nee. Loyalty Cache heeft geen advertenties.",
      "support.q5": "Hoe zet ik iCloud-back-up aan of uit?", "support.a5": "Open Instellingen in de app en wijzig iCloud-back-up.",
      "support.q6": "Worden gescande QR-code-URL-links door Loyalty Cache gecontroleerd?",
      "support.a6": "Nee. QR-code-URL-links zijn links van derden. Je bent zelf verantwoordelijk voor het openen ervan en Loyalty Cache aanvaardt geen verantwoordelijkheid voor inhoud, veiligheid of beschikbaarheid.",
      "support.q7": "Waar vind ik mijn opgeslagen QR-URL-links?",
      "support.a7": "Open in de app het tabblad Kaarten, ga naar URL's en tik op een opgeslagen link om die in je browser te openen.",
      "support.legalH": "Juridisch"
    },

    "ar": {
      "common.language": "اللغة", "nav.home": "الرئيسية", "nav.support": "الدعم", "nav.privacy": "الخصوصية", "nav.terms": "الشروط",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "كل بطاقات الولاء في محفظة واحدة.",
      "index.summary1": "يتيح لك Loyalty Cache مسح بطاقات الولاء وتخزينها على iPhone.",
      "index.summary2": "تبقى البطاقات على جهازك افتراضيًا. النسخ الاحتياطي الاختياري عبر iCloud يزامن بين أجهزة Apple الخاصة بك.",
      "index.links": "روابط", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "سياسة خصوصية Loyalty Cache", "privacy.title": "سياسة خصوصية Loyalty Cache", "privacy.updated": "آخر تحديث: 9 فبراير 2026",
      "privacy.intro": "تم تصميم Loyalty Cache مع التركيز على الخصوصية.", "privacy.storageH": "تخزين البيانات",
      "privacy.storage1": "تُخزن بيانات بطاقاتك محليًا على جهازك بشكل افتراضي.",
      "privacy.storage2": "عند تفعيل النسخ الاحتياطي على iCloud، تتم مزامنة البيانات مع حساب iCloud الخاص بك.",
      "privacy.collectH": "البيانات التي نجمعها", "privacy.collect1": "لا يستخدم Loyalty Cache إعلانات طرف ثالث ولا يبيع بياناتك.",
      "privacy.collect2": "لا يتطلب Loyalty Cache إنشاء حساب داخل التطبيق.", "privacy.cameraH": "الوصول إلى الكاميرا",
      "privacy.camera1": "تُستخدم الكاميرا فقط لمسح الباركود عند اختيارك مسح بطاقة.",
      "privacy.thirdH": "خدمات الطرف الثالث", "privacy.third1": "عند تفعيل نسخ iCloud، تعالج Apple البيانات وفقًا لسياساتها.",
      "privacy.childrenH": "خصوصية الأطفال", "privacy.children1": "Loyalty Cache غير موجه للأطفال دون 13 عامًا.",
      "privacy.changesH": "تغييرات هذه السياسة", "privacy.changes1": "قد نحدّث هذه السياسة من وقت لآخر. أحدث نسخة ستكون دائمًا في هذه الصفحة.",
      "privacy.contactH": "التواصل", "privacy.contactPrefix": "لأسئلة الخصوصية، تواصل مع",
      "terms.metaTitle": "شروط استخدام Loyalty Cache", "terms.title": "شروط استخدام Loyalty Cache", "terms.updated": "آخر تحديث: 9 فبراير 2026",
      "terms.agreementH": "الاتفاق", "terms.agreement1": "باستخدام Loyalty Cache فإنك توافق على شروط الاستخدام هذه.",
      "terms.licenseH": "الترخيص", "terms.license1": "نمنحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل للاستخدام الشخصي على أجهزة Apple التي تملكها أو تتحكم بها.",
      "terms.useH": "استخدام التطبيق", "terms.use1": "أنت مسؤول عن معلومات البطاقات التي تخزنها في التطبيق.",
      "terms.use2": "توافق على عدم إساءة استخدام التطبيق أو محاولة تعطيل عمله.", "terms.availabilityH": "التوفر",
      "terms.availability1": "قد نقوم بتحديث الميزات أو تحسينها أو إيقافها في أي وقت.", "terms.disclaimerH": "إخلاء المسؤولية",
      "terms.disclaimer1": "يتم تقديم التطبيق " + "\"كما هو\"" + " و" + "\"حسب التوفر\"" + " دون ضمانات بالقدر الذي يسمح به القانون.",
      "terms.liabilityH": "حدود المسؤولية", "terms.liability1": "إلى الحد الأقصى الذي يسمح به القانون، لا نتحمل مسؤولية الأضرار غير المباشرة أو التبعية الناتجة عن استخدام التطبيق.",
      "terms.eulaH": "اتفاقية Apple القياسية", "terms.eula1": "هذه الشروط تضاف إلى اتفاقية ترخيص المستخدم النهائي القياسية من Apple:",
      "terms.contactH": "التواصل", "terms.contactPrefix": "للاستفسارات، تواصل مع",
      "support.metaTitle": "دعم Loyalty Cache", "support.title": "دعم Loyalty Cache", "support.updated": "آخر تحديث: 17 فبراير 2026",
      "support.help1": "هل تحتاج مساعدة؟ راسلنا على", "support.help2": "مدة الرد المعتادة: من يوم إلى يومي عمل.", "support.commonH": "الأسئلة الشائعة",
      "support.q1": "كيف أضيف بطاقة؟", "support.a1": "افتح تبويب المسح، امسح الباركود (أو أدخله يدويًا)، أضف اسم المتجر ثم احفظ.",
      "support.q2": "هل يمكن استخدام التطبيق بدون إنترنت؟", "support.a2": "نعم. Loyalty Cache يعمل دون اتصال.",
      "support.q3": "هل يوجد حد لعدد البطاقات؟", "support.a3": "لا. لا يوجد حد لعدد البطاقات.",
      "support.q4": "هل يحتوي التطبيق على إعلانات؟", "support.a4": "لا. Loyalty Cache بدون إعلانات.",
      "support.q5": "كيف أفعل أو أعطل نسخ iCloud؟", "support.a5": "افتح الإعدادات داخل التطبيق وبدّل خيار نسخ iCloud الاحتياطي.",
      "support.q6": "هل تتحقق Loyalty Cache من روابط URL في رموز QR الممسوحة؟",
      "support.a6": "لا. روابط URL في رموز QR هي روابط تابعة لجهات خارجية. أنت المسؤول عن فتحها، ولا تتحمل Loyalty Cache أي مسؤولية عن محتواها أو سلامتها أو توفرها.",
      "support.q7": "أين يمكنني العثور على روابط URL المحفوظة من QR؟",
      "support.a7": "افتح تبويب البطاقات في التطبيق، ثم انتقل إلى URLs واضغط على رابط محفوظ لفتحه في المتصفح.",
      "support.legalH": "قانوني"
    },

    "ja": {
      "common.language": "言語", "nav.home": "ホーム", "nav.support": "サポート", "nav.privacy": "プライバシー", "nav.terms": "利用規約",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "すべてのポイントカードを、ひとつのウォレットに。",
      "index.summary1": "Loyalty Cache では、iPhoneでポイントカードをスキャンして保存できます。",
      "index.summary2": "カードは既定で端末内に保存されます。iCloudバックアップを有効にするとAppleデバイス間で同期されます。",
      "index.links": "リンク", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Loyalty Cache プライバシーポリシー", "privacy.title": "Loyalty Cache プライバシーポリシー", "privacy.updated": "最終更新日: 2026年2月9日",
      "privacy.intro": "Loyalty Cache はプライバシーを最優先に設計されています。", "privacy.storageH": "データ保存",
      "privacy.storage1": "カードデータは既定で端末にローカル保存されます。", "privacy.storage2": "iCloudバックアップを有効にすると、データはあなたのプライベートiCloudアカウントに同期されます。",
      "privacy.collectH": "収集するデータ", "privacy.collect1": "Loyalty Cache は第三者広告を利用せず、データを販売しません。", "privacy.collect2": "アプリ内でのアカウント作成は不要です。",
      "privacy.cameraH": "カメラ利用", "privacy.camera1": "カメラは、カードをスキャンする操作を選んだときにのみ使用されます。",
      "privacy.thirdH": "第三者サービス", "privacy.third1": "iCloudバックアップ有効時、Apple iCloudサービスがAppleの規約に従ってデータを処理します。",
      "privacy.childrenH": "子どものプライバシー", "privacy.children1": "Loyalty Cache は13歳未満の子ども向けではありません。",
      "privacy.changesH": "ポリシーの変更", "privacy.changes1": "本ポリシーは更新される場合があります。最新版は常にこのページに掲載されます。",
      "privacy.contactH": "お問い合わせ", "privacy.contactPrefix": "プライバシーに関するお問い合わせ先",
      "terms.metaTitle": "Loyalty Cache 利用規約", "terms.title": "Loyalty Cache 利用規約", "terms.updated": "最終更新日: 2026年2月9日",
      "terms.agreementH": "同意", "terms.agreement1": "Loyalty Cache を利用することで、本利用規約に同意したものとみなされます。",
      "terms.licenseH": "ライセンス", "terms.license1": "あなたが所有または管理するAppleデバイス上での個人利用のため、限定的・非独占的・譲渡不可のライセンスを付与します。",
      "terms.useH": "アプリの利用", "terms.use1": "アプリに保存するカード情報については、ユーザーが責任を負います。", "terms.use2": "アプリの不正利用や動作妨害を行わないことに同意するものとします。",
      "terms.availabilityH": "提供状況", "terms.availability1": "機能は予告なく更新・改善・終了される場合があります。", "terms.disclaimerH": "免責事項",
      "terms.disclaimer1": "法令で認められる範囲で、アプリは現状有姿で提供されます。", "terms.liabilityH": "責任の制限",
      "terms.liability1": "法令で認められる最大限の範囲で、当社は間接的・特別・結果的損害について責任を負いません。",
      "terms.eulaH": "Apple Standard EULA", "terms.eula1": "本規約はAppleの標準EULAに追加して適用されます:",
      "terms.contactH": "お問い合わせ", "terms.contactPrefix": "ご質問は次の連絡先まで",
      "support.metaTitle": "Loyalty Cache サポート", "support.title": "Loyalty Cache サポート", "support.updated": "最終更新日: 2026年2月17日",
      "support.help1": "サポートが必要ですか？", "support.help2": "通常の返信時間: 1〜2営業日。", "support.commonH": "よくある質問",
      "support.q1": "カードの追加方法は？", "support.a1": "スキャンタブを開き、バーコードをスキャン（または手入力）し、店舗名を追加して保存します。",
      "support.q2": "オフラインで使えますか？", "support.a2": "はい。Loyalty Cache はオフラインで動作します。",
      "support.q3": "保存できるカード枚数に上限はありますか？", "support.a3": "いいえ。上限はありません。",
      "support.q4": "広告は表示されますか？", "support.a4": "いいえ。広告はありません。",
      "support.q5": "iCloudバックアップのオン/オフ方法は？", "support.a5": "アプリの設定で iCloud Backup を切り替えてください。",
      "support.q6": "スキャンしたQRコードのURLリンクはLoyalty Cacheが確認しますか？",
      "support.a6": "いいえ。QRコードのURLリンクは第三者のリンクです。リンクを開くかどうかはユーザーの責任であり、Loyalty Cacheはその内容・安全性・可用性について一切責任を負いません。",
      "support.q7": "保存したQRのURLリンクはどこで確認できますか？",
      "support.a7": "アプリの「Cards」タブを開き、「URLs」に切り替えて、保存したリンクをタップするとブラウザで開けます。",
      "support.legalH": "法的情報"
    },

    "af": {
      "common.language": "Taal", "nav.home": "Tuis", "nav.support": "Ondersteuning", "nav.privacy": "Privaatheid", "nav.terms": "Voorwaardes",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Al jou lojaliteitskaarte, een beursie.",
      "index.summary1": "Loyalty Cache laat jou toe om lojaliteitskaarte op jou iPhone te skandeer en te stoor.",
      "index.summary2": "Kaarte bly standaard op jou toestel. Opsionele iCloud-rugsteun sinkroniseer oor Apple-toestelle.",
      "index.links": "Skakels", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Loyalty Cache Privaatheidsbeleid", "privacy.title": "Loyalty Cache Privaatheidsbeleid", "privacy.updated": "Laas bygewerk: 9 Februarie 2026",
      "privacy.intro": "Loyalty Cache is ontwerp met privaatheid eerste.", "privacy.storageH": "Datastoor",
      "privacy.storage1": "Jou kaartdata word standaard plaaslik op jou toestel gestoor.", "privacy.storage2": "As jy iCloud-rugsteun aktiveer, sinkroniseer data met jou private iCloud-rekening.",
      "privacy.collectH": "Data wat ons insamel", "privacy.collect1": "Loyalty Cache gebruik nie derdeparty-advertensies nie en verkoop nie jou data nie.",
      "privacy.collect2": "Loyalty Cache vereis nie rekeningregistrasie in die app nie.", "privacy.cameraH": "Kamera-toegang",
      "privacy.camera1": "Die kamera word net gebruik om strepieskodes te skandeer wanneer jy kies om te skandeer.",
      "privacy.thirdH": "Derdeparty-dienste", "privacy.third1": "Wanneer iCloud-rugsteun aan is, verwerk Apple iCloud jou data volgens Apple se beleide.",
      "privacy.childrenH": "Kinders se privaatheid", "privacy.children1": "Loyalty Cache is nie gemik op kinders onder 13 nie.",
      "privacy.changesH": "Veranderinge aan hierdie beleid", "privacy.changes1": "Ons kan hierdie beleid van tyd tot tyd opdateer. Die nuutste weergawe bly op hierdie bladsy.",
      "privacy.contactH": "Kontak", "privacy.contactPrefix": "Vir privaatheidsvrae, kontak",
      "terms.metaTitle": "Loyalty Cache Gebruiksvoorwaardes", "terms.title": "Loyalty Cache Gebruiksvoorwaardes", "terms.updated": "Laas bygewerk: 9 Februarie 2026",
      "terms.agreementH": "Ooreenkoms", "terms.agreement1": "Deur Loyalty Cache te gebruik, stem jy in tot hierdie gebruiksvoorwaardes.",
      "terms.licenseH": "Lisensie", "terms.license1": "Ons gee jou 'n beperkte, nie-eksklusiewe, nie-oordraagbare lisensie vir persoonlike gebruik op jou Apple-toestelle.",
      "terms.useH": "Gebruik van die app", "terms.use1": "Jy is verantwoordelik vir die kaartinligting wat jy in die app stoor.", "terms.use2": "Jy stem in om nie die app te misbruik of die werking daarvan te ontwrig nie.",
      "terms.availabilityH": "Beskikbaarheid", "terms.availability1": "Ons kan funksies enige tyd opdateer, verbeter of staak.", "terms.disclaimerH": "Vrywaring",
      "terms.disclaimer1": "Die app word \"soos dit is\" voorsien binne die perke van die wet.", "terms.liabilityH": "Beperking van aanspreeklikheid",
      "terms.liability1": "Tot die maksimum mate deur wet toegelaat, is ons nie aanspreeklik vir indirekte of gevolglike skade nie.",
      "terms.eulaH": "Apple Standard EULA", "terms.eula1": "Hierdie voorwaardes is bykomend tot Apple se Standard EULA:",
      "terms.contactH": "Kontak", "terms.contactPrefix": "Vir vrae, kontak",
      "support.metaTitle": "Loyalty Cache Ondersteuning", "support.title": "Loyalty Cache Ondersteuning", "support.updated": "Laas bygewerk: 17 Februarie 2026",
      "support.help1": "Het jy hulp nodig? E-pos ons by", "support.help2": "Tipiese reaksietyd: 1–2 werksdae.", "support.commonH": "Algemene vrae",
      "support.q1": "Hoe voeg ek 'n kaart by?", "support.a1": "Open die Scan-oortjie, skandeer die kode (of voer handmatig in), voeg die winkelnaam by en stoor.",
      "support.q2": "Kan ek die app sonder internet gebruik?", "support.a2": "Ja. Loyalty Cache werk vanlyn.",
      "support.q3": "Is daar 'n limiet op kaarte?", "support.a3": "Nee. Daar is geen limiet nie.",
      "support.q4": "Wys die app advertensies?", "support.a4": "Nee. Loyalty Cache het geen advertensies nie.",
      "support.q5": "Hoe aktiveer/deaktiveer ek iCloud-rugsteun?", "support.a5": "Open Instellings in die app en wissel iCloud-rugsteun.",
      "support.q6": "Word gescande QR-kode-URL-skakels deur Loyalty Cache geverifieer?",
      "support.a6": "Nee. QR-kode-URL-skakels is derdeparty-skakels. Jy is self verantwoordelik om dit oop te maak, en Loyalty Cache aanvaar geen verantwoordelikheid vir die inhoud, veiligheid of beskikbaarheid daarvan nie.",
      "support.q7": "Waar kan ek my gestoorde QR-URL-skakels vind?",
      "support.a7": "Maak die Cards-oortjie in die app oop, gaan na URLs, en tik op 'n gestoorde skakel om dit in jou blaaier oop te maak.",
      "support.legalH": "Regs"
    },

    "zh-Hans": {
      "common.language": "语言", "nav.home": "首页", "nav.support": "支持", "nav.privacy": "隐私政策", "nav.terms": "条款",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "所有会员卡，一个钱包。",
      "index.summary1": "Loyalty Cache 可让你在 iPhone 上扫描并保存会员卡。", "index.summary2": "卡片默认保存在本机。可选 iCloud 备份可在你的 Apple 设备间同步。",
      "index.links": "链接", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Loyalty Cache 隐私政策", "privacy.title": "Loyalty Cache 隐私政策", "privacy.updated": "最后更新：2026年2月9日",
      "privacy.intro": "Loyalty Cache 以隐私优先为设计原则。", "privacy.storageH": "数据存储",
      "privacy.storage1": "你的卡片数据默认仅存储在你的设备本地。", "privacy.storage2": "如果开启 iCloud 备份，数据会同步到你的私有 iCloud 账户。",
      "privacy.collectH": "我们收集的数据", "privacy.collect1": "Loyalty Cache 不使用第三方广告，也不会出售你的数据。", "privacy.collect2": "Loyalty Cache 不要求在应用内创建账户。",
      "privacy.cameraH": "相机权限", "privacy.camera1": "相机仅在你选择扫描卡片时用于识别条码。", "privacy.thirdH": "第三方服务",
      "privacy.third1": "启用 iCloud 备份后，Apple iCloud 服务会按照 Apple 的条款处理数据。", "privacy.childrenH": "儿童隐私",
      "privacy.children1": "Loyalty Cache 不面向 13 岁以下儿童。", "privacy.changesH": "政策更新", "privacy.changes1": "我们可能会不时更新本政策，最新版本始终发布在此页面。",
      "privacy.contactH": "联系", "privacy.contactPrefix": "如有隐私问题，请联系",
      "terms.metaTitle": "Loyalty Cache 使用条款", "terms.title": "Loyalty Cache 使用条款", "terms.updated": "最后更新：2026年2月9日",
      "terms.agreementH": "协议", "terms.agreement1": "使用 Loyalty Cache 即表示你同意这些使用条款。", "terms.licenseH": "许可",
      "terms.license1": "我们授予你在你拥有或控制的 Apple 设备上个人使用的有限、非独占、不可转让许可。", "terms.useH": "应用使用",
      "terms.use1": "你对存储在应用中的卡片信息负责。", "terms.use2": "你同意不滥用应用或干扰其运行。", "terms.availabilityH": "可用性",
      "terms.availability1": "我们可随时更新、改进或停止某些功能。", "terms.disclaimerH": "免责声明",
      "terms.disclaimer1": "在法律允许范围内，本应用按“现状”提供，不作任何保证。", "terms.liabilityH": "责任限制",
      "terms.liability1": "在法律允许的最大范围内，我们不对因使用本应用产生的间接或后果性损害负责。",
      "terms.eulaH": "Apple 标准 EULA", "terms.eula1": "本条款是对 Apple 标准 EULA 的补充：", "terms.contactH": "联系", "terms.contactPrefix": "如有问题，请联系",
      "support.metaTitle": "Loyalty Cache 支持", "support.title": "Loyalty Cache 支持", "support.updated": "最后更新：2026年2月17日",
      "support.help1": "需要帮助？请发邮件到", "support.help2": "常规回复时间：1-2 个工作日。", "support.commonH": "常见问题",
      "support.q1": "如何添加卡片？", "support.a1": "打开“扫描”标签，扫描条码（或手动输入），添加店铺名称并保存。",
      "support.q2": "没有网络可以使用吗？", "support.a2": "可以。Loyalty Cache 支持离线使用。",
      "support.q3": "可保存卡片数量有限制吗？", "support.a3": "没有。卡片数量不限。",
      "support.q4": "应用有广告吗？", "support.a4": "没有。Loyalty Cache 无广告。",
      "support.q5": "如何开启或关闭 iCloud 备份？", "support.a5": "在应用中打开“设置”，切换 iCloud Backup 开关。",
      "support.q6": "扫描到的二维码 URL 链接会由 Loyalty Cache 验证吗？",
      "support.a6": "不会。二维码 URL 链接属于第三方链接。是否打开由你自行负责，Loyalty Cache 不对其内容、安全性或可用性承担任何责任。",
      "support.q7": "在哪里可以找到我保存的二维码 URL 链接？",
      "support.a7": "在应用中打开“卡片”标签，切换到“网址”，点击已保存链接即可在浏览器中打开。",
      "support.legalH": "法律信息"
    },

    "hi": {
      "common.language": "भाषा", "nav.home": "होम", "nav.support": "सहायता", "nav.privacy": "गोपनीयता नीति", "nav.terms": "शर्तें",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "आपके सभी लॉयल्टी कार्ड, एक वॉलेट में।",
      "index.summary1": "Loyalty Cache से आप iPhone पर लॉयल्टी कार्ड स्कैन और स्टोर कर सकते हैं।", "index.summary2": "कार्ड डिफ़ॉल्ट रूप से आपके डिवाइस पर रहते हैं। वैकल्पिक iCloud बैकअप Apple डिवाइसों में सिंक करता है।",
      "index.links": "लिंक", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Loyalty Cache गोपनीयता नीति", "privacy.title": "Loyalty Cache गोपनीयता नीति", "privacy.updated": "अंतिम अपडेट: 9 फ़रवरी 2026",
      "privacy.intro": "Loyalty Cache को गोपनीयता-प्राथमिकता के साथ बनाया गया है।", "privacy.storageH": "डेटा स्टोरेज",
      "privacy.storage1": "आपका कार्ड डेटा डिफ़ॉल्ट रूप से आपके डिवाइस पर लोकल स्टोर होता है।", "privacy.storage2": "यदि आप iCloud बैकअप चालू करते हैं, तो डेटा आपके निजी iCloud खाते में सिंक होता है।",
      "privacy.collectH": "हम कौन सा डेटा एकत्र करते हैं", "privacy.collect1": "Loyalty Cache थर्ड-पार्टी विज्ञापन का उपयोग नहीं करता और आपका डेटा नहीं बेचता।", "privacy.collect2": "ऐप के अंदर खाता बनाना आवश्यक नहीं है।",
      "privacy.cameraH": "कैमरा एक्सेस", "privacy.camera1": "कैमरा केवल तब उपयोग होता है जब आप कार्ड स्कैन करना चुनते हैं।", "privacy.thirdH": "थर्ड-पार्टी सेवाएँ",
      "privacy.third1": "iCloud बैकअप सक्षम होने पर Apple iCloud सेवाएँ Apple की नीतियों के अनुसार डेटा संसाधित करती हैं।", "privacy.childrenH": "बच्चों की गोपनीयता",
      "privacy.children1": "Loyalty Cache 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है।", "privacy.changesH": "नीति में बदलाव", "privacy.changes1": "हम समय-समय पर नीति अपडेट कर सकते हैं। नवीनतम संस्करण इसी पेज पर उपलब्ध रहेगा।",
      "privacy.contactH": "संपर्क", "privacy.contactPrefix": "गोपनीयता संबंधी प्रश्नों के लिए संपर्क करें",
      "terms.metaTitle": "Loyalty Cache उपयोग की शर्तें", "terms.title": "Loyalty Cache उपयोग की शर्तें", "terms.updated": "अंतिम अपडेट: 9 फ़रवरी 2026",
      "terms.agreementH": "समझौता", "terms.agreement1": "Loyalty Cache का उपयोग करके आप इन शर्तों से सहमत होते हैं।", "terms.licenseH": "लाइसेंस",
      "terms.license1": "हम आपको आपके Apple डिवाइस पर व्यक्तिगत उपयोग के लिए सीमित, गैर-अनन्य, गैर-हस्तांतरणीय लाइसेंस देते हैं।", "terms.useH": "ऐप का उपयोग",
      "terms.use1": "ऐप में संग्रहीत कार्ड जानकारी के लिए आप स्वयं जिम्मेदार हैं।", "terms.use2": "आप ऐप का दुरुपयोग या इसके संचालन में हस्तक्षेप नहीं करेंगे।", "terms.availabilityH": "उपलब्धता",
      "terms.availability1": "हम कभी भी सुविधाएँ अपडेट, सुधार या बंद कर सकते हैं।", "terms.disclaimerH": "अस्वीकरण",
      "terms.disclaimer1": "कानून द्वारा अनुमति सीमा तक ऐप \"जैसी है\" आधार पर प्रदान की जाती है।", "terms.liabilityH": "देयता सीमा",
      "terms.liability1": "कानून द्वारा अनुमति सीमा तक हम ऐप उपयोग से होने वाले अप्रत्यक्ष या परिणामी नुकसान के लिए जिम्मेदार नहीं हैं।",
      "terms.eulaH": "Apple Standard EULA", "terms.eula1": "ये शर्तें Apple Standard EULA के अतिरिक्त हैं:", "terms.contactH": "संपर्क", "terms.contactPrefix": "प्रश्नों के लिए संपर्क करें",
      "support.metaTitle": "Loyalty Cache सहायता", "support.title": "Loyalty Cache सहायता", "support.updated": "अंतिम अपडेट: 17 फ़रवरी 2026",
      "support.help1": "मदद चाहिए? हमें ईमेल करें", "support.help2": "सामान्य उत्तर समय: 1–2 कार्य दिवस।", "support.commonH": "सामान्य प्रश्न",
      "support.q1": "कार्ड कैसे जोड़ें?", "support.a1": "Scan टैब खोलें, बारकोड स्कैन करें (या मैन्युअल भरें), स्टोर नाम जोड़ें और सेव करें।",
      "support.q2": "क्या ऐप बिना इंटरनेट चलेगी?", "support.a2": "हाँ। Loyalty Cache ऑफलाइन काम करती है।",
      "support.q3": "क्या कार्डों की कोई सीमा है?", "support.a3": "नहीं। कोई सीमा नहीं है।",
      "support.q4": "क्या ऐप में विज्ञापन हैं?", "support.a4": "नहीं। Loyalty Cache में विज्ञापन नहीं हैं।",
      "support.q5": "iCloud बैकअप कैसे चालू/बंद करें?", "support.a5": "ऐप में Settings खोलें और iCloud Backup टॉगल करें।",
      "support.q6": "क्या स्कैन किए गए QR कोड URL लिंक Loyalty Cache द्वारा सत्यापित किए जाते हैं?",
      "support.a6": "नहीं। QR कोड URL लिंक थर्ड-पार्टी लिंक होते हैं। उन्हें खोलने की ज़िम्मेदारी आपकी है, और Loyalty Cache उनकी सामग्री, सुरक्षा या उपलब्धता के लिए कोई जिम्मेदारी नहीं लेता।",
      "support.q7": "मेरे सहेजे गए QR URL लिंक कहाँ मिलेंगे?",
      "support.a7": "ऐप में Cards टैब खोलें, URLs पर जाएँ, और ब्राउज़र में खोलने के लिए किसी सहेजे गए लिंक पर टैप करें।",
      "support.legalH": "कानूनी"
    },

    "pt-BR": {
      "common.language": "Idioma", "nav.home": "Início", "nav.support": "Suporte", "nav.privacy": "Privacidade", "nav.terms": "Termos",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Todos os seus cartões de fidelidade em uma carteira.",
      "index.summary1": "O Loyalty Cache permite escanear e guardar cartões de fidelidade no iPhone.", "index.summary2": "Os cartões ficam no dispositivo por padrão. O backup opcional no iCloud sincroniza entre seus dispositivos Apple.",
      "index.links": "Links", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Política de Privacidade do Loyalty Cache", "privacy.title": "Política de Privacidade do Loyalty Cache", "privacy.updated": "Última atualização: 9 de fevereiro de 2026",
      "privacy.intro": "O Loyalty Cache foi criado com foco em privacidade.", "privacy.storageH": "Armazenamento de dados",
      "privacy.storage1": "Os dados dos cartões são armazenados localmente no seu dispositivo por padrão.", "privacy.storage2": "Se você ativar o backup no iCloud, os dados serão sincronizados na sua conta iCloud privada.",
      "privacy.collectH": "Dados que coletamos", "privacy.collect1": "O Loyalty Cache não usa anúncios de terceiros e não vende seus dados.", "privacy.collect2": "O app não exige criação de conta interna.",
      "privacy.cameraH": "Acesso à câmera", "privacy.camera1": "A câmera é usada apenas para leitura de códigos quando você escolhe escanear um cartão.", "privacy.thirdH": "Serviços de terceiros",
      "privacy.third1": "Com o backup no iCloud ativado, serviços da Apple processam dados conforme as políticas da Apple.", "privacy.childrenH": "Privacidade infantil",
      "privacy.children1": "O Loyalty Cache não é direcionado a menores de 13 anos.", "privacy.changesH": "Mudanças nesta política", "privacy.changes1": "Podemos atualizar esta política periodicamente. A versão mais recente ficará sempre nesta página.",
      "privacy.contactH": "Contato", "privacy.contactPrefix": "Para dúvidas sobre privacidade, entre em contato com",
      "terms.metaTitle": "Termos de Uso do Loyalty Cache", "terms.title": "Termos de Uso do Loyalty Cache", "terms.updated": "Última atualização: 9 de fevereiro de 2026",
      "terms.agreementH": "Acordo", "terms.agreement1": "Ao usar o Loyalty Cache, você concorda com estes Termos de Uso.", "terms.licenseH": "Licença",
      "terms.license1": "Concedemos uma licença limitada, não exclusiva e intransferível para uso pessoal em dispositivos Apple que você possui ou controla.",
      "terms.useH": "Uso do app", "terms.use1": "Você é responsável pelas informações de cartão armazenadas no app.", "terms.use2": "Você concorda em não usar o app de forma indevida nem tentar interferir em seu funcionamento.",
      "terms.availabilityH": "Disponibilidade", "terms.availability1": "Podemos atualizar, melhorar ou descontinuar recursos a qualquer momento.", "terms.disclaimerH": "Isenções",
      "terms.disclaimer1": "O app é fornecido " + "\"no estado em que se encontra\"" + " conforme permitido por lei.", "terms.liabilityH": "Limitação de responsabilidade",
      "terms.liability1": "No limite máximo permitido por lei, não nos responsabilizamos por danos indiretos ou consequenciais decorrentes do uso do app.",
      "terms.eulaH": "EULA Padrão da Apple", "terms.eula1": "Estes termos são adicionais ao EULA Padrão da Apple:", "terms.contactH": "Contato", "terms.contactPrefix": "Para dúvidas, entre em contato com",
      "support.metaTitle": "Suporte Loyalty Cache", "support.title": "Suporte Loyalty Cache", "support.updated": "Última atualização: 17 de fevereiro de 2026",
      "support.help1": "Precisa de ajuda? Envie e-mail para", "support.help2": "Tempo típico de resposta: 1–2 dias úteis.", "support.commonH": "Perguntas frequentes",
      "support.q1": "Como adiciono um cartão?", "support.a1": "Abra a aba Escanear, leia o código (ou digite manualmente), adicione o nome da loja e salve.",
      "support.q2": "Posso usar o app sem internet?", "support.a2": "Sim. O Loyalty Cache funciona offline.",
      "support.q3": "Existe limite de cartões?", "support.a3": "Não. Não há limite de cartões.",
      "support.q4": "O app mostra anúncios?", "support.a4": "Não. O Loyalty Cache não tem anúncios.",
      "support.q5": "Como ativo ou desativo o backup no iCloud?", "support.a5": "Abra Ajustes no app e altere iCloud Backup.",
      "support.q6": "Os links de URL de QR codes escaneados são verificados pelo Loyalty Cache?",
      "support.a6": "Não. Links de URL de QR code são links de terceiros. Você é responsável por abri-los, e o Loyalty Cache não se responsabiliza pelo conteúdo, segurança ou disponibilidade desses links.",
      "support.q7": "Onde encontro meus links de URL de QR salvos?",
      "support.a7": "Abra a aba Cartões no app, mude para URLs e toque em um link salvo para abri-lo no navegador.",
      "support.legalH": "Legal"
    },

    "ru": {
      "common.language": "Язык", "nav.home": "Главная", "nav.support": "Поддержка", "nav.privacy": "Конфиденциальность", "nav.terms": "Условия",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Все ваши карты лояльности в одном кошельке.",
      "index.summary1": "Loyalty Cache позволяет сканировать и хранить карты лояльности на iPhone.", "index.summary2": "Карты по умолчанию хранятся на устройстве. Опциональное резервное копирование iCloud синхронизирует данные между вашими устройствами Apple.",
      "index.links": "Ссылки", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Политика конфиденциальности Loyalty Cache", "privacy.title": "Политика конфиденциальности Loyalty Cache", "privacy.updated": "Обновлено: 9 февраля 2026",
      "privacy.intro": "Loyalty Cache разработан с приоритетом конфиденциальности.", "privacy.storageH": "Хранение данных",
      "privacy.storage1": "Данные карт по умолчанию хранятся локально на вашем устройстве.", "privacy.storage2": "Если включить резервное копирование iCloud, данные синхронизируются с вашей личной учетной записью iCloud.",
      "privacy.collectH": "Какие данные мы собираем", "privacy.collect1": "Loyalty Cache не использует стороннюю рекламу и не продаёт ваши данные.", "privacy.collect2": "Для работы приложения не требуется создание аккаунта внутри приложения.",
      "privacy.cameraH": "Доступ к камере", "privacy.camera1": "Камера используется только для сканирования штрихкодов, когда вы выбираете сканирование карты.", "privacy.thirdH": "Сторонние сервисы",
      "privacy.third1": "При включенном iCloud Backup сервисы Apple обрабатывают данные по правилам Apple.", "privacy.childrenH": "Конфиденциальность детей",
      "privacy.children1": "Loyalty Cache не предназначен для детей младше 13 лет.", "privacy.changesH": "Изменения политики", "privacy.changes1": "Мы можем периодически обновлять эту политику. Актуальная версия всегда доступна на этой странице.",
      "privacy.contactH": "Контакты", "privacy.contactPrefix": "По вопросам конфиденциальности обращайтесь",
      "terms.metaTitle": "Условия использования Loyalty Cache", "terms.title": "Условия использования Loyalty Cache", "terms.updated": "Обновлено: 9 февраля 2026",
      "terms.agreementH": "Соглашение", "terms.agreement1": "Используя Loyalty Cache, вы соглашаетесь с этими Условиями использования.", "terms.licenseH": "Лицензия",
      "terms.license1": "Мы предоставляем ограниченную, неисключительную и непередаваемую лицензию для личного использования на ваших устройствах Apple.",
      "terms.useH": "Использование приложения", "terms.use1": "Вы несёте ответственность за информацию о картах, которую сохраняете в приложении.", "terms.use2": "Вы соглашаетесь не злоупотреблять приложением и не мешать его работе.",
      "terms.availabilityH": "Доступность", "terms.availability1": "Мы можем обновлять, улучшать или прекращать функции в любое время.", "terms.disclaimerH": "Отказ от гарантий",
      "terms.disclaimer1": "Приложение предоставляется " + "\"как есть\"" + " в пределах, разрешённых законом.", "terms.liabilityH": "Ограничение ответственности",
      "terms.liability1": "В максимальной степени, разрешённой законом, мы не несём ответственности за косвенные или последующие убытки от использования приложения.",
      "terms.eulaH": "Стандартная EULA Apple", "terms.eula1": "Эти условия действуют дополнительно к стандартной EULA Apple:", "terms.contactH": "Контакты", "terms.contactPrefix": "По вопросам обращайтесь",
      "support.metaTitle": "Поддержка Loyalty Cache", "support.title": "Поддержка Loyalty Cache", "support.updated": "Обновлено: 17 февраля 2026",
      "support.help1": "Нужна помощь? Напишите нам", "support.help2": "Обычное время ответа: 1–2 рабочих дня.", "support.commonH": "Частые вопросы",
      "support.q1": "Как добавить карту?", "support.a1": "Откройте вкладку Скан, отсканируйте код (или введите вручную), добавьте название магазина и сохраните.",
      "support.q2": "Можно ли пользоваться приложением без интернета?", "support.a2": "Да. Loyalty Cache работает офлайн.",
      "support.q3": "Есть ли лимит на количество карт?", "support.a3": "Нет. Лимита нет.",
      "support.q4": "Есть ли реклама в приложении?", "support.a4": "Нет. В Loyalty Cache нет рекламы.",
      "support.q5": "Как включить или отключить iCloud Backup?", "support.a5": "Откройте Настройки в приложении и переключите iCloud Backup.",
      "support.q6": "Проверяет ли Loyalty Cache URL-ссылки из отсканированных QR-кодов?",
      "support.a6": "Нет. URL-ссылки из QR-кодов являются сторонними ссылками. Вы сами отвечаете за их открытие, и Loyalty Cache не несёт ответственности за их содержимое, безопасность или доступность.",
      "support.q7": "Где найти сохранённые URL-ссылки из QR-кодов?",
      "support.a7": "Откройте в приложении вкладку Карты, переключитесь на URL и нажмите сохранённую ссылку, чтобы открыть её в браузере.",
      "support.legalH": "Юридическая информация"
    },

    "id": {
      "common.language": "Bahasa", "nav.home": "Beranda", "nav.support": "Dukungan", "nav.privacy": "Privasi", "nav.terms": "Ketentuan",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "Semua kartu loyalitas Anda dalam satu dompet.",
      "index.summary1": "Loyalty Cache memungkinkan Anda memindai dan menyimpan kartu loyalitas di iPhone.", "index.summary2": "Kartu tetap di perangkat secara default. Cadangan iCloud opsional menyinkronkan antar perangkat Apple.",
      "index.links": "Tautan", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Kebijakan Privasi Loyalty Cache", "privacy.title": "Kebijakan Privasi Loyalty Cache", "privacy.updated": "Terakhir diperbarui: 9 Februari 2026",
      "privacy.intro": "Loyalty Cache dirancang dengan privasi sebagai prioritas.", "privacy.storageH": "Penyimpanan data",
      "privacy.storage1": "Data kartu Anda disimpan lokal di perangkat secara default.", "privacy.storage2": "Jika Anda mengaktifkan Cadangan iCloud, data disinkronkan ke akun iCloud pribadi Anda.",
      "privacy.collectH": "Data yang kami kumpulkan", "privacy.collect1": "Loyalty Cache tidak menggunakan iklan pihak ketiga dan tidak menjual data Anda.", "privacy.collect2": "Loyalty Cache tidak mewajibkan pembuatan akun di dalam aplikasi.",
      "privacy.cameraH": "Akses kamera", "privacy.camera1": "Kamera hanya digunakan untuk memindai barcode saat Anda memilih memindai kartu.", "privacy.thirdH": "Layanan pihak ketiga",
      "privacy.third1": "Saat Cadangan iCloud aktif, layanan Apple iCloud memproses data sesuai kebijakan Apple.", "privacy.childrenH": "Privasi anak",
      "privacy.children1": "Loyalty Cache tidak ditujukan untuk anak di bawah 13 tahun.", "privacy.changesH": "Perubahan kebijakan", "privacy.changes1": "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Versi terbaru selalu tersedia di halaman ini.",
      "privacy.contactH": "Kontak", "privacy.contactPrefix": "Untuk pertanyaan privasi, hubungi",
      "terms.metaTitle": "Ketentuan Penggunaan Loyalty Cache", "terms.title": "Ketentuan Penggunaan Loyalty Cache", "terms.updated": "Terakhir diperbarui: 9 Februari 2026",
      "terms.agreementH": "Persetujuan", "terms.agreement1": "Dengan menggunakan Loyalty Cache, Anda menyetujui Ketentuan Penggunaan ini.", "terms.licenseH": "Lisensi",
      "terms.license1": "Kami memberi lisensi terbatas, non-eksklusif, dan tidak dapat dipindahtangankan untuk penggunaan pribadi di perangkat Apple Anda.",
      "terms.useH": "Penggunaan aplikasi", "terms.use1": "Anda bertanggung jawab atas informasi kartu yang Anda simpan di aplikasi.", "terms.use2": "Anda setuju untuk tidak menyalahgunakan aplikasi atau mengganggu operasinya.",
      "terms.availabilityH": "Ketersediaan", "terms.availability1": "Kami dapat memperbarui, meningkatkan, atau menghentikan fitur kapan saja.", "terms.disclaimerH": "Penafian",
      "terms.disclaimer1": "Aplikasi disediakan " + "\"apa adanya\"" + " sejauh diizinkan hukum.", "terms.liabilityH": "Batas tanggung jawab",
      "terms.liability1": "Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial dari penggunaan aplikasi.",
      "terms.eulaH": "EULA Standar Apple", "terms.eula1": "Ketentuan ini berlaku sebagai tambahan terhadap EULA Standar Apple:", "terms.contactH": "Kontak", "terms.contactPrefix": "Untuk pertanyaan, hubungi",
      "support.metaTitle": "Dukungan Loyalty Cache", "support.title": "Dukungan Loyalty Cache", "support.updated": "Terakhir diperbarui: 17 Februari 2026",
      "support.help1": "Butuh bantuan? Email kami di", "support.help2": "Waktu respons umum: 1–2 hari kerja.", "support.commonH": "Pertanyaan umum",
      "support.q1": "Bagaimana cara menambah kartu?", "support.a1": "Buka tab Pindai, pindai kode (atau masukkan manual), tambahkan nama toko, lalu simpan.",
      "support.q2": "Bisakah aplikasi dipakai tanpa internet?", "support.a2": "Ya. Loyalty Cache bekerja offline.",
      "support.q3": "Apakah ada batas jumlah kartu?", "support.a3": "Tidak. Tidak ada batas kartu.",
      "support.q4": "Apakah aplikasi menampilkan iklan?", "support.a4": "Tidak. Loyalty Cache tanpa iklan.",
      "support.q5": "Bagaimana menyalakan/mematikan Cadangan iCloud?", "support.a5": "Buka Pengaturan di aplikasi lalu ubah iCloud Backup.",
      "support.q6": "Apakah tautan URL dari kode QR yang dipindai diverifikasi oleh Loyalty Cache?",
      "support.a6": "Tidak. Tautan URL dari kode QR adalah tautan pihak ketiga. Anda bertanggung jawab saat membukanya, dan Loyalty Cache tidak bertanggung jawab atas konten, keamanan, atau ketersediaannya.",
      "support.q7": "Di mana saya dapat menemukan tautan URL QR yang saya simpan?",
      "support.a7": "Buka tab Kartu di aplikasi, pindah ke URL, lalu ketuk tautan tersimpan untuk membukanya di browser.",
      "support.legalH": "Legal"
    },

    "ko": {
      "common.language": "언어", "nav.home": "홈", "nav.support": "지원", "nav.privacy": "개인정보", "nav.terms": "약관",
      "index.metaTitle": "Loyalty Cache", "index.title": "Loyalty Cache", "index.tagline": "모든 멤버십 카드를 하나의 지갑에.",
      "index.summary1": "Loyalty Cache로 iPhone에서 멤버십 카드를 스캔하고 저장할 수 있습니다.", "index.summary2": "카드는 기본적으로 기기에 저장됩니다. 선택형 iCloud 백업으로 Apple 기기 간 동기화할 수 있습니다.",
      "index.links": "링크", "index.copyright": "© 2026 Loyalty Cache",
      "privacy.metaTitle": "Loyalty Cache 개인정보 처리방침", "privacy.title": "Loyalty Cache 개인정보 처리방침", "privacy.updated": "최종 업데이트: 2026년 2월 9일",
      "privacy.intro": "Loyalty Cache는 개인정보 보호를 최우선으로 설계되었습니다.", "privacy.storageH": "데이터 저장",
      "privacy.storage1": "카드 데이터는 기본적으로 기기에 로컬 저장됩니다.", "privacy.storage2": "iCloud 백업을 켜면 데이터가 개인 iCloud 계정으로 동기화됩니다.",
      "privacy.collectH": "수집하는 데이터", "privacy.collect1": "Loyalty Cache는 제3자 광고를 사용하지 않으며 데이터를 판매하지 않습니다.", "privacy.collect2": "앱 내 계정 생성이 필요하지 않습니다.",
      "privacy.cameraH": "카메라 접근", "privacy.camera1": "카메라는 카드 스캔을 선택했을 때 바코드 인식에만 사용됩니다.", "privacy.thirdH": "제3자 서비스",
      "privacy.third1": "iCloud 백업 사용 시 Apple iCloud 서비스가 Apple 정책에 따라 데이터를 처리합니다.", "privacy.childrenH": "아동 개인정보", "privacy.children1": "Loyalty Cache는 13세 미만 아동을 대상으로 하지 않습니다.",
      "privacy.changesH": "정책 변경", "privacy.changes1": "본 정책은 수시로 업데이트될 수 있으며 최신 버전은 항상 이 페이지에 게시됩니다.",
      "privacy.contactH": "문의", "privacy.contactPrefix": "개인정보 관련 문의:",
      "terms.metaTitle": "Loyalty Cache 이용 약관", "terms.title": "Loyalty Cache 이용 약관", "terms.updated": "최종 업데이트: 2026년 2월 9일",
      "terms.agreementH": "동의", "terms.agreement1": "Loyalty Cache를 사용하면 본 이용 약관에 동의한 것으로 간주됩니다.", "terms.licenseH": "라이선스",
      "terms.license1": "귀하가 소유 또는 관리하는 Apple 기기에서 개인적으로 사용할 수 있는 제한적, 비독점적, 양도 불가 라이선스를 제공합니다.",
      "terms.useH": "앱 사용", "terms.use1": "앱에 저장하는 카드 정보에 대한 책임은 사용자에게 있습니다.", "terms.use2": "앱을 오용하거나 작동을 방해하지 않기로 동의합니다.",
      "terms.availabilityH": "가용성", "terms.availability1": "기능은 언제든 업데이트, 개선 또는 중단될 수 있습니다.", "terms.disclaimerH": "면책 조항",
      "terms.disclaimer1": "법이 허용하는 범위에서 앱은 " + "\"있는 그대로\"" + " 제공됩니다.", "terms.liabilityH": "책임의 제한",
      "terms.liability1": "법이 허용하는 최대 범위에서 앱 사용으로 인한 간접적 또는 결과적 손해에 대해 당사는 책임지지 않습니다.",
      "terms.eulaH": "Apple 표준 EULA", "terms.eula1": "본 약관은 Apple 표준 EULA에 추가로 적용됩니다:", "terms.contactH": "문의", "terms.contactPrefix": "문의 사항은 다음으로 연락해 주세요",
      "support.metaTitle": "Loyalty Cache 지원", "support.title": "Loyalty Cache 지원", "support.updated": "최종 업데이트: 2026년 2월 17일",
      "support.help1": "도움이 필요하신가요? 이메일:", "support.help2": "일반 응답 시간: 영업일 기준 1~2일.", "support.commonH": "자주 묻는 질문",
      "support.q1": "카드는 어떻게 추가하나요?", "support.a1": "스캔 탭을 열고 코드를 스캔(또는 수동 입력)한 뒤 매장 이름을 추가하고 저장하세요.",
      "support.q2": "인터넷 없이 사용할 수 있나요?", "support.a2": "네. Loyalty Cache는 오프라인으로 동작합니다.",
      "support.q3": "저장 가능한 카드 수 제한이 있나요?", "support.a3": "아니요. 제한이 없습니다.",
      "support.q4": "앱에 광고가 있나요?", "support.a4": "아니요. Loyalty Cache에는 광고가 없습니다.",
      "support.q5": "iCloud 백업은 어떻게 켜고 끄나요?", "support.a5": "앱에서 설정을 열고 iCloud Backup 스위치를 변경하세요.",
      "support.q6": "스캔된 QR 코드 URL 링크는 Loyalty Cache가 검증하나요?",
      "support.a6": "아니요. QR 코드 URL 링크는 제3자 링크입니다. 링크를 여는 책임은 사용자에게 있으며, Loyalty Cache는 해당 링크의 내용, 안전성 또는 가용성에 대해 책임지지 않습니다.",
      "support.q7": "저장한 QR URL 링크는 어디에서 찾을 수 있나요?",
      "support.a7": "앱에서 카드 탭을 열고 URL로 전환한 뒤, 저장된 링크를 탭하면 브라우저에서 열 수 있습니다.",
      "support.legalH": "법률"
    }
  };

  const FALLBACK = STRINGS["en"];

  function get(obj, key) {
    return obj[key] ?? FALLBACK[key] ?? "";
  }

  function normalize(raw) {
    if (!raw) return "en";
    const value = String(raw).trim();
    if (!value) return "en";

    const lower = value.toLowerCase();
    if (lower.startsWith("pt")) return "pt-BR";
    if (lower.startsWith("zh")) return "zh-Hans";

    const exact = SUPPORTED.find((c) => c.toLowerCase() === lower);
    if (exact) return exact;

    const base = lower.split("-")[0];
    const baseMatch = SUPPORTED.find((c) => c.toLowerCase() === base);
    return baseMatch || "en";
  }

  function detect() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang");
    if (requested) return normalize(requested);

    const saved = localStorage.getItem("lc_site_lang");
    if (saved) return normalize(saved);

    const list = [];
    if (Array.isArray(navigator.languages)) list.push(...navigator.languages);
    if (navigator.language) list.push(navigator.language);

    for (const item of list) {
      const code = normalize(item);
      if (SUPPORTED.includes(code)) return code;
    }
    return "en";
  }

  function syncEnglishLinks() {
    const href = `${window.location.pathname}?lang=en`;
    document.querySelectorAll("[data-english-link]").forEach((el) => {
      el.setAttribute("href", href);
    });
  }

  function apply(locale) {
    const page = document.body.getAttribute("data-page") || "index";
    const data = STRINGS[locale] || FALLBACK;

    document.documentElement.lang = locale;
    document.documentElement.dir = RTL.has(locale) ? "rtl" : "ltr";

    const titleKey = `${page}.metaTitle`;
    const title = get(data, titleKey);
    if (title) document.title = title;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = get(data, key);
      if (text) el.textContent = text;
    });

    syncEnglishLinks();

    localStorage.setItem("lc_site_lang", locale);
  }

  function setupSelect(locale) {
    const select = document.getElementById("lang-select");
    if (!select) return;

    select.innerHTML = "";
    SUPPORTED.forEach((code) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = NAMES[code] || code;
      if (code === locale) option.selected = true;
      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      const next = normalize(select.value);
      apply(next);
    });
  }

  const locale = detect();
  setupSelect(locale);
  apply(locale);
})();
