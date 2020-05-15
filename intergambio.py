#!/bin/env python3

from guy import Guy
import vbuild

class Intergambio(Guy):
    """
    # Websocket Backend for Intergambio

    Renders the Vue components
    """

    def render(self, includeGuyJs=False):
        Intergambio.template = "static/template.html"
        vue = vbuild.render("static/*.vue")
        template = open(Intergambio.template).read()
        template = template.replace("/* SCRIPT */", str(vue.script))
        template = template.replace("/* STYLE */", str(vue.style))
        return template.replace("<!-- HTML -->", str(vue.html))

Intergambio().serve(port=9999)
