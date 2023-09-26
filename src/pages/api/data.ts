export async function FetchData(page: string) {
    if (page === 'web-dev') {
        const data: any = [
            {
                id: 10,
                name: "NEXTJS AWS TEST",
                description: "Next.js project to test uploading files to S3 through aws-sdk for javascript",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/nextjs-aws-test",
                url: "https://nextjs-aws-test.vercel.app",
                img: "/web-nextjs-aws-test.png",
                lang: [
                    {
                        id: 1,
                        name: "TypeScript",
                        pc: 84.9,
                        graph_pc: 70
                    },
                    {
                        id: 2,
                        name: "CSS",
                        pc: 10.5,
                        graph_pc: 85
                    },
                    {
                        id: 3,
                        name: "JavaScript",
                        pc: 4.6,
                        graph_pc: 100
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "Next.js",
                        img: "/icon-nextjs.svg"
                    },
                    {
                        id: 3,
                        name: "AWS",
                        img: "/icon-aws.svg"
                    }
                ]
            },
            {
                id: 9,
                name: "TISTORY HELLO CUSTOM SKIN",
                description: "티스토리 hELLO 커스텀 스킨",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/tistory-skin-hELLO",
                url: "https://taedonn.tistory.com",
                img: "/web-tistory-hello-custom-skin.png",
                lang: [
                    {
                        id: 1,
                        name: "Pug",
                        pc: 90.5,
                        graph_pc: 70
                    },
                    {
                        id: 2,
                        name: "JavaScript",
                        pc: 6.8,
                        graph_pc: 85
                    },
                    {
                        id: 3,
                        name: "CSS",
                        pc: 2.7,
                        graph_pc: 100
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "Pug",
                        img: "/icon-pug.svg"
                    }
                ]
            },
            {
                id: 8,
                name: "FONTS ARCHIVE",
                description: "상업용 무료 한글 폰트 아카이브",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/fonts-archive",
                url: "https://fonts.taedonn.com",
                img: "/web-fonts-archive.png",
                lang: [
                    {
                        id: 1,
                        name: "TypeScript",
                        pc: 95.7,
                        graph_pc: 80
                    },
                    {
                        id: 2,
                        name: "CSS",
                        pc: 3.6,
                        graph_pc: 90
                    },
                    {
                        id: 3,
                        name: "JavaScript",
                        pc: 0.7,
                        graph_pc: 100
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "Next.js",
                        img: "/icon-nextjs.svg"
                    },
                    {
                        id: 2,
                        name: "prisma",
                        img: "/icon-prisma.svg"
                    },
                    {
                        id: 3,
                        name: "AWS",
                        img: "/icon-aws.svg"
                    }
                ]
            },
            {
                id: 7,
                name: "GDRIVE IMAGE CONVERTER",
                description: "A website that converts Google Drive image into an external link",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/gdrive-img-converter",
                url: "https://gdrive-img-converter.taedonn.com",
                img: "/web-google-drive-image-converter.png",
                lang: [
                    {
                        id: 1,
                        name: "HTML",
                        pc: 44.3,
                        graph_pc: 25
                    },
                    {
                        id: 2,
                        name: "CSS",
                        pc: 42.9,
                        graph_pc: 55
                    },
                    {
                        id: 3,
                        name: "JavaScript",
                        pc: 12.8,
                        graph_pc: 95
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "HTML",
                        img: "/icon-html.svg"
                    }
                ]
            },
            {
                id: 6,
                name: "GITBOOK TEMPLATE",
                description: "깃북 테마 템플릿",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/gitbook-theme",
                url: "https://gitbook.taedonn.com",
                img: "/web-gitbook-theme.png",
                lang: [
                    {
                        id: 1,
                        name: "JavaScript",
                        pc: 61.8,
                        graph_pc: 45
                    },
                    {
                        id: 2,
                        name: "Shell",
                        pc: 38.2,
                        graph_pc: 100
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "Jekyll",
                        img: "/icon-jekyll.svg"
                    }
                ]
            },
            {
                id: 5,
                name: "WEB RESUME",
                description: "온라인 이력서",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/resume",
                url: "https://resume.taedonn.com",
                img: "/web-resume.png",
                lang: [
                    {
                        id: 1,
                        name: "CSS",
                        pc: 59.4,
                        graph_pc: 30
                    },
                    {
                        id: 2,
                        name: "JavaScript",
                        pc: 39.1,
                        graph_pc: 65
                    },
                    {
                        id: 3,
                        name: "HTML",
                        pc: 1.5,
                        graph_pc: 100
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "React",
                        img: "/icon-react.svg"
                    }
                ]
            },
            {
                id: 4,
                name: "ROBOMD CLONE",
                description: "로보MD 클론 코딩",
                github_link_yn: false,
                github_link: "https://github.com/taedonn/clone-robomd",
                url: "https://clone-robomd.taedonn.com",
                img: "/web-robomd.png",
                lang: [
                    {
                        id: 1,
                        name: "HTML",
                        pc: 49,
                        graph_pc: 25
                    },
                    {
                        id: 2,
                        name: "CSS",
                        pc: 48.3,
                        graph_pc: 65
                    },
                    {
                        id: 3,
                        name: "JavaScript",
                        pc: 2.7,
                        graph_pc: 100
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "HTML",
                        img: "/icon-html.svg"
                    }
                ]
            },
            {
                id: 3,
                name: "ASTELL&KERN CLONE",
                description: "Astell&Kern 클론 코딩",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/clone-astellnkern",
                url: "https://clone-astellnkern.taedonn.com",
                img: "/web-astellnkern.png",
                lang: [
                    {
                        id: 1,
                        name: "CSS",
                        pc: 40.7,
                        graph_pc: 20
                    },
                    {
                        id: 2,
                        name: "HTML",
                        pc: 38,
                        graph_pc: 60
                    },
                    {
                        id: 3,
                        name: "JavaScript",
                        pc: 21.3,
                        graph_pc: 90
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "HTML",
                        img: "/icon-html.svg"
                    }
                ]
            },
            {
                id: 2,
                name: "SOLASEADO CLONE",
                description: "솔라시도 클론 코딩",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/clone-solaseado",
                url: "https://clone-solaseado.taedonn.com",
                img: "/web-solaseado.png",
                lang: [
                    {
                        id: 1,
                        name: "HTML",
                        pc: 69.6,
                        graph_pc: 35
                    },
                    {
                        id: 2,
                        name: "CSS",
                        pc: 21,
                        graph_pc: 80
                    },
                    {
                        id: 3,
                        name: "JavaScript",
                        pc: 9.4,
                        graph_pc: 100
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "HTML",
                        img: "/icon-html.svg"
                    }
                ]
            },
            {
                id: 1,
                name: "JEJU AIR CLONE",
                description: "제주항공 클론 코딩",
                github_link_yn: true,
                github_link: "https://github.com/taedonn/clone-jejuair",
                url: "https://clone-jejuair.taedonn.com",
                img: "/web-jejuair.png",
                lang: [
                    {
                        id: 1,
                        name: "HTML",
                        pc: 59.7,
                        graph_pc: 30
                    },
                    {
                        id: 2,
                        name: "JavaScript",
                        pc: 27.7,
                        graph_pc: 60
                    },
                    {
                        id: 3,
                        name: "CSS",
                        pc: 12.6,
                        graph_pc: 100
                    }
                ],
                stacks: [
                    {
                        id: 1,
                        name: "HTML",
                        img: "/icon-html.svg"
                    }
                ]
            },
        ]
    
        return data;
    }
}