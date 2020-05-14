<template>
    <div>
    <h1>{{ origin }}</h1>
    <p>{{ msg }}</p>
    </div>
</template>

<script lang="python">

class Component:

    def __init__(self):
        self.origin = "https://gist.github.com/4ba95da36bfc254406062568238c3bde.git"
        self.msg = "getting remote info..."

    def MOUNTED(self):
        console.log(self.origin)
        self.getInfo()

    async def getInfo(self):
        proxied_origin = location.origin + '/_/' + self.origin

        try:
            info = await git.getRemoteInfo({'http': http,
                                        'url': proxied_origin})
        except HttpError as err:
            info = str(err)
            console.error(err)

        self.msg = info

</script>
