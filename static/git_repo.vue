<template>
    <div>
    <h1>{{ origin }}</h1>
    <p>{{ msg }}</p>
    <button @click="clone">Clone</button>
    </div>
</template>

<script lang="python">

class Component:

    def __init__(self):
        self.origin = 'https://gist.github.com/icarito/4ba95da36bfc254406062568238c3bde'
        # "https://github.com/icarito/tzolkin.git"
        # "https://gitlab.com/fuentelibre/guit.git"
        self.msg = "getting remote info..."

    def MOUNTED(self):
        console.log(self.origin)
        self.getInfo()

    async def getInfo(self):
        try:
            info = await git.getRemoteInfo({'http': http,
                                        'corsProxy': location.origin + '/_',
                                        'headers': {'set-User-Agent': 'git/guit Git User Interface'},
                                        'url': 'https://' + self.origin})
        except HttpError as err:
            info = str(err)
            console.error(err)

        self.msg = info

    async def clone(self):
        await git.clone({
                  'fs': fs,
                  'http': http,
                  'dir': '/src',
                  'corsProxy': location.origin + '/_',
                  'url': 'https://' + self.origin,
                  'headers': {'set-User-Agent': 'git/guit Git User Interface'},
                  'singleBranch': True,
                  'depth': 1
                })
        console.log('done')


</script>
