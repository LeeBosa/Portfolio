export async function FetchData(page: string) {
    if (page === 'web-dev') {
        const data: any = [
            {
                id: crypto.randomUUID(),
                name: "NEXTJS AWS TEST",
                description: "Next.js project to test uploading files to S3 through aws-sdk for javascript",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/nextjs-aws-test",
                url: "https://nextjs-aws-test.vercel.app",
                img: "/web-nextjs-aws-test.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "Next.js",
                        bgColor: "#000",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "TypeScript",
                        bgColor: "#007ACC",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "Tailwind CSS",
                        bgColor: "#3EBFF8",
                        txtColor: "#000"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "AWS",
                        bgColor: "#F79B26",
                        txtColor: "#2A3644"
                    },
                ]
            },
            {
                id: crypto.randomUUID(),
                name: "TISTORY HELLO CUSTOM SKIN",
                description: "티스토리 hELLO 커스텀 스킨",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/tistory-skin-hELLO",
                url: "https://taedonn.tistory.com",
                img: "/web-tistory-hello-custom-skin.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "Pug",
                        bgColor: "#A86454",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "JavaScript",
                        bgColor: "#F1E05A",
                        txtColor: "#000"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "Tailwind CSS",
                        bgColor: "#3EBFF8",
                        txtColor: "#000"
                    },
                ]
            },
            {
                id: crypto.randomUUID(),
                name: "FONTS ARCHIVE",
                description: "상업용 무료 한글 폰트 아카이브",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/fonts-archive",
                url: "https://fonts.taedonn.com",
                img: "/web-fonts-archive.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "Next.js",
                        bgColor: "#000",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "Prisma",
                        bgColor: "#0A3A53",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "TypeScript",
                        bgColor: "#007ACC",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "Tailwind CSS",
                        bgColor: "#3EBFF8",
                        txtColor: "#000"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "AWS",
                        bgColor: "#F79B26",
                        txtColor: "#2A3644"
                    },
                ]
            },
            {
                id: crypto.randomUUID(),
                name: "GDRIVE IMAGE CONVERTER",
                description: "A website that converts Google Drive image into an external link",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/gdrive-img-converter",
                url: "https://gdrive-img-converter.taedonn.com",
                img: "/web-google-drive-image-converter.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "HTML",
                        bgColor: "#E34C26",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "JavaScript",
                        bgColor: "#F1E05A",
                        txtColor: "#000"
                    },
                ]
            },
            {
                id: crypto.randomUUID(),
                name: "GITBOOK TEMPLATE",
                description: "깃북 테마 템플릿",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/gitbook-theme",
                url: "https://gitbook.taedonn.com",
                img: "/web-gitbook-theme.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "Jekyll",
                        bgColor: "#CC1D24",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "JavaScript",
                        bgColor: "#F1E05A",
                        txtColor: "#000"
                    },
                ]
            },
            {
                id: crypto.randomUUID(),
                name: "WEB RESUME",
                description: "온라인 이력서",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/resume",
                url: "https://resume.taedonn.com",
                img: "/web-resume.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "React",
                        bgColor: "#5BE2FF",
                        txtColor: "#272727"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "JavaScript",
                        bgColor: "#F1E05A",
                        txtColor: "#000"
                    },
                ]
            },
            {
                id: crypto.randomUUID(),
                name: "ROBOMD CLONE",
                description: "로보MD 클론 코딩",
                github_link_yn: false,
                github_link: "https://github.com/taedonn/clone-robomd",
                url: "https://clone-robomd.taedonn.com",
                img: "/web-robomd.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "HTML",
                        bgColor: "#E34C26",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "JavaScript",
                        bgColor: "#F1E05A",
                        txtColor: "#000"
                    },
                ]
            },
            {
                id: crypto.randomUUID(),
                name: "ASTELL&KERN CLONE",
                description: "Astell&Kern 클론 코딩",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/clone-astellnkern",
                url: "https://clone-astellnkern.taedonn.com",
                img: "/web-astellnkern.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "HTML",
                        bgColor: "#E34C26",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "JavaScript",
                        bgColor: "#F1E05A",
                        txtColor: "#000"
                    },
                ]
            },
            {
                id: crypto.randomUUID(),
                name: "SOLASEADO CLONE",
                description: "솔라시도 클론 코딩",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/clone-solaseado",
                url: "https://clone-solaseado.taedonn.com",
                img: "/web-solaseado.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "HTML",
                        bgColor: "#E34C26",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "JavaScript",
                        bgColor: "#F1E05A",
                        txtColor: "#000"
                    },
                ]
            },
            {
                id: crypto.randomUUID(),
                name: "JEJU AIR CLONE",
                description: "제주항공 클론 코딩",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/clone-jejuair",
                url: "https://clone-jejuair.taedonn.com",
                img: "/web-jejuair.png",
                stacks: [
                    {
                        id: crypto.randomUUID(),
                        stack: "HTML",
                        bgColor: "#E34C26",
                        txtColor: "#FFF"
                    },
                    {
                        id: crypto.randomUUID(),
                        stack: "JavaScript",
                        bgColor: "#F1E05A",
                        txtColor: "#000"
                    },
                ]
            },
        ]
    
        return data;
    }
}