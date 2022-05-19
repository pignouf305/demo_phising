"use strict";

/*
 * Copyright 2015-2020 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

define(["lodash", "org/forgerock/commons/ui/common/main/Configuration", "org/forgerock/commons/ui/common/components/Footer", "org/forgerock/openam/ui/common/services/ServerService"], function (_, Configuration, Footer, ServerService) {
    function isAdmin() {
        return Configuration.loggedUser && _.includes(Configuration.loggedUser.uiroles, "ui-realm-admin");
    }

    var Component = Footer.extend({
        getVersion: function getVersion() {
            return ServerService.getVersion();
        },
        showVersion: function showVersion() {
            return isAdmin();
        }
    });

    return new Component();
});
