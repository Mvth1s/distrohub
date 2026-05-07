const portfolioData = {
  distroReviews: [
    {
      name: 'Archlinux + KDE',
      duration: '4 months',
      comments: 'My best daily-driver setup: familiar workflow, fast, and very customizable.',
      rating: 'S',
      dateRange: 'Jan 2025 – Apr 2025'
    },
    {
      name: 'Fedora 43 KDE',
      duration: '2 months',
      comments: 'Stable and polished KDE experience with modern packages and good defaults.',
      rating: 'A',
      dateRange: 'May 2025 – Jun 2025'
    },
    {
      name: 'CachyOS',
      duration: '6 weeks',
      comments: 'Very snappy performance and an enjoyable KDE desktop out of the box.',
      rating: 'A',
      dateRange: 'Jul 2025 – Aug 2025'
    },
    {
      name: 'Debian',
      duration: '6 weeks',
      comments: 'Reliable and comfortable with KDE, though packages felt older in some areas.',
      rating: 'B',
      dateRange: 'Sep 2025 – Oct 2025'
    },
    {
      name: 'Pop!_OS Cosmic',
      duration: '1 month',
      comments: 'COSMIC looked great and the tiling workflow felt excellent for productivity.',
      rating: 'A',
      dateRange: 'Nov 2025'
    },
    {
      name: 'OpenSuse (GNOME/KDE)',
      duration: '1 month',
      comments: 'GNOME looked nice but felt harder to master; on OpenSuse with GNOME, I also had Wi-Fi drops and Brave login resets.',
      rating: 'C',
      dateRange: 'Dec 2025'
    },
    {
      name: 'Manjaro XFCE',
      duration: '3 weeks',
      comments: 'Lightweight and pleasant with a unique taskbar style; settings felt a bit cluttered.',
      rating: 'B',
      dateRange: 'Jan 2026'
    },
    {
      name: 'Endeavour OS',
      duration: '3 weeks',
      comments: 'Solid Arch-based experience with flexible setup and good overall responsiveness.',
      rating: 'B',
      dateRange: 'Feb 2026'
    }
  ],
  deRankings: [
    {
      name: 'KDE',
      rating: 'S',
      comments: 'Very similar to Windows, easy to master, and highly customizable.',
      usedOn: 'Arch, Fedora, CachyOS, Debian'
    },
    {
      name: 'GNOME',
      rating: 'F',
      comments: 'Nice visual style, but harder to master than KDE. On OpenSuse with GNOME, I had Wi-Fi disconnections and Brave login resets.',
      usedOn: 'OpenSuse'
    },
    {
      name: 'Cosmic',
      rating: 'A',
      comments: 'Very nice desktop environment with excellent window tiling, better than GNOME for my workflow.',
      usedOn: 'Pop!_Os'
    },
    {
      name: 'XFCE',
      rating: 'B',
      comments: 'Good look close to KDE with a unique taskbar. Slightly cluttered settings but lightweight.',
      usedOn: 'Manjaro'
    }
  ]
};

window.portfolioData = portfolioData;
