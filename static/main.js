import Vue from 'vue'
import VueSpreadsheetLite from '@anydown/vue-spreadsheet-lite'
import FS from '@isomorphic-git/lightning-fs'
import * as git from 'isomorphic-git'
import http from 'isomorphic-git/http/web'
import Gun from 'gun/gun'
import SEA from 'gun/sea'
import 'gun/lib/webrtc'

import VueGun from 'vue-gun'

Vue.use(VueGun, {
    gun: new Gun(['http://tara.local:8765/gun',
                  'http://trotter.local:8765/gun',
                  'https://super8.alwaysdata.net/gun'])
})
Vue.component('vue-spreadsheet-lite', VueSpreadsheetLite)

const fs = new FS("intergambio_fs")

startUp(Vue, fs, git, http)

const root = new Vue({ el:"#intergambio",
          data: {
          }
	})

if ( guy )
	guy.init(()=>{
            window.server=self
            guy.emitMe('server-ready')
        })

window.root = root
window.git = git
window.http = http
window.fs = fs
window.SEA = SEA
