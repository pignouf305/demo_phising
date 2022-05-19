"use strict";

/*
 * Copyright 2015-2017 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

define({
    themes: {
        "default": {
            stylesheets: ["themes/common/css/bootstrap-3.3.5-custom.css", "themes/common/css/bootstrap-3.3.7.css", "themes/common/css/structure.css", "themes/common/css/gina.css", "themes/common/css/gina-nobg.css"],
            path: "themes/common/",
            icon: "images/favicon.ico",
            settings: {
                logo: {
                    src: "themes/common/images/console-logo.svg",
                    title: "Etat de Gen\u00e8ve",
                    alt: "Etat de Gen\u00e8ve",
                    width: "80px"
                },
                loginLogo: {
                    src: "themes/common/images/login-logo.png",
                    title: "ge.ch",
                    alt: "ge.ch",
                    height: "221px",
                    width: "285px",
                    href: "https://www.ge.ch"
                },
                header: {
                	title: "REPUBLIQUE ET CANTON DE GENEVE"
                },
                footer: {
                    copyright: "Office cantonal des syst\u00e8mes d’information et du num\u00e9rique",
                    mailto: "",
                    phone: ""
                }
            }
        },
        "gid": {
        	stylesheets: ["themes/common/css/bootstrap-3.3.5-custom.css", "themes/common/css/bootstrap-3.3.7.css", "themes/common/css/structure.css", "themes/common/css/gina.css", "themes/common/css/gina-nobg.css"],
            settings: {
	            loginLogo: {
		            href: "#"
		        },
                footer: {
                    copyright: ""
                }
            }
        },
        "sid": {
        	stylesheets: ["themes/common/css/bootstrap-3.3.5-custom.css", "themes/common/css/bootstrap-3.3.7.css", "themes/common/css/structure.css", "themes/common/css/gina.css", "themes/common/css/gina-nobg.css"],
            settings: {
	            loginLogo: {
		            href: "#"
		        },
                footer: {
                    copyright: ""
                }
            }
        },
        "eel": {
        	stylesheets: ["themes/common/css/bootstrap-3.3.5-custom.css", "themes/common/css/bootstrap-3.3.7.css", "themes/common/css/structure.css", "themes/common/css/gina.css", "themes/common/css/gina-eel.css"],
            settings: {
                loginLogo: {
                    src: "themes/eel/images/login-logo.png",
                    title: "Ecole en ligne",
                    alt: "Ecole en ligne",
                    height: "54px",
                    width: "289px",
                    href: "#"
                },
                footer: {
                    copyright: "Ecole en ligne"
                }
            }
        },
        "inc": {
        	stylesheets: ["themes/common/css/bootstrap-3.3.5-custom.css", "themes/common/css/bootstrap-3.3.7.css", "themes/common/css/structure.css", "themes/common/css/gina.css", "themes/common/css/gina-nobg.css"],
            settings: {
        		loginLogo: {
            		href: "#"
        		},
                footer: {
                    copyright: ""
                }
            }
        },
        "hg": {
        	stylesheets: ["themes/common/css/bootstrap-3.3.5-custom.css", "themes/common/css/bootstrap-3.3.7.css", "themes/common/css/structure.css", "themes/common/css/gina.css", "themes/common/css/gina-nobg.css"],
            settings: {
                loginLogo: {
                    src: "themes/hg/images/login-logo.png",
                    title: "Etat de Gen\u00e8ve",
                    alt: "Etat de Gen\u00e8ve (HG)",
                    height: "150px",
                    width: "300px",
                    href: "#"
                },
                footer: {
                    copyright: "Hospice g\u00e9n\u00e9ral"
                }
            }
        },
        "giap": {
        	stylesheets: ["themes/common/css/bootstrap-3.3.5-custom.css", "themes/common/css/bootstrap-3.3.7.css", "themes/common/css/structure.css", "themes/common/css/gina.css", "themes/common/css/gina-nobg.css"],
            settings: {
                loginLogo: {
                    src: "themes/giap/images/login-logo.png",
                    title: "Groupement Intercommunal pour l'Animation Parascolaire",
                    alt: "Groupement Intercommunal pour l'Animation Parascolaire",
                    height: "108px",
                    width: "104x",
                    href: "#"
                },
                footer: {
                    copyright: "Groupement Intercommunal pour l'Animation Parascolaire"
                }
            }
        },
        "acg": {
        	stylesheets: ["themes/common/css/bootstrap-3.3.5-custom.css", "themes/common/css/bootstrap-3.3.7.css", "themes/common/css/structure.css", "themes/common/css/gina.css", "themes/common/css/gina-nobg.css"],
            settings: {
                loginLogo: {
                    src: "themes/acg/images/login-logo.png",
                    title: "Association des communes genevoises",
                    alt: "Association des communes genevoises",
                    height: "164px",
                    width: "157x",
                    href: "#"
                },
                footer: {
                    copyright: "Association des communes genevoises"
                }
            }
        },
        "sta": {
        	stylesheets: ["themes/common/css/bootstrap-3.3.5-custom.css", "themes/common/css/bootstrap-3.3.7.css", "themes/common/css/structure.css", "themes/common/css/gina.css"],
            settings: {
    			loginLogo: {
    				href: "#"
				},
                footer: {
                    copyright: ""
                }
            }
        }
    },
    mappings: [
        { theme: "default", realms: ["/"], authenticationChains: ["formService"] },
        { theme: "default", realms: ["/"], authenticationChains: ["autoService"] },
        { theme: "default", realms: ["/"], authenticationChains: ["mixedService"] },
        { theme: "default", realms: ["/"], authenticationChains: ["extService"] },
        { theme: "default", realms: ["/"], authenticationChains: ["batchService"] },
        { theme: "gid", realms: ["/"], authenticationChains: ["jobinService"] },
        { theme: "gid", realms: ["/"], authenticationChains: ["gidService"] },
        { theme: "sid", realms: ["/"], authenticationChains: ["sidService"] },
        { theme: "inc", realms: ["/"], authenticationChains: ["incService"] },
        { theme: "hg", realms: ["/"], authenticationChains: ["hgService"] },
        { theme: "giap", realms: ["/"], authenticationChains: ["giapService"] },
        { theme: "acg", realms: ["/"], authenticationChains: ["acgService"] },
        { theme: "eel", realms: ["/"], authenticationChains: ["eelService"] },
        { theme: "sta", realms: ["/"], authenticationChains: ["staService"] }
    ]
});
