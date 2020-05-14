#!/bin/env python3

from guy import Guy
import vbuild

class Guit(Guy):
    """
    # Websocket Backend for Guit

    Renders the Vue components
    """

    def render(self, includeGuyJs=False):
        Guit.template = "static/template.html"
        vue = vbuild.render("static/*.vue")
        template = open(Guit.template).read()
        template = template.replace("/* SCRIPT */", str(vue.script))
        template = template.replace("/* STYLE */", str(vue.style))
        return template.replace("<!-- HTML -->", str(vue.html))

Guit().serve()
