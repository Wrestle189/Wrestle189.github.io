// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-our-paper-hyq-was-accepted-by-ccgrid-2023",
          title: 'Our paper HyQ was accepted by CCGrid 2023! 😊 ✨',
          description: "",
          section: "News",},{id: "news-two-papers-bluejay-and-cinda-were-accepted-by-ccgrid-2024",
          title: 'Two papers BlueJay and CINDA were accepted by CCGrid 2024! 😊 ✨',
          description: "",
          section: "News",},{id: "news-our-paper-lightpool-was-accepted-by-hpca-2024",
          title: 'Our paper LightPool was accepted by HPCA 2024! 😊 ✨',
          description: "",
          section: "News",},{id: "news-our-paper-nvmepass-was-accepted-by-hpca-2025",
          title: 'Our paper NVMePass was accepted by HPCA 2025! 😊 ✨',
          description: "",
          section: "News",},{id: "news-our-paper-os2g-was-accepted-by-asplos-2025",
          title: 'Our paper OS2G was accepted by ASPLOS 2025! 😊 ✨',
          description: "",
          section: "News",},{id: "news-our-paper-rinfer-was-accepted-by-ccgrid-2025",
          title: 'Our paper rInfer was accepted by CCGrid 2025! 😊 ✨',
          description: "",
          section: "News",},{id: "news-our-paper-augserve-was-accepted-by-icml-2026",
          title: 'Our paper AugServe was accepted by ICML 2026! 😊 ✨',
          description: "",
          section: "News",},{id: "news-our-paper-chord-was-accepted-by-iccd-2026",
          title: 'Our paper Chord was accepted by ICCD 2026! 😊 ✨',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%6E_%7A%68%65%6E@%7A%6A%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ySnVESYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
