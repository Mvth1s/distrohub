(function renderPortfolio(data) {
  const distroGrid = document.getElementById('distro-grid');
  const deTableBody = document.getElementById('de-table-body');

  if (!distroGrid || !deTableBody || !data) return;

  data.distroReviews.forEach((distro) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.setAttribute('role', 'listitem');

    const h3 = document.createElement('h3');
    h3.textContent = distro.name;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `${distro.duration} • ${distro.dateRange}`;

    const p = document.createElement('p');
    p.textContent = distro.comments ?? '—';

    article.append(h3, meta, p);

    if (distro.rating) {
      const badge = document.createElement('span');
      badge.className = `badge rating-${distro.rating.toLowerCase()}`;
      badge.textContent = `Rating: ${distro.rating}`;
      article.appendChild(badge);
    }

    distroGrid.appendChild(article);
  });

  data.deRankings.forEach((de) => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = de.name;

    const tdRating = document.createElement('td');
    const badge = document.createElement('span');
    badge.className = `badge rating-${de.rating.toLowerCase()}`;
    badge.textContent = de.rating;
    tdRating.appendChild(badge);

    const tdComments = document.createElement('td');
    tdComments.textContent = de.comments;

    const tdUsedOn = document.createElement('td');
    tdUsedOn.textContent = de.usedOn;

    tr.append(tdName, tdRating, tdComments, tdUsedOn);
    deTableBody.appendChild(tr);
  });
})(portfolioData);
