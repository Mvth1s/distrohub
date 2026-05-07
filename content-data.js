const portfolioData = {
  distroReviews: [
    {
      name: 'Archlinux + KDE',
      duration: '~6 months',
      comments: 'Light, simple, no bloat — my preferred setup overall.',
      rating: 'A',
      dateRange: 'Jul 2025 – Dec 2025'
    },
    {
      name: 'Fedora 43 KDE',
      duration: '~1.5 months',
      comments: 'Polished, complete, and secure KDE experience with good defaults.',
      rating: 'A',
      dateRange: 'Dec 2025 – mid-Jan 2026'
    },
    {
      name: 'CachyOS + KDE',
      duration: '1 month',
      comments: 'Decent but overhyped — I think plain Arch is simply better.',
      rating: 'C',
      dateRange: 'mid-Jan 2026 – Feb 2026'
    },
    {
      name: 'Debian + KDE (X11)',
      duration: '~1 month',
      comments: 'Didn\'t use it long enough, but it gets the job done as a stable secondary machine. The laptop was often off, making it hard to test properly.',
      rating: 'B',
      dateRange: 'Jan 2026 – Feb 2026'
    },
    {
      name: 'Pop!_OS (Cosmic)',
      duration: 'Ongoing',
      comments: 'Good first impression. The tiling manager feels like Hyprland on a laptop — love it. Minor annoyance: had to run shell commands to get numpad numbers working with Caps Lock.',
      rating: 'B',
      dateRange: 'mid-Feb 2026 – present'
    },
    {
      name: 'OpenSuse + GNOME',
      duration: '3 days',
      comments: 'Hard to judge on such a short run, especially coming from KDE. Lots of issues: wrong gaming drivers, Brave and Proton apps not saving logins.',
      rating: 'D',
      dateRange: 'Mar 2026'
    },
    {
      name: 'OpenSuse + KDE',
      duration: '1 month',
      comments: 'Much better than with GNOME. More frequent releases than Arch — daily Discover update notifications. Comes with bloat, but manageable thanks to KDE.',
      rating: 'C',
      dateRange: 'Mar 2026'
    },
    {
      name: 'Manjaro + XFCE',
      duration: '1 month',
      comments: 'Essentially Arch-based: simple and efficient. Slightly behind Arch due to testing phases. Downside: ~2-min boot time and I didn\'t want to risk breaking things by tinkering.',
      rating: 'B',
      dateRange: 'Apr 2026'
    },
    {
      name: 'Endeavour OS + KDE',
      duration: 'Ongoing',
      comments: null,
      rating: null,
      dateRange: 'May 2026 – present'
    }
  ],
  deRankings: [
    {
      name: 'KDE',
      rating: 'S',
      comments: 'Very similar to Windows, easy to master, and highly customizable. My go-to DE.',
      usedOn: 'Arch, Fedora, CachyOS, Debian, OpenSuse, Endeavour OS'
    },
    {
      name: 'COSMIC',
      rating: 'A',
      comments: 'Very nice DE with excellent window tiling — better than GNOME for my workflow. Feels like Hyprland but polished.',
      usedOn: 'Pop!_OS'
    },
    {
      name: 'XFCE',
      rating: 'B',
      comments: 'Lightweight and pleasant with a unique taskbar. Settings feel a bit cluttered but the DE stays out of your way.',
      usedOn: 'Manjaro'
    },
    {
      name: 'GNOME',
      rating: 'F',
      comments: 'Nice visual style, but harder to master than KDE. Major issues on OpenSuse: wrong gaming drivers, Brave and Proton apps not saving logins.',
      usedOn: 'OpenSuse'
    }
  ]
};
