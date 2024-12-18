export default {
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>,
    logoLink: 'https://example.com',
    head: (
        <>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Modern Documentation</title>
        </>
    ),
    darkMode: true,
    color: {
        hue: 168,
        saturation: 75,
        lightness: {
            dark: 57,
            light: 20
        }
    },
    feedback: {
        content: "Question? Send us an email.",
        useLink: () => "mailto:youremail@domain.com"
    },
    editLink: {
        component: null,
    },
    footer: {
        component: <footer class="bg-green-gradient py-[5vh] items-center w-full flex justify-center">
            This is footer
        </footer>
    }
}
