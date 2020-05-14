<template>
    <div>
    <h1>{{ origin }}</h1>
    <p>{{ msg }}</p>
    </div>
</template>

<script lang="python">

class Component:

    def __init__(self):
        self.origin = "https://github.com/icarito/tzolkin.git"
        # "https://gitlab.com/fuentelibre/guit.git"
        self.msg = "getting remote info..."

    def MOUNTED(self):
        console.log(self.origin)
        self.getInfo()

    async def getInfo(self):
        try:
            info = await git.getRemoteInfo({'http': http,
                                        'corsProxy': location.origin + '/_',
                                        'url': 'https://' + self.origin})
        except HttpError as err:
            info = str(err)
            console.error(err)

        self.msg = info

</script>
