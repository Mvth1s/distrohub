(function renderPortfolio(data) {
  const distroGrid = document.getElementById('distro-grid');
  const deTableBody = document.getElementById('de-table-body');

  if (!distroGrid || !deTableBody || !data) return;

  distroGrid.innerHTML = data.distroReviews
    .map(
      (distro) => `
        <article class="card" role="listitem">
          <h3>${distro.name}</h3>
          <div class="meta">${distro.duration} • ${distro.dateRange}</div>
          <p>${distro.comments}</p>
          <span class="badge">Rating: ${distro.rating}</span>
        </article>
      `
    )
    .join('');

  deTableBody.innerHTML = data.deRankings
    .map(
      (de) => `
        <tr>
          <td>${de.name}</td>
          <td><span class="badge">${de.rating}</span></td>
          <td>${de.comments}</td>
          <td>${de.usedOn}</td>
        </tr>
      `
    )
    .join('');
})(window.portfolioData);
