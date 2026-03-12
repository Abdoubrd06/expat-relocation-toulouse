document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and times (X)
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // --- 2. Language Switcher (EN/FR) ---
    const langToggle = document.getElementById('langToggle');
    const contentElements = document.querySelectorAll('[data-i18n]');
    
    // Translation Dictionary
    const translations = {
        en: {
            brandName: "Toulouse Relocation",
            navServices: "Services",
            navCompanies: "For Companies",
            navAbout: "About",
            navContact: "Contact",
            heroTitle: "Your Trusted Partner for Relocating to Toulouse",
            heroSubtitle: "We simplify administrative procedures, housing, and insurance for international professionals and companies.",
            btnBook: "Book a consultation",
            btnExplore: "Explore services",
            servicesTitle: "Our Services",
            servicesSubtitle: "Comprehensive support for every step of your move.",
            service1Title: "Administrative Setup",
            service1Item1: "Residence permit assistance",
            service1Item2: "Social security registration",
            service1Item3: "Bank account guidance",
            service1Item4: "Government paperwork",
            service2Title: "Housing & Installation",
            service2Item1: "Rental search support",
            service2Item2: "Application file preparation",
            service2Item3: "Move-in assistance",
            service2Item4: "Utilities setup",
            service3Title: "Insurance Guidance",
            service3Item1: "Home insurance",
            service3Item2: "Car insurance",
            service3Item3: "Health insurance orientation",
            service3Item4: "Comparing providers",
            service4Title: "Integration Support",
            service4Item1: "French language resources",
            service4Item2: "Local orientation",
            service4Item3: "Networking opportunities",
            service4Item4: "Cultural workshops",
            processTitle: "How It Works",
            step1Title: "Prepare",
            step1Desc: "We analyze your needs and create a personalized plan before you arrive.",
            step2Title: "Arrive",
            step2Desc: "We handle the airport pickup, housing handover, and initial admin.",
            step3Title: "Settle",
            step3Desc: "We support your long-term integration, schooling, and career growth.",
            b2bTitle: "For Companies & HR",
            b2bSubtitle: "Relocate your international talent faster and reduce HR workload.",
            b2bFeature1: "Custom relocation packages",
            b2bFeature2: "Dedicated account manager",
            b2bFeature3: "Talent retention support",
            b2bFeature4: "Reporting & analytics",
            b2bBtn: "Request a Corporate Quote",
            aboutLabel: "About Us",
            aboutTitle: "Helping International Talent Settle Successfully",
            aboutDesc: "Founded by relocation experts with deep roots in Toulouse, we bridge the gap between international talent and the local ecosystem. We believe that a smooth administrative start leads to a successful career.",
            value1: "Trust",
            value2: "Efficiency",
            value3: "Local Expertise",
            value4: "Personalization",
            contactTitle: "Get in Touch",
            contactSubtitle: "Ready to move to Toulouse? Let's talk.",
            contactInfoTitle: "Contact Info",
            contactInfoDesc: "We are available Monday to Friday, 9am - 6pm CET.",
            formName: "Name",
            formEmail: "Email",
            formType: "I am a...",
            optExpat: "Individual Expatriate",
            optCompany: "Company / HR",
            formMessage: "Message",
            formSubmit: "Send Message",
            footerDesc: "Your bridge to a successful life in Toulouse.",
            footerLinks: "Quick Links",
            footerSocial: "Follow Us"
        },
        fr: {
            brandName: "Toulouse Relocation",
            navServices: "Services",
            navCompanies: "Pour les Entreprises",
            navAbout: "À Propos",
            navContact: "Contact",
            heroTitle: "Votre Partenaire de Confiance pour une Installation à Toulouse",
            heroSubtitle: "Nous simplifions les démarches administratives, le logement et les assurances pour les professionnels internationaux et les entreprises.",
            btnBook: "Prendre RDV",
            btnExplore: "Découvrir nos services",
            servicesTitle: "Nos Services",
            servicesSubtitle: "Un accompagnement complet à chaque étape de votre déménagement.",
            service1Title: "Installation Administrative",
            service1Item1: "Assistance titre de séjour",
            service1Item2: "Inscription sécurité sociale",
            service1Item3: "Ouverture compte bancaire",
            service1Item4: "Papiers administratifs",
            service2Title: "Logement & Installation",
            service2Item1: "Recherche de logement",
            service2Item2: "Préparation des dossiers",
            service2Item3: "Accompagnement déménagement",
            service2Item4: "Mise en service des utilités",
            service3Title: "Conseil Assurances",
            service3Item1: "Assurance habitation",
            service3Item2: "Assurance auto",
            service3Item3: "Orientation mutuelle santé",
            service3Item4: "Comparaison des offres",
            service4Title: "Intégration & Vie Locale",
            service4Item1: "Ressources en français",
            service4Item2: "Orientation locale",
            service4Item3: "Réseautage professionnel",
            service4Item4: "Ateliers culturels",
            processTitle: "Comment ça marche",
            step1Title: "Préparer",
            step1Desc: "Nous analysons vos besoins et créons un plan personnalisé avant votre arrivée.",
            step2Title: "Arriver",
            step2Desc: "Nous gérons le transfert aéroport, la remise des clés et les premières démarches.",
            step3Title: "S'installer",
            step3Desc: "Nous soutenons votre intégration à long terme, la scolarité et votre carrière.",
            b2bTitle: "Pour les Entreprises & RH",
            b2bSubtitle: "Relocalisez vos talents internationaux plus rapidement et réduisez la charge RH.",
            b2bFeature1: "Packs de relocation sur-mesure",
            b2bFeature2: "Gestionnaire de compte dédié",
            b2bFeature3: "Support de rétention des talents",
            b2bFeature4: "Reporting & analytique",
            b2bBtn: "Demander un devis entreprise",
            aboutLabel: "À Propos",
            aboutTitle: "Aider les Talents Internationaux à S'installer",
            aboutDesc: "Fondé par des experts de la relocation avec de profondes racines à Toulouse, nous comblons le fossé entre les talents internationaux et l'écosystème local. Nous croyons qu'un départ administratif fluide mène à une carrière réussie.",
            value1: "Confiance",
            value2: "Efficacité",
            value3: "Expertise Locale",
            value4: "Personnalisation",
            contactTitle: "Contactez-nous",
            contactSubtitle: "Prêt à déménager à Toulouse ? Parlons-en.",
            contactInfoTitle: "Informations",
            contactInfoDesc: "Nous sommes disponibles du lundi au vendredi, 9h - 18h CET.",
            formName: "Nom",
            formEmail: "Email",
            formType: "Je suis...",
            optExpat: "Expatrié Individuel",
            optCompany: "Entreprise / RH",
            formMessage: "Message",
            formSubmit: "Envoyer le message",
            footerDesc: "Votre pont vers une vie réussie à Toulouse.",
            footerLinks: "Liens Rapides",
            footerSocial: "Suivez-nous"
        }
    };

    let currentLang = 'en';

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'fr' : 'en';
            langToggle.textContent = currentLang === 'en' ? 'FR' : 'EN';
            langToggle.classList.toggle('active');

            // Update all elements with data-i18n attribute
            contentElements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    element.textContent = translations[currentLang][key];
                }
            });

            // Update HTML lang attribute
            document.documentElement.lang = currentLang;
        });
    }

    // --- 3. Form Handling (Demo) ---
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(currentLang === 'en' ? 'Thank you! We will contact you soon.' : 'Merci ! Nous vous contacterons bientôt.');
            contactForm.reset();
        });
    }

    // --- 4. Smooth Scroll with Offset (for fixed header) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
