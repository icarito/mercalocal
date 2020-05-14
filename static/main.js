import Vue from 'vue'
import FS from '@isomorphic-git/lightning-fs'
import * as git from 'isomorphic-git'
import http from "isomorphic-git/http/web";

const fs = new FS("browser-working-copy").promises

startUp(Vue, fs, git, http)

const root = new Vue({ el:"#guit",
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

